var ballx = 300;
var bally = 300;
var ballSize = 132;
var ballsLeft = 10;
var lvl = 1;

var colorR = 255;
var colorG = 0;
var colorB = 0;


function setup() {
    
    var myCanvas = createCanvas(600, 600);
    myCanvas.parent('myCanvas');
    textAlign(CENTER);
    textSize(20);
    
}

function draw() {
    background(25);

    chase()
}

function chase() {

    
    fill(255);
    text("Level: " + lvl, width/2, height-20);
    var distToBall = dist(ballx, bally, mouseX, mouseY);
    if(distToBall < ballSize/2){
        ballx = random(width);
        bally = random(height);
        ballsLeft = ballsLeft - 1;
        ballSize = ballSize - (ballSize/4);
    }

    if(ballsLeft == 0){
        fill(colorR, colorG, colorB);
        text("YOU WIN", width/2, height/2); 
        displayPopUp();   
        noLoop(); 
        // ballsize = ballSize++;
        // if (ballSize == 200){
        //     ballSize = 33;
        //     ballsLeft = 10;
        //     lvl = lvl + 1;
        //     chase(ballSize, ballsLeft, lvl);
        // }
    }

    fill(255);
    text("Balls left: " + ballsLeft, width-75, height-(height-50));

    fill(colorR, colorG, colorB);
    ellipse(ballx, bally, ballSize);
}