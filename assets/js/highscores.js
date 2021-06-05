var listContainer = document.querySelector("#list-container");
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
var savedList = JSON.parse(localStorage.getItem("savedList"));

function addScore() {

    // scoreList = localStorage.getItem("scoreList") || [];
    // if (scoreList != []) {
        // scoreList.parentElement.replaceChild(savedList, scoreList);
    // }
    
    scoreList.appendChild(li);
    li.appendChild(span);
    span.appendChild(flexName);
    span.appendChild(flexScore);
    flexName.appendChild(displayName);
    flexScore.appendChild(displayScore);
    
    localStorage.setItem("savedList", JSON.stringify(scoreList));
    console.log(scoreList);
    console.log(listContainer);
    console.log(localStorage.getItem("savedList"));
}

function saveHighScores() {

    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function clearStorage() {
    
    localStorage.clear();
    location.reload();
}

addScore();

// backButton.addEventListener("submit", saveHighScores)

clearButton.addEventListener("click", clearStorage)