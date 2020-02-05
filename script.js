var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 2, 2, 2, 1, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 2, 2, 2, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 1, 2],
    [2, 1, 1, 1, 2, 2, 2, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
var pacman={
    x: 1,
    y: 1,
}
function displayPacman() {
    document.getElementById("pacman").style.top = pacman.y* 20 + "px";
    document.getElementById("pacman").style.left = pacman.x * 20 + "px";
}

function displayWorld() {
    var output = "";
    for (let i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (let j = 0; j < world[i].length; j++) {
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
}
displayWorld();
displayPacman();
document.onkeydown = function (e) {
    console.log(e.keyCode);
        if (e.keyCode == 40) {
        pacman.y++;
        console.log("test");
        
    }
    if (e.keyCode == 38) {
        pacman.y--;
        console.log("test");
    }
    if (e.keyCode == 39) {
        pacman.x++;
        console.log("test");
    }
    if (e.keyCode == 37) {
        pacman.x--;
        console.log("test");    
     }
    if(world[pacman.y][pacman.x] == 1 ){
        world[pacman.y][pacman.x] = 0;
        
        console.log("POSITION =",pacman.y,pacman.x);
        displayWorld();
    }
    
    displayPacman();
}