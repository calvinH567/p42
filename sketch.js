var backImage,backgr;
var player, player_running;
var ground,ground_img;
var bannana_IMG
var END =0;
var PLAY =1;
var gameState = PLAY;
var obstacle_IMG
function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bannana_IMG = loadImage("banana.png");
  obstacle_IMG = loadImage("stone.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
    if(frameCount%100==2){
    spawnFood();
    }
    if(frameCount%50==5){
      spawnObstacle();
      }
    if(backgr.x<100){
      backgr.x=backgr.width/2;
    }
    
      if(keyDown("space") ) {
        player.velocityY = -12;
      }
      player.velocityY = player.velocityY + 0.8;
    
      player.collide(ground);

  }

  drawSprites();
}

function spawnFood(){
  var fruit = createSprite(800,Math.round(random(300,200)));
  fruit.velocityX = -10;
  fruit.addImage("bannana",bannana_IMG);
  fruit.scale = 0.1;
  fruit.lifetime = 100
}

function spawnObstacle(){
  var obstacle = createSprite(800,Math.round(random(300,200)));
  obstacle.velocityX = -10;
  obstacle.addImage("stone",obstacle_IMG);
  obstacle.scale = 0.1;
  obstacle.lifetime = 100
}