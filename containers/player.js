const playerMovSpeed = 10;

class Player {
	constructor(m, src) {
		this._map = m;

		this.sprite = PIXI.Sprite.from(src);

		this.sprite.anchor.set(0.5);
		this.sprite.x = this._map.width/2;
		this.sprite.y = this._map.height/2;

		this._map.sobjs.addChild(this.sprite);

		this._map.app.ticker.add((delta)=>{
			this._map.bobjs.y += (keyspressed.w - keyspressed.s) * delta * playerMovSpeed;
			this._map.bobjs.x += (keyspressed.a - keyspressed.d) * delta * playerMovSpeed;
		})
	}
}