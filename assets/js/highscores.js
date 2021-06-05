var displayName = document.querySelector(".display-name");
var displayScore = document.querySelector(".display-score");
var scoreList = document.querySelector("#score-list");
var li = document.createElement('li');
var record = JSON.parse(localStorage.getItem("record"));
var span = document.createElement('span');
var displayName = document.createTextNode(record[0].userName);
var displayScore = document.createTextNode(record[1].finalScore);
var flexName = document.createElement('p');
var flexScore = document.createElement('p');
var backButton = document.querySelector("#back-button");
var clearButton = document.querySelector("#clear-button");

function renderHighScores() {

    scoreList = localStorage.getItem("saveList");
    
    flexName.appendChild(displayName);
    flexScore.appendChild(displayScore);
    span.appendChild(flexName);
    span.appendChild(flexScore);
    li.appendChild(span);
    scoreList.appendChild(li);
    
    // localStorage.setItem("fullList", JSON.stringify(scoreList));
    
    console.log(scoreList);
}

function saveHighScores() {

    localStorage.setItem("saveList", scoreList);
}

function clearStorage() {
    
    localStorage.clear();
    location.reload();
}

renderHighScores();

// backButton.addEventListener("submit", saveHighScores)

clearButton.addEventListener("click", clearStorage)