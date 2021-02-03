var cat,catImg1,catRunning,catImg4;
var mouse,mouseImg1,mouseTeasing,mouseImg4;
var gardenImg,garden;
function preload() {
    //load the images here
    catImg1=loadAnimation("cat1.png");
    catRunning=loadAnimation("cat2.png","cat3.png");
    catImg4=loadAnimation("cat4.png");
    mouseImg1=loadAnimation("mouse1.png");
    mouseteasing=loadAnimation("mouse2.png","mouse3.png");
    mouseImg4=loadAnimation("mouse4.png");
    gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(0,0,1000,800);
    garden.addImage("bg",gardenImg);
cat=createSprite(700,450);
cat.addAnimation("catSitting",catImg1);
cat.scale=0.4;
mouse=createSprite(300,450);
mouse.addAnimation("mouseSitting",mouseImg1);
mouse.scale=0.4;

}

function draw() {
    background(255);
if(cat.x-mouse.x<cat.width/2-mouse.width/2){
    cat.addAnimation("last",catImg4);
    cat.changeAnimation("last",catImg4);
    mouse.addAnimation("last1",mouseImg4);
    mouse.changeAnimation("last1",mouseImg4); 
}
    
    //Write condition here to evalute if tom and jerry collide
keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("left_arrow")){
    cat.velocityX=-3;
    cat.addAnimation("running",catRunning);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("teasing",mouseTeasing);
    mouse.changeAnimation("mouseTeasing");
}

}
