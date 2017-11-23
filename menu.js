var mainScreen = document.getElementById("mainMenu");
var loseScreen =document.getElementById("loseMenu");
loseScreen.style.display = "none";
var scoreTable = document.getElementById("score");

var startButton = document.getElementById("startButton");
var restartButton  = document.getElementById("restartButton");

startButton.onclick = function(){
   mainScreen.style.display = "none";
   startGame();
    console.log(interval);
}


restartButton.onclick = function(){
   loseScreen.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   startGame();
}
