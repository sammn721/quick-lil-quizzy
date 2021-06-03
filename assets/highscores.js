var displayName = document.querySelector("#display-name");
var displayScore = document.querySelector("#display-score");

function renderHighScores() {
    var userName = localStorage.getItem("user");
    var score = localStorage.getItem("score");

    displayName.textContent = userName;
    displayScore.textContent = score;
}
renderHighScores();