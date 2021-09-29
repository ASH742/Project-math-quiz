score=0;
function update_score(){
    score=score+1;
    document.getElementById("score").innerHTML="<h2> score:"+score+"</h2>";
}

function save_score(){
    localStorage.setItem("score",score);
}

function next_page(){
    window.location="https://www.youtube.com";
}