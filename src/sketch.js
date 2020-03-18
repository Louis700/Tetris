"use strict"

let piece;

function setup() {
	piece = new Piece( new Vector(100, 100) );
}

function loop() {
	background( new Color(200, 100, 10, 1, ColorType.HSL) );
	piece.draw();
}

