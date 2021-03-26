var path, pathImg
var jake, jake_running
var boundary1
var boundary2

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  jake_running = 
    loadAnimation("Jake1.png", "Jake2.png")
  
}

function setup(){
  createCanvas(400,400);
  
  //create sprites here
  path = createSprite(200,200);
  path.addImage("path",pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  
  jake = createSprite(200,200);
  jake.addAnimation("jake",jake_running);

  boundary1 =  createSprite(2,200,100,400);
  boundary1.visible = false;
  
  boundary2 = createSprite(390,200,100,400);
  boundary2.visible = false;
}

function draw() {
  background(0);
   
  path.velocityY = 4;
  
  jake.x = World.mouseX;
  edges = createEdgeSprites ();
 
    
  
  jake.collide (edges [3]);
  jake.collide (boundary1);
  jake.collide (boundary2);
  
   
  if(path.y > 400) {
   
    path.y = path.height/8;
  }
  
  drawSprites();
  
}
