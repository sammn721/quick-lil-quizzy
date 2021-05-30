var timerEl = document.querySelector(".timer");
var remainingTime = 101;
var timerInterval;

function setTimer() {
    timerInterval = setInterval(function() {
    remainingTime--;
    timerEl.textContent = "TIME: " + remainingTime;

    // if(userChoice == false) {
    //     remainingTime = (remainingTime - 10);
    // }

    if(remainingTime === 0) {
        clearInterval(timerInterval);
      }

  }, 1000);
}

var questions = [
    {
        quest: "Commonly used data types DO NOT include:",
        ans: {
            strings,
            booleans,
            alerts,
            numbers
        },
        correct: alerts
    },
    {
        quest: "The condition in an if/else statement is enclosed within ___.",
        ans: {
            
        }
    }
]



setTimer();