function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
translate(200,200);
rotate(-90);
let h = hour();
text('Time Now:\n' + h, 5, 50);

let mn = minute();
text('Time Now: \n' + mn, 5, 50);

let s = second();
text('Time Now: \n' + s, 5, 50);

  //let c = map(mouseX, 0, width, 0, 175);
  //Scale the mouseX value from 0 to 720 to a range between 40 and 300
  //h = map( 0, width, 40, 300);
  //fill(233, c, 0);
  //ellipse(width/2, height/2, h, h);

  angleMode(DEGREES);

  scAngle = map(s, 0, 60, 0, 360);
  mnAngle = map(mn,0,60,0,360);


  
  push();
  rotate(scAngle); 
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  /*push();
  rotate(mnAngle);
  line(0,0,200,0);
  pop();*/

  strokeWeight(10);
  noFill();

  stroke("red");
  arc(0,0,300,300,0,scAngle);

//stroke("green");
//arc(0,0,280,280,0,mnAngle);

  drawSprites();
}