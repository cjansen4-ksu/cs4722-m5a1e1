/*
 *	CS 4722
 *	From Module 5, Assignment 1, Exercise 1
 */

"use strict";

// Code here...

window.onload = function init() {
	// Code here...

	//
	// EVENT LISTENERS
	//

	// The element IDs will probably be different depending on your HTML code.

	document.getElementById("perspective").onclick = function (event) {
		isPerspective = true;
		document.getElementById("perspective").style.background = "#bebfba";
		document.getElementById("orthographic").style.background = "#FFF";
	};

	document.getElementById("orthographic").onclick = function (event) {
		isPerspective = false;
		document.getElementById("perspective").style.background = "#FFF";
		document.getElementById("orthographic").style.background = "#bebfba";
	};

	document.getElementById("xLeft").onclick = function () {
		xAngle += 0.1;
		document.getElementById("xAngTxt").innerText =
			"(" + Math.round(xAngle * 100) / 100 + ")";
	};

	document.getElementById("xRight").onclick = function () {
		xAngle -= 0.1;
		document.getElementById("xAngTxt").innerText =
			"(" + Math.round(xAngle * 100) / 100 + ")";
	};

	document.getElementById("yPos").oninput = function (event) {
		yPos = Number(event.target.value);
		document.getElementById("yPosTxt").innerText = "(" + yPos + ")";
	};

	document.getElementById("fovySlider").oninput = function (event) {
		fovy = Number(event.target.value);
		document.getElementById("fovyTxt").innerText = "(" + fovy + ")";
	};

	document.getElementById("nearSlider").oninput = function (event) {
		near = Number(event.target.value);
		document.getElementById("nearTxt").innerText = "(" + near + ")";
	};

	document.getElementById("farSlider").oninput = function (event) {
		far = Number(event.target.value);
		document.getElementById("farTxt").innerText = "(" + far + ")";
	};

	document.getElementById("lrSlider").oninput = function (event) {
		right = Number(event.target.value);
		left = Number(event.target.value) * -1;
		document.getElementById("lrTxt").innerText = "(" + right + ")";
	};

	document.getElementById("tbSlider").oninput = function (event) {
		yTop = Number(event.target.value);
		bottom = Number(event.target.value) * -1;
		document.getElementById("tbTxt").innerText = "(" + yTop + ")";
	};

	document.getElementById("ratioSlider").oninput = function (event) {
		ratio = Number(event.target.value);
		document.getElementById("ratioTxt").innerText = "(" + ratio + ")";
	};

	// This is the keydown handler
	document.addEventListener(
		"keydown",
		function (event) {
			// Left Arrow
			if (event.key == "ArrowLeft") {
				xAngle += 0.1;
				document.getElementById("xAngTxt").innerText =
					"(" + Math.round(xAngle * 100) / 100 + ")";
			}
			// Right Arrow
			if (event.key == "ArrowRight") {
				xAngle -= 0.1;
				document.getElementById("xAngTxt").innerText =
					"(" + Math.round(xAngle * 100) / 100 + ")";
			}
			// Up Arrow
			if (event.key == "ArrowUp") {
				if (isPerspective) {
					if (fovy > 0) {
						fovy *= 0.9;
						document.getElementById("fovyTxt").innerText =
							"(" + fovy + ")";
					}
				} else {
					if (right > 0) {
						right *= 0.9;
						left = right * -1;
						document.getElementById("lrTxt").innerText =
							"(" + right + ")";

						yTop *= 0.9;
						bottom = yTop * -1;
						document.getElementById("tbTxt").innerText =
							"(" + yTop + ")";
					}
				}
			}
			// Down Arrow
			if (event.key == "ArrowDown") {
				if (isPerspective) {
					if (fovy < 180) {
						fovy /= 0.9;
						document.getElementById("fovyTxt").innerText =
							"(" + fovy + ")";
					}
				} else {
					if (right < 10) {
						right /= 0.9;
						left = right * -1;
						document.getElementById("lrTxt").innerText =
							"(" + right + ")";

						yTop /= 0.9;
						bottom = yTop * -1;
						document.getElementById("tbTxt").innerText =
							"(" + yTop + ")";
					}
				}
			}
		},
		// Don't forget this
		false
	);
};

// Other functions below here...
