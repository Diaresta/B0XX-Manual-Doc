var nightmodeButton = document.getElementById('nightmode-toggle');
var body = document.getElementsByTagName('body');
var header = document.getElementsByTagName('header');
var h2 = document.getElementsByTagName('h2');
var nav = document.getElementById('navbar');
var navLi = document.getElementsByClassName('nav-li');
var navLink = document.getElementsByClassName('nav-link');
var navLogo = document.getElementById('nav-logo');
var nightLabel = document.getElementById('nightmode-label');
var hamburgerButton = document.getElementById('hamburger-input');
var navContainer = document.getElementById('navbar-container');
var mediaQ = window.matchMedia("(max-width: 800px)");
// --------------------------------------------------------------------

// Hides navbar when link is clicked
for(let i = 0; i < navLink.length; i++){
    navLink[i].onclick = () => {
        console.log('reeee');
        if (mediaQ.matches){
            navContHide();
        }
    }
}

// --------------------------------------------------------------------

nightmodeButton.onclick = () => {
    if(nightmodeButton.name.includes('light-mode')){
        nightmode();
    } else {
        lightmode();
    }
};

hamburgerButton.onclick = () => {
    if(hamburgerButton.name.includes('display-none')){
        navContShow();
    } else {
        navContHide();
    }
};

// ---------- Light/Night-mode  ----------
function nightmode(){
    document.body.style.backgroundColor = 'black';
    document.body.style.transition = 'background 0.2s linear';
    document.body.style.color   = 'white';
    nav.style.borderRight = '3px solid #00ebff';
    navLogo.style.filter = 'drop-shadow(1px 1px .03rem white)';
    nightLabel.style.backgroundColor = 'rgb(245, 245, 245)';
    nightLabel.style.transition = 'background 0.2s linear';
    nightLabel.className = 'fas fa-sun';
    

    forLoopBlue(navLi);
    forLoopWhite(navLink);
    forLoopWhite(header);
    forLoopWhite(h2);
    mediaQWidth(mediaQ);

    nightmodeButton.name = 'night-mode';
}

function lightmode(){
    document.body.style.backgroundColor = 'rgb(245, 245, 245)';
    document.body.style.transition = 'background 0.2s linear';
    document.body.style.color   = 'rgb(43, 42, 42)';
    nav.style.borderRight = '3px solid black';
    navLogo.style.filter = 'drop-shadow(2px 2px .03rem black)';
    nightLabel.style.backgroundColor = 'black';
    nightLabel.style.transition = 'background 0.2s linear';
    nightLabel.className = 'fas fa-moon';

    forLoopBorderBlack(navLi);
    forLoopBlack(navLink);
    forLoopBlack(header);
    forLoopBlack(h2);
    mediaQWidth(mediaQ);

    nightmodeButton.name = 'light-mode';
}

function forLoopWhite(element){
    for(let i = 0; i < element.length; i++){
        element[i].style.color = 'white';
    }
}

function forLoopBlue(element){
    for(let i = 0; i < element.length; i++){
        element[i].style.borderTop = '2px solid #00ebff';
    }
}

function forLoopBlack(element){
    for(let i = 0; i < element.length; i++){
        element[i].style.color = 'black';
    }
}

function forLoopBorderBlack(element){
    for(let i = 0; i < element.length; i++){
        element[i].style.borderTop = '2px solid black';
    }
}

// ------------------------------ media query testing --------------

function mediaQWidth(x) {
    if(x.matches){
        nav.style.borderRight = '0px';
        console.log('reeee');
    }
}

// Show and hide navbar when media query is active
function navContShow(){
    navContainer.style.display = 'inherit';
    hamburgerButton.name = 'display-show';
    hamburgerButton.src = "/static/images/menu-x.png"
    document.body.style.overflowY = 'hidden';
}

function navContHide(){
    navContainer.style.display = 'none';
    hamburgerButton.name = 'display-none';
    hamburgerButton.src = "/static/images/hamburger.png"
    document.body.style.overflowY = 'initial';
}

// fix navCont color styling when nightmode/lightmode enabled




