var canvas;
var map; // 28 x 34

function setup(){
    canvas = createCanvas(1000, 800);
    getMap();

}

function draw(){
    background(0);
}

async function getMap(){
    const json = await fetch('http://localhost:8080/pacmap.json').then(response => response.json());
    console.log(json);
    map = json;
    for(var i = 0; i < 34; i++){
        for(var o = 0; i < 28; i++){
            console.log(json[i][o]);
        }
    }
}
