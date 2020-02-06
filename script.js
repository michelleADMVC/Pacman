var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];
var life= 3;
var cerezaExists =false;
var score = 0;
var pacman = {
    x: 8,
    y: 7
}
var ghost ={
    x: 4,
    y: 5
}

function ghostTouch(){
    if (pacman.x == ghost.x && pacman.y == ghost.y) {
        life--;
    }
  
}
function ghostMove(){
    var move = getRandomInt(1, 5);
    console.log("Ghost move variable", move);
    switch(move){
        case 1:
            if ((world[ghost.y + 1][ghost.x] != 2)) {
                 ghost.y++;
            }else{
                console.log("colision");
                
                ghostMove();
            }
            break;
        case 2:
            if ((world[ghost.y - 1][ghost.x] != 2)) {
                ghost.y--;
            }else{
                console.log("colision");
                ghostMove();
            }
            break;
        case 3:
            if ((world[ghost.y][ghost.x+1] != 2)) {
                ghost.x++;
            }else{
                console.log("colision");
                ghostMove();
            }
            break;
        case 4:
            if ((world[ghost.y][ghost.x - 1] != 2)) {
                ghost.x--;
            }else{
                console.log("colision");
                ghostMove();
            }
            break;
    }
    
}
function displayPacman() {
    document.getElementById("pacman").style.top = pacman.y * 20 + "px";
    document.getElementById("pacman").style.left = pacman.x * 20 + "px";
    displayGhost();
    displayLife();
}
function displayGhost() {
    ghostMove();
    document.getElementById("ghost").style.top = ghost.y * 20 + "px";
    document.getElementById("ghost").style.left = ghost.x * 20 + "px";
    ghostTouch();

}
function makeCereza(){
    var randomx = getRandomInt(0, world[0].length);
    var randomy = getRandomInt(0, world.length);

    if (world[randomy][randomx] != 2 && world[randomy][randomx] != 1) {
        world[randomy][randomx] = 3;
        cerezaExists = true;
        console.log("Cereza colocada en :", randomy, randomx);
        displayWorld();
    } else {
        makeCereza();
    }
}
function cereza() {
    var random = getRandomInt(0, 100);
    console.log("Variable random", random, "cereza exists ",cerezaExists);

    if (random >97 && cerezaExists == false) {
       makeCereza();
    }

}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function displayWorld() {
    
    var output = "";
    for (let i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (let j = 0; j < world[i].length; j++) {
            if (world[i][j] == 3) {
                output += "<div class='cereza'></div>";
            }
            if (world[i][j] == 2) {
                output += "<div class='brick'></div>";
            }
            else if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            }
            if (world[i][j] == 0) {
                output += "<div class='empty'></div>";
            }
        }
        output += "</div>";
    }
    document.getElementById("world").innerHTML = output;
    displayScore();
    
}
function displayScore() {
    var output = "<div id='score'>" + score + "</div>";
    document.getElementById("score").innerHTML = output
    
}
function displayLife(){
    var output = "";
    for (let i = 0; i < life; i++) {
        output += "<div class='life'></div>";
    }
    document.getElementById("lifeContainer").innerHTML = output;
}

document.onkeydown = function (e) {

    if (e.keyCode == 40) {
        if ((world[pacman.y + 1][pacman.x] != 2)) {
            pacman.y++;
            document.getElementById("pacman").style.transform = "rotate(90deg)";
        } else {
        }
    }
    if (e.keyCode == 38) {
        if ((world[pacman.y - 1][pacman.x] != 2)) {
            pacman.y--;
            document.getElementById("pacman").style.transform = "rotate(270deg)";
        } else {
        }
    }
    if (e.keyCode == 39) {
        if ((world[pacman.y][pacman.x + 1] != 2)) {
            pacman.x++;
            document.getElementById("pacman").style.transform = "rotate(0deg)";
        } else {
        }

    }
    if (e.keyCode == 37) {
        if (world[pacman.y][pacman.x - 1] != 2) {
            pacman.x--;
            document.getElementById("pacman").style.transform = "rotate(180deg)";
        } else {
        }
    }
    if (world[pacman.y][pacman.x] == 1) {
        coinEat(pacman.y, pacman.x);    
    }
    if (world[pacman.y][pacman.x] == 3) {
        cerezaEat(pacman.y, pacman.x);
    }
    cereza();
    displayPacman();
}
function coinEat(y,x){
    world[y][x] = 0;
    score += 25;
    displayWorld();
}
function cerezaEat(y,x){
    world[y][x] = 0;
    score += 50;
    life++;
    cerezaExists = false;
    displayWorld();

}

displayWorld();
displayPacman();