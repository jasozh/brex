const playerMovSpeed = 0.3;

class Player {
	constructor(m, x, y, src) {
		this._map = m;

		this.sprite = PIXI.Sprite.from(src);

		this.sprite.anchor.set(0.5);
		this.sprite.x = this._map.width/2;
		this.sprite.y = this._map.height/2;

		this._map.sobjs.addChild(this.sprite);

		this._map.transform = {
			x:x,
			y:y
		};

		this._map.app.ticker.add((delta)=>{
			const t = {
				x: (keyspressed.d - keyspressed.a) * delta * playerMovSpeed,
				y: (keyspressed.s - keyspressed.w) * delta * playerMovSpeed
			}


			const cSprite = {
				y: this._map.transform.y,
				width: this.sprite.width/this._map.bobjs.scale.x,
				height: this.sprite.height/this._map.bobjs.scale.y
			};

			this._map.move(t.x);
			cSprite.x = this._map.transform.x;

			if (this._map.hitboxes.reduce((i, c)=>(i || Utils.testRect(cSprite, c)), false)) {
				this._map.move(-t.x);
				cSprite.x = this._map.transform.x;
			}


			this._map.move(0, t.y);
			cSprite.y = this._map.transform.y;

			if (this._map.hitboxes.reduce((i, c)=>(i || Utils.testRect(cSprite, c)), false)) {
				this._map.move(0, -t.y);
			}

		})
	}
}