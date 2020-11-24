const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var object;
var ground;
var ball;

function setup() {
  var canvas =createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;


  var object_options={
    isStatic:true
  }
  object=Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);
  console.log(typeof object);

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,30,ground_options);
  World.add(world,ground);

  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,30);
  circle(ball.position.x,ball.position.y,30);
}