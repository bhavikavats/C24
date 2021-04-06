const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,pig1,pig2,log1,log2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(900,320,50,50);
    box3 = new Box(700,250,50,50);
    box4 = new Box(900,250,50,50);
    pig1 = new Pig(800,320);
    pig2 = new Pig(800,250);
    log1 = new Log(800,280,300,PI/2);
    log2 = new Log(800,200,300,PI/2);
    
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.diaplay();
    ground.display();
}