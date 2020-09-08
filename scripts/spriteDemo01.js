var kitty;
var kittyImg;
function preload() {
  kittyImg = loadImage('images/cat1.png');
}
function setup() {
  createCanvas(400, 400);
  kitty = createSprite(width/2, height/2);
  kitty.addImage(kittyImg);
}
function draw() {
  background(255);
  kitty.position.x = mouseX;
  kitty.position.y = mouseY;
  if (mouseIsPressed) {
    kitty.rotation += 2;
  }
  drawSprites();
}