var inputBox = document.querySelector("input");
var listBox = document.querySelector(".listBox");
var button = document.querySelector(".btn");
var divValue = 0;
var currentListDivs = listBox.querySelectorAll(".listDiv");
var currentListButtons = listBox.querySelectorAll(".listButton");

button.addEventListener("click", addToList);

inputBox.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        addToList();
    }
});

function addToList() {
    if (inputBox.value != "") {
        divValue++;
        var newDiv = document.createElement("div");
        var currentValue = inputBox.value;
        var newSpan = document.createElement("span");
        var newButtonRemove = document.createElement("button");

        newSpan.textContent = currentValue;
        newButtonRemove.textContent = "REMOVE";
        newButtonRemove.classList = "listButton";
        newDiv.id = "btn" + divValue;
        newDiv.classList = "listDiv";

        newDiv.appendChild(newSpan);
        newDiv.appendChild(newButtonRemove);
        listBox.appendChild(newDiv);
    } else {
        alert("please stop");
    }

    for (var i = 0; i < listBox.querySelectorAll(".listButton").length; i++) {
        listBox.querySelectorAll(".listButton")[i].addEventListener("click", removeFromList);
    }

    inputBox.value = '';
}

function removeFromList(e) {
    var currentButton = e.currentTarget;
    var currentDivId = currentButton.parentNode.id;
    var currentString = '#' + currentDivId;
    var currentDiv = listBox.querySelector(currentString);

    currentDiv.remove();
}