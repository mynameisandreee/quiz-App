
function app(){
//hides the start page when the button is clicked 

var startButton = document.getElementById("start")
var startPage = document.getElementById("startPage")
var QandApage = document.getElementById("QandAPage")

startButton.addEventListener("click", hideStartPage)

function hideStartPage(){
    startPage.style.display = "none";
    QandApage.style.display = "block";


}
}
//call  the app to when the user is done with the quiz and want to restart
app()