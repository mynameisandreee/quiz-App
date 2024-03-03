// questions and answers storage 

const questions = [
    {
        question: "What does HTML stands for?",
        answers: [
            {text: "Hyper Text Markup Language" , correct: true },
            {text: "High Tech Markup Language" , correct: false },
            {text: "Hyperlinks and Text Markup Language" , correct: false },
            {text: " Hyper Transfer Markup Language" , correct: false },
        ]
    },
    {
        question: "Which of the following is not a JavaScript framework or library?",
        answers: [
            {text: "React" , correct: false },
            {text: "Angular" , correct: false },
            {text: "Django" , correct: true },
            {text: "Vue.js" , correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {text: "Cascading Style Sheets" , correct: true },
            {text: "Computer Style Sheets" , correct: false },
            {text: "Creative Style Sheets" , correct: false },
            {text: "Colorful Style Sheets" , correct: false },
        ]
    },
    {
        question: "Which programming language is used for building Android apps?",
        answers: [
            {text: "Swift" , correct: false },
            {text: "Java" , correct: true },
            {text: "Python" , correct: false },
            {text: "C#" , correct: false },
        ]
    },
    {
        question: "What does SQL stand for?",
        answers: [
            {text: "Stylish Query Language" , correct: false },
            {text: "Script Query Language" , correct: false },
            {text: "Simple Query Language" , correct: false },
            {text: "Structured Query Language" , correct: true },
        ]
    },

]

// add variables of questions element and answers 
const questionEl = document.getElementById("questions")
const answerButton = document.getElementById("answer-btn")

//track of the current question 
let currentQuestionIndex = 0
//declare the score
let score = 0

//function that starts the quiz 
function startQuiz(){
    currentQuestionIndex = 0 //set the question to the question 1 
    score = 0  // set the score to 0 at the beginning 
    showQuestion() // function that shows the questions 
}
// this function is called by the startQuiz function. 
// when the this function gets the question from the array and shows in the program 
function showQuestion(){
    resetState(); // reset the state everytime user selects an answer so the next question and asnwer can be displayed    
    let currentQuestion = questions[currentQuestionIndex] // stores the current question using the current Q index 
    let questionNo = currentQuestionIndex + 1  // stores the question number 
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question // displayed the question number and question on the html with the ID of questions 
    //the following code displays the answer in to the created buttons and calls the selectanswer function 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButton.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
    
}

// this function resets the state: meaning that it clears the question and answer once the user move on to the next question 
function resetState(){
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}
// this is the function that access weather the answer is correct or wrong . if the user selects the correct answer the Time is stored in the scored  
//and if the user selects the wrong answer. it deducts -10 to the time and stores it in the score variable 
function selectAnswer(e){
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correct === "true"
    if(isCorrect){
        
        score = startingTime
    }else{
        
        startingTime = startingTime - 10
        score = startingTime
    }

   
}

let isScoreShown = false;
// this funciton 

function showScore(){
    resetState();
    questionEl.innerHTML = `your score is ${score}`
    timeEl.style.display = "none"
    // create Restart Quiz button
    const resetButtonContainer = document.querySelector(".app")
    const resetButton = document.createElement("button")
    resetButton.classList.add("restartBtn"); // Add CSS class if needed
    resetButton.textContent = "Restart Quiz"
    resetButtonContainer.appendChild(resetButton)
    resetButton.addEventListener("click", resetQuiz)
    if (!isScoreShown) {
        createInputBox();
        isScoreShown = true; // Set the flag to true to indicate that the score is shown
    }

}

function resetQuiz() {
    // Reset question index and score
    currentQuestionIndex = 0;
    score = 0;
    startingTime = 101
    // Clear any displayed score or reset button
    questionEl.innerHTML = '';
    timeEl.style.display = "block"; // Display time element
    const resetButton = document.querySelector(".restartBtn");
    if (resetButton) {
        resetButton.remove(); // Remove the reset button if it exists
    }

    // Restart the quiz
    startQuiz();
}


function showResetBtn(){
    var resetBtn = document.getElementById("restartBtn")  
        resetBtn.style.display = "block"
}


function handleAnswerButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        
        showScore()
        showResetBtn()
        
    }
}

answerButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleAnswerButton()
    }else{
        startQuiz()
    }
})

//------------TIME 
var timeEl = document.querySelector(".time")
var startingTime = 100


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        startingTime--;
        timeEl.textContent = "Time: " + startingTime;
        if (startingTime === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timeEl.textContent = "Game Over";
            hideQuestionsAndAnswers();
            showRestartButton();
        }
    }, 1000);

}



function showRestartButton() {
    // Create "Game Over" message
    var gameOverMessage = document.createElement("h2");
    gameOverMessage.textContent = "Game Over";

    // Get the container for the .app class
    var appContainer = document.querySelector(".app");

    // Insert "Game Over" message before the restart button
    appContainer.insertBefore(gameOverMessage, document.querySelector(".restartBtn"));
}

startQuiz()
function app(){
//hides the start page when the button is clicked 
var startButton = document.getElementById("start")
var startPage = document.getElementById("startPage")
var QandApage = document.getElementById("QandAPage")

startButton.addEventListener("click", hideStartPage)

function hideStartPage(){
    startPage.style.display = "none";
    QandApage.style.display = "block";
    setTime()
}


}
//call  the app to when the user is done with the quiz and want to restart
app()

//crete input box to get name 
function createInputBox() {
    // Create input element
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Enter Your Name");
    input.setAttribute("class", "player-name-input");

    // Create submit button element
    var submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.setAttribute("class", "submitBtn")

    // Get the container for the .app class
    var appContainer = document.querySelector(".app");

    // Append the input element and submit button to the .app container
    appContainer.appendChild(input);
    appContainer.appendChild(submitButton);

    // Add event listener to submit button
    submitButton.addEventListener("click", function() {
        // Get the current score
        var score = getCurrentScore();

        // Capture the player's name from the input field
        var playerName = input.value;

        // Concatenate the player's name and score with a separator
        var playerData = playerName + ":" + score;

        // Retrieve existing leaderboard data from localStorage or initialize an empty string if there's no existing data
        var leaderboardData = localStorage.getItem("leaderboard") || "";

        // Append the new player data to the existing leaderboard data
        leaderboardData += (leaderboardData ? "," : "") + playerData;

        // Store the updated leaderboard data in localStorage
        localStorage.setItem("leaderboard", leaderboardData);

        // Update the leaderboard immediately
        updateLeaderboard();

        // Display a confirmation message or perform other actions as needed
        console.log("Player data saved to localStorage:", playerData);
        
    });
}

// Function to update the leaderboard immediately after submitting a new entry
function updateLeaderboard() {
    // Generate leaderboard HTML
    var leaderboardHTML = generateLeaderboardHTML();

    // Get the leaderboard container
    var leaderboardContainer = document.getElementById("leaderboardContainer");

    // Update the leaderboard container with the generated HTML
    leaderboardContainer.innerHTML = leaderboardHTML;
}



function getCurrentScore() {
    return score;
}

//view score 
// Add event listener to the viewScores element
// Function to generate the leaderboard HTML
// Function to generate the leaderboard HTML
function generateLeaderboardHTML() {
    // Retrieve leaderboard data from localStorage
    var leaderboardData = localStorage.getItem("leaderboard");

    // Check if there is any leaderboard data available
    if (leaderboardData) {
        // Parse leaderboard data
        var leaderboardEntries = leaderboardData.split(",");

        // Sort leaderboard entries by score (assuming higher score is better)
        leaderboardEntries.sort(function(a, b) {
            var scoreA = parseInt(a.split(":")[1]);
            var scoreB = parseInt(b.split(":")[1]);
            return scoreB - scoreA;
        });

        // Create a string to hold the HTML for the leaderboard
        var leaderboardHTML = "<h2>Leaderboard</h2><ol>";

        // Loop through leaderboard entries and add them to the HTML string
        leaderboardEntries.forEach(function(entry, index) {
            var playerName = entry.split(":")[0];
            var score = entry.split(":")[1];
            leaderboardHTML += "<li>" + playerName + " - Score: " + score + "</li>";
        });

        // Close the ordered list tag
        leaderboardHTML += "</ol>";

        // Return the generated HTML
        return leaderboardHTML;
    } else {
        // If no leaderboard data is available, return a message
        return "<p>No leaderboard data available.</p>";
    }
}

// Function to toggle the visibility of the leaderboard
function toggleLeaderboard() {
    var leaderboardContainer = document.getElementById("leaderboardContainer");
    var isLeaderboardVisible = leaderboardContainer.style.display !== "none";
    if (isLeaderboardVisible) {
        // Hide the leaderboard
        leaderboardContainer.style.display = "none";
    } else {
        // Show the leaderboard
        leaderboardContainer.innerHTML = generateLeaderboardHTML();
        leaderboardContainer.style.display = "block";
    }
}

// Add event listener to the viewScores element
document.getElementById("viewScores").addEventListener("click", function() {
    // Toggle the visibility of the leaderboard
    toggleLeaderboard();
});

// Function to reset the leaderboard
function resetLeaderboard() {
    localStorage.removeItem("leaderboard");
    updateLeaderboard(); // Update the leaderboard UI
}

// Add event listener to the resetLeaderboard button
document.getElementById("resetLeaderboard").addEventListener("click", resetLeaderboard);


function showRestartButton() {
    // Create "Game Over" message
    var gameOverMessage = document.createElement("h2");
    gameOverMessage.textContent = "Game Over";

    // Get the container for the .app class
    var appContainer = document.querySelector(".app");

    // Insert "Game Over" message before the restart button
    appContainer.insertBefore(gameOverMessage, document.querySelector(".restartBtn"));
}
