var dispLayout;
var canvas;

function layout(sections){
	this.sec = {};
	this.secNames = [];
	for (var i = 0; i < sections.length; i++) {
		var canW = canvas.width;
		var canH = canvas.height;
		var curSec = sections[i];
		var xPos = curSec.rangex[0];
		xPos *= canW;
		var yPos = curSec.rangey[0];
		yPos *= canH;
		var width = curSec.rangex[1] - curSec.rangex[0]
		width *= canW;
		var height = curSec.rangey[1] - curSec.rangey[0]
		height *= canH;
		this.secNames.push(curSec.name);
		var curItem = new paper.Rectangle(xPos,yPos,width,height);
		var curPath = new paper.Path.Rectangle(curItem);
		curPath.strokeColor = "#cccccc";
		curPath.strokeWidth = 5;
		this.sec[curSec.name] = {};
		this.sec[curSec.name].item = curItem;
		this.sec[curSec.name].path = curPath;
	}
}

function setup(){
	canvas = document.getElementById("mainCanvas");
	paper.setup(canvas);

}

function draw(){
	paper.view.draw();
}

function instLayout(){
	dispLayout = new layout([
		{
			name:"main",
			rangex:[0,0.6],
			rangey:[0,0.9]
		},
		{
			name:"history",
			rangex:[0.6,0.75],
			rangey:[0,0.6]
		},
		{
			name:"queue",
			rangex:[0.75,1],
			rangey:[0,0.6]
		},
		{
			name:"current",
			rangex:[0.6,1],
			rangey:[0.6,0.9]
		},
		{
			name:"text",
			rangex:[0,1],
			rangey:[0.9,1]
		}
	]);
}
