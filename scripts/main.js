// button demo



// 1.  something to do when we click a button
// 2.  add an event handler to the button click.

var clickCount = 0;
var health = 100;

//1 
function consoleLogger(msg){

    document.getElementById("messages").innerHTML = msg;
}

function backstab(){

    if (health > 0){
        damage = Math.floor(Math.random() * 10 +1)
        health = health - damage;
        consoleLogger("YOU DID "+ damage + " damage ("+ health + ")");

        document.getElementById('hp').value = health;

    }
    if (health <= 0){
        
        document.getElementById('restart').disabled = false;
        document.getElementById('name').disabled = false;
        consoleLogger("YOU ARE DEAD");
    }
}

function changeB3(){
    clickCount = clickCount + 1;
    document.getElementById("b3").innerHTML = "B3 Clicked " + clickCount +" times";
}

function restart(){
    health = 100;
    name = document.getElementById('name').value;
    alert("ready: " + name);
    document.getElementById('hp').value = health;
    document.getElementById("name").disabled = true;
    document.getElementById("restart").disabled = true;
    consoleLogger("RESTARTING");
}
//2 

document.getElementById("b1").addEventListener('click', function(){ consoleLogger("B1 Clicked")});
document.getElementById("b2").addEventListener('click', function(){ alert("B2 Clicked")});
document.getElementById("b3").addEventListener('click', changeB3);
document.getElementById('bstab').addEventListener('click', backstab);
document.getElementById('restart').addEventListener('click', restart);
document.getElementById('hp').value = health;
document.getElementById('restart').disabled = true;
restart();
