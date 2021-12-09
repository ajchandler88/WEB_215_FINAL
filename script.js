const btnRed = document.querySelector("#red");
const btnGreen = document.querySelector("#green");
const btnBlue = document.querySelector("#blue");
const ballSizes = [44, 88, 132];

var greetings = {
    intro: "Let's play ",
    game: "Catch the Ball!"
}

var intro = document.querySelector("#intro");
intro.textContent = greetings.intro;
var game = document.querySelector("#game");
game.textContent = greetings.game;


// ellipses color
function colorRed(){
    colorR=255;
    colorG=0;
    colorB=0;
    chase(colorR, colorG, colorB);
}
function colorGreen(){
    colorR=0;
    colorG=255;
    colorB=0;
    chase(colorR, colorG, colorB);
}
function colorBlue(){
    colorR=0;
    colorG=0;
    colorB=255;
    chase(colorR, colorG, colorB);
}

// ellipse size
function btnSml(){
    ballSize = ballSizes[0];
}
function btnMdm(){
    ballSize = ballSizes[1];
}
function btnLrg(){
    ballSize = ballSizes[2];
}



const popUp = document.querySelector("#popUp");
const overlay = document.querySelector("#overlay");
function displayPopUp(){
    if(popUp.style.display = "none"){
        popUp.style.display = "flex";
        overlay.style.display = "block";
    }
}
function reload(){
    location.reload();
};


