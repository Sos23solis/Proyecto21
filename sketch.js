
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine;
var world; 

var ground;
var left_wall;
var right_wall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(0, 650, 2000, 10);
	left_wall = new Ground(500, 595, 10, 90);
	right_wall = new Ground(690, 595, 10, 90);
	//crear los cuerpos aquí.

	var ball_options={
	isStatic:false, 
	restitution:0.3,
	friction:0,
	density:1.2
    
	
}

ball = Bodies.circle(70, 20, 10, ball_options);
World.add(world, ball);

rectMode(CENTER);
ellipseMode(RADIUS);
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:9, y:0.5});
	}
}

function draw() {
  background(0);
  ground.display();
  left_wall.display();
  right_wall.display();
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 10);
 
}



