// var listContainer = document.querySelector("#list-container");
var scoreList = document.querySelector("#score-list");
// var li = document.createElement('li');
var record = JSON.parse(localStorage.getItem("record"));
var span = document.createElement('span');

var flexName = document.createElement('p');
var flexScore = document.createElement('p');
var backButton = document.querySelector("#back-button");
var clearButton = document.querySelector("#clear-button");
var savedList = JSON.parse(localStorage.getItem("savedList"));

function addScore() {
    // document.getElementById("score-list").textContent
    if (scoreList !== null) {            
        var displayName = document.createTextNode(record[0].userName);
        var displayScore = document.createTextNode(record[1].finalScore);
        scoreList.appendChild(span);
        // scoreList.appendChild(li);
    //     li.appendChild(span);
        span.appendChild(flexName);
        span.appendChild(flexScore);
        flexName.appendChild(displayName);
        flexScore.appendChild(displayScore);
        
        localStorage.setItem("savedList", JSON.stringify(scoreList));
    } else {return}
    // localStorage.setItem("savedList", JSON.stringify(scoreList));
    
    console.log(record);
    console.log(scoreList);
    console.log(savedList);

}


function clearStorage() {
    
    localStorage.clear();
    location.reload();
}

addScore();
console.log(savedList);

clearButton.addEventListener("click", clearStorage)