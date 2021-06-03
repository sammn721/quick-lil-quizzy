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
var questIndex = -1;
var yourScore = document.querySelector("#your-score");
var nameBox = document.querySelector("#name-box");
var scoreButton = document.querySelector("#score-button");



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
    yourScore.textContent = "Final Score: " + score;

}

// initialize timer
function startTimer() {
    timerInterval = setInterval(function() {
    score--;
    timerEl.textContent = "TIME: " + score;

    if(score === 0 || questIndex > 4) {
        clearInterval(timerInterval);
        endGame();
      }

  }, 1000);
}

// create `nextQuest` function
function nextQuest() {
    questIndex = questIndex + 1;
    if (questIndex > 4) {
        endGame();
    } else {
    questionText.textContent = questions[questIndex].quest;
    buttonA.textContent = questions[questIndex].ans.a;
    buttonB.textContent = questions[questIndex].ans.b;
    buttonC.textContent = questions[questIndex].ans.c;
    buttonD.textContent = questions[questIndex].ans.d;
    
    }
}


startButton.addEventListener("click", startGame);



// click event on button container to match button element
buttonContainer.addEventListener("click", function(event) {
    
    
    if (event.target.matches("button") && (JSON.stringify(event.target.id) === JSON.stringify(questions[questIndex].correct))) {
        
        nextQuest();
        
    } else if (event.target.matches("button") && (JSON.stringify(event.target.id) !== JSON.stringify(questions[questIndex].correct))) {
        score = score - 10;
        nextQuest();

    }
});

scoreButton.addEventListener("click", )