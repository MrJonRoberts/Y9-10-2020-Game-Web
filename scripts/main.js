// calc button demo

var display;
var fns;
var actions;
var nums;


function consoleLogger(msg){

    document.getElementById("messages").innerHTML = msg;
}

function start(){
    // set up the page.
    var nums = document.getElementsByClassName("num");
    for (i=0; i< nums.length; i ++){
         nums[i].addEventListener('click', getNum);
    }
    
    var actions = document.getElementsByClassName("action");
    for (i=0; i< actions.length; i++){
         actions[i].addEventListener('click', getFn);
    }
    var fns = document.getElementsByClassName("fn");
     for (i=0; i< fns.length; i++){
         fns[i].addEventListener('click', getActions);
    }
    display = document.getElementById('display');
    
}

function getNum(){
    consoleLogger(this.innerHTML); 
    theNum = this.innerHTML;
    display.append(theNum + "\n")
}

function getFn(){
    var theFn = this.InnerHtml;
    if (theFn == "C"){
        clearDisplay();
    }
    consoleLogger(this.innerHTML) 
}
function getactions(){
    
    consoleLogger(this.innerHTML) 
}
function clearDisplay(){
    display.innerHTML = "";
}

start();