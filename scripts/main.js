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

function setup(){
    cnv =  createCanvas(w,h);
    cnv.parent('centered');
     frameRate(30);
    // create 2 buttons
    setupButtons();
    createBar();

    
}


function draw(){
    background(220);
    atkBtn.draw();
    drawSprites();
    updateBar();
   
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
        
}