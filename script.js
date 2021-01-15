// javascript info
/* <h5 class="card-title">Rules for the Quiz</h5>
                        <p class="card-text">1. Press start to commence timer</p>
                        <p class="card-text">2. quiz ends by answering all questions or running out of time</p>
                        <p class="card-text">3. when timer reaches zero o all questions answered</p>
                        <p class="rule">4. the quiz will end and present score and player name</p> */


// question array
let questionsArray =[
    "commonly used data types DO NOT include",
    "the condition in an if/else statement is enclosed within ____.",
    "arrays in javascript can be used to store ___.",
    "string values must be enclosed within ___ when being assigned to variables",
    "a very useful tool used during development and debugging for printing content to the debugger is:",
]
// answers array
let answersArray = [
    "strings", 
    "booleans",
    "numbers",
    "quotes",
    "curly brackets",
    "all of the above"
]
$(document).ready(function() {
                        // on click of exit window will close
                        $("#exitBtn").click(function() {
                            return;
                        });

                        // on click of restart button
                        $("#restartBtn").click(function(){
                        // this is where the quiz needs to restart
                            
                        });

                        // on click of start button
                        $("#startBtn").click(function(){
                        // this is where the music and timer needs to start
                         // $(".play").trigger("play")

                        // the questions must be inserted in quiz card 
                        // points must be awardedd for right answers
                        // time deducted for incorrect answers
                        });

                    })

