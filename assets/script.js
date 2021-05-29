var timerEl = document.querySelector(".timer");
var remainingTime = 100;

function setTimer() {
  var timerInterval = setInterval(function() {
    remainingTime--;
    timerEl.textContent = "TIME: " + remainingTime;

    if(remainingTime === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

setTimer();