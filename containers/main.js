var canv = document.createElement("canvas");

//get DPI
let dpi = window.devicePixelRatio;//get canvas

function fix_dpi() {
    //get CSS height
    //the + prefix casts it to an integer
    //the slice method gets rid of "px"
    let style_height = +getComputedStyle(canv).getPropertyValue("height").slice(0, -2);//get CSS width
    let style_width = +getComputedStyle(canv).getPropertyValue("width").slice(0, -2);//scale the canv

    canv.setAttribute('height', style_height * dpi);
    canv.setAttribute('width', style_width * dpi);
}

// Initialize application
const app = new PIXI.Application({
    view: canv, resizeTo: document.getElementById("game"), backgroundColor: 0
});

app.ticker.maxFPS = 120;
app.ticker.add(()=>{
    fix_dpi();
})


document.getElementById("game").appendChild(app.view)

const map = new Map(app);

map.load('./assets/maps/highrise/back.png')
const player = new Player(map, "./assets/player.png");

var keyspressed = {};

for (let i = 97; i < 97+26; i++) {
    keyspressed[String.fromCharCode(i)] = false;
}

document.getElementById("game").addEventListener('keydown', (e) => {
    keyspressed[e.key] = true;
});

document.getElementById("game").addEventListener('keyup', (e) => {
    keyspressed[e.key] = false;
});