const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world,engine;
var ground;
var polygon;
var slingshot;
var polygon, polygonimg;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18;
var score = 0;
var bg = "dark.jpg";
var backgroundImg;

function preload() {
  polygonimg = loadImage("polygon.png");
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  stroke(255);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,390,800,20);
  stand1 = new Ground(390,265,200,10);
  stand2 = new Ground(650,165,200,10);

  //level one
  block1 = new Block(330,235,30,40);
  block2 = new Block(360,235,30,40);
  block3 = new Block(390,235,30,40);
  block4 = new Block(420,235,30,40);
  block5 = new Block(450,235,30,40);
  
  //level two
  block6 = new Block(360,195,30,40);
  block7 = new Block(390,195,30,40);
  block8 = new Block(420,195,30,40);

  //top
  block9 = new Block(390,155,30,40);

  //level one
  block10 = new Block(590,135,30,40);
  block11 = new Block(620,135,30,40);
  block12 = new Block(650,135,30,40);
  block13 = new Block(680,135,30,40);
  block14 = new Block(710,135,30,40);
  
  //level two
  block15 = new Block(620,95,30,40);
  block16 = new Block(650,95,30,40);
  block17 = new Block(680,95,30,40);

  //top 
  block18 = new Block(650,55,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon, {x: 100, y: 200});

  Engine.run(engine);
}

function draw() {
  //camera.zoom=camera.zoom+1
  if(backgroundImg)
  background(backgroundImg);

  textSize(15);
  fill(255);
  text("SCORE: "+score,700,40);

  imageMode(CENTER);
  image(polygonimg,polygon.position.x,polygon.position.y,40,40);

  textSize(25);
  fill(255);
  text("Drag the polygon to destroy the blocks",200,20);

  textSize(15);
  fill(255);
  text("Press space to get a second chance to play",500,300)
ground.display();
stand1.display();
stand2.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
slingshot.display();

}

  function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32) {
    slingshot.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);
  if(hour >= 06 && hour <= 18) {
      bg = "light.jpg";
  }
  else {
      bg = "dark.jpg";
  }
  backgroundImg = loadImage(bg);
}