"use strict";

class Piece {
	constructor(position, gameGrid=null) {
		this.position = position;
		this.gameGrid = gameGrid;

		this.skin = [ [0, 1, 0],
			      [1, 1, 1],
			      [0, 0, 0] ];
	}

	draw() {
		fill( new Color(150, 52, 255) );

		for(let y = 0; y < this.skin.length; y++) {
			for(let x = 0; x < this.skin[y].length; x++) {
				if(this.skin[y][x] == 1) {
					let squareDimensions = new Vector(50, 50);

					if(this.gameGrid !== null)
						squareDimensions = this.gameGrid.squareDimensions;

					rect(this.position.x + x*squareDimensions.x, this.position.y + y*squareDimensions.y, squareDimensions.x, squareDimensions.y);
				}
			}
		}
	}

	rotateRight() {
		let tmp  = this.skin[2][0];
		this.skin[2][0] = this.skin[2][2];
		this.skin[2][2] = this.skin[0][2];
		this.skin[0][2] = this.skin[0][0];
		this.skin[0][0] = tmp;

		tmp = this.skin[1][0];
		this.skin[1][0] = this.skin[2][1];
		this.skin[2][1] = this.skin[1][2];
		this.skin[1][2] = this.skin[0][1];
		this.skin[0][1] = tmp;
	}

	rotateLeft() {
		let tmp = this.skin[0][2];
		this.skin[0][2] = this.skin[2][2];
		this.skin[2][2] = this.skin[2][0];
		this.skin[2][0] = this.skin[0][0];
		this.skin[0][0] = tmp; 

		tmp = this.skin[1][2];
		this.skin[1][2] = this.skin[2][1];
		this.skin[2][1] = this.skin[1][0];
		this.skin[1][0] = this.skin[0][1];
		this.skin[0][1] = tmp;
	}
}

