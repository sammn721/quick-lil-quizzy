var timerEl = document.querySelector(".timer");
var score = 11;
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
}
// initialize timer
function startTimer() {
    timerInterval = setInterval(function() {
    score--;
    timerEl.textContent = "TIME: " + score;

    // if(userChoice == false) {
    //     remainingTime = (remainingTime - 10);
    // }

    if(score === 0) {
        clearInterval(timerInterval);
      }

  }, 1000);
}
// hide start screen element and show first question