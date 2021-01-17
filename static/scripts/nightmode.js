var nightmodeButton = document.getElementById('nightmode-toggle');
var body = document.getElementsByTagName('body');
var header = document.getElementsByTagName('header');
var h2 = document.getElementsByTagName('h2');
var nav = document.getElementById('navbar');
var navLi = document.getElementsByClassName('nav-li');
var navLink = document.getElementsByClassName('nav-link');
var navLogo = document.getElementById('nav-logo');

nightmodeButton.onclick = () => {
    if(nightmodeButton.name.includes('light-mode')){
        nightmode();
    } else {
        lightmode();
    }
};

function nightmode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.transition = 'background 0.2s linear';
    document.body.style.color   = 'white';
    nav.style.borderRight = '3px solid #00ebff';
    navLogo.style.filter = 'drop-shadow(1px 1px .03rem white)';

    forLoopBlue(navLi);
    forLoopWhite(navLink);
    forLoopWhite(header);
    forLoopWhite(h2);

    nightmodeButton.name = 'night-mode';
}

function lightmode() {
    document.body.style.backgroundColor = 'rgb(245, 245, 245)';
    document.body.style.transition = 'background 0.2s linear';
    document.body.style.color   = 'rgb(43, 42, 42)';
    nav.style.borderRight = '3px solid black';
    navLogo.style.filter = 'drop-shadow(2px 2px .03rem black)';

    forLoopBorderBlack(navLi);
    forLoopBlack(navLink);
    forLoopBlack(header);
    forLoopBlack(h2);

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

// add main display none when hamburger is clicked
