let cols;
let rows;
let scale;
let boat;
let sea;

function setup() {
  createCanvas(3000, 1500, WEBGL);
  frameRate(20);
  boat = new Boat();
  sea = new Sea(50);
}

function draw() {
  background('skyblue');
  sea.render();
  boat.move();
}
