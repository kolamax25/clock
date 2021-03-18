var sc  
var mn 
var hr 

var scAngle
var mnAngle
var hrAngle



function setup() {

  
  
createCanvas(1000, 900);
  
angleMode(DEGREES);




}

function draw() {
  background(0);  

  translate(500,450);
rotate(-90);
 
sec = second();
mn = minute();
hr = hour();


scAngle = map(sec , 0, 60, 0, 360)

mnAngle = map(mn , 0, 60, 0, 360)

hrAngle = map(hr % 12 , 0, 12, 0, 360)


  
strokeWeight(10);
noFill();
stroke(0, 255, 0);
arc(0, 0, 575, 575, 0, mnAngle)

stroke(255, 0, 0);
arc(0, 0, 600, 600, 0, scAngle)

stroke(0, 0, 255);
arc(0, 0, 550, 550, 0, hrAngle)


  

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0,0, 250, 0);
  pop();

  push();
  rotate(scAngle);
  strokeWeight(7);
  stroke(255, 0, 0);
  line(0,0,200, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0,0, 100, 0);
  pop();



  drawSprites();
}