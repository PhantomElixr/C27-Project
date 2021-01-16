
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,650,800,20)
	roof = new Ground(400,100,700,20)

	bob1 = new Bob(200,400);
	bob2 = new Bob(300,400);
	bob3 = new Bob(400,400);
	bob4 = new Bob(500,400);
	bob5 = new Bob(600,400);

	line1 = new Slingshot(bob1.body,{x:200,y:100});
	line2 = new Slingshot(bob2.body,{x:300,y:100});
	line3 = new Slingshot(bob3.body,{x:400,y:100});
	line4 = new Slingshot(bob4.body,{x:500,y:100});
	line5 = new Slingshot(bob5.body,{x:600,y:100});
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  ground.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x: -100,y: -100})
	}
}