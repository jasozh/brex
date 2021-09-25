const B = new Bump(PIXI);

var canv = document.createElement("canvas");

var DATA = undefined;

// Initialize application
const app = new PIXI.Application({
    view: canv, resizeTo: document.getElementById("game"), backgroundColor: 0
});

app.ticker.maxFPS = 120;

document.getElementById("game").appendChild(app.view)

let map, player;

async function init() {
    DATA = await fetch('/assets/data.json')
        .then(r => r.json());

    map = new Map(app);

    map.load('highrise');

    player = new Player(map, 30, 30, "./assets/player.png");
}

init();



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