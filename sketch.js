const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground, division1, division2, division3, division4, division5, division6, division7;
var score = 0;
var turn = 0;
var gameState = "play";

var particle;
var plinkos = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,20);

  division1 = new Divisions(10,620,10,300);
  division2 = new Divisions(80,620,10,300);
  division3 = new Divisions(160,620,10,300);
  division4 = new Divisions(240,620,10,300);
  division5 = new Divisions(320,620,10,300);
  division6 = new Divisions(400,620,10,300);
  division7 = new Divisions(475,620,10,300);

}

function draw() {
  background(0);
  fill(255);
  textSize(15);
  text("score : "+ score, 380, 30);

  fill(255);
  text("500",30,500);

  fill(255);
  text("500",100,500);

  fill(255);
  text("100",180,500);

  fill(255);
  text("100",260,500);

  fill(255);
  text("200",340,500);

  fill(255);
  text("200",420,500);

  if(particle!= null){
    particle.display();
  
    if(particle.body.position.y>760)
    {
      if(particle.body.position.x < 160){
        score = score + 500;
        particle = null;
        if(turn>=5){
          gameState = "end";
        }
      }
      if(particle.body.position.x > 161 && particle.body.position.x < 320){
        score = score+100;
        particle = null;
        if(turn>=5){
          gameState = "end";
        }
      }
      if(particle.body.position.x > 161 && particle.body.position.x < 480){
        score = score+100;
        particle = null;
        if(turn>=5){
          gameState = "end";
      }
    }
   }
  }

  if(gameState == "end"){
    fill(255);
    textSize(20);
    text ("GAME OVER!",200,400);
  }

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  ground.display();

  createPlinkos();
}

function createPlinkos(){
for (var i = 40; i <= width; i = i+50){
  plinkos.push(new Plinko(i,75,10));
}

for (var i = 15; i<= width-10; i=i+50){
  plinkos.push(new Plinko(i,175,10));
}

for(var i = 0; i < plinkos.length; i++){
  plinkos[i].display();
}
}

function mousePressed(){
  if(gameState!="end"){
    turn ++;
    particle = new Particle(mouseX, 10,10,10);
  }
}

