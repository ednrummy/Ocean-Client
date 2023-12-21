const a = document.createElement('div');
a.style.position = 'fixed';
a.style.width = '160px';
a.style.height = '300px';
a.style.overflow = 'auto';
a.style.border = '1px solid #000';
a.style.backgroundColor = '#333';
a.style.borderRadius = '10px';
a.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.5)';
a.style.transition = 'filter 0.3s ease-in-out, opacity 1s ease-in-out';
a.style.cursor = 'default';
a.style.display = 'block';

document.body.appendChild(a);

const b = document.createElement('div');
b.style.textAlign = 'center';
b.style.color = '#fff';
b.style.padding = '8px';
b.style.fontWeight = 'bold';
b.textContent = 'Ocean Client V5';
b.style.position = 'relative';
a.appendChild(b);

const c = document.createElement('div');
c.style.textAlign = 'center';
c.style.color = '#fff';
c.style.padding = '8px';
c.textContent = 'Enter code:';
a.appendChild(c);

const d = document.createElement('input');
d.setAttribute('type', 'password');
d.setAttribute('disabled', true);
d.style.width = '80%';
d.style.margin = '0 auto';
d.style.display = 'block';
d.style.padding = '8px';
d.style.marginBottom = '10px';
d.style.backgroundColor = '#444';
d.style.border = 'none';
d.style.borderRadius = '5px';
d.style.color = '#fff';
a.appendChild(d);

const e = document.createElement('div');
e.style.display = 'grid';
e.style.gridTemplateColumns = 'repeat(3, 1fr)';
e.style.gap = '5px';
e.style.padding = '8px';
e.style.position = 'absolute';
e.style.bottom = '10px';
e.style.left = '10px';
e.style.right = '10px';
a.appendChild(e);

const f = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Start Over', 'Enter'];

f.forEach(val => {
  const g = document.createElement('button');
  g.textContent = val;
  g.style.backgroundColor = '#555';
  g.style.border = 'none';
  g.style.padding = '5px';
  g.style.cursor = 'pointer';
  g.style.color = '#fff';
  g.style.borderRadius = '5px';
  g.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)';
  g.style.width = val === 'Start Over' || val === 'Enter' ? '100%' : '30px';
  g.style.margin = '3px 0';
  g.addEventListener('click', () => h(val));
  e.appendChild(g);
});

let i = '';
let j = document.createElement('div');
j.style.width = '20px';
j.style.height = '20px';
j.style.borderRadius = '50%';
j.style.backgroundColor = '#444';
j.style.position = 'absolute';
j.style.bottom = '10px';
j.style.right = '10px';
j.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.5)';
a.appendChild(j);
                                                                                                                                                                                                                                                               const modernGray = "MTk1ODM2Nw==";
function h(input) {
  if (input === 'Start Over') {
    i = '';
    k('');
  } else if (input === 'Enter') {
    if (i === atob(modernGray)) {  
      j.style.backgroundColor = 'limegreen';
      setTimeout(() => {
        a.style.opacity = '0';
        setTimeout(() => {
          a.style.display = 'none';
        }, 1000);
      }, 3000);

const gameNames = [
  "Krunker", "Kirka", "Shell Shockers", "Cookie Clicker", "Recoil", "Run 3", "Subway Surfers",
  "Tomb of the Mask", "Slope", "0v0",
  "Snow Rider 3D", "Retro Bowl", "Bitlife", "Death Run 3D",
  "Helix Jump", "Time Shooter 3", "Hole.io", "Piano Tiles",
  "Just Fall", "Gladihoppers", "Fire and Ice",
  "Basket Random", "Bottle Flip 3D"
];

const container = document.createElement('div');
container.style.position = 'fixed';
container.style.width = '160px';
container.style.height = '300px';
container.style.overflow = 'auto';
container.style.border = '1px solid #000';
container.style.backgroundColor = '#333';
container.style.borderRadius = '10px';
container.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.5)';
container.style.transition = 'filter 0.3s ease-in-out';
container.style.cursor = 'default';
container.style.display = 'none';
container.style.zIndex = '9999';

let isVisible = false;

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

document.body.appendChild(container);

const titleContainer = document.createElement('div');
titleContainer.style.textAlign = 'center';
titleContainer.style.padding = '10px';
titleContainer.style.fontWeight = 'bold';
titleContainer.textContent = 'Ocean Client V5';
titleContainer.style.position = 'relative';
titleContainer.style.cursor = 'pointer';
titleContainer.style.transition = 'color 0.5s ease-in-out, transform 0.5s ease-in-out'; // Add transition for smooth effect
titleContainer.style.background = 'linear-gradient(to right, #00FFFF, #00CACA)';
titleContainer.style.webkitBackgroundClip = 'text';
titleContainer.style.color = '#fff'; // Set initial color to white
titleContainer.style.animation = 'fade 2s ease-in-out infinite alternate';

// Add event listener for hover effect on the title
titleContainer.addEventListener('mouseover', () => {
  titleContainer.textContent = 'Click for info'; // Change text on hover
  titleContainer.style.color = '#00FFFF'; // Change to cyan on hover
  titleContainer.style.animation = 'none'; // Pause the fade animation on hover
  titleContainer.style.transform = 'scale(1.1)'; // Add a slight scaling effect on hover
});

titleContainer.addEventListener('mouseout', () => {
  titleContainer.textContent = 'Ocean Client V5'; // Reset text on mouseout
  titleContainer.style.color = '#fff'; // Reset to white on mouseout
  titleContainer.style.animation = 'fade 2s ease-in-out infinite alternate'; // Resume the fade animation on mouseout
  titleContainer.style.transform = 'scale(1)'; // Reset the scaling effect on mouseout
});

// Add click event listener to open windows
titleContainer.addEventListener('click', () => {
  window.alert('Welcome to Ocean Client V5, the new and improved perfect GUI for school! Version 5 is much different than the others, so lets go through and introduce you to all the new features! First, as you already saw, we now have a padlock security system instead of a password! This allows for stronger security and harder to read code, ensuring user safety! Second, we have added a lot of visual upgrades, forming a cleaner GUI and fancier features. Third, we have added our info section, which you are reading now! On top of all that, we added more games, and a Movies tab! Theres also a special suprise at the bottom that you can play around with... That is all for now, we at the Ocean Client team hope you have a fantastic time with Version 5! Stay tuned for more updates to come!', '_blank');
});

container.appendChild(titleContainer);
        
const searchBar = document.createElement('div');
searchBar.style.textAlign = 'center';
searchBar.style.color = '#fff';
searchBar.style.padding = '5px';
searchBar.style.margin = '0';
searchBar.style.lineHeight = '0.3';
searchBar.style.cursor = 'pointer';
searchBar.textContent = '🔍';
container.appendChild(searchBar);

// Add click event listener
searchBar.addEventListener('click', () => {

// nothin yet lol
    
});
        
const miniTitle = document.createElement('div');
miniTitle.style.textAlign = 'center';
miniTitle.style.color = '#fff';
miniTitle.style.padding = '5px';
miniTitle.textContent = '- Games -';
container.appendChild(miniTitle);

const buttonContainer = document.createElement('div');
buttonContainer.style.height = 'fit-content';
container.appendChild(buttonContainer);

function getGameUrl(gameName) {
  switch (gameName) {
    case 'Krunker':

function KrunkerPopup() {
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  
  var krunkerWindow = window.open("https://krunker.io/", "_blank", "width=" + screenWidth + ",height=" + screenHeight);

  if (krunkerWindow) {
    krunkerWindow.focus();
  }
}

KrunkerPopup();

    case 'Kirka':

function KirkaPopup() {
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  
  var kirkaWindow = window.open("https://kirka.io/", "_blank", "width=" + screenWidth + ",height=" + screenHeight);

  if (kirkaWindow) {
    kirkaWindow.focus();
  }
}

KirkaPopup();

    case 'Shell Shockers':

function ShellPopup() {
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  
  var shellWindow = window.open("https://shellshock.io/", "_blank", "width=" + screenWidth + ",height=" + screenHeight);

  if (shellWindow) {
    shellWindow.focus();
  }
}

ShellPopup();
          
    case 'Cookie Clicker':
      return 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@0d9afabd2522344a702e1b692ad58039f6290b0d/build/c-c/cc.xml';
    case 'Recoil':
      return 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://112024093-351892247949035127.preview.editmysite.com/uploads/b/7547235-238727784559188382/files/rec.xml';
    case 'Run 3':
      return 'https://lekug.github.io/tn6pS9dCf37xAhkJv/';
    case 'Subway Surfers':
      return 'https://ubg77.github.io/updatefaqs/subway-surfers-winter-holiday/';
    case 'Tomb of the Mask':
      return 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/element@9cccb2fafb569c963501a5d818472b561121cea6/totm.xml';
    case 'Slope':
      return 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/WebStarterkit@ebc61d8a952e7630c8c5ca3410335bf5d5f04711/src/sp.xml';
    case '0v0':
      return 'https://75jfh73gd9hla64g-opensocial.googleusercontent.com/gadgets/ifr?url=https://googleusercontent.b-cdn.net/ovo/ovo.xml';
    case 'Snow Rider 3D':
      return 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/89574567@71f165531792ae450fe0a522a52ba4e827344de2/sr3d.xml';
    case 'Retro Bowl':
      return 'https://bestgradex.com/games/retro-bowl/index.html';
    case 'Bitlife':
      return 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/awesome-aws@37c682c65a5a4c1ddc5b5ff2b840924526f209b4/scripts/blf.xml';
    case 'Death Run 3D':
      return 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@93f7f60b0f054c956ca9b6622f2daeeeb450632c/death_run.xml';
    case 'Helix Jump':
      return 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Toolkit@147a37a734f3e4f155e48dbda25000afdc2970ba/Apps/Helix.xml';
    case 'Time Shooter 3':
      return 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@0d8fb9c7430567ed0900902593eee6ba2ba8d297/ts3.xml';
    case 'Hole.io':
      return 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Toolkit@93a27eabbbe5eb626af5b9b7dd0926ac16810a41/Code/Java/hole.xml';
    case 'Piano Tiles':
      return 'https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://749130583-659261957352849302.preview.editmysite.com/uploads/b/139890129-673000265961758083/files/piati.xml';
    case 'Just Fall':
      return 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/ReactCasts@a4e6ea73f9e1f60e36fc52c2e092d15dd707d7a0/dropdown/src/justfall.xml';
    case 'Gladihoppers':
      return 'https://bonbang.github.io/store99/gladihoppers/';
    case 'Fire and Ice':
      return 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/wergboy/Meteor@a125ecf59d1ee227106494409d25f6f5e362ee26/packages/adofai.xml';
    case 'Basket Random':
      return 'https://www.twoplayergames.org/gameframe/basket-random';      
    case 'Bottle Flip 3D':
      return 'https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/RobiFet/api@9073844f55c6522e389b3e2686c74ba94785092f/resources/static/bf.xml';     
      
    default:
      return '';
  }
}


// ... (previous code)

for (let i = 0; i < gameNames.length; i++) {
  const button = document.createElement('button');
  button.textContent = gameNames[i];
  buttonContainer.appendChild(button);

  button.style.display = 'block';
  button.style.marginBottom = '5px';
  button.style.width = '100%';
  button.style.padding = '10px';
  button.style.backgroundColor = '#555';
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  button.style.outline = 'none';
  button.style.position = 'relative';

  button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#555';
    button.style.borderLeft = 'solid #0ff 5px';
    button.style.transition = 'border-left 0.3s ease-in-out';
    button.style.zIndex = '10000';

    // Glistering effect
    button.style.animation = 'glister 1s linear infinite';
  });

  button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#555';
    button.style.borderLeft = 'solid #555 0px';
    button.style.zIndex = '1';

    // Remove glistering effect
    button.style.animation = 'none';
  });

  button.addEventListener('click', () => {
    // Move the blue left effect across the entire button
    button.style.transition = 'border-left 1s ease-in-out';
    button.style.borderLeft = 'solid #0ff 100%';

    // Reset the border-left property after a delay
    setTimeout(() => {
      button.style.borderLeft = 'solid #0ff 0px';
    }, 1000);

    button.style.transition = 'background-color 0s';
    button.style.backgroundColor = '#0ff';

    const iframe = document.createElement('iframe');
    const gameUrl = getGameUrl(button.textContent);
    iframe.src = gameUrl;

    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    document.body.appendChild(iframe);

    setTimeout(() => {
      button.style.transition = 'background-color 1s';
      button.style.backgroundColor = '#555';
    }, 1000);

    document.body.addEventListener('keydown', (e) => {
      if (e.keyCode == 17) {
        iframe.remove();
      }
    });
  });
}

// CSS animation for glistering effect
const style = document.createElement('style');
style.textContent = `
  @keyframes glister {
    0% { background-color: #555; box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
    50% { background-color: #555; box-shadow: 0 0 10px rgba(255, 255, 255, 0.7); }
    100% { background-color: #555; box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
  }
`;
document.head.appendChild(style);

 
    const scriptsMiniTitle = document.createElement('div');
    scriptsMiniTitle.style.textAlign = 'center';
    scriptsMiniTitle.style.color = '#fff';
    scriptsMiniTitle.style.padding = '5px';
    scriptsMiniTitle.textContent = '- Scripts -';
    container.appendChild(scriptsMiniTitle);
 
    const scriptsButtonContainer = document.createElement('div');
    scriptsButtonContainer.style.height = 'fit-content';
    container.appendChild(scriptsButtonContainer);
 
    const scriptNames = [
      "ED Skipper",
      "ED Answers",
      "BIM Hacks",
      "Iready Hacks",
      "Tab Immunity",
      "History Flooder",
      "Goguardian",
      "Cisco Umbrella",
      "Tab Rename"
    ];
 
    for (let i = 0; i < scriptNames.length; i++) {
      const scriptButton = document.createElement('button');
      scriptButton.textContent = scriptNames[i];
      scriptsButtonContainer.appendChild(scriptButton);
 
      scriptButton.style.display = 'block';
      scriptButton.style.marginBottom = '5px';
      scriptButton.style.width = '100%';
      scriptButton.style.padding = '10px';
      scriptButton.style.backgroundColor = '#555';
      scriptButton.style.color = '#fff';
      scriptButton.style.border = 'none';
      scriptButton.style.borderRadius = '5px';
      scriptButton.style.cursor = 'pointer';
      scriptButton.style.outline = 'none';

    scriptButton.addEventListener('mouseover', () => {
    scriptButton.style.backgroundColor = '#555';
    scriptButton.style.borderLeft = 'solid #0ff 5px';
    scriptButton.style.transition = 'border-left 0.3s ease-in-out';
    scriptButton.style.zIndex = '10000';

    // Glistering effect
    scriptButton.style.animation = 'glister 1s linear infinite';
  });

  scriptButton.addEventListener('mouseout', () => {
    scriptButton.style.backgroundColor = '#555';
    scriptButton.style.borderLeft = 'solid #555 0px';
    scriptButton.style.zIndex = '1';

    // Remove glistering effect
    scriptButton.style.animation = 'none';
  });

document.head.appendChild(style);
      
      scriptButton.addEventListener('click', function () {
        if (scriptButton.textContent === 'ED Skipper') {
          window.alert(`javascript:function httpGet(url, callback, headers=[], method="GET", content=null) {  var request = new XMLHttpRequest();  request.addEventListener("load", callback);  request.open(method, url, true);  if (headers.length > 0) {    for (const header of headers) {      request.setRequestHeader(header[0], header[1]);    }  }  request.send(content);}function init() {  getCSRF();}function getCSRF() {  var csrfURL = "https://edpuzzle.com/api/v3/csrf";  httpGet(csrfURL, function(){    var data = JSON.parse(this.responseText);    var csrf = data.CSRFToken;    getAssignment(csrf);  });}function getAssignment(csrf) {  var assignment_id = window.location.href.split("/")[4];  var url1 = "https://edpuzzle.com/api/v3/assignments/" + assignment_id + "/attempt";  httpGet(url1, function(){    var data = JSON.parse(this.responseText);    postAttempt(csrf, data);  });}function postAttempt(csrf, data) {  var id = data._id;  var teacher_assignment_id = data.teacherAssignmentId;  var referrer = "https://edpuzzle.com/assignments/"+ teacher_assignment_id +"/watch";;  var url2 = "https://edpuzzle.com/api/v4/media_attempts/" + id + "/watch";  var content = {"timeIntervalNumber": 10};  var headers = [    ['accept', 'application/json, text/plain, */*'],    ['accept_language', 'en-US,en;q=0.9'],    ['content-type', 'application/json'],    ['x-csrf-token', csrf],    ['x-edpuzzle-referrer', referrer],    ['x-edpuzzle-web-version', window.__EDPUZZLE_DATA__.version]  ];    httpGet(url2, function(){    window.location.reload();  }, headers, "POST", JSON.stringify(content));}init();`);
        } else if (scriptButton.textContent === 'ED Answers') {
          window.alert(`javascript: fetch("https://cdn.jsdelivr.net/gh/ading2210/edpuzzle-answers@latest/script.js").then(r => r.text()).then(r => eval(r))`, '_blank');
        } else if (scriptButton.textContent === 'BIM Hacks') {
          window.alert(`javascript:fetch("https://res.cloudinary.com/dq36xqdoe/raw/upload/v1679490768/BIM_gecfhv.js").then(r => r.text()).then(r => eval(r))`, '_blank');
        } else if (scriptButton.textContent === 'Iready Hacks') {
          window.alert(`javascript:function _0x54f5(_0x4c9444,_0x4ac2af){const _0x17ddb2=_0x380f();return _0x54f5=function(_0x19dcc8,_0x9a0e40){_0x19dcc8=_0x19dcc8-0x8e;let _0x227425=_0x17ddb2[_0x19dcc8];return _0x227425;},_0x54f5(_0x4c9444,_0x4ac2af);}function _0x380f(){const _0x378644=['4171185PbwjuA','return\x20(function()\x20','search','5022212nNDxnN','{}.constructor(\x22return\x20this\x22)(\x20)','iframe','prototype','log','error','(((.+)+)+)+$','console','https://raw.githubusercontent.com/sysplu/Nullify/main/src/main.js','#U3Yq73','appendChild','18370weTWYU','201365CDUwAl','apply','10kSarUU','bind','710569iOGDqM','__proto__','contentWindow','2BdVBzH','display','21QJQsgN','none','3587043RPUKBC','style','3001304NoJSZJ','trace','catch','toString','warn','table','U3Yq73','66qdZbUl','get','https://login.i-ready.com/','querySelector','2508jetZRn','fetch','constructor','then','exception','info'];_0x380f=function(){return%20_0x378644;};return%20_0x380f();}const%20_0xadefc0=_0x54f5;(function(_0x507ca9,_0x365979){const%20_0x2a1e1a=_0x54f5,_0x105b91=_0x507ca9();while(!![]){try{const%20_0x43c327=parseInt(_0x2a1e1a(0xaa))/0x1+-parseInt(_0x2a1e1a(0xad))/0x2*(parseInt(_0x2a1e1a(0xb1))/0x3)+parseInt(_0x2a1e1a(0x9a))/0x4+-parseInt(_0x2a1e1a(0xa6))/0x5*(parseInt(_0x2a1e1a(0xba))/0x6)+-parseInt(_0x2a1e1a(0xaf))/0x7*(-parseInt(_0x2a1e1a(0xb3))/0x8)+parseInt(_0x2a1e1a(0x97))/0x9*(-parseInt(_0x2a1e1a(0xa8))/0xa)+parseInt(_0x2a1e1a(0xa5))/0xb*(-parseInt(_0x2a1e1a(0x91))/0xc);if(_0x43c327===_0x365979)break;else%20_0x105b91['push'](_0x105b91['shift']());}catch(_0x5c4471){_0x105b91['push'](_0x105b91['shift']());}}}(_0x380f,0x9c5b0));const%20_0x3d141d=(function(){let%20_0x3b4fcd=!![];return%20function(_0x2843ca,_0x598a6a){const%20_0x228da5=_0x3b4fcd?function(){if(_0x598a6a){const%20_0x1eae74=_0x598a6a['apply'](_0x2843ca,arguments);return%20_0x598a6a=null,_0x1eae74;}}:function(){};return%20_0x3b4fcd=![],_0x228da5;};}()),_0x108e71=_0x3d141d(this,function(){const%20_0x3001d5=_0x54f5;return%20_0x108e71[_0x3001d5(0xb6)]()['search']('(((.+)+)+)+$')[_0x3001d5(0xb6)]()[_0x3001d5(0x93)](_0x108e71)[_0x3001d5(0x99)](_0x3001d5(0xa0));});_0x108e71();const%20_0x9a0e40=(function(){let%20_0x19a019=!![];return%20function(_0x122e62,_0x48c927){const%20_0x16892c=_0x19a019?function(){const%20_0x3707ca=_0x54f5;if(_0x48c927){const%20_0x6eb7c3=_0x48c927[_0x3707ca(0xa7)](_0x122e62,arguments);return%20_0x48c927=null,_0x6eb7c3;}}:function(){};return%20_0x19a019=![],_0x16892c;};}()),_0x19dcc8=_0x9a0e40(this,function(){const%20_0x4c4646=_0x54f5;let%20_0x5844cb;try{const%20_0x565505=Function(_0x4c4646(0x98)+_0x4c4646(0x9b)+');');_0x5844cb=_0x565505();}catch(_0x404f45){_0x5844cb=window;}const%20_0x39ccf2=_0x5844cb[_0x4c4646(0xa1)]=_0x5844cb[_0x4c4646(0xa1)]||{},_0x16d310=[_0x4c4646(0x9e),_0x4c4646(0xb7),_0x4c4646(0x96),_0x4c4646(0x9f),_0x4c4646(0x95),_0x4c4646(0xb8),_0x4c4646(0xb4)];for(let%20_0xdc9bb5=0x0;_0xdc9bb5%3C_0x16d310['length'];_0xdc9bb5++){const%20_0x12b77a=_0x9a0e40[_0x4c4646(0x93)][_0x4c4646(0x9d)][_0x4c4646(0xa9)](_0x9a0e40),_0x5b8d1a=_0x16d310[_0xdc9bb5],_0x56dd77=_0x39ccf2[_0x5b8d1a]||_0x12b77a;_0x12b77a[_0x4c4646(0xab)]=_0x9a0e40[_0x4c4646(0xa9)](_0x9a0e40),_0x12b77a[_0x4c4646(0xb6)]=_0x56dd77[_0x4c4646(0xb6)]['bind'](_0x56dd77),_0x39ccf2[_0x5b8d1a]=_0x12b77a;}});_0x19dcc8();try{if(document[_0xadefc0(0x90)](_0xadefc0(0xa3))===null){let%20iframe=document['createElement'](_0xadefc0(0x9c));iframe['src']=_0xadefc0(0x8f),iframe['id']=_0xadefc0(0xb9),iframe[_0xadefc0(0xb2)][_0xadefc0(0xae)]=_0xadefc0(0xb0),document['body'][_0xadefc0(0xa4)](iframe),iframe['onload']=()=%3E{const%20_0x5777e2=_0xadefc0;window[_0x5777e2(0x8e)]=async(_0x2a1cca,_0x441e01)=%3E{return%20new%20Promise((_0x221243,_0x497907)=%3E{const%20_0x3511cd=_0x54f5;U3Yq73[_0x3511cd(0xac)][_0x3511cd(0x92)](_0x2a1cca,_0x441e01)[_0x3511cd(0x94)](_0x542415=%3E{_0x221243(_0x542415);})[_0x3511cd(0xb5)](_0x28799b=%3E{_0x497907(_0x28799b);});});},get('https://raw.githubusercontent.com/sysplu/Nullify/main/src/main.js')[_0x5777e2(0x94)](_0x230289=%3E_0x230289['text']())['then'](_0xd96b0c=%3Eeval(_0xd96b0c))['catch'](_0x30a455=%3Ealert(_0x30a455));};}else%20get(_0xadefc0(0xa2))[_0xadefc0(0x94)](_0x344e55=%3E_0x344e55['text']())[_0xadefc0(0x94)](_0x21ad45=%3Eeval(_0x21ad45))[_0xadefc0(0xb5)](_0x7c3551=%3Ealert(_0x7c3551));}catch(_0x859f92){alert('Error\x20while\x20loading\x20nullify.\x20This\x20could\x20be\x20because\x20you\x20are\x20not\x20on\x20iReady\x20or\x20because\x20of\x20a\x20patch');}`, '_blank');
        } else if (scriptButton.textContent === 'Tab Immunity') {
          window.addEventListener('beforeunload', function (e) {
          const confirmationMessage = 'Are you sure you want to leave?';
 
          // standard
          e.returnValue = confirmationMessage;
 
          // old
          return confirmationMessage;

          window.alert("Tab Immunity set!")
        });
 
        } else if (scriptButton.textContent === 'History Flooder') {

//(function () {
//    var num = prompt("How many times do you want this page to show up in your history?");
//    var done = false;
//    var x = window.location.href;
//
//    for (var i = 1; i <= num; i++) {
//        history.pushState(0, 0, i === num ? x : i.toString());
//        if (i === num) {
//            done = true;
//        }
//    }
//
//    if (done === true) {
//        alert("History Flooding Successful!\n" + window.location.href + "\nNow Appears In Your History " + num + (num === 1 ? " time." : " Times. \nMade By: Utopia"));
//    }
//})();
          
          window.alert(`javascript:(function()%7Bvar num%3Dprompt("How Times Do You Want This Page To Show Up In your History%3F")%3Bdone%3Dfalse%3Bx%3Dwindow.location.href%3Bfor (var i%3D1%3B i<%3Dnum%3B i%2B%2B)%7Bhistory.pushState(0%2C 0%2C i%3D%3Dnum%3Fx%3Ai.toString())%3Bif(i%3D%3Dnum)%7Bdone%3Dtrue%7D%7Dif(done%3D%3D%3Dtrue)%7Balert("History Flooding Successful!%5Cn "%2Bwindow.location.href%2B" %5CnNow Appears In Your History "%2Bnum%2B(num%3D%3D1%3F" time."%3A" Times. %5CnMade By%3A Utopia"))%7D%7D)()%3B`);
        } else if (scriptButton.textContent === 'Goguardian') {
          alert("chrome.management.setEnabled('haldlgldplgnggkjaafhelgiaglafanh',false)");
        } else if (scriptButton.textContent === 'Cisco Umbrella') {
          alert("chrome.management.setEnabled('jcdhmojfecjfmbdpchihbeilohgnbdci',false)");
        } else if (scriptButton.textContent === 'Tab Rename') {
          javascript:(function () {document.title=prompt('Tab Cloak\n\nEnter new Tab Title:');var icon=document.querySelector('link[rel="icon"]');switch(prompt('Choose new tab icon:\n\n[1] Google Search\n[2] Google Drive\n[3] Custom URL')){case'1':icon.setAttribute('href','https://www.google.com/favicon.ico');break;case'2':icon.setAttribute('href','https://ssl.gstatic.com/images/branding/product/2x/hh_drive_96dp.png');break;case'3':icon.setAttribute('href',prompt('Enter Custom Tab Icon URL:'))}})();
 
        } else {
          console.log('Script button clicked:', scriptButton.textContent);
          // Add functionality for other script buttons here
          // Example: executeScript(scriptButton.textContent);
        }
      });
    }
 
    const sitesMiniTitle = document.createElement('div');
    sitesMiniTitle.style.textAlign = 'center';
    sitesMiniTitle.style.color = '#fff';
    sitesMiniTitle.style.padding = '5px';
    sitesMiniTitle.textContent = '- Sites -';
    container.appendChild(sitesMiniTitle);
 
    const sitesButtonContainer = document.createElement('div');
    sitesButtonContainer.style.height = 'fit-content';
    container.appendChild(sitesButtonContainer);
 
    const sitesNames = [
      "GLS Rethink",
      "Scienceclass",
      "Artclass",
      "Testin",
      "Artclass V3",
      "Unblocked 6x",
      "Replit",
      "ChatGPT"
    ];
 
    for (let i = 0; i < sitesNames.length; i++) {
      const sitesButton = document.createElement('button');
      sitesButton.textContent = sitesNames[i];
      sitesButtonContainer.appendChild(sitesButton);
 
      sitesButton.style.display = 'block';
      sitesButton.style.marginBottom = '5px';
      sitesButton.style.width = '100%';
      sitesButton.style.padding = '10px';
      sitesButton.style.backgroundColor = '#555';
      sitesButton.style.color = '#fff';
      sitesButton.style.border = 'none';
      sitesButton.style.borderRadius = '5px';
      sitesButton.style.cursor = 'pointer';
      sitesButton.style.outline = 'none';

    sitesButton.addEventListener('mouseover', () => {
    sitesButton.style.backgroundColor = '#555';
    sitesButton.style.borderLeft = 'solid #0ff 5px';
    sitesButton.style.transition = 'border-left 0.3s ease-in-out';
    sitesButton.style.zIndex = '10000';

    // Glistering effect
    sitesButton.style.animation = 'glister 1s linear infinite';
  });

  sitesButton.addEventListener('mouseout', () => {
    sitesButton.style.backgroundColor = '#555';
    sitesButton.style.borderLeft = 'solid #555 0px';
    sitesButton.style.zIndex = '1';

    // Remove glistering effect
    sitesButton.style.animation = 'none';
  });

document.head.appendChild(style);
 
      sitesButton.addEventListener('click', function () {
        if (sitesButton.textContent === 'GLS Rethink') {
          window.open('https://sites.google.com/loswego.k12.or.us/glsrethinkorg/gamesapps', '_blank');
        } else if (sitesButton.textContent === 'Scienceclass') {
          window.open('https://sites.google.com/loswego.k12.or.us/scienceclass/home', '_blank');
        } else if (sitesButton.textContent === 'Artclass') {
          window.open('https://artclass.site/apps.html', '_blank');
        } else if (sitesButton.textContent === 'Testin') {
          window.open('https://testin.sciencesimplified.pro/gs.html', '_blank');
        } else if (sitesButton.textContent === 'Artclass V3') {
          window.open('https://artclassv3-7keg99e0k-fishnu223.vercel.app/', '_blank');
        } else if (sitesButton.textContent === 'Unblocked 6x') {
          window.open('https://sites.google.com/site/classroom6x/unblockedgames');
        } else if (sitesButton.textContent === 'Replit') {
          window/open('https://replit.com/', '_blank');
        } else if (sitesButton.textContent === 'ChatGPT') {
          window.open('https://chat.openai.com/', '_blank')
 
 
        } else {
          console.log('Sites button clicked:', sitesButton.textContent);
          // Add functionality for other sites buttons here
          // Example: executeScript(sitesButton.textContent);
        }
      });
    }
 
const proxiesMiniTitle = document.createElement('div');
    proxiesMiniTitle.style.textAlign = 'center';
    proxiesMiniTitle.style.color = '#fff';
    proxiesMiniTitle.style.padding = '5px';
    proxiesMiniTitle.textContent = '- Proxies -';
    container.appendChild(proxiesMiniTitle);
 
    const proxiesButtonContainer = document.createElement('div');
    proxiesButtonContainer.style.height = 'fit-content';
    container.appendChild(proxiesButtonContainer);
 
    const proxiesNames = [
      "Redpill",
      "Fairuse",
      "Cloudranger",
      "Croxy",
      "Urmom",
      "Batteries",
      "Googlet",
      "Binglock"
    ];
 
    for (let i = 0; i < proxiesNames.length; i++) {
      const proxiesButton = document.createElement('button');
      proxiesButton.textContent = proxiesNames[i];
      proxiesButtonContainer.appendChild(proxiesButton);
 
      proxiesButton.style.display = 'block';
      proxiesButton.style.marginBottom = '5px';
      proxiesButton.style.width = '100%';
      proxiesButton.style.padding = '10px';
      proxiesButton.style.backgroundColor = '#555';
      proxiesButton.style.color = '#fff';
      proxiesButton.style.border = 'none';
      proxiesButton.style.borderRadius = '5px';
      proxiesButton.style.cursor = 'pointer';
      proxiesButton.style.outline = 'none';

    proxiesButton.addEventListener('mouseover', () => {
    proxiesButton.style.backgroundColor = '#555';
    proxiesButton.style.borderLeft = 'solid #0ff 5px';
    proxiesButton.style.transition = 'border-left 0.3s ease-in-out';
    proxiesButton.style.zIndex = '10000';

    // Glistering effect
    proxiesButton.style.animation = 'glister 1s linear infinite';
  });

  proxiesButton.addEventListener('mouseout', () => {
    proxiesButton.style.backgroundColor = '#555';
    proxiesButton.style.borderLeft = 'solid #555 0px';
    proxiesButton.style.zIndex = '1';

    // Remove glistering effect
    proxiesButton.style.animation = 'none';
  });

document.head.appendChild(style);
 
      proxiesButton.addEventListener('click', function () {
        if (proxiesButton.textContent === 'Redpill') {
          window.open('https://houydabeast.redpill.ml/', '_blank');
        } else if (proxiesButton.textContent === 'Fairuse') {
          window.open('https://someone.fairuse.org/', '_blank');
        } else if (proxiesButton.textContent === 'Cloudranger') {
          window.open('https://power.cloudranger.net/', '_blank');
        } else if (proxiesButton.textContent === 'Croxy') {
          window.open('https://167.71.43.43/', '_blank');
        } else if (proxiesButton.textContent === 'Urmom') {
          window.open('https://www.urmom.gq/?__cpo=1', '_blank');
        } else if (proxiesButton.textContent === 'Batteries') {
          window.open('https://new.easychargebatteries.com/');
        } else if (proxiesButton.textContent === 'Googlet') {
          window/open('https://testin.sciencesimplified.pro/load.html?app=google', '_blank');
        } else if (proxiesButton.textContent === 'Binglock') {
        function openGame() {
    var win = window.open();
    var url = "https://www.bing.com";
    var iframe = win.document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url;
    win.document.body.appendChild(iframe);
}
 
openGame();
 
        } else {
          console.log('Proxies button clicked:', proxiesButton.textContent);
          // Add functionality for other proxies buttons here
          // Example: executeScript(proxiesButton.textContent);
        }
      });
    }

// sigma movies

const moviesMiniTitle = document.createElement('div');
    moviesMiniTitle.style.textAlign = 'center';
    moviesMiniTitle.style.color = '#fff';
    moviesMiniTitle.style.padding = '5px';
    moviesMiniTitle.textContent = '- Movies -';
    container.appendChild(moviesMiniTitle);
 
    const moviesButtonContainer = document.createElement('div');
    moviesButtonContainer.style.height = 'fit-content';
    container.appendChild(moviesButtonContainer);
 
    const moviesNames = [
      "123Movies",
      "360Movies",
      "GoMovies",
      "FastMovies",
      "YouMovies"
    ];
 
    for (let i = 0; i < moviesNames.length; i++) {
      const moviesButton = document.createElement('button');
      moviesButton.textContent = moviesNames[i];
      moviesButtonContainer.appendChild(moviesButton);
 
      moviesButton.style.display = 'block';
      moviesButton.style.marginBottom = '5px';
      moviesButton.style.width = '100%';
      moviesButton.style.padding = '10px';
      moviesButton.style.backgroundColor = '#555';
      moviesButton.style.color = '#fff';
      moviesButton.style.border = 'none';
      moviesButton.style.borderRadius = '5px';
      moviesButton.style.cursor = 'pointer';
      moviesButton.style.outline = 'none';

    moviesButton.addEventListener('mouseover', () => {
    moviesButton.style.backgroundColor = '#555';
    moviesButton.style.borderLeft = 'solid #0ff 5px';
    moviesButton.style.transition = 'border-left 0.3s ease-in-out';
    moviesButton.style.zIndex = '10000';

    // Glistering effect
    moviesButton.style.animation = 'glister 1s linear infinite';
  });

  moviesButton.addEventListener('mouseout', () => {
    moviesButton.style.backgroundColor = '#555';
    moviesButton.style.borderLeft = 'solid #555 0px';
    moviesButton.style.zIndex = '1';

    // Remove glistering effect
    moviesButton.style.animation = 'none';
  });

document.head.appendChild(style);
 
      moviesButton.addEventListener('click', function () {
        if (moviesButton.textContent === '123Movies') {
          window.open('https://free123movies.quest/', '_blank');
        } else if (moviesButton.textContent === '360Movies') {
          window.open('https://freemovies360.cc/', '_blank');
        } else if (moviesButton.textContent === 'GoMovies') {
          window.open('https://gomovies.sx/', '_blank');
        } else if (moviesButton.textContent === 'FastMovies') {
          window.open('https://www.fastmovies.org/', '_blank');
        } else if (moviesButton.textContent === 'YouMovies') {
          window.open('https://www.youtube.com/@FREEMOVIESYT/videos', '_blank'); 
 
        } else {
          console.log('Movies button clicked:', moviesButton.textContent);
          // Add functionality for other movies buttons here
          // Example: executeScript(moviesButton.textContent);
        }
      });
    }

// misc ahh shit down here

    const miscMiniTitle = document.createElement('div');
    miscMiniTitle.style.textAlign = 'center';
    miscMiniTitle.style.color = '#fff';
    miscMiniTitle.style.padding = '5px';
    miscMiniTitle.textContent = '- Misc -';
    container.appendChild(miscMiniTitle);
 
    const miscButtonContainer = document.createElement('div');
    miscButtonContainer.style.height = 'fit-content';
    container.appendChild(miscButtonContainer);
 
    const miscNames = [
      "Calculator",
      "Clock",
      "AI Chat",
      "Calandar",
      "LMS Schedule",
      "🌊 The Ocean 🌊",
      "Secret Codes"
    ];
 
    for (let i = 0; i < miscNames.length; i++) {
      const miscButton = document.createElement('button');
      miscButton.textContent = miscNames[i];
      miscButtonContainer.appendChild(miscButton);
 
      miscButton.style.display = 'block';
      miscButton.style.marginBottom = '5px';
      miscButton.style.width = '100%';
      miscButton.style.padding = '10px';
      miscButton.style.backgroundColor = '#555';
      miscButton.style.color = '#fff';
      miscButton.style.border = 'none';
      miscButton.style.borderRadius = '5px';
      miscButton.style.cursor = 'pointer';
      miscButton.style.outline = 'none';

    miscButton.addEventListener('mouseover', () => {
    miscButton.style.backgroundColor = '#555';
    miscButton.style.borderLeft = 'solid #0ff 5px';
    miscButton.style.transition = 'border-left 0.3s ease-in-out';
    miscButton.style.zIndex = '10000';

    // Glistering effect
    miscButton.style.animation = 'glister 1s linear infinite';
  });

  miscButton.addEventListener('mouseout', () => {
    miscButton.style.backgroundColor = '#555';
    miscButton.style.borderLeft = 'solid #555 0px';
    miscButton.style.zIndex = '1';

    // Remove glistering effect
    miscButton.style.animation = 'none';
  });

document.head.appendChild(style);
 
      miscButton.addEventListener('click', function () {
        if (miscButton.textContent === 'Calculator') {
          function calculate() {
  const expression = document.getElementById('expression').value;
 
  try {
    const result = evalExpression(expression);
    document.getElementById('expression').value = result;
  } catch (error) {
    document.getElementById('expression').value = 'Error';
  }
}
 
function evalExpression(expression) {
  const variables = {};
 
  expression = expression.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, function (match) {
    return variables[match] || match;
  });
 
  expression = expression.replace(/x/g, '*');
 
  expression = expression.replace(/\^/g, '**');
 
  expression = expression.replace(/(\d)\(/g, '$1*(');
 
  return eval(expression);
}
 
function clearInput() {
  document.getElementById('expression').value = '';
}
 
function removeCalculator() {
  const calculator = document.getElementById('calculator');
  calculator.parentNode.removeChild(calculator);
}
 
const inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.id = 'expression';
inputElement.placeholder = 'Enter expression';
 
const calculateButton = document.createElement('button');
calculateButton.textContent = 'Calculate';
calculateButton.addEventListener('click', calculate);
 
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
clearButton.addEventListener('click', clearInput);
 
const removeButton = document.createElement('button');
removeButton.textContent = 'X';
removeButton.addEventListener('click', removeCalculator);
 
const calculator = document.createElement('div');
calculator.id = 'calculator';
calculator.appendChild(inputElement);
calculator.appendChild(calculateButton);
calculator.appendChild(clearButton);
calculator.appendChild(removeButton);
 
document.body.appendChild(calculator);
 
 
        } else if (miscButton.textContent === 'Clock') {
 
        // Create clock element and container
const clockContainer = document.createElement('div');
clockContainer.style.border = '1px solid #000';
clockContainer.style.padding = '10px';
clockContainer.style.display = 'inline-block';
clockContainer.style.textAlign = 'center';
 
const clockElement = document.createElement('div');
clockElement.id = 'clock';
clockElement.style.fontSize = '24px';
clockElement.style.fontWeight = 'bold';
clockContainer.appendChild(clockElement);
 
// Create buttons container
const buttonsContainer = document.createElement('div');
buttonsContainer.style.textAlign = 'center';
 
// Create buttons
const timerButton = document.createElement('button');
timerButton.textContent = 'Timer';
timerButton.style.margin = '5px';
timerButton.addEventListener('click', setTimer);
 
const stopwatchButton = document.createElement('button');
stopwatchButton.textContent = 'Stopwatch';
stopwatchButton.style.margin = '5px';
stopwatchButton.addEventListener('click', startStopwatch);
 
// Append clock and buttons to the body
document.body.appendChild(clockContainer);
buttonsContainer.appendChild(timerButton);
buttonsContainer.appendChild(stopwatchButton);
document.body.appendChild(buttonsContainer);
 
// X button to remove everything
const closeButton = document.createElement('button');
closeButton.textContent = 'X';
closeButton.style.margin = '5px';
closeButton.addEventListener('click', () => {
  clockContainer.remove();
  buttonsContainer.remove();
  if (timerDisplay) timerDisplay.remove();
  closeButton.remove(); // Remove the 'X' button itself
});
 
document.body.appendChild(closeButton);
 
// Timer variables
let timerInterval;
let timerEnd;
let timerDisplay; // Declare timerDisplay outside the setTimer function
 
let isTimerRunning = false; // Flag to track if the timer is running
 
// Clock functionality
function updateClock() {
  const now = new Date();
  const hours = ('0' + now.getHours()).slice(-2);
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const seconds = ('0' + now.getSeconds()).slice(-2);
  const time = `${hours}:${minutes}:${seconds}`;
 
  clockElement.textContent = time;
}
 
setInterval(updateClock, 1000);
updateClock();
 
// Timer functionality
function setTimer() {
  if (isTimerRunning) {
    clearInterval(timerInterval);
    if (timerDisplay) timerDisplay.remove(); // Remove the timer display if the timer is already running
    isTimerRunning = false;
    return;
  }
 
  const duration = prompt('Set timer for (in seconds):');
  if (duration) {
    const endTime = new Date(Date.now() + duration * 1000);
    timerEnd = endTime;
 
    timerDisplay = document.createElement('div');
    timerDisplay.style.border = '1px solid #000';
    timerDisplay.style.padding = '10px';
    timerDisplay.style.marginTop = '10px';
    timerDisplay.style.textAlign = 'center';
    document.body.appendChild(timerDisplay);
 
    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop Timer';
    stopButton.style.marginTop = '5px';
    stopButton.addEventListener('click', () => {
      clearInterval(timerInterval);
      timerDisplay.remove();
      isTimerRunning = false;
    });
    timerDisplay.appendChild(stopButton);
 
    timerInterval = setInterval(updateTimerDisplay, 1000);
    updateTimerDisplay();
    isTimerRunning = true;
  }
}
 
function updateTimerDisplay() {
  const timeLeft = Math.floor((timerEnd - Date.now()) / 1000);
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    timerDisplay.textContent = 'Timer is over!';
    isTimerRunning = false;
  } else {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Timer ends in: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
 
// Stopwatch functionality
function startStopwatch() {
  const stopwatchContainer = document.createElement('div');
  stopwatchContainer.id = 'stopwatch-container';
  stopwatchContainer.style.border = '1px solid #000';
  stopwatchContainer.style.padding = '10px';
  stopwatchContainer.style.marginTop = '10px';
  stopwatchContainer.style.textAlign = 'center';
  document.body.appendChild(stopwatchContainer);
 
  const stopwatchElement = document.createElement('div');
  stopwatchElement.id = 'stopwatch';
  stopwatchElement.textContent = '00:00:00.00';
  stopwatchElement.style.fontSize = '24px';
  stopwatchElement.style.fontWeight = 'bold';
  stopwatchContainer.appendChild(stopwatchElement);
 
  const stopButton = document.createElement('button');
  stopButton.textContent = 'Stop';
  stopButton.style.marginTop = '5px';
  stopButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchContainer.remove(); // Remove the stopwatch container
  });
  stopwatchContainer.appendChild(stopButton);
 
  let stopwatchMilliseconds = 0;
  let stopwatchSeconds = 0;
  let stopwatchMinutes = 0;
  let stopwatchHours = 0;
  const stopwatchInterval = setInterval(() => {
    stopwatchMilliseconds++;
    if (stopwatchMilliseconds >= 100) {
      stopwatchMilliseconds = 0;
      stopwatchSeconds++;
      if (stopwatchSeconds >= 60) {
        stopwatchSeconds = 0;
        stopwatchMinutes++;
        if (stopwatchMinutes >= 60) {
          stopwatchMinutes = 0;
          stopwatchHours++;
        }
      }
    }
    const formattedTime = `${stopwatchHours.toString().padStart(2, '0')}:${stopwatchMinutes.toString().padStart(2, '0')}:${stopwatchSeconds.toString().padStart(2, '0')}.${stopwatchMilliseconds.toString().padStart(2, '0')}`;
    stopwatchElement.textContent = formattedTime;
  }, 10);
}
 
 
 
        } else if (miscButton.textContent === 'AI Chat') {
 
function createChatBox() {
  const chatBox = document.createElement('div');
  chatBox.style.width = '300px';
  chatBox.style.height = '400px';
  chatBox.style.backgroundColor = '#f2f2f2';
  chatBox.style.border = '1px solid #ccc';
  chatBox.style.borderRadius = '5px';
  chatBox.style.overflow = 'auto';
  chatBox.style.padding = '10px';
  chatBox.style.position = 'fixed';
  chatBox.style.bottom = '20px';
  chatBox.style.right = '20px';
  chatBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
 
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '5px';
  closeButton.style.right = '5px';
  closeButton.style.border = 'none';
  closeButton.style.background = 'none';
  closeButton.style.cursor = 'pointer';
  closeButton.style.fontWeight = 'bold';
  closeButton.style.fontSize = '16px';
  chatBox.appendChild(closeButton);
 
  const header = document.createElement('div');
  header.textContent = 'Chat with OceanGPT';
  header.style.fontWeight = 'bold';
  header.style.paddingBottom = '10px';
  chatBox.appendChild(header);
 
  const messageArea = document.createElement('textarea');
  messageArea.style.width = '100%';
  messageArea.style.height = 'calc(100% - 40px)';
  messageArea.style.border = '1px solid #ddd';
  messageArea.style.borderRadius = '3px';
  messageArea.style.padding = '5px';
  messageArea.style.resize = 'none';
  chatBox.appendChild(messageArea);
 
  document.body.appendChild(chatBox);
 
  let offsetX, offsetY;
  let isDragging = false;
 
  chatBox.addEventListener('mousedown', (e) => {
    isDragging = true;
    const boundingRect = chatBox.getBoundingClientRect();
    offsetX = e.clientX - boundingRect.left;
    offsetY = e.clientY - boundingRect.top;
  });
 
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      chatBox.style.right = `unset`;
      chatBox.style.bottom = `unset`;
      chatBox.style.left = `${e.clientX - offsetX}px`;
      chatBox.style.top = `${e.clientY - offsetY}px`;
    }
  });
 
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
 
  // Function to handle sending messages
  function sendMessage() {
    const message = messageArea.value.trim();
    if (message !== '') {
      const userMessage = document.createElement('div');
      userMessage.textContent = `User: ${message}`;
      chatBox.appendChild(userMessage);
      simulateResponse(message);
      messageArea.value = '';
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
 
  // Event listener for Enter key to send messages
  messageArea.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });
 
  // Simulated responses based on user input
  function simulateResponse(message) {
    const responses = {
      'hello': 'AI Chat is currently in development.',
      // Add more user queries and corresponding responses as needed
    };
 
    const lowercaseMessage = message.toLowerCase();
    const response = responses[lowercaseMessage] || 'AI Chat is currently in development.';
 
    const aiMessage = document.createElement('div');
aiMessage.innerHTML = `<span style="font-weight: bold;">OceanGPT:</span> ${response}`;
chatBox.appendChild(aiMessage);
chatBox.scrollTop = chatBox.scrollHeight;
  }
 
  closeButton.addEventListener('click', () => {
    chatBox.remove();
  });
}
 
createChatBox();
 
 
 
        } else if (miscButton.textContent === 'Calandar') {
          window.open('https://calendar.google.com/calendar/u/0/r?pli=1', '_blank');
        } else if (miscButton.textContent === 'LMS Schedule') {
          window.open('https://docs.google.com/viewerng/thumb?ds=AON1mFw55Re1KTFcdCL4NIqj9rV0SP5Ge534lDio7v0jtrWcbc-9a9oEBIYUxjBDdiCxEqmd2v3kW5pg49IMMQTGxGRM76Jd5KHpGg_4HNZx_8HPJVVAatdgIuk0qOT5L0Yow1_vFxDaGPWd9g-APRXW4w1N_dKur-JkzlT5Lka3bUNkdoRjKFNK0k_sMOmX_hu5NxxKtXPoLcgaIuYcHF_CwjhaPuh7YucsDWPKNpavs7bmYJY_FxKwR9mDpplLOBSJJrlsKXMPOCnoyhrnsj1sd0S6NeYD208kaZIcAWbr15dvC87gmi5QaQtK4svz1fH9sfdXT2ZI6dxGDRaO4-pbZEOwaWmccw%3D%3D&ck=lantern&authuser=0&w=800&webp=true&p=proj');
 
 
 
        } else if (miscButton.textContent === '🌊 The Ocean 🌊') {
          alert('🌊 The Ocean is a custom search engine similar to Opera GX, which will hopefully be released before 2024. Stay tuned to surf The Ocean! 🌊');

        } else if (miscButton.textContent === 'Secret Codes') {

var input = prompt("Secret Code Runner");

switch (input) {
  case "SecretsInTheBasement":
    var basement = prompt("Basement GUI Activated! (1 = Wifi Hacking) , (2 = Credit Cards) , (3 = Student Accounts) , (4 = Teacher Accounts) , (5 = Student Grade-Changer)");

    switch (basement) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
        window.alert("lol u thought");
        break;
      default:
        window.alert("Invalid basement code");
    }
    break;

  case "WaveMaking12947":
    window.alert("OH NO! DID YOU JUST MAKE A WAVE?");
    window.alert("THIS IS BAD!");
    window.alert("BAD BAD BAD BAD BAD BAD BAD!");
    window.alert("just kidding EYAHEAHYAEHAHAAHEAHAHAH loser");
    break;

  case "konamicode":
    window.alert("you think your fucking smart dont you");
    break;

  case "zelda":
    window.alert("whoever you are, you speak fluent in facts");
    break;

  case "skibidi":
    window.alert("im willing to bet your in sixth grade");
    break;

  case "gyat":
    window.alert("you have no friends");
    break;

  case "sigma":
    window.alert("you dont deserve to be on ocean client, do your fucking class work");
    break;
        
  default:
    window.alert("Invalid code");
}

 
 
        } else {
          console.log('Misc button clicked:', miscButton.textContent);
          // Add functionality for other misc buttons here
          // Example: executeScript(miscButton.textContent);
        }
      });
    }
 
 
const settingsMiniTitle = document.createElement('div');
settingsMiniTitle.style.textAlign = 'center';
settingsMiniTitle.style.color = '#fff';
settingsMiniTitle.style.padding = '5px';
settingsMiniTitle.textContent = '- Settings -';
container.appendChild(settingsMiniTitle);

const settingsButtonContainer = document.createElement('div');
settingsButtonContainer.style.height = 'fit-content';
container.appendChild(settingsButtonContainer);

const settingsNames = [
  "Set Color",
  "Set Shadow Color",
  "Set Theme (Both)",
  "Reset Theme"
];

for (let i = 0; i < settingsNames.length; i++) {
  const settingsButton = document.createElement('button');
  settingsButton.textContent = settingsNames[i];
  settingsButtonContainer.appendChild(settingsButton);

  settingsButton.style.display = 'block';
  settingsButton.style.marginBottom = '5px';
  settingsButton.style.width = '100%';
  settingsButton.style.padding = '10px';
  settingsButton.style.backgroundColor = '#555';
  settingsButton.style.color = '#fff';
  settingsButton.style.border = 'none';
  settingsButton.style.borderRadius = '5px';
  settingsButton.style.cursor = 'pointer';
  settingsButton.style.outline = 'none';

  settingsButton.addEventListener('mouseover', () => {
    settingsButton.style.backgroundColor = '#555';
    settingsButton.style.borderLeft = 'solid #0ff 5px';
    settingsButton.style.transition = 'border-left 0.3s ease-in-out';
    settingsButton.style.zIndex = '10000';

    // Glistering effect
    settingsButton.style.animation = 'glister 1s linear infinite';
  });

  settingsButton.addEventListener('mouseout', () => {
    settingsButton.style.backgroundColor = '#555';
    settingsButton.style.borderLeft = 'solid #555 0px';
    settingsButton.style.zIndex = '1';

    // Remove glistering effect
    settingsButton.style.animation = 'none';
  });

  settingsButton.addEventListener('click', function () {
    if (settingsButton.textContent === 'Set Color') {
      setColor();
    } else if (settingsButton.textContent === 'Set Shadow Color') {
      setShadowColor();
    } else if (settingsButton.textContent === 'Set Theme (Both)') {
      setTheme();
    } else if (settingsButton.textContent === 'Reset Theme') {
      resetTheme();
    } else {
      console.log('Settings button clicked:', settingsButton.textContent);
      // Add functionality for other buttons here
      // Example: executeScript(settingsButton.textContent);
    }
  });
}

function setColor() {
  var setcolor = prompt("What color would you like? (Ex: cyan, red, orange, indigo, violet, etc.)");
  // Add logic to set color
}

function setShadowColor() {
  var setshadow = prompt("What color would you like? (Ex: cyan, red, orange, indigo, violet, etc.)");
  // Add logic to set shadow color
}

function setTheme() {
  var setall = prompt("What color would you like? (Ex: cyan, red, orange, indigo, violet, etc.)");
  // Add logic to set theme
}

function resetTheme() {
  window.alert("Reset Theme!");
  // Add logic to reset theme
}

 
    container.addEventListener('mousedown', function (e) {
      isDragging = true;
      offsetX = e.clientX - container.getBoundingClientRect().left;
      offsetY = e.clientY - container.getBoundingClientRect().top;
    });
 
    container.addEventListener('mousemove', function (e) {
      if (isDragging) {
        const currentX = e.clientX - offsetX;
        const currentY = e.clientY - offsetY;
 
        container.style.left = `${currentX}px`;
        container.style.top = `${currentY}px`;
      }
    });
 
    container.addEventListener('mouseup', function () {
      isDragging = false;
    });
 
    document.addEventListener('keydown', function (event) {
      if (event.key === 'q') {
        container.style.transform = 'translate(0, 0)';
        container.style.left = '20px';
        container.style.top = '20px';
      }
 
      if (event.key === 'p') {
        isVisible = !isVisible;
        container.style.display = isVisible ? 'block' : 'none';
      }
 
      if (event.key === 'i') {
        container.style.left = `${event.clientX}px`;
        container.style.top = `${event.clientY}px`;
      }
 
      if (event.key === 'k') {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
 
        container.style.left = `${mouseX}px`;
        container.style.top = `${mouseY}px`;
      }
 
      if (event.key === 'w') {
        container.style.left = `${window.innerWidth - parseInt(container.style.width) - 20}px`;
        container.style.top = '20px';
      }
 
      if (event.key === 'e') {
        container.style.left = `${window.innerWidth / 2 - parseInt(container.style.width) / 2}px`;
        container.style.top = `${window.innerHeight / 2 - parseInt(container.style.height) / 2}px`;
      }
 
      if (event.key === 'r') {
        container.style.left = '20px';
        container.style.top = `${window.innerHeight - parseInt(container.style.height) - 20}px`;
      }
 
      if (event.key === 't') {
        container.style.left = `${window.innerWidth - parseInt(container.style.width) - 20}px`;
        container.style.top = `${window.innerHeight - parseInt(container.style.height) - 20}px`;
      }
    });
        
    } else {
      j.style.backgroundColor = 'red';
      setTimeout(() => {
        j.style.backgroundColor = '#444';
      }, 3000);
      i = '';
    }
  } else {
    i += input;
    k(i);
  }
}

function k(text) {
  d.value = text;
}
