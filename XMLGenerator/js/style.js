var bgColor = "";

function showHide(id) {
    var next = document.getElementById(id).nextElementSibling;
    var prev = document.getElementById(id).parentElement;
    var displayVal = window.getComputedStyle(next, null).getPropertyValue("display");
    var currBG = window.getComputedStyle(prev, null).getPropertyValue("background-color");

    if(displayVal=="block") {
        next.style.display = "none";
        prev.style.backgroundColor = "transparent";
    } else {
        next.style.display = "block";
        prev.style.backgroundColor = bgColor;
    }
}

function initialize() {
    bgColor = window.getComputedStyle(document.getElementsByClassName("itemGroups")[0], null).getPropertyValue("background-color");
}