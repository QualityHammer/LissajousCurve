class Pattern {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  move(x, y) {
    // changes current pos
    this.x = x;
    this.y = y;
  }

  show() {
    // shows current pos in pattern
    fill(255);
    stroke(1);
    strokeWeight(1);
    circle(this.x, this.y, 4);
  }
}
