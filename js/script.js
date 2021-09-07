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
        var newBtnBox = document.createElement("div");
        var newBtnRemove = document.createElement("button");
        var newBtnEdit = document.createElement("button");
        var inputValue = input.value;

        newSpan.textContent = inputValue;
        newBtnBox.id = "btnBox"
        newBtnRemove.textContent = "REMOVE";
        newBtnRemove.classList = "listBtn" + " removeBtn" + " btn";
        newBtnEdit.textContent = "EDIT";
        newBtnEdit.classList = "listBtn" + " editBtn" + " btn";
        newDiv.id = "div" + divValue;
        newDiv.classList = "listDiv";

        newDiv.appendChild(newSpan);
        newDiv.appendChild(newBtnBox);
        newBtnBox.appendChild(newBtnEdit);
        newBtnBox.appendChild(newBtnRemove);
        listBox.appendChild(newDiv);
    } else {
        alert("You can't add an empty value!");
    }

    for (var i = 0; i < listBox.querySelectorAll(".removeBtn").length; i++) {
        listBox.querySelectorAll(".removeBtn")[i].addEventListener("click",
        removeFromList);
    }

    for (var i = 0; i < listBox.querySelectorAll(".editBtn").length; i++) {
        listBox.querySelectorAll(".editBtn")[i].addEventListener("click",
        editFromList);
    }

    input.value = "";
}

function removeFromList(e) {
    e.currentTarget.parentNode.parentNode.remove();
}

function editFromList(e) {
    var editText = e.currentTarget.parentNode.parentNode.querySelector("span")
    var editInput = window.prompt("Please enter the value you want to:",
    editText.textContent)

    editText.textContent = editInput;
    console.log(editText, editInput);
}