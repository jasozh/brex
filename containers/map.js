const NULLIMG = './assets/null.png';

/**
 * Handler class controlling rendering of all game elements.
 */
class Map {

	constructor(a) {
		this._app = a;
		this._container = new PIXI.Container();

		this._app.stage.addChild(this._container);

		this._container.addChild(new PIXI.Container()); // container for background objects
		this._container.addChild(new PIXI.Container()); // container for static objects (stationary on screen)
		this._container.children[0].zIndex = 0;
		this._container.children[1].zIndex = 1;

		this._app.ticker.add(() => {
			const s = Math.max(app.view.width, app.view.height) / 256;

    	this.bobjs.scale.set(s);

    	for (const o of this.sobjs.children) {
    		o.scale.set(s);
    	}
		})

		this.load(NULLIMG); // load null image
	}

	load(src) { // load image as background and set map to this
		this._container.children[0].removeChildren();
		this._container.children[1].removeChildren();
		this._container.children[0].addChild(PIXI.Sprite.from(src));
	}

	get bobjs() { //nonstatic objects
		return this._container.children[0];
	}

	set bobjs(elm) {
		this._container.removeChildAt(0);
		this._container.addChildAt(elm, 0);
	}

	get sobjs() { //return static objects
		return this._container.children[1];
	}

	set sobjs(elm) {
		this._container.removeChildAt(1);
		this._container.addChildAt(elm, 1);
	}

	get container() {
		return this._container
	}

	get width() {
		return this._app.screen.width;
	}

	get height() {
		return this._app.screen.height;
	}

	get app() {
		return this._app;
	}
}