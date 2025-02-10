let x, y, r, g, b, s;
let count = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  frameRate(30)
  if (count < 1){
    count++
  }
  else{
    background(0,0,0,10)
  }
  if (mouseIsPressed ) {
    x = random(width);
    y = random(height);
    r = random(255);
    g = random(255);
    b = random(255);
    s = random(10, 90);
    noStroke();
    fill(r, g, b, 100);
    circle(x, y, s);
  }
}

function mouseMoved() {
  r = random(255);
  g = random(255);
  b = random(255);
  s = random(10, 60);
  noStroke();
  fill(r, g, b, 100);
  circle(mouseX + random(-20, 20), mouseY + random(-20, 20), s);
}
