"use strict"

let gameGrid;

function setup() {
	gameGrid = new GameGrid( new Vector(canvas.width/2 - 210, 10), new Vector(420, 680), new Vector(8, 13));

	gameGrid.setFallingPiece( new Piece(new Vector(0, 0), gameGrid) );

	setInterval(() => gameGrid.update(), 1000);
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );

	gameGrid.draw();
}

