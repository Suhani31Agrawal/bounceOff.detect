var fixedrect,movingrect;
var box1,box2;


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 300, 50,50);
  fixedrect.shapeColor="red";
  fixedrect.debug=false;
  fixedrect.velocityY=-3;
  movingrect=createSprite(600,200,100,50)
  movingrect.shapeColor="green";
  movingrect.debug=false;
  box1=createSprite(400,100,50,50);
  box1.shapeColor="white";
  box1.velocityY=3;
  box2=createSprite(200,100,50,50);
  box2.shapeColor="cyan";
 // box2.velocityX=3;
}

function draw() {
  background(0); 

  //movingrect.y=World.mouseY;
 // movingrect.x=World.mouseX;
  
  bounceOff(box1,fixedrect);
  drawSprites();
}

