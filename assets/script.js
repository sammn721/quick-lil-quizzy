var timerEl = document.querySelector(".timer");
var score = 101;
var timerInterval;
var startScreenEl = document.querySelector("#start-screen");
var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector("#questions");
var buttonContainer = document.querySelector("#button-container")
var endScreenEl = document.querySelector("#end-screen")

// declare question array
// var questions = [
//     {
//         quest: "Question 1",
//         ans: {
//             a: "wrong",
//             b: "wrong",
//             c: "correct",
//             d: "wrong"
//         },
//         correct: "c"
//     },
//     {
//         quest: "Question 2",
//         ans: {
//             a: "wrong",
//             b: "wrong",
//             c: "correct",
//             d: "wrong"
//         },
//         correct: "c"
//     }
// ]

// declare `questionIndex`

// `startGame` function
function startGame() {
    startTimer();
    // hide start screen element
    document.getElementById("start-screen").style.visibility = "hidden";
    document.getElementById("questions").style.visibility = "visible";
}

// create `endGame` function

// initialize timer
function startTimer() {
    timerInterval = setInterval(function() {
    score--;
    timerEl.textContent = "TIME: " + score;

    // if(userChoice == false) {
    //     remainingTime = (score - 10);
    // }

    if(score === 0) {
        clearInterval(timerInterval);
      }

  }, 1000);
}

// create `answerQuestion` function    
    
    // click event on all answer buttons

        // if incorrect subtract from score
    
    // continue to next question `nextQuestion()`

// create `nextQuestion` function

    // access current question from questions[questionIndex]

startButton.addEventListener("click", startGame)