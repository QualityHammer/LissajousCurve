let grid;
var fCount = 300;
var checkLines;
var allSpeed;
var pattWidth;
var showGrid = false;

function setup() {
  createCanvas(800, 800);
  // grid creation
  grid = new Grid(6, 6);
  // checkbox
  checkLines = createCheckbox("Grid lines", false);
  checkLines.changed(toggleGridLines);
  // sliders
  createP("Speed");
  allSpeed = createSlider(1, 3, 1);
  allSpeed.changed(drawBack);
  createP("Number of patterns");
  pattWidth = createSlider(3, 7, 6);
  pattWidth.changed(newGrid);
  background(51);
}

function draw() {
  // draws over oscillators
  fill(51);
  stroke(51);
  rect(0, 0, width, grid.oscSize);
  rect(0, 0, grid.oscSize, height);
  // grid lines
  if (showGrid) {
    strokeWeight(1);
    stroke(255);
    for (var i = 0; i < grid.x_len; i++) {
      var posX = (i + 1) / (grid.x_len + 1) * width;
      line(posX, 0, posX, height);
    }
    for (var i = 0; i < grid.y_len; i++) {
      var posY = (i + 1) / (grid.y_len + 1) * height;
      line(0, posY, width, posY);
    }
  }

  // Displays all oscillators and patterns
  grid.showAll();
  grid.move(allSpeed.value());
}

// called when box is checked/ unchecked
function toggleGridLines() {
  // toggles grid lines
  if (this.checked()) {
    showGrid = true;
  } else {
    background(51);
    showGrid = false;
  }
}

// called when slider is moved
function drawBack() {
  background(51);
}

// called when number of patterns is changed
function newGrid() {
  background(51);
  grid = new Grid(this.value(), this.value());
}
