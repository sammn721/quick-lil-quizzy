var displayName = document.querySelector(".display-name");
var displayScore = document.querySelector(".display-score");
// var userName = localStorage.getItem("user");
// var score = localStorage.getItem("finalScore");
var scoreList = document.querySelector("#score-list");
var record = localStorage.getItem("record");
var clearButton = document.querySelector("#clear-button");

function renderHighScores() {

    scoreList.textContent = record;
    // displayName.textContent = userName;
    // displayScore.textContent = score;
    
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}

renderHighScores();
console.log(record);
clearButton.addEventListener("click", clearStorage)