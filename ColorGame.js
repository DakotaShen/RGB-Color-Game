var colors=generateSquareColors(9);         

var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("showColor");
var showClickReminder=document.querySelector("#message");
//var headColor=document.querySelector("#headColor");
//var headColor=document.querySelector("h1");
var renewGame=document.querySelector("#renewGame");
var headChange=document.getElementById("headChange");
var mode=document.querySelectorAll(".mode");

var colorSelected=generateColor(9);
var numSquares=9;
var num2=colors.length;

 renewGame.addEventListener("click", function(){
    renewGame.textContent="NEW GAME";
    showClickReminder.textContent="";
    headChange.style.background="rgb(255, 230, 230)";
 	colors=generateSquareColors(numSquares);
 	colorSelected=generateColor(num2);
 	colorDisplay.textContent=colorSelected;
    for(var i=0; i<squares.length; i++){
    squares[i].style.background=colors[i];
    }
 });

 mode[2].classList.add("modeSelected");

 for(var i=0; i<mode.length; i++){
    mode[i].addEventListener("click", function(){
      headChange.style.background="rgb(255, 230, 230)";
      //alert("cd");
      //mode[0].classList.remove("modeSelected");
      //mode[1].classList.remove("modeSelected");
      //mode[2].classList.remove("modeSelected");
      this.classList.add("modeSelected");
      for(var j=0; j<mode.length; j++){
        if(mode[j].textContent!==this.textContent&&mode[j].classList[1]){
           mode[j].classList.remove("modeSelected"); 
        }
       }
      if(this.textContent==="Easy"){
        numSquares=3;
        num2=3;
        difficulty();
       }
       else if(this.textContent==="Medium"){
         numSquares=6;
         num2=6;
         difficulty();
       }
       else if(this.textContent==="Hard"){
         numSquares=9;
         num2=9;
         difficulty();
       }
    })
}

 colorDisplay.textContent=colorSelected;


for(var i=0; i<squares.length; i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.background;
		//alert(clickedColor+colorSelected);
		if(clickedColor===colorSelected){
		   showClickReminder.textContent="You Got It!";
           showClickReminder.style.color=clickedColor;
		   changeColor(clickedColor);
		   headChange.style.background=clickedColor;
           renewGame.textContent="Play Again?";
	    }else{
	    	this.style.background="#1a0000";
	    	showClickReminder.textContent="Try Again!";
            showClickReminder.style.color="black";

	    }
	})
}

function changeColor(color){
  for(var i=0; i<squares.length; i++){
	squares[i].style.background=color;
   }
 }

 function generateColor(num2){
 	return colors[Math.floor(Math.random()*num2)];
 }

 function generateOneSquareColor(){
 	var red=Math.floor((Math.random()*256));
 	var green=Math.floor((Math.random()*256));
 	var blue=Math.floor((Math.random()*256));
 	//var rgbName=rgb(red, green, blue)
 	return "rgb("+red+", "+green+", "+blue+")";
 }

 function generateSquareColors(num){
 	var color=[];
 	for(var i=0; i<num; i++){
 		//color[i]=generateOneSquareColor();
 		color.push(generateOneSquareColor());
 	}
 	return color;
 }

 function difficulty(){
    colors=generateSquareColors(numSquares);
    colorSelected=generateColor(num2);
    colorDisplay.textContent=colorSelected;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
            squares[i].style.display="block";
        }else{
            squares[i].style.display="none";
        }
    }   
}



/*var colors=["rgb(255,0,0)",
            "rgb(0,255,0)",
            "rgb(0,0,255)",
            "rgb(255,0,0)",
            "rgb(255,0,0)",
            "rgb(255,0,0)",
            "rgb(255,0,0)",
            "rgb(255,0,0)",
            "rgb(255,0,0)"]


var square=document.querySelectorAll(".square")

for(var i=0; i<square.length; i++){
	square[i].style.background=colors[i];
}*/
