const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bat,ball;
var backgroundImg;
var slingshot,ground


//var gameState = "onSling";

var score = 0;

function preload() {
  backgroundImg = loadImage("sprites/bg.jpg")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    
    ball = new Ball(200,550,50,50);
  

    bat2 = new Bat(200,100,80,100);
    

  
    slingshot = new SlingShot(ball.body,{x:200, y:550});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("SID's Cricket Game " , width-800, 50)
        text("Score  " + score, width-300, 50)
        textSize(20)
        text(" Press UP arrow to throw the Ball  " , width-900, 100)
        text(" Press SPACE Key to reset the game  " , width-900, 130);


    
    Engine.update(engine);
    //strokeWeight(4);
    
    ball.display();
    ball.score();
    ground.display();
    bat2.display();
    console.log(ball.body.speed)

   // platform.display();
    //log6.display();
   // slingShot.display();    
}
function keyPressed(){
    if (keyCode===UP_ARROW) {
        slingshot.fly();
        Matter.Body.applyForce(ball.body,ball.body.position,{x:random(85,95),y:random(-95,-85)})
    }
    if (keyCode === 32) {
        ball = new Ball(200,550,50,50);
        score = 0
        slingshot.attach(ball.body);
         
    }
}



