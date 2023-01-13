// Get Elements
var timerSpan = document.querySelector(".timer");
var container = document.querySelector(".wrapper");
var startBlock = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");

var quizContainer = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var questionsChoices = document.querySelector("#choices");

var endBlock = document.querySelector("#end-screen");

var feedback = document.querySelector("#feedback");

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

var quiz = function () {
  var index = 0;
  var question = questions[index];
  questionTitle.textContent = question.question;
  var answers = question.answers;

  for (var key in answers) {
    questionsChoices.innerHTML += `<button>${key}: ${answers[key]}</button>`;
  }
};

quiz();
