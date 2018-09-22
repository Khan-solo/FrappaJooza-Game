var numSquares= 6;
var colors=generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById('reset');
var easyBtn= document.getElementById('easyBtn');
var hardBtn= document.getElementById('hardBtn');

easyBtn.addEventListener("click", function(){
	numSquares=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors= generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0; i<square.length; i++)
	{   
		if (colors[i]) {
		square[i].style.background = colors[i]; 
	}
		else{
			square[i].style.display="none";
		}
	}
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	h1.style.background= "steelblue";
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors= generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent= pickedColor;
	for(var i=0; i<square.length; i++)
	{   
	
		square[i].style.background = colors[i]; 
		square[i].style.display="block";
	}
	});
resetButton.addEventListener("click", function(){
	colors= generateRandomColors(numSquares);
	h1.style.background= "steelblue";
	pickedColor= pickColor();
	resetButton.textContent= "New Colours";
    messageDisplay.textContent= "  ";
	colorDisplay.textContent= pickedColor;

	for (var i = 0; i < square.length; i++) {
		square[i].style.background= colors[i];
	}
});
colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++) 
{
    // Adding initial Colours to the squares.
	square[i].style.background = colors[i];

	square[i].addEventListener("click", function(){

		var clickedColor = this.style.background;

		if (clickedColor === pickedColor) {
			messageDisplay.textContent= "Correct!!";
			resetButton.textContent= "Play Again";
			changeColor(clickedColor);
			h1.style.background= clickedColor;
		}
		else
		{
			this.style.background= "#232323";
			messageDisplay.textContent= "Wrong"
		}
	});
}

function changeColor(color){
	//Loop through all squraes change color to match the given colour
	for (var i = 0; i < square.length; i++) {
		square[i].style.background= color;
	}
}

function pickColor(){
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr= []
        for(var i=0; i < num; i++){
           arr.push(randomColor());
    }
    
    return arr;
}

function randomColor()
{
var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}
 

