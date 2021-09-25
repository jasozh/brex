const NULLIMG = './assets/null.png';

/**
 * Handler class controlling rendering of all game elements.
 */
class Map {
	static app;

	constructor(app) {
		app = app;
		this._container = new PIXI.Container();

		app.stage.addChild(this._container);

		this._container.addChild(PIXI.Sprite.from(NULLIMG)); // background
		this._container.addChild(new PIXI.Container()); // container for objects

		this.load(NULLIMG); // load null image
	}

	load(src) { // load image as background and set map to this
		
		this._container.removeChildAt(0);
		this._container.addChildAt(PIXI.Sprite.from(src), 0);
		this._container.children[0].zIndex = 0;
		this._container.children[1].removeChildren();
	}

	get container() {
		return this._container
	}

	get width() {
		return this._container.width;
	}

	get height() {
		return this._container.height;
	}
}