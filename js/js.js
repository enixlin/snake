//alert("js.js file is load");

/**
 * 
 * 初始化场影参数
 * 
 */
function initail() {
	// 设置游戏场
	var ground = document.getElementById("ground");
	ground.style.width = "600px";
	ground.style.height = "400px";
	ground.style.background = "white";
	ground.style.border = "1px solid red";
	
	var position={x:100,y:300};
	var nn=new node(position);
	console.log(nn);

}

var m = 200;
var n = 200;

var node = {
	constructor : function(position) {
		node.x = position.x;
		node.y = position.y;
		node.width = 10;
		node.height = 10;
	},
	x : 10,
	y : 10,
	width : 100,
	height : 100,
	color : "red"
}

// 重置游戏场的大小
function setGroundSize(width, height) {
	ground.width = width + "px";
	ground.height = height + "px";
}




function doKey(e) {
	keynum = window.event ? e.keyCode : e.which;
	console.log(" key code is :" + keynum);

	var div = document.getElementById("head");

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
		div.style.left = n + "px";
	}
	if (keynum == 40) {

		m++;
		m = checkborder(m);
		div.style.top = m + "px";
	}
	if (keynum == 38) {

		m--;
		m = checkborder(m);
		div.style.top = m + "px";
	}

	console.log("n is :" + n);
	console.log("m is :" + m);
}

function checkborder(position, width, height) {
	if (n < 0) {
		return 0;
	}
	if (n > 390) {
		return 390;
	}
	return n;
}
