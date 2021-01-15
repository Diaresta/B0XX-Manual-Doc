var nightmodeButton = document.getElementById('nightmode-toggle');
var body = document.getElementsByTagName('body');
var header = document.getElementsByTagName('header');
var h2 = document.getElementsByTagName('h2');
var nav = document.getElementById('navbar');
var navLi = document.getElementsByClassName('nav-li');
var navLink = document.getElementsByClassName('nav-link');
var navLogo = document.getElementById("nav-logo");


console.log(navLink);

// nightmodeButton.onclick = () => nightmode();

function nightmode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    nav.style.borderRight = "3px solid #00ebff";
    navLogo.style.filter = "drop-shadow(1px 1px .03rem white)";
    for(let i = 0; i < 300; i++){
        navLi[i].style.borderTop = "2px solid #00ebff";
        navLink[i].style.color = "white";
        header[i].style.color = "white";
        h2[i].style.color = "white";
    }
}

