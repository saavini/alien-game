
var alien1 ,alien;
var seed1 ,seed2;
var laser1,laser2;
function preload()
{
alien1=loadImage("images/alien_2-removebg-preview.png");
seed1=loadImage("images/seed-removebg-preview.png");
}

function draw(){
    createCanvas(400,400);
    background("cyan");
   
   laser1=createSprite(20,20,200,200);
    
   laser2=createSprite(20,20,200,200);

    drawSprites()
}
