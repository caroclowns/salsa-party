/*
Salsa Fireworks
Click the screen to make salsa the monkey appear; the background color also changes depending on where the mouse is placed.
*/

var r=0;var g=0; var b=0;//these will be used to change to bg color
var particles=[];//array to store particles
var gravity = 0.01;
let img;
  function preload(){
    img=loadImage('images/salsa.png');}

function setup() {
  createCanvas(700, 700);
  print('Intro to Programming 1, Final Assignment, Caroline Vasquez')
  textSize(width/3);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(229,14,14);
  
  fill(0);
  text('SALSA PARTAAAYYYY',400,400);
  
  r=map(mouseX,0,600,0,255);
  g=map(mouseX,0,600,255,0);
  b=map(mouseY,0,600,255,0);
  background(r,g,b);
  for (let i=particles.length-1; i>=0;i--){
    let p=particles[i];
    let size=map(p.age,0,p.lifespan,p.size,0);//size of particles depend on how long its been on screen
    image(img,p.x,p.y,size);
    p.x +=p.directionX*p.speed;
    p.y +=p.directionY*p.speed;//updates the position of the particle
    p.directionY += gravity;//takes gravity into account
    p.age++;//age of particles increase
    if(p.age>p.lifespan){particles.splice(i,1);}//older particles are removed
  }
}

function mousePressed(){
  for (let i=0; i<20;i++){
    createParticle(mouseX,mouseY);
  }
}

function createParticle(pX,pY){
  let p={
    x:pX,
    y:pY,
    directionX:random(-1,1),
    directionY:random(-1,1),
    speed:random(8,10),
    size:random(300,50),
    lifespan:random(30,60),
    age:0
  }
  particles.push(p);
}