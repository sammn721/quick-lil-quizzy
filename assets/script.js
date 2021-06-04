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
var user = document.querySelector("#user");
var scoreButton = document.querySelector("#score-button");
// var displayName = document.querySelector("#display-name");
// var displayScore = document.querySelector("#display-score");


// declare question array
var questions = [
    {
        quest: "Who is widely considered to be the first existentialist philosopher?",
        ans: {
            a: "Fyodor Dostoevsky",
            b: "Jean-Paul Sartre",
            c: "Søren Kierkegaard",
            d: "Friedrich Nietzsche"
        },
        correct: "c"
    },
    {
        quest: "How many crewmembers are currently in the Straw Hat Pirates?",
        ans: {
            a: "9",
            b: "10",
            c: "11",
            d: "12"
        },
        correct: "b"
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
        quest: "What is the upcoming (September 2021) season number of Survivor?",
        ans: {
            a: "21",
            b: "31",
            c: "41",
            d: "51"
        },
        correct: "c"
    },
    {
        quest: "English is the most widely learned second language spoken in the world. What is the second?",
        ans: {
            a: "Hindustani",
            b: "Arabic",
            c: "Mandarin",
            d: "French"
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
    questionsEl.classList.add("visible");
    nextQuest();
}

// create `endGame` function
function endGame() {
    questionsEl.classList.add("hidden");
    questionsEl.classList.remove("visible");
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

// function renderHighScores() {
//     var userName = localStorage.getItem("user");

//     if (!userName) {
//         return;
//     }

//     displayName.textContent = userName;
//     displayScore.textContent = score
// }


startButton.addEventListener("click", startGame);

// click event on button container to match button element
buttonContainer.addEventListener("click", function(event) {
    
    
    if (event.target.matches("button") && (JSON.stringify(event.target.id) === JSON.stringify(questions[questIndex].correct))) {
        
        nextQuest();
        
    } else if (event.target.matches("button") && (JSON.stringify(event.target.id) !== JSON.stringify(questions[questIndex].correct))) {
        score = score - 15;
        nextQuest();

    }
});

scoreButton.addEventListener("click", function(event) {
    event.preventDefault();

    var userName = user.value;
    // var userScore = score;
    
    // if (userName === "") {
    //     displayMessage("error", "Name cannot be blank.");
    // } else {
    //     displayMessage("success", "You will always be rememebered.");

        localStorage.setItem("user", userName);
        localStorage.setItem("score", score);
        console.log(userName);
        console.log(score);
        window.open("highscores.html", "_self");
    // }
})