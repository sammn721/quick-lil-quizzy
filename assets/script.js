var timerEl = document.querySelector(".timer");
var score = 100;
var timerInterval;
var startScreenEl = document.querySelector("#start-screen");
var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector("#question-element");
var questionText = document.querySelector("#question-text");
var buttonContainer = document.querySelector("#button-container");
var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");
var endScreenEl = document.querySelector("#end-screen");
var index = -1;
var nameBox = document.querySelector("#name-box")
var yourScore = document.querySelector("#your-score");




// declare question array
var questions = [
    {
        quest: "Question 1",
        ans: {
            a: "wrong",
            b: "wrong",
            c: "right",
            d: "wrong"
        },
        correct: "c"
    },
    {
        quest: "Question 2",
        ans: {
            a: "incorrect",
            b: "incorrect",
            c: "correct",
            d: "incorrect"
        },
        correct: "c"
    },
    {
        quest: "Americans from which of these groups received $4.44 million ($10,000 for each day in captivity) from Congress in 2015?",
        ans: {
            a: "Descendants of slavery victims",
            b: "Former Guantanamo detainees",
            c: "Japanese internment camp survivors",
            d: "Iran hostage crisis survivors"
        },
        correct: "d"
    },
    {
        quest: "question 4",
        ans: {
            a: "wrong",
            b: "right",
            c: "wrong",
            d: "wrong"
        },
        correct: "b"
    },
    {
        quest: "question 5",
        ans: {
            a: "right",
            b: "wrong",
            c: "wrong",
            d: "wrong"
        },
        correct: "a"
    }
]


// `startGame` function
function startGame() {
    startTimer();
    // hide start screen element
    startScreenEl.classList.add("hidden");
    // show question element
    questionsEl.classList.remove("hidden");
    nextQuest();
}

// create `endGame` function
function endGame() {
    questionsEl.classList.add("hidden");
    endScreenEl.classList.remove("hidden");
    yourScore.textContent = "Your final score is " + score + ".";

}

// initialize timer
function startTimer() {
    timerInterval = setInterval(function() {
    score--;
    timerEl.textContent = "TIME: " + score;

    if(score === 0 || index > 4) {
        clearInterval(timerInterval);
      }

  }, 1000);
}

// create `answerQuest` function    ????
// document.getElementById('a').onclick = answerQuest;
// document.getElementById('b').onclick = answerQuest;
// document.getElementById('c').onclick = answerQuest;
// document.getElementById('d').onclick = answerQuest;

// function answerQuest(clicked) {
//     console.log(clicked);
    
    
// }
    // continue to next question `nextQuest()`

// create `nextQuest` function
function nextQuest() {
    index = index + 1;
    if (index > 4) {
        endGame();
    } else {
    questionText.textContent = questions[index].quest;
    buttonA.textContent = questions[index].ans.a;
    buttonB.textContent = questions[index].ans.b;
    buttonC.textContent = questions[index].ans.c;
    buttonD.textContent = questions[index].ans.d;
    
    }
}


startButton.addEventListener("click", startGame)

// click event on button container to match button element
buttonContainer.addEventListener("click", function(event) {
    
    
    if (event.target.matches("button") && (JSON.stringify(event.target.id) === JSON.stringify(questions[index].correct))) {
        
        nextQuest();
        
    } else if (event.target.matches("button") && (JSON.stringify(event.target.id) !== JSON.stringify(questions[index].correct))) {
        score = score - 10;
        nextQuest();

    }
});