// Initialize application
const app = new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x1099bb
})
document.body.appendChild(app.view)

// Render animated box
const container = new PIXI.Container()
app.stage.addChild(container)

container.addChild(PIXI.Sprite.from('assets/test-asset.png'))

// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Add interactive box
const sprite = PIXI.Sprite.from('assets/test-asset.png');

// Set the initial position
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

app.stage.addChild(sprite);

function onClick() {
// Render text box
const textbox = PIXI.Sprite.from('assets/textbox.png')
textbox.x = 50;
textbox.y = 20;
textbox.scale.x = 0.7
textbox.scale.y = 0.7
app.stage.addChild(textbox)

// Render text
style = new PIXI.TextStyle({
    fontFamily: 'Arial',
})
const basicText = new PIXI.Text('Today you woke up. An EMS is outside of Donlon.\nYour mental health has decreased by 1.', style);
basicText.x = 80;
basicText.y = 50;
app.stage.addChild(basicText);
}


// // Render text box
// const textbox = PIXI.Sprite.from('assets/textbox.png')
// textbox.x = 50;
// textbox.y = 20;
// textbox.scale.x = 0.7
// textbox.scale.y = 0.7
// app.stage.addChild(textbox)

// // Render text
// style = new PIXI.TextStyle({
//     fontFamily: 'Arial',
// })
// const basicText = new PIXI.Text('Today you woke up. An EMS is outside of Donlon.\nYour mental health has decreased by 1.', style);
// basicText.x = 80;
// basicText.y = 50;
// app.stage.addChild(basicText);


// Update function
app.ticker.add((delta) => {
    container.rotation -= 0.01 * delta;
    // container.scale.x *= 1.01
    // container.scale.y *= 1.01
})