const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();


var count = 0;
var tileCountX = 10;
var tileCountY = 10;
var tileWidth = 0;
var tileHeight = 0;

var colorStep = 15;

var circleCount = 0;
var endSize = 0;
var endOffset = 10;

var actRandomSeed = 1000;




const settings = {

  pixelsPerInch: 300,
   // Tell canvas-sketch we're using p5.js
   p5: true,
   // Turn on a render loop (it's off by default in canvas-sketch)

   duration: 3,

    animate: false,
    // We can specify dimensions if we want a fixed size on the first render
    dimensions:[512, 512],
    // orientation: 'landscape',
    bleed: 1 / 8,
   
};



canvasSketch(() => {

  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
  noFill();
  stroke(0,128);


 return ({ playhead, width, height }) => {
clear()
  // randomSeed(actRandomSeed);

  translate(tileWidth / 2, tileHeight / 2);

  circleCount = 512/ 45 -1;
  endSize =  tileWidth /20;
  endOffset = (tileWidth - endSize) / 2;

  for (var gridY = 0; gridY <= tileCountY; gridY++) {
    for (var gridX = 0; gridX <= tileCountX; gridX++) {
      push();
      translate(tileWidth * gridX, tileHeight * gridY);
      scale(1, tileHeight / tileWidth);

      var toggle = int(random(0, 4));
      if (toggle == 0) rotate(-HALF_PI);
      if (toggle == 1) rotate(0);
      if (toggle == 2) rotate(HALF_PI);
      if (toggle == 3) rotate(PI);

      // draw module
      for (var i = 0; i < circleCount; i++) {
        var diameter = map(i, 0, circleCount, tileWidth, endSize);
        var offset = map(i, 0, circleCount, 0, endOffset);
        ellipse(offset, 0, diameter, diameter);
      }
      pop();
    }
  }
  }
}, settings);





