const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1, box2, ground
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world;

  ground = new Ground(400, 380, 800, 20);
  box1 = new Box(400, 200, 50, 50)
  box2 = new Box(420, 100, 50, 100)

  /*var ball_options = {restitution: 1.5, friction: 2, density: 1}
  ball = Bodies.circle(400, 100, 40, ball_options)
  World.add(world, ball)
  console.log(ball);*/
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)

  /*ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 40, 40)*/
  ground.display();
  box1.display();
  box2.display();
}