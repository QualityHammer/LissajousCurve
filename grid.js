class Grid {
  constructor(x_len, y_len) {
    this.x_len = x_len;
    this.y_len = y_len;
    this.x_oscill = [];
    this.y_oscill = [];
    this.oscSize = width / (this.x_len + 1);
    this.createOscill();

    this.patterns = [];
    this.createPatt();

    // Current frame in oscillation
    this.frame = 0;
  }

  createOscill() {
    // creates x oscillators
    for (var i = 0; i < this.x_len; i++) {
      var posX = (i + 1) / (this.x_len + 1) * width + this.oscSize / 2;
      var posY = this.oscSize / 2;
      this.x_oscill.push(new Oscill(posX, posY, false, i + 1));
    }
    // creates y oscillators
    for (var i = 0; i < this.y_len; i++) {
      var posX = this.oscSize / 2;
      var posY = (i + 1) / (this.y_len + 1) * height + this.oscSize / 2;
      this.y_oscill.push(new Oscill(posX, posY, true, i + 1));
    }
  }

  createPatt() {
    // creates patterns
    for (var i = 0; i < this.x_len; i++) {
      this.patterns.push([]);
      for (var j = 0; j < this.y_len; j++) {
        this.patterns[i].push(new Pattern());
      }
    }
  }

  move(addSpeed) {
    // moves x oscillators
    for (let osc of this.x_oscill) {
      osc.move(this.frame, this.oscSize, addSpeed);
    }
    // moves y oscillators
    for (let osc of this.y_oscill) {
      osc.move(this.frame, this.oscSize, addSpeed)
    }
    // moves patetrns based on oscillators
    for (var i = 0; i < this.patterns.length; i++) {
      for (var j = 0; j < this.patterns[i].length; j++) {
        this.patterns[i][j].move(this.x_oscill[i].getPos(), this.y_oscill[j].getPos());
      }
    }
    // increases the frame
    this.frame += 1;
  }

  showAll() {
    // displays oscillators and patterns
    for (let osc of this.x_oscill) {
      osc.show(this.oscSize);
    }
    for (let osc of this.y_oscill) {
      osc.show(this.oscSize);
    }
    for (let row of this.patterns) {
      for (let patt of row) {
        patt.show();
      }
    }
  }

}
