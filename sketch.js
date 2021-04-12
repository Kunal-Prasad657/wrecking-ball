const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    box1 = new Box(600,350,50,50)
    box2 = new Box(650,350,50,50)
    box3 = new Box(700,350,50,50)
    box4 = new Box(750,350,50,50)
    box5 = new Box(600,300,50,50)
    box6 = new Box(650,300,50,50)
    box7 = new Box(700,300,50,50)
    box8 = new Box(750,300,50,50)
    box9 = new Box(600,250,50,50)
    box10 = new Box(650,250,50,50)
    box11 = new Box(700,250,50,50)
    box12 = new Box(750,250,50,50)
    box13 = new Box(600,200,50,50)
    box14 = new Box(650,200,50,50)
    box15 = new Box(700,200,50,50)
    box16 = new Box(750,200,50,50)
    var options={restitution:0.6}
    ball = Bodies.circle(500,300,25,options)
    World.add(world,ball)
    sling = new SlingShot(ball,{x:500,y:300})

}

function draw(){
    background("white");
    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    ellipse(ball.position.x,ball.position.y,50,50)
}

function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
}