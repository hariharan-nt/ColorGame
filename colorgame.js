var colors=[];
var clickedColor;
var numSquares=6;
var h1= document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var newGame = document.getElementById("newGame");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var squares = document.getElementsByClassName("square");
var body= document.querySelector("body");

/* Inital function that is invoked*/
init();

function init() {

	for (var i=0;i<squares.length;i++){

		squares[i].addEventListener("click", function(){
			console.log(this.style.backgroundColor);
			clickedColor = this.style.backgroundColor;

			if ( clickedColor === pickedColor )
			{	
				transform(clickedColor);
			}
			else {
				console.log("wrong" );
				this.style.backgroundColor= "#232323";
				message.textContent="Try again :)";
			}
		});
	}

	/*Value intialization*/
	reset();

	/*Event Listeners */
	newGame.addEventListener("click",reset);

	easy.addEventListener("click",function(){
		numSquares=3;
		reset();
		this.classList.add("selected"); 
		hard.classList.remove("selected");
		hideBox(true);
	});

	hard.addEventListener("click",function(){
		numSquares=6;
		reset(); 
		this.classList.add("selected");
		easy.classList.remove("selected");
		hideBox(false);
	});
}



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
return "rgb("+red+", "+green+", "+blue+")";
}

function pickColor(num){
	var temp = Math.floor(Math.random() * num);
	return temp;
}


function transform(clickedColor){
	console.log("Gotcha");
	message.textContent="Correct !! :)";
	newGame.textContent="Play Again ?";
	h1.style.backgroundColor=clickedColor;
	for(var i=0;i<numSquares;i++){
		squares[i].style.backgroundColor=clickedColor;
	}
}

function reset(){
	message.textContent="";
	newGame.textContent="New Colors";
	h1.style.backgroundColor="#232323";
	colors= getColors(numSquares);
	applyColors(numSquares);
	pickedColor = colors[pickColor(numSquares)];
	colorDisplay.textContent=pickedColor;
}
