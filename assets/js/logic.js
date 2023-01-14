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
  startBlock.setAttribute("class", "hide");
  quizContainer.setAttribute("class", "show");
});

console.log(questions)

var index = 0;

function quiz() {
  var question = questions[index];
  questionTitle.textContent = question.question;
  var buttons = "";
  var answers = question.answers;
  console.log(Object.keys(answers))

  console.log(question.correctAnswer)


  for (var key in answers) {
    buttons += `<button>${key}. ${answers[key]}</button>`;
    questionsChoices.innerHTML = buttons;
  }
}

questionsChoices.addEventListener("click", function (e) {
  var userAnswer = e.target;
  console.log(userAnswer, userAnswer.matches("button"));
  if (userAnswer.matches("button")) {
    index++;
  }
  console.log(index);
  quiz();
});

quiz();
