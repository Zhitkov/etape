function Drop() {
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 5);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 3, 1, 1);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 2, 0, 0.005);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  // this.show = function() {
  //   var thick = map(this.z, 0, 20, 1, 3);
  //   strokeWeight(thick);
  //   stroke(0, 0, 0);
  //   fill(255, 255, 255);
  //   rect(this.x, this.y, 12, 12);
  // }
  this.showE = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    ellipse(this.x+6, this.y-20, 14, 14);
  }
  this.showR = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    rect(this.x, this.y, 12, 12);
  }
  this.showT = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    triangle(this.x+6, this.y-12, this.x+12, this.y, this.x, this.y);
  }
}