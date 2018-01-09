//alert("js.js file is load");
var n=10;
var m=10;
function doKey(e) {
	keynum = window.event ? e.keyCode : e.which;
	console.log("press key is :" + " key code is :" + keynum);
	
	var div=document.getElementById("head");
	
console.log(div);
	/*
	 * left arrow 37 up arrow 38 right arrow 39 down arrow 40
	 * 
	 */
	
	if (keynum == 39) {
		n++;
		div.style.left=n*10+"px";
	}
	if (keynum == 37) {
		n--;
		div.style.left=n*10+"px";
	}
	if (keynum == 40) {
		m++;
		div.style.top=m*10+"px";
	}
	if (keynum == 38) {
		m--;
		div.style.top=m*10+"px";
	}
}
