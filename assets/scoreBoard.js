var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
function sortScores(){
    highScores.sort(function(a,b){
        return b.score-a.score})
        console.log(highScores)


        highScores.forEach(score => {
            var li = document.createElement("li");
            li.textContent = score.initials + " " + score.score;
            var highScoreList = document.getElementById("highScores")
            highScoreList.appendChild(li)
        });
}
document.getElementById("clear-highscores").addEventListener("click", function(){
    localStorage.clear();
    console.log(localStorage)
})
sortScores();