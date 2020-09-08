var spr;
function setup() {
    createCanvas(500, 500);
    spr = createSprite( width/2, height/2, 40, 40);
    spr.shapeColor = color(255);
    spr.velocity.y = 0.5;    
}
function draw() {
  background(50);
  drawSprites();
}




function mousePressed() {
    spr.position.x = mouseX;
    spr.position.y = mouseY;
}

