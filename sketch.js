const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    

   

    box1 = new Box(200,100,20,60);
  box2 = new Box(180,150,40,80);
  ground = new Ground(200,390,400,20) 
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    ground.display()
    box1.display()
    box2.display()
    ellipseMode(RADIUS);
   // ellipse(ball.position.x, ball.position.y, 20, 20);
}