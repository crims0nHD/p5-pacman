var canvas;
var counter = 0;

var pacmap; // 28 x 34
var pacmapLoaded = false;
var pacman = 
    {
        x : 270,
        y : 460,
        direction : "up",
        intendedDirection : "up"
    };

function preload(){
    getMap();
}

function setup(){
    canvas = createCanvas(560, 620); //scaling is 20 x 20
}

function draw(){
    if(pacmapLoaded){
        background(0);

        drawMap();
        drawPacman();
        updatePacman();
    }

    updateFramecounter();
}

async function getMap(){
    const json = await fetch('http://localhost:8080/pacmap.json').then(response => response.json());
    pacmap = json;
    pacmapLoaded = true;

}

function drawMap(){
    fill(0,0,255);
    noStroke();
    for(var i = 0; i < 31; i++){
        const stringrow = pacmap[i].toString().split("");
        for(var o = 0; o < 28; o++){
            if(stringrow[o]=="#"){
                rect(o*20, i*20, 20, 20);
            }
        }
    }
}

function drawPacman(){
    fill(252, 211, 3);
    noStroke();
    rect(pacman.x,pacman.y,20,20);
}

function updateFramecounter(){
    if(counter>=60){
        counter=0;
    }
    counter++;
}

function updatePacman(){
    if(counter%2==0){
        switch(pacman.direction){
            case "up":
                pacman.y -= 3;
                break;
            case "down":
                pacman.y += 3;
                break;
            case "left":
                pacman.x -= 3;
                break;
            case "right":
                pacman.x += 3;
                break;      
        }
    }
}

function checkWallcollision(){
    if(pacman.direction != pacman.intendedDirection){
        var pacmanTile = {
            x : calculatenextTile(pacman.x),
            y : calculatenextTile(pacman.y)
        };

        switch(pacman.intendedDirection){
            case "up":
                
        }
    }
}

function calculatenextTile(pos){
    return Math.floor(pos / 20);
}

function keyPressed(){
    switch(keyCode){
        case UP_ARROW:
            pacman.intendedDirection = "up";
            break;
        case DOWN_ARROW:
            pacman.intendedDirection = "down";
            break;
        case LEFT_ARROW:
            pacman.intendedDirection = "left";
            break;
        case RIGHT_ARROW:
            pacman.intendedDirection = "right";
            break;
    }
}