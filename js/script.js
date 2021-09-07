var input = document.querySelector("input");
var addBtn = document.querySelector("#addBtn");
var listBox = document.querySelector("#listBox");

var divValue = 0;

addBtn.addEventListener("click", addToList);

input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
        addToList();
    }
});

function addToList() {
    if (input.value != "") {
        divValue++;
        var newDiv = document.createElement("div");
        var newSpan = document.createElement("span");
        var newBtnRemove = document.createElement("button");
        var inputValue = input.value;

        newSpan.textContent = inputValue;
        newBtnRemove.textContent = "REMOVE";
        newBtnRemove.classList = "listButton" + " btn";
        newDiv.id = "div" + divValue;
        newDiv.classList = "listDiv";

        newDiv.appendChild(newSpan);
        newDiv.appendChild(newBtnRemove);
        listBox.appendChild(newDiv);
    } else {
        alert("You can't add an empty value!");
    }

    for (var i = 0; i < listBox.querySelectorAll(".listButton").length; i++) {
        listBox.querySelectorAll(".listButton")[i].addEventListener("click", removeFromList);
    }

    input.value = "";
}

function removeFromList(e) {
    var removingDivButton = e.currentTarget;
    var removingDivId = removingDivButton.parentNode.id;
    var removingDiv = listBox.querySelector('#' + removingDivId);

    removingDiv.remove();
}