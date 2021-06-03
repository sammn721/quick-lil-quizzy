var displayName = document.querySelector(".display-name");
var displayScore = document.querySelector(".display-score");
var plaque = document.querySelector(".plaque");
var scoreList = [];

function renderHighScores() {
    var userName = localStorage.getItem("user");
    var score = localStorage.getItem("score");

    displayName.textContent = userName;
    displayScore.textContent = score;
    
}
renderHighScores();