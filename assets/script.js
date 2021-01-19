// javascript info
/* <h5 class="card-title">Rules for the Quiz</h5>
                        <p class="card-text">1. Press start to commence timer</p>
                        <p class="card-text">2. quiz ends by answering all questions or running out of time</p>
                        <p class="card-text">3. when timer reaches zero o all questions answered</p>
                        <p class="rule">4. the quiz will end and present score and player name</p> */

var score = 0;
var secondsLeft = 60;
var timer = document.querySelector("#time");
var timeInterval;
var time = 20;
var messageDiv = document.querySelector("#message");
var storedScores;
var scoreList = [];
var Q = 0;


function clockTick(){
    timer.textContent = time;
    time--
    if(time <= 0){
        time = 0;
        clearPage()
    }
}
function buildQuestionCard(){
    var answerBox = document.getElementById("answers");
    answerBox.innerHTML = "";
    messageDiv.textContent = questionsArray[Q].question,
    questionsArray[Q].choicesArray.forEach(function(choice){
        var button = document.createElement("button");
        button.textContent = choice;
        button.setAttribute("value", choice)
        button.onclick = evaluateAnswer;
        answerBox.appendChild(button)
        
    })
}
function evaluateAnswer(){
    console.log(this.value)
    if(this.value !== questionsArray[Q].answer){
        console.log("wrong");
        time -10;
        if(time <= 0){
            time = 0;
            clearPage()
        }
        setInterval(function(){
            messageDiv.textContent = "wrong"
        },2000)
    } else {
        console.log("correct");
        scoreList.push(questionsArray[Q])
        if(time <= 0){
            time = 0;
            clearPage()
        }
        setInterval(function(){
            messageDiv.textContent = "correct"
        },2000)
    }
    Q++;
    if(Q === questionsArray.length){
        console.log("end game")
        clearPage()
    } else {
        buildQuestionCard()
    }
    
}

function clearPage(){
    var quizCard = document.getElementById("quiz")
    quizCard.innerHTML = "";
    clearInterval(timeInterval)
}
var startBtn = document.getElementById("startBtn")
startBtn.addEventListener("click", function(){
    buildQuestionCard();
    timeInterval = setInterval(clockTick, 1000);
    
})



// $(document).ready(function() {
//                         // on click of exit window will close
//                         $("#exitBtn").click(function() {
//                             return;
//                         });

//                         // on click of restart button
//                         $("#restartBtn").click(function(){
//                         // this is where the quiz needs to restart
                            
//                         });

//                         // on click of start button
//                         $("#startBtn").click(function(){
//                         // this is where the music and timer needs to start
//                          // $(".play").trigger("play")

//                         // the questions must be inserted in quiz card 
//                         // points must be awardedd for right answers
//                         // time deducted for incorrect answers
//                         });

//                     })

