console.log("test by logic file")

var timerSpan = document.getElementById("time")

var timeLeft = 75;

function globalTimer(){
  
  var timerInterval = setInterval(function(){
    timeLeft--;
    timerSpan.textContent = timeLeft;
  }, 1000);

}

globalTimer()
