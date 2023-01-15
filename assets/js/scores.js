var highScores = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");

var scores = [];

// Pull localStorage convert to Arra of Objects and push each Object to scores Array
function getList() {
  if (localStorage.bestScores) {
    var storage = JSON.parse(localStorage.getItem("bestScores"));

    for (var i = 0; i < storage.length; i++) {
      scores.push(storage[i]);
    }
  }
}

// Render a new li for each score
function scoreList() {
  for (var i = 0; i < scores.length; i++) {
    var score = scores[i];

    var li = document.createElement("li");
    li.textContent = `Player: ${score.player} - Score: ${score.score}`;

    highScores.appendChild(li);
  }
}

getList();

// Order scores highest first 
scores.sort(function (a, b) {
  return a.score - b.score;
});
scores.reverse();

scoreList();

// Add clear localStorage and reload page to clear button
clearBtn.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
