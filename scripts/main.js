let w = 500;
let h = 500;
var cnv;
var atkBtn;
var infoBtn;
var rollBtn;
var atkPowerTimer;
var atkBar;
var atkBtnPressed = false;
var atkBarWidth = 1;
var dir = 0;
var speed = 5;
var theSprite;
function setup(){
    cnv =  createCanvas(w,h);
    cnv.parent('centered');
     frameRate(30);
    // create 2 buttons
    setupButtons();
    createBar();
    addClickEventsToArrowBtns();
    theSprite = createSprite(400, 200);
    theSprite.scale = .5;
    
     theSprite.addImage(loadImage('images/sprites/circle.png'));
    console.log(theSprite.height);
    
}


function draw(){
    background(220);
    atkBtn.draw();
    drawSprites();
    updateBar();
    updateSprite();
    checkBounds();
   
}

function createBar(){
    atkBar = rect(500, 0, 20, 5);
    atkBar.fill(255,0,0)
}
    
function updateBar(){
      if (atkBtnPressed) {
          atkBarWidth += 1;
          if (atkBarWidth >= 100){
             
              specialAttack();
          }
          atkBar.style.width = atkBarWidth + "%";
          atkBtn.text = atkBarWidth;
         
      } else {
          
      }
    
    

}

function specialAttack(){
    atkBar.style.width = 0 + "%";
    let power = atkBarWidth;
    $("#playerInfo").append("You attack with "+ power + " power<br/>");
    atkBarWidth = 0;
}

function setupButtons(){
    console.log("btns");
    atkBtn = new Clickable();
    atkBtn.locate(5, 5);
    atkBtn.resize(80, 20);
    atkBtn.onHover = function(){
        this.color = "#c2c2c2";
        this.textColor = "#FFFFFF";
        this.text = "Attacking!";
        this.stroke = "#FF0000";
    }
    
    atkBtn.onOutside = function(){
        this.color = "#EEEEEE";
        this.text = "Attack";
        this.textColor = "#000000";
        this.stroke = "#000000";
    }
    
    //This function is ran when the clickable is pressed.
    atkBtn.onPress = function(){
        atkPowerTimer =  performance.now()
        atkBar = document.getElementById("myBar");
        atkBarWidth = 1;
        atkBtnPressed = true;
       
    }
    //This funcion is ran when the cursor was pressed and then
    //rleased inside the clickable. If it was pressed inside and
    //then released outside this won't work.
    atkBtn.onRelease = function(){
        var newTime = performance.now()
       
        atkPowerTimer = 0;
        atkBtnPressed = false;
        specialAttack();
        atkBarWidth = 1;
    }
    
    
    // add click to arrow btns
    // up_c, down_c , left_c, right_c
    
        
}


function addClickEventsToArrowBtns(){
    // up_c, down_c, left_c, right_c
    $('.arrow').delegate("img", "mousedown", function() {
        var id = $(this).attr('id') // or this.id
        if (id == "up_c"){
            dir = 270;
        } else if (id  == "down_c"){
            dir = 90;
        } else if (id == "left_c"){
            dir = 180;
        } else if (id == "right_c"){
            dir = 0;
        } else {
            speed = 0;
        }
        
    });
   
    
}

function checkBounds(){
    let size = 37;
    let xR = width;
    
    let xL = 0;
    let yT = 0;
    let yB = height;
    let x = theSprite.position.x;
    let y = theSprite.position.y;
    
    if (x > xR && dir == 0){
        theSprite.position.x = xL;
    }
    if (x < 0 && dir == 180){
        theSprite.position.x = xR;
    }
    if (y < yT && dir == 270){
        theSprite.position.y = yB;
    }
     if (y > yB && dir == 90){
        theSprite.position.y = yT;
    }
    
}


function updateSprite(){
    theSprite.setSpeed(speed,dir);
    console.log(width-100);
    $("#npcInfo").html("circle x:" + theSprite.position.x + ", y:"+theSprite.position.y + "d:" + dir+"<br/>");
    
}
