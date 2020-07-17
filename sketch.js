const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

//var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var particle;
var ground;

var gameState;
var END,PLAY;

var score = 0;
var turn = 0;


function setup() {
  var canvas = createCanvas(872,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
  
  for(var k = 0; k<=width; k = k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j<=width;j=j+40){
    plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for(var j = 40; j<=width;j=j+40){
    plinkos.push(new Plinko(j,275));
  }

  for(var j = 15; j<=width;j=j+40){
    plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(0);  
 
  Engine.update(engine);
  ground.Display();
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
 
  console.log(particle);
  //particle.display();

  for(var k=0;k<divisions.length;k++){
    divisions[k].Display();
}

textSize(32);
text("Score:" + score,25,50);

  drawSprites(); 
}


function mouseReleased(){
//console.log("darsh");
particle = new Partical(mouseX,10,10,10);
for (var j = 0; j < particle; j++) {
   
  particle[j].display();
  }

}