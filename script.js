// javascript info
/* <h5 class="card-title">Rules for the Quiz</h5>
                        <p class="card-text">1. Press start to commence timer</p>
                        <p class="card-text">2. quiz ends by answering all questions or running out of time</p>
                        <p class="card-text">3. when timer reaches zero o all questions answered</p>
                        <p class="rule">4. the quiz will end and present score and player name</p> */
var i = 0;
var score = 0;
var secondsLeft = 60;
var timer = document.querySelector("#time");
var messageDiv = document.querySelector("#message");
var storedScores;
var scoreList = [];
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var answerFour = document.getElementById("answerFour");

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

