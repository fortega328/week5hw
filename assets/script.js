// javascript info
/* <h5 class="card-title">Rules for the Quiz</h5>
                        <p class="card-text">1. Press start to commence timer</p>
                        <p class="card-text">2. quiz ends by answering all questions or running out of time</p>
                        <p class="card-text">3. when timer reaches zero o all questions answered</p>
                        <p class="rule">4. the quiz will end and present score and player name</p> */

var score = 0;
var secondsLeft = 100;
var timer = document.querySelector("#time");
var timeInterval = 1;
var time = 100;
var messageDiv = document.querySelector("#message");
var messagesDiv = document.querySelector("#messages");
var storedScores;
var scoreList = [];
var Q = 0;


function clockTick(){
    timer.textContent = time;
    time--;
    if(time <= 0){
        time = 0;
        clearPage()
    }
}
function buildQuestionCard(){
    var answerBox = document.getElementById("answers");
    answerBox.innerHTML = "";
    messagesDiv.textContent = questionsArray[Q].question,
    questionsArray[Q].choicesArray.forEach(function(choice){
        var button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice)
        button.onclick = evaluateAnswer;
        answerBox.appendChild(button)
        
    })
}
function evaluateAnswer(){
    messageDiv.textContent = "";
    messageDiv.removeAttribute("class", "hide");
    console.log(this.value);
    if(this.value !== questionsArray[Q].answer){
        console.log("wrong");
        time-10;
        messageDiv.textContent = "wrong"
        // need to clear the message of right or wrong
        // messageDiv.textContent = "";
        if(time <= 0){
            time = 0;
            clearPage()
        }
    } else {
        console.log("correct");
        scoreList.push(questionsArray[Q])
        messageDiv.textContent = "correct"
        score++;
        // need to clear the message of right or wrong
        // messageDiv.textContent = "";
        
        
        if(time <= 0){
            time = 0;
            clearPage()
            
        }
        
    }
    setTimeout(function(){
        messageDiv.setAttribute("class", "hide")
    }, 500)
    Q++;
    if(Q === questionsArray.length){
        console.log("end game")
        clearPage()
    } else {
        buildQuestionCard()
    }
    
}


function clearPage(){
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var quizCard = document.getElementById("quiz")
    quizCard.innerHTML = "";
    clearInterval(timeInterval);
    var initials = "CQY";
    var score = time * scoreList.length;

    var highScore = {
        initials,
        score
    }
    highScores.push(highScore)
    console.log(highScores);

    localStorage.setItem("highScores", JSON.stringify(highScores))
    console.log(localStorage)
}
var startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", function(){
    buildQuestionCard();
    timeInterval = setInterval(clockTick, 1000);
    
})


