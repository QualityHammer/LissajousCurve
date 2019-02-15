let grid;
var fCount = 300;

function setup() {
  createCanvas(800, 800);
  // grid creation
  grid = new Grid(6, 6);
  background(51);
}

function draw() {
  // draws over oscillators
  fill(51);
  stroke(51);
  rect(0, 0, width, grid.oscSize);
  rect(0, 0, grid.oscSize, height);
  // temp grid lines
  // strokeWeight(3);
  // stroke(255);
  // for (var i = 0; i < grid.x_len; i++) {
  //   var posX = (i + 1) / (grid.x_len + 1) * width;
  //   line(posX, 0, posX, height);
  // }
  // for (var i = 0; i < grid.y_len; i++) {
  //   var posY = (i + 1) / (grid.y_len + 1) * height;
  //   line(0, posY, width, posY);
  // }

  // Displays all oscillators and patterns
  grid.showAll();
  grid.move();
}
