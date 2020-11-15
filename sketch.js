
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var amazingbin,binimage;
function preload()
{
	binimage = loadImage("sprites/dustbin.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper();
	base1 = new Ground();
	amazingbin = createSprite(587,605,50,50);
	amazingbin.addImage(binimage);
	amazingbin.scale = 0.5;
    rect2 = new Dustbin(510,615,20,140);
	rect3 = new Dustbin(664,615,20,140);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 background("lightblue");
  Engine.update(engine);
  paper.display();
  base1.display();
  rect2.display();
  rect3.display();
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-40})	
	}
}


