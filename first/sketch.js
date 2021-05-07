function setup() {
  createCanvas(640, 480);
  background(250, 250, 100);
}

function draw() {

  noStroke();
  fill(250, 200, 200, 100)
  ellipse(mouseX, mouseY, 20, 20)

}

function mousePressed() {
  background(250, 250, 100);
}