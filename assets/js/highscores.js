var displayName = document.querySelector(".display-name");
var displayScore = document.querySelector(".display-score");
var userName = localStorage.getItem("user");
var score = localStorage.getItem("finalScore");
// var nameList = [];
// var scoreList = [];


var clearButton = document.querySelector("#clear-button");

function renderHighScores() {
    // var userName = localStorage.getItem("user");
    // var score = localStorage.getItem("finalScore");

    displayName.textContent = userName;
    displayScore.textContent = score;
    // nameList.push(userName);
    // scoreList.push(score);
    // console.log(nameList);
    // console.log(scoreList);
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}

renderHighScores();

clearButton.addEventListener("click", clearStorage)