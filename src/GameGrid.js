"use strict";

// squares is a vector that represents the number of squares (width and height)
class GameGrid {
	constructor(position, dimensions, squares) {
		this.position = position;
		this.dimensions = dimensions;
		this.squares = squares;
		this.squareDimensions = new Vector( dimensions.x/squares.x, dimensions.y/squares.y);

		this.fallingPiece = null;
	}

	draw() {
		noFill();
		stroke( new Color(255) );

		grid(this.position, this.squareDimensions, new Vector(0, 0), this.dimensions);

		if(this.fallingPiece !== null)
			this.fallingPiece.draw();
	}

	update() {
		this.fallingPiece.position.add(new Vector(0, this.squareDimensions.y));
	}

	setFallingPiece(piece) {
		piece.position = Vector.add( this.position, new Vector( this.squareDimensions.x*Math.floor(this.squares.x/2 - 1), 0) );

		this.fallingPiece = piece
	}
}
