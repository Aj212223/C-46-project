
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg,background_Img;
var racer,racer1Img;
var player, racerImg, racer_racing;

function preload()
{
	racerImg = loadImage("assets/racer1.png");

	background_Img = loadImage("assets/track.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	bgImg = createSprite(displayWidth/2-60,displayHeight/2-90,300,800);
	bgImg.addImage(background_Img)
	bgImg.scale = 1;
	
 leftBoundary=createSprite(0,0,100,800);
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

	

   racer = createSprite(displayWidth-890, displayHeight-180, 50, 50);
   racer.addImage(racerImg)
   racer.scale = 0.07;
   racer.debug = true
   racer.setCollider("rectangle",0,0,300,300)
     
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	background(0);

	bgImg.velocityY = 4;

	//racer.x = World.mouseX;

	racer.velocityY = -3;

	edges= createEdgeSprites();
    racer.collide(edges[3]);
    racer.collide(leftBoundary);
    racer.collide(rightBoundary);

	if(bgImg.y > 400 ){
		bgImg.y = height/10;
	  }

  drawSprites();
 
}



