let cols = 5;
let rows;
let squareSize;
let dotCount = 10; // 10x10 grid

function setup() {
  let canvas = createCanvas(windowWidth / 3, windowHeight);
  canvas.parent(document.querySelector('.middle'));
  noStroke();
  squareSize = width / cols;
  rows = ceil(height / squareSize);
}

function draw() {
  clear();
  fill(255, 255, 255, 80);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      drawDotMatrix(x * squareSize, y * squareSize, squareSize);
    }
  }
}

function drawDotMatrix(x0, y0, size) {
  // center of the square
  let cx = x0 + size / 2;
  let cy = y0 + size / 2;

  // distance from mouse to square center
  let d = dist(mouseX, mouseY, cx, cy);

  // map distance to dot size
  // closer = smaller, farther = larger
  let maxRadius = size / dotCount / 2;      // roughly fills the square
  let minRadius = maxRadius * 0.1;          // tiny visible dot
  let r = map(d, 0, width / 1.5, minRadius, maxRadius, true);

  let spacing = size / dotCount;
  let offset = spacing / 2;

  for (let i = 0; i < dotCount; i++) {
    for (let j = 0; j < dotCount; j++) {
      let dx = x0 + offset + i * spacing;
      let dy = y0 + offset + j * spacing;
      circle(dx, dy, r * 2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth / 3, windowHeight);
  squareSize = width / cols;
  rows = ceil(height / squareSize);
}
