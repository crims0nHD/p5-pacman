var canvas;

function setup(){
    canvas = createCanvas(1000, 800, "WEBGL");
    getMap();
}

function draw(){
    background(0);
}

function getMap(){
    var responseMap = "m";
    fetch("http://localhost:8080/pacmap.csv").then((response) => {return response.text();});
    console.log(responseMap);
}