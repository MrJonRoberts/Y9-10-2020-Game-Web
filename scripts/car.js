var car;
var carImage;
var carShieldImage;
var carAnimation;
var cImage;
var carStartx = 40;
var carStarty = 480;
var friction = 0.1;
var rotation = 4.0;
var dots;
var lives = 3;
var health = 100;
var gameOver = false;
var shieldCounter = 50;
var carCanTakeDamage = true;

function createDot(){
    if (dots.length <=50){
        var c = createSprite(random(0, width), random(0, height));
       c.addImage("normal",cImage);
        dots.add(c);
        
    }
   
}
$(document).ready(function(){
   // add click handlers to btns
    
    $("#incFriction").click(function(){
                            friction +=0.1;
    });
    
    $("#decFriction").click(function(){
                            friction -=0.1;
    });
     $("#incRot").click(function(){
                            rotation +=0.1;
     });
     $("#decRot").click(function(){
                            rotation -=0.1;
     });
    
    
});
function preload(){
    carImage = loadImage('images/spritecar.png'); 
    carAnimation = loadAnimation('images/spritecar.png', '/images/spritecarShield.png');
    carShieldImage = loadImage('/images/spritecarShield.png')
    cImage = loadImage('images/circle.png')
}


function setup(){
    
    var canvas = createCanvas(500,500);
    canvas.parent("playground");
    dots = new Group()
    car = createSprite(carStartx,carStarty);
    car.addAnimation("carAnimation",carAnimation);
    car.animation.stop();
    car.animation.changeFrame(0);
 //   car.addImage("normal", carImage);
    //car.maxSpeed = 5.2;
    car.friction = 0.03;
    var cs = setInterval(createDot, 1000);
   
}


function draw(){
    background(122, 122, 122);
    shieldCounter -= 1;
    if (!gameOver){
        if (shieldCounter <= 0){
        carCanTakeDamage = true
        car.animation.changeFrame(0);
        shieldCounter = 99;
    }
        if(keyDown(LEFT_ARROW) || keyDown("a")){
            car.rotation -= 4;
        }
        if(keyDown(RIGHT_ARROW) || keyDown("d")){
            car.rotation += 4;
        }
            if(keyDown(UP_ARROW) || keyDown("w")){
            car.addSpeed(.2, car.rotation);
        }

        if(keyDown(DOWN_ARROW) || keyDown("s")) {
            car.addSpeed(-0.2,car.rotation);
        }
        checkBounds();
        drawSprites();
        drawSprites(dots);
        outputDetails();
    ;
        dots.collide(car, removeHealth);
    }
    
    return false;
    
    
}

function checkBounds(){
    let x = car.position.x
    let y = car.position.y
    if ( x > width ){
        car.position.x = 0;
    } 
    if (x < 0){
        car.position.x = width
    }
    if (y > height){
        car.position.y = 0;
    }
    if (y < 0){
        car.position.y = height;
    }
}

function outputDetails(){
    
    var xPos = parseFloat(car.position.x).toFixed(2);
    var yPos = parseFloat(car.position.y).toFixed(2);
    var r = parseFloat(car.rotation).toFixed(2);
    var vx = parseFloat(car.velocity.x).toFixed(2);
    var vy = parseFloat(car.velocity.y).toFixed(2);
    
    f = parseFloat(friction).toFixed(1);
    r = parseFloat(rotation).toFixed(1);
    
    
    var str = "x:"+xPos + " y:"+yPos +" r:"+car.rotation + " vx:"+vx +" vy:"+vy; 
    var details = "(f:"+f+", r:"+r+")";
    var healthLives = "(h:"+ health + " l:"+lives+")" + gameOver + " td:("+shieldCounter+ ": "+carCanTakeDamage+")";
    $("#footer").html(str + " "+ details + " "+ healthLives);
}

function removeHealth(){
    
    // 2 sec wait.
    
    
    
    if (carCanTakeDamage = true) {
        carCanTakeDamage = false;
        car.animation.changeFrame(1);
        amt = 1;
        health = health - amt;
        if (health <= 0){
            lives = lives -1;
            health = 100
        }
        shieldCounter = 99;
    } 
    
    if (lives == 0){
        gameOver = true
        
    }
}

