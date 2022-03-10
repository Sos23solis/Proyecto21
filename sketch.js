
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

var radius =40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);
ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	
	//crear los cuerpos aquí.

	var ball_options={
	isStatic:false, 
	restitution:0.3,
	friction:0,
	density:1.2
    
	
}

ball = Bodies.circle(150, 100, radius/2, ball_options);
World.add(world, ball);

ground = new Ground(0, 650, 2000, 10);
	left_wall = new Ground(500, 595, 10, 90);
	right_wall = new Ground(690, 595, 10, 90);
Engine.run(engine);
}



function draw() {
   rectMode(CENTER)
   background(0);
  ground.display();
  left_wall.display();
  right_wall.display();
 ellipse(ball.position.x, ball.position.y, 10);
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball, ball.positions, {x:55, y:-55});
	}
}

