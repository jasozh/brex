var canv = document.createElement("canvas");

// Initialize application
const app = new PIXI.Application({
    view: canv, resizeTo: document.getElementById("game"), backgroundColor: 0xffffff
})

document.getElementById("game").appendChild(app.view)

