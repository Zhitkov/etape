function Drop() {
  this.x = random(width);
  this.y = random(-100, -50);
  this.z = random(0, 5);
  this.len = map(this.z, 0, 20, 10, 20);
  this.yspeed = map(this.z, 0, 3, 1, 1);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    this.x +=  mouseX/1000;
    var grav = map(this.z, 0, 20, 0, 20);
    this.yspeed = grav - mouseY/100;

    if (this.y > height) {
      this.y = random(0, 10);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
    // if (this.y < 0) {
    //   this.y = height + random(-10, 0);
    //   this.yspeed = map(this.z, 0, 20, 4, 10);
    // }
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
    ellipse(this.x+6, this.y-20, 150, 150);
  }
  this.showR = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    rect(this.x, this.y, 150, 150);
  }
  this.showT = function() {
    var thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(0, 0, 0);
    fill(255, 255, 255);
    triangle(this.x+75, this.y-125, this.x+150, this.y, this.x, this.y);
  }
}