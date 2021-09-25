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

		this.hitboxes = [];

		this._app.ticker.add(()=>{this.resize()});

		this.resize();
	}

	resize(m = 256) {
		const s = Math.max(app.view.width, app.view.height) / m;

  	this.bobjs.scale.set(s);

  	for (const o of this.sobjs.children) {
  		o.scale.set(s);
  	}
	}

	load(src) { // load image as background and set map to this
		let toCollider = (c)=>({
			x: c[0],
			y: c[1],
			width: c[2],
			height: c[3]
		})

		this._container.children[0].removeChildren();
		this._container.children[1].removeChildren();
		this._container.children[0].addChild(PIXI.Sprite.from(`./assets/maps/${src}/back.png`));

		this.hitboxes = DATA.maps[src].colliders.map(toCollider);

		const wallW = 100;
		this.hitboxes = [...this.hitboxes, ...[
			[-wallW, -wallW, wallW, this.worldheight+2*wallW],
			[-wallW, -wallW, this.worldwidth+2*wallW, wallW],
			[this.worldwidth, -wallW, wallW, this.worldheight+2*wallW],
			[-wallW, this.worldheight, this.worldwidth+2*wallW, wallW]
		].map(toCollider)]
	}

	move(x = 0, y = 0) {
		let ot = this.transform;
		this.transform = {x: ot.x + x * this.bobjs.scale.x, y: ot.y + y * this.bobjs.scale.y};
	}

	get transform() {
		return {
			x: -this.bobjs.x/this.bobjs.scale.x,
			y: -this.bobjs.y/this.bobjs.scale.y
		}
	}

	set transform(t) {
		t = Object.assign({}, this.transform, t);
		this.bobjs.x = -t.x*this.bobjs.scale.x;
		this.bobjs.y = -t.y*this.bobjs.scale.y;
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

	get worldwidth() {
		return this.bobjs.width/this.bobjs.scale.x;
	}

	get worldheight() {
		return this.bobjs.height/this.bobjs.scale.y;
	}

	get app() {
		return this._app;
	}
}