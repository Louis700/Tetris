"use strict"

let piece, gameGrid;

function setup() {
	piece = new Piece( new Vector(100, 100) );
	gameGrid = new GameGrid( new Vector(0, 0), new Vector(500, 500), new Vector(10, 10))
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );

	gameGrid.draw()
	piece.draw();
}

