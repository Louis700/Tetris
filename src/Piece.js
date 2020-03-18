"use strict";

const squareSide = 50;

class Piece {
	constructor(position) {
		this.position = position;
		this.skin = [ [0, 1, 0],
			      [1, 1, 1],
			      [0, 0, 0] ];
	}

	draw() {
		fill( new Color(150, 52, 255) );

		for(let y = 0; y < this.skin.length; y++) {
			for(let x = 0; x < this.skin[y].length; x++) {
				if(this.skin[y][x])
					rect(this.position.x + x*squareSide, this.position.y + y*squareSide, squareSide, squareSide);
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

