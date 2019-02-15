class Oscill {
  constructor(posX, posY, isVertical, speed) {
    this.posX = posX;
    this.posY = posY;
    this.isVertical = isVertical;
    this.speed = speed;

    // output x/y additive
    this.output = 0;
  }

  getPos() {
    // returns either the current posX or posY
    if (this.isVertical) {
      return this.posY + this.output;
    } else {
      return this.posX + this.output;
    }
  }

  move(frame, s) {
    // moves the oscillation forward by one
    var piFrame = map(frame, 0, fCount, 0, 2 * PI);
    var out = sin(this.speed * piFrame);
    this.output = map(out, -1, 1, -(s / 3), s / 3);
  }

  show(s) {
    // shows oscillator
    stroke(255);
    fill(255);
    strokeWeight(3);
    if (this.isVertical) {
      // vertical oscillations
      line(this.posX, this.posY - (s / 3), this.posX, this.posY + (s / 3));
      circle(this.posX, this.posY + this.output, 7);
    } else {
      // horizontal oscillations
      line(this.posX - (s / 3), this.posY, this.posX + (s / 3), this.posY);
      circle(this.posX + this.output, this.posY, 7);
    }
  }
}
