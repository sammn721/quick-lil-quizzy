var timerEl = document.querySelector(".timer");
var score = 100;
var timerInterval;
var startScreenEl = document.querySelector("#start-screen");
var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector("#question-element");
var questionText = document.querySelector("#question-text");
var buttonContainer = document.querySelector("#button-container");
var buttonA = document.querySelector("#buttonA");
var buttonB = document.querySelector("#buttonB");
var buttonC = document.querySelector("#buttonC");
var buttonD = document.querySelector("#buttonD");
var endScreenEl = document.querySelector("#end-screen");

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
    }
]

// declare `index`
var index = -1;
var currentQuestion;

// `startGame` function
function startGame() {
    startTimer();
    // hide start screen element
    startScreenEl.classList.add("hidden");
    // show question element
    questionsEl.classList.remove("hidden");
    nextQuestion();
}

// create `endGame` function

// initialize timer
function startTimer() {
    timerInterval = setInterval(function() {
    score--;
    timerEl.textContent = "TIME: " + score;

    if(score === 0) {
        clearInterval(timerInterval);
      }

  }, 1000);
}

// create `answerQuestion` function    
function answerQuestion() {

}
    // click event on all answer buttons

        // if incorrect subtract from score
    
    // continue to next question `nextQuestion()`

// create `nextQuestion` function
function nextQuestion() {
    index = index + 1;
    questionText.textContent = questions[index].quest;
    buttonA.textContent = questions[index].ans.a;
    buttonB.textContent = questions[index].ans.b;
    buttonC.textContent = questions[index].ans.c;
    buttonD.textContent = questions[index].ans.d;
}


startButton.addEventListener("click", startGame)

buttonContainer.addEventListener("click", function(event) {
    var isButton = event.target;
    // access current question from questions[index]
    if (isButton.matches("button") && isButton.matches("questions[index].correct")) {
        nextQuestion();
    } else if (isButton.matches("button") && !isButton.matches("question[index].correct")) {
        score = score - 10;
        nextQuestion();
    }
})