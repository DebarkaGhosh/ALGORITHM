var gameobject1;
var gameobject2;

function setup() {

  createCanvas(800,600);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400,400,80,30);

  gameobject1=createSprite(100,100,50,40);
  gameobject2 = createSprite(700,100,50,40);
  gameobject1.velocityX = 5;
  gameobject2.velocityX= -5;

  gameobject1.shapeColor= "red";
  gameobject2.shapeColor="green";

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "yellow";

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

}

function draw() {

  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "yellow";
  }

if(gameobject1.y-gameobject2.y<gameobject1.height/2+gameobject2.height/2 && 
  gameobject2.y-gameobject1.y<gameobject1.height/2+gameobject2.height/2){
    gameobject1.velocityY = gameobject1.velocityY * (-1);
    gameobject2.velocityY = gameobject2.velocityY * (-1);
  }
  
  if(gameobject1.x-gameobject2.x<gameobject1.width/2+gameobject2.width/2 && 
    gameobject2.x-gameobject1.x<gameobject1.width/2+gameobject2.width/2){
      gameobject1.velocityX = gameobject1.velocityX * (-1);
      gameobject2.velocityX = gameobject2.velocityX * (-1);
    }
    
  drawSprites();
}