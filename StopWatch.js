var ClockAction = function () {
    var currentText = document.getElementById("currentAction").innerHTML;
    if (currentText == "Start"){
        changeToStop();
    }
    else{
        changeToStart();
    }
}

var changeToStop = function () {
    document.getElementById("currentAction").innerHTML = "Stop";
    var actionButton = document.getElementById("actionButton");
    actionButton.style.backgroundColor = "red";
    actionButton.style.borderColor = "red";
}

var changeToStart = function () {
    document.getElementById("currentAction").innerHTML = "Start";
    var actionButton = document.getElementById("actionButton");
    actionButton.style.backgroundColor = "green";
    actionButton.style.borderColor = "green";
}