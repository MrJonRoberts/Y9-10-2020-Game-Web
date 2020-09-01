// button demo



// 1.  something to do when we click a button
// 2.  add an event handler to the button click.

var clickCount = 0;

//1 
function consoleLogger(msg){

    document.getElementById("messages").innerHTML = msg;
}

function backstab(){
    damage = Math.floor(Math.random() * 10 +1)
    consoleLogger("YOU DID "+ damage + " damage");
}

function changeB3(){
    clickCount = clickCount + 1;
    document.getElementById("b3").innerHTML = "B3 Clicked " + clickCount +" times";
}


//2 

document.getElementById("b1").addEventListener('click', function(){ consoleLogger("B1 Clicked")});
document.getElementById("b2").addEventListener('click', function(){ alert("B2 Clicked")});
document.getElementById("b3").addEventListener('click', changeB3);
document.getElementById('bstab').addEventListener('click', backstab);
