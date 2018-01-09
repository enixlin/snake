//alert("js.js file is load");
var n = 10;
var m = 10;
function doKey(e) {
	keynum = window.event ? e.keyCode : e.which;
	console.log(" key code is :" + keynum);

	var div = document.getElementById("head");

	//console.log(div);
	/*
	 * left arrow 37 up arrow 38 right arrow 39 down arrow 40
	 * 
	 */

	if (keynum == 39) {

		n++;
		n = checkborder(n);
		div.style.left = n + "px";
	}
	if (keynum == 37) {

		n--;
		n = checkborder(n);
		div.style.left = n+ "px";
	}
	if (keynum == 40) {

		m++;
		m = checkborder(m);
		div.style.top = m  + "px";
	}
	if (keynum == 38) {

		m--;
		m = checkborder(m);
		div.style.top = m  + "px";
	}

	console.log("n is :" + n);
	console.log("m is :" + m);
}

function checkborder(n) {
	if (n < 0) {
		return 0;
	}
	if (n > 390) {
		return 390;
	}
	return n;
}
