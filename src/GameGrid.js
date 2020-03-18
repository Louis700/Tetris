"use strict";

// squares is a vector that represents the number of squares (width and height)
class GameGrid {
	constructor(position, dimensions, squares) {
		this.position = position;
		this.dimensions = dimensions;
		this.squares = squares;
		this.squareDimensions = new Vector( dimensions.x/squares.x, dimensions.y/squares.y);
	}

	draw() {
		noFill();
		stroke( new Color(255) );

		grid(this.position, this.squareDimensions, new Vector(0, 0), this.dimensions)
	}
}
