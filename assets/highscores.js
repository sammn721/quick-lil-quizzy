var displayName = document.querySelector(".display-name");
var displayScore = document.querySelector(".display-score");
var plaque = document.querySelector(".plaque");

var nameList = [];
var scoreList = [];

function renderHighScores() {
    var userName = localStorage.getItem("user");
    var score = localStorage.getItem("score");

    displayName.textContent = userName;
    displayScore.textContent = score;
    nameList.push(userName);
    scoreList.push(score);
    console.log(nameList);
    console.log(scoreList);
}
renderHighScores();