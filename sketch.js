
  

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body
//var slingShot

function preload()
{
  bg = loadImage("bg1.png");
	//polygonImg = loadImage("polygon.jpg");
}

function setup() {
	createCanvas(3000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   he = new Polygon(500,400,100);
  ground = new Ground(1000,600,3000,20)
  slingShot = new Slingshot(he.body,{x:400,y:300});
  box1 = new Box(950,550,100,100);
  box2 = new Box(950,500,100,100);
  box3 = new Box(950,450,100,100);
  box4 = new Box(950,400,100,100);
  box5 = new Box(950,350,100,100);
  //box6 = new Box(950,300,100,100);
  //box7 = new Box(950,250,100,100);
  all = new Pig(1500,550);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
he.display();
ground.display();
slingShot.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
all.display();
//box6.display();
//box7.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(he.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(he.body);
    }
}

