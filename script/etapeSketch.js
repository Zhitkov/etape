var drops = [];
var drops2 = [];
var drops3 = [];

function setup() {
  createCanvas(this.innerWidth, this.innerHeight);
  for (var i = 0; i < 15; i++) {
    drops[i] = new Drop();
  }
  for (var i = 0; i < 15; i++) {
    drops2[i] = new Drop();
  }
  for (var i = 0; i < 15; i++) {
    drops3[i] = new Drop();
  }
}

function draw() {
  background(255, 255, 255);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].showR();
  }
  for (var i = 0; i < drops.length; i++) {
    drops2[i].fall();
	drops2[i].showE();
  }
  for (var i = 0; i < drops.length; i++) {
    drops3[i].fall();
	drops3[i].showT();
  }
}