
var inside;
var middle;
var outside;

function setup() {
  createCanvas(710, 400);
  noStroke();
  background(51, 0, 0);

  inside = color(204, 102, 0);
  middle = color(204, 153, 0);
  outside = color(153, 51, 0);

  // These statements are equivalent to the statements above.
  // Programmers may use the format they prefer.
  //var inside = color('#CC6600');
  //var middle = color('#CC9900');
  //var outside = color('#993300');

  // fill(255);
}
function draw(){

  push();
  translate(80, 80);
  fill(outside);
  rect(0, 0, 200, 200);
  fill(middle);
  rect(40, 60, 120, 120);
  fill(inside);
  rect(60, 90, 80, 80);
  pop();

  push();
  translate(360, 80);
  fill(inside);
  rect(0, 0, 200, 200);
  fill(outside);
  rect(40, 60, 120, 120);
  fill(middle);
  rect(60, 90, 80, 80);
  pop();
  fill(middle);
  ellipse(252, 144, 72, 72);
}
