var backGroundColor = 0;

var mouseX_start;
var mouseY_start;
var mouseX_end;
var mouseY_end;

var R0 = 180;
var R1;

var centerX;
var centerY;

var C1, C2

var inside;

var li = []

// ArrayList<Line> lines = new ArrayList<Line>();

function setup(){
  createCanvas(360,640);
  inside = color(204, 102, 0);

  R1 = (width/2)/cos(PI*60/180);
  centerX = width/2;
  centerY = height/2;
  //fullScreen();

  console.log("R1 = " + R1);
  console.log("width = " + width);
  console.log("height = " + height);
  noStroke();
  frameRate(30);
  // lines.add(new Line(0,0,100,100, color(255)));
  C1 = new Clock(inside, 0, height/2, R1);
  C2 = new Clock(255, width, height/2, R1);

}

function draw(){
  //prvarln(millis());
  background(backGroundColor);
  var r_0, r_1;
  var x, y;

  C1.draw();
  C2.draw();

}


function mousePressed(){
  mouseX_start = mouseX;
  mouseY_start = mouseY;
}

function mouseReleased(){
  mouseX_end = mouseX;
  mouseY_end = mouseY;
  if(dist(mouseX_start, mouseY_start, mouseX_end, mouseY_end) > 10){
    lines.add(new Line(mouseX_start, mouseY_start, mouseX_end, mouseY_end, color(255,255,255)));
  }
}
