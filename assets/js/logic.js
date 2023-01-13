// Get Elements
var timerSpan = document.querySelector(".timer");
var container = document.querySelector(".wrapper");
var startBlock = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");

var quizContainer = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var questionsChoices = document.querySelector("#choices");

var endBlock = document.querySelector("#end-screen")

var feedback = document.querySelector("#feedback")

// Timer function
var timeLeft = 75;

function globalTimer() {
  setInterval(function () {
    timeLeft--;
    timerSpan.textContent = timeLeft;
  }, 1000);
}

// Start button function

startBtn.addEventListener("click", function () {
  globalTimer();
});

console.log(questions)

for(var i = 0; questions.lengh; i++){
  var question = questions[i];
  console.log(question)
}

  console.log("test")
