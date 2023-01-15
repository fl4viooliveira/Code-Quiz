// Get Elements
var timerSpan = document.querySelector(".timer");
var container = document.querySelector(".wrapper");
var startBlock = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");

var quizContainer = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var questionsChoices = document.querySelector("#choices");

var endBlock = document.querySelector("#end-screen");

var finalScore = document.querySelector("#final-score");
var scoreBtn = document.querySelector("#submit");
var initials = document.querySelector("#initials");

var feedback = document.querySelector("#feedback");

// Develop
// var correctSound = new Audio("../../assets/sfx/correct.wav")
// var wrongSound = new Audio("../../assets/sfx/incorrect.wav")

// Deploy
// Add sound variable
var correctSound = new Audio(
  "https://fl4viooliveira.github.io/Code-Quiz/assets/sfx/correct.wav"
);
var wrongSound = new Audio(
  "https://fl4viooliveira.github.io/Code-Quiz/assets/sfx/incorrect.wav"
);

var timeLeft = 75;
var timer;

function winGame() {
  endBlock.setAttribute("class", "show");
  quizContainer.setAttribute("class", "hide");
  feedback.setAttribute("class", "hide");
  score = timeLeft;
  finalScore.textContent = score;
  console.log("Yor score is: " + score);
}

function loseGame() {
  alert("GAME OVER!\nTry again.");
  window.open("https://fl4viooliveira.github.io/Code-Quiz/index.html", "_self");
  // Develop
  // window.open("../../index.html", "_self");
}

// Timer function
function startTimer() {
  timer = setInterval(function () {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      loseGame();
    }
  }, 1000);
}

// Start button
startBtn.addEventListener("click", function () {
  startTimer();
  startBlock.setAttribute("class", "hide");
  quizContainer.setAttribute("class", "show");
  feedback.setAttribute("class", "feedback");
});

var index = 0;
var correctAnswer;

function quiz() {
  var question = questions[index];
  questionTitle.textContent = question.question;
  var buttons = "";
  answers = question.answers;
  correctAnswer = question.correctAnswer;

  for (var key in answers) {
    buttons += `<button>${key}. ${answers[key]}</button>`;
    questionsChoices.innerHTML = buttons;
  }
}

var score;

// Event Target the answers buttons
questionsChoices.addEventListener("click", function (e) {
  var userAnswer = e.target;
  var btnKey = userAnswer.innerText;
  // stract the letter to compare to compare with the correct answers
  var key = btnKey.charAt();

  // Conditions to check the correct and wrong answers
  if (userAnswer.matches("button")) {
    if (index < questions.length - 1 && timeLeft > 0) {
      if (key === correctAnswer) {
        feedback.textContent = "Correct!";
        correctSound.play();
      } else {
        feedback.textContent = "Wrong!";
        wrongSound.play();
        timeLeft -= 20;
      }
      index++;
    } else {
      if (key !== correctAnswer) {
        timeLeft -= 20;
      }
      clearInterval(timer);
      winGame();
    }
    if (timeLeft < 0) {
      loseGame();
    }
  }

  quiz();
});

var playerList = [];

/*
 *The storage function, pull the localStorage,
 *convert from JSON to Object and push to playerList array,
 *The last step is clear the localStorage to not duplicate,
 *when send the array back to localStorage
 */
function storage() {
  if (localStorage.bestScores) {
    var storage = JSON.parse(localStorage.getItem("bestScores"));
    for (var i = 0; i < storage.length; i++) {
      playerList.push(storage[i]);
    }
    localStorage.clear();
  }
}

// Send playerList array as JSON to localStorage
function storePlayers() {
  localStorage.setItem("bestScores", JSON.stringify(playerList));
}

// Function to get the initials
function getInitials() {
  var initName = initials.value.trim();
  if (initName === "") {
    return "ANONIMUS";
  }
  return initName.substring(0, 3).toUpperCase();
}

// Button that add new player and score to the playerList array
scoreBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var playerObj = {
    player: getInitials(),
    score: score,
  };

  playerList.push(playerObj);

  storage();
  storePlayers();

  // Deployed
  window.open(
    "https://fl4viooliveira.github.io/Code-Quiz/highscores.html",
    "_self"
  );

  // Develop
  // window.open("../../highscores.html", "_self");
});
console.log(localStorage.getItem("bestScores"));

quiz();
