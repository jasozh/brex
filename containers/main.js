var canv = document.createElement("canvas");

// Initialize application
const app = new PIXI.Application({
    view: canv, resizeTo: document.getElementById("game"), backgroundColor: 0xffffff
})


app.ticker.maxFPS = 120;
app.ticker.add(()=>{
    app.stage.scale.set(Math.max(app.view.width, app.view.height) / 128);
});

document.getElementById("game").appendChild(app.view)

const map = new Map(app);

map.load('./assets/maps/highrise/back.png')