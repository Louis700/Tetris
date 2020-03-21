"use strict";

// absoluteDimensions is a vector that represents the dimensions of the grid in pixels
// relativeDimensions is a vector that represents the number of squares (width and height)
class GameGrid {
	constructor(position, absoluteDimensions, relativeDimensions, fallingPiece=null) {
		this.position = position;
		this.absoluteDimensions = absoluteDimensions;
		this.relativeDimensions = relativeDimensions;

		this.fallingPiece = fallingPiece;
	}

	draw() {
		noFill();
		stroke( new Color(255) );

		grid(this.position, this.getSquareDimensions(), new Vector(0, 0), this.absoluteDimensions);

		if(this.fallingPiece !== null)
			this.fallingPiece.draw();
	}

	update() {
		this.fallingPiece.tryStepDown();
	}

	initFallingPiece() {
		this.fallingPiece.position = Vector.add( this.position, new Vector( this.getSquareDimensions().x*Math.floor(this.relativeDimensions.x/2 - 1), 0) );
	}

	getAbsoluteDimensions() {
		return this.absoluteDimensions;
	}

	getRelativeDimensions() {
		return this.relativeDimensions;
	}

	getPosition() {
		return this.position;
	}

	getSquareDimensions() {
		return new Vector( this.absoluteDimensions.x/this.relativeDimensions.x, this.absoluteDimensions.y/this.relativeDimensions.y);
	}

	getFallingPiece() {
		return this.fallingPiece;
	}

	setFallingPiece(piece) {
		this.fallingPiece = piece;
	}
}
