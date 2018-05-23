var colors=[];
var numSquares=6;
var h1= document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var newGame = document.getElementById("newGame");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var squares = document.getElementsByClassName("square");

//Event listener for the squares
for (var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
}

newGame.addEventListener("click",function(){
	colors= getColors(numSquares);
	applyColors(numSquares);
});


easy.addEventListener("click",function(){
	numSquares=3;
	colors= getColors(numSquares);
	hideBox(true);
	applyColors(numSquares);
});

hard.addEventListener("click",function(){
	numSquares=6;
	colors= getColors(numSquares);
	hideBox(false);
	applyColors(numSquares);
});



function getColors(num){
	var arr = [];
	for(var i=0;i<num;i++) {
		arr[i]=randomColors();
	}
	return arr;
}


function hideBox(val){
	var style;
	if (val){
		style="none";
	} else {
		style="block";
	}

	for(var i=3;i<6;i++){
		squares[i].style.display= style;
	}
}

function applyColors(num){
	for(var i=0;i<num;i++) {
		squares[i].style.backgroundColor=colors[i];
	}
}


function randomColors(){
var red = Math.floor(Math.random() * 256);
var green= Math.floor(Math.random() * 256);
var blue= Math.floor(Math.random() * 256);
return "rgb("+red+","+green+","+blue+")";
}

function pickColor(){

}