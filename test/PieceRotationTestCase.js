"use strict";

class PieceRotationTestCase {
	constructor() {
		this.asserter = new Asserter();
	}

	test() {
		this.testRightRotation();
		this.testLeftRotation();
	}

	testRightRotation() {
		let piece = new Piece( new Vector(100, 100) );
		let expected = [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ];

		piece.skin = [...[ [...expected[0]], [...expected[1]], [...expected[2]] ] ];

		piece.rotateRight();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testRightRotation - clearedSkin");

		this.testRightRotationCorners();
		this.testRightRotationEdges();
	}

	testLeftRotation() {
		let piece = new Piece( new Vector(100, 100) );
		let expected = [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ];

		piece.skin = [...[ [...expected[0]], [...expected[1]], [...expected[2]] ] ];

		piece.rotateLeft();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testLeftRotation - clearedSkin");

		this.testLeftRotationCorners();
		this.testLeftRotationEdges();
	}

	testRightRotationCorners() {
		let piece = new Piece( new Vector(100, 100) );
		let expected = [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ];

		piece.skin = [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ];
		expected = [ [0, 0, 1], [0, 0, 0], [0, 0, 0] ];

		piece.rotateRight();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testRightRotation - topLeft");

		expected = [ [0, 0, 0], [0, 0, 0], [0, 0, 1] ];

		piece.rotateRight();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testRightRotation - topRight");

		expected = [ [0, 0, 0], [0, 0, 0], [1, 0, 0] ];

		piece.rotateRight();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testRightRotation - downRight");

		expected = [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ];

		piece.rotateRight();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testRightRotation - downLeft");
	}

	testRightRotationEdges() {
		let piece = new Piece();
		let expected;

		piece.skin = [ [0, 1, 0], [0, 0, 0], [0, 0, 0] ];
		expected = [ [0, 0, 0], [0, 0, 1], [0, 0, 0] ];

		piece.rotateRight();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testRightRotation - topEdge");

		expected = [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ];

		piece.rotateRight();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testRightRotation - rightEdge");

		expected = [ [0, 0, 0], [1, 0, 0], [0, 0, 0] ];

		piece.rotateRight();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testRightRotation - downEdge");

		expected = [ [0, 1, 0], [0, 0, 0], [0, 0, 0] ];

		piece.rotateRight();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testRightRotation - leftEdge");
	}

	testLeftRotationCorners() {
		let piece = new Piece( new Vector(100, 100) );
		let expected = [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ];

		piece.skin = [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ];
		expected = [ [0, 0, 0], [0, 0, 0], [1, 0, 0] ];

		piece.rotateLeft();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testLeftRotation - topLeft");

		expected = [ [0, 0, 0], [0, 0, 0], [0, 0, 1] ];

		piece.rotateLeft();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testLeftRotation - downLeft");

		expected = [ [0, 0, 1], [0, 0, 0], [0, 0, 0] ];

		piece.rotateLeft();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testLeftRotation - downRight");

		expected = [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ];

		piece.rotateLeft();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testLeftRotation - topRight");
	}

	testLeftRotationEdges() {
		let piece = new Piece();
		let expected;

		piece.skin = [ [0, 1, 0], [0, 0, 0], [0, 0, 0] ];
		expected = [ [0, 0, 0], [1, 0, 0], [0, 0, 0] ];

		piece.rotateLeft();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testLeftRotation - topEdge");

		expected = [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ];

		piece.rotateLeft();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testLeftRotation - leftEdge");

		expected = [ [0, 0, 0], [0, 0, 1], [0, 0, 0] ];

		piece.rotateLeft();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testLeftRotation - downEdge");

		expected = [ [0, 1, 0], [0, 0, 0], [0, 0, 0] ];

		piece.rotateLeft();

		for(let i = 0; i < expected.length; i++)
			this.asserter.assertArraySame(expected[i], piece.skin[i], "testLeftRotation - rightEdge");
	}

}
