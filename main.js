var score=0;
function updatescore(){
    score=score+1;
document.getElementById("points").innerHTML="Score : "+score;
}
function savescore(){
    localStorage.setItem("score",score);

}
function nextpage(){
    window.location="activity_2.html";
}
