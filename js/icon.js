document.getElementById("github").onmouseover = function() {githubmouseOver()};
document.getElementById("github").onmouseout = function() {githubmouseOut()};

function githubmouseOver() {
    document.getElementById("github").src = "assets/github2.svg";
}

function githubmouseOut() {
    document.getElementById("github").src = "assets/github.svg";
}