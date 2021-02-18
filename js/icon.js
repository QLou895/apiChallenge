document.querySelector("github").onmouseover = function() {leftmouseOver()};
document.querySelector("github").onmouseout = function() {leftmouseOut()};

function leftmouseOver() {
    document.querySelector("github").src = "assets/github2.svg";
}

function leftmouseOut() {
    document.querySelector("github").src = "assets/github.svg";
}