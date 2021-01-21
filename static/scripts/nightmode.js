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
var counter = 0;
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

// Fixes display when toggling hamburger menu
window.addEventListener('resize', function(event) {
    if (window.innerWidth < 801){
        nav.style.borderRight = '0px';
        navContHide();
    } else {
        navContainer.style.display = 'inherit';
        nav.style.borderRight = '3px solid black';
    }
});

// Hides navbar when link is clicked
for(let i = 0; i < navLink.length; i++){
    navLink[i].onclick = () => {
        if (mediaQ.matches){
            navContHide();
        }
    }
}

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
    hamburgerButton.src = "/static/images/hamburgerdm.png"
    

    forLoopBlue(navLi);
    forLoopWhite(navLink);
    forLoopWhite(header);
    forLoopWhite(h2);
    mediaQWidth(mediaQ);

    nightmodeButton.name = 'night-mode';
    counter = 1;
    return counter;
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
    hamburgerButton.src = "/static/images/hamburger.png"

    forLoopBorderBlack(navLi);
    forLoopBlack(navLink);
    forLoopBlack(header);
    forLoopBlack(h2);
    mediaQWidth(mediaQ);

    nightmodeButton.name = 'light-mode';
    counter = 0;
    return counter;
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

// Media Query Border Resize Fix 
function mediaQWidth(x) {
    if(x.matches){
        nav.style.borderRight = '0px';
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

    if (counter == 0) {
        hamburgerButton.src = "/static/images/hamburger.png"
    } else nightmode();
}




