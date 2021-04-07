
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper,paperImage;
var ground;
var dustbin,dustbin1,dustbin2;

function preload()
{
	paperImage = loadImage("OIP(2).jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = createSprite(400,680,800,20);
	paper = createSprite(100,600,15)
  paper.addImage(paperImage);
    dustbin = new Dustbin(700,600,10,125);
	dustbin1 = new Dustbin(500,600,10,125);
	dustbin2 = new Dustbin(600,659,200,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  drawSprites();
 
}



