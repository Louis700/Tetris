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

	tryRotateRight() {
		let previsionPiece = this.copy();

		previsionPiece.rotateRight();

		if(previsionPiece.isWellPlaced())
			this.rotateRight();
	}

	tryRotateLeft() {
		let previsionPiece = this.copy();

		previsionPiece.rotateLeft();

		if(previsionPiece.isWellPlaced())
			this.rotateLeft();
	}

	tryStepRight() {
		let previsionPiece = this.copy();

		previsionPiece.stepRight();

		if(previsionPiece.isWellPlaced())
			this.stepRight();
	}

	tryStepLeft() {
		let previsionPiece = this.copy();

		previsionPiece.stepLeft();

		if(previsionPiece.isWellPlaced())
			this.stepLeft();
	}

	tryStepDown() {
		let previsionPiece = this.copy();

		previsionPiece.stepDown();

		if(previsionPiece.isWellPlaced())
			this.stepDown();
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

	stepRight() {
		this.position.add( new Vector(this.gameGrid.squareDimensions.x, 0));
	}

	stepLeft() {
		this.position.subtract( new Vector(this.gameGrid.squareDimensions.x, 0));
	}

	stepDown() {
		this.position.add( new Vector(0, this.gameGrid.squareDimensions.y) );
	}

	isWellPlaced() {
		if(this.gameGrid === null)
			return true;

		if(this.position.x < this.gameGrid.position.x || this.position.y < this.gameGrid.position.y)
			return false;

		if(this.position.x + this.getNumberOfUsedSkinColumns()*this.gameGrid.squareDimensions.x > this.gameGrid.position.x + this.gameGrid.dimensions.x)
			return false;

		if(this.position.y + this.getNumberOfUsedSkinRows()*this.gameGrid.squareDimensions.y > this.gameGrid.position.y + this.gameGrid.dimensions.y)
			return false;

		return true;
	}

	getNumberOfUsedSkinColumns() {
		for(let i = this.skin[0].length - 1; i >= 0; i--) {
			for(let j = 0; j < this.skin.length; j++) {
				if(this.skin[j][i] != 0)
					return i + 1;
			}
		}
		return 0;
	}

	getNumberOfUsedSkinRows() {
		for(let i = this.skin.length - 1; i >= 0; i--) {
			for(let j = 0; j < this.skin[i].length; j++) {
				if(this.skin[i][j] != 0)
					return i + 1;
			}
		}
		return 0;
	}

	copy() {
		let copy = new Piece(this.position.copy(), this.gameGrid);

		copy.skin = [...[ [...this.skin[0]], [...this.skin[1]], [...this.skin[2]]]];

		return copy;
	}
}
