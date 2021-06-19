var road,way
var surfer,surfer_running
var invisibleside1
var invisibleside2

function preload()
{

  way=loadImage("path.png")

  surfer_running =loadAnimation("jake1.png","jake2.png",
  "jake3.png","jake4.png","jake5.png")

}

function setup()
{

  createCanvas(400,400);

  road=createSprite(200,200)
  road.addImage("path",way)
  road.scale=1.5
  road.velocityY=15
  
  surfer=createSprite(200,200)   
  surfer.addAnimation("running",surfer_running)
  
  invisibleside1=createSprite(5,10,10,800)
  invisibleside1.visible=false
  invisibleside2=createSprite(395,390,10,800)
  invisibleside2.visible=false
 
}

function draw() 
{

  background(0);

  if(road.y>400)
  {

    road.y=height/2 

   }

  surfer.x=World.mouseX

  surfer.collide(invisibleside1)
  surfer.collide(invisibleside2)

  drawSprites()
}
