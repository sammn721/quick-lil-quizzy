var timerEl = document.querySelector(".timer");
var startButton = document.querySelector("#start-button")
var score = 101;
var timerInterval;

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


// `startGame` function
function startGame() {
    startTimer();
    // hide start screen element
}

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