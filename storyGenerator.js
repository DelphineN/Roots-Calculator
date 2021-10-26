function generateStory(form) {
    document.getElementById("resultPage").style.display = "block";
    document.getElementById("frontPage").style.display = "none";

    var story = document.getElementById("paragraph");
    var size = story.childElementCount;

    for (var i = 0; i < size; i++) {
        var word = story.children[i];
        if (form.elements[i].value !== "") {
            word.className = "filled";
            word.innerHTML = form.elements[i].value;
        }
        else {
            word.className = "missingText";
            word.innerHTML = "&lt;missing text&gt;"
        }
    }
}

function reTurn() {
    document.getElementById("resultPage").style.display = "none";
    document.getElementById("frontPage").style.display = "block";
}