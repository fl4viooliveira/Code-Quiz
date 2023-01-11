console.log("test by logic file")
// Get Elements
var startBtn = document.getElementById("start")
var timerSpan = document.getElementById("time")

// Timer function
var timeLeft = 75;

function globalTimer(){
  
  setInterval(function(){
    timeLeft--;
    timerSpan.textContent = timeLeft;
  }, 1000);

}

// Start button function

startBtn.addEventListener("click", function(){
  globalTimer()
})
