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
        var newSpanNumX = document.createElement("span");
        var newSpanNum = document.createElement("span");
        var newBtnPlus = document.createElement("button");
        var newBtnMinus = document.createElement("button");
        var newSpanBox = document.createElement("div");
        var newBtnBox = document.createElement("div");
        var newBtnRemove = document.createElement("button");
        var newBtnEdit = document.createElement("button");
        var inputValue = input.value;

        newSpan.textContent = inputValue;
        newSpan.classList = "span";
        newSpanNum.textContent = 1;
        newSpanNum.classList = "spanNum";
        newSpanNumX.textContent = "x";
        newSpanBox.classList = "spanBox";
        newBtnMinus.classList = "btnMinus" + " btnSpan";
        newBtnMinus.textContent = "-"
        newBtnPlus.textContent = "+"
        newBtnPlus.classList = "btnPlus" + " btnSpan";
        newBtnBox.id = "btnBox"
        newBtnRemove.textContent = "REMOVE";
        newBtnRemove.classList = "listBtn" + " removeBtn" + " btn";
        newBtnEdit.textContent = "EDIT";
        newBtnEdit.classList = "listBtn" + " editBtn" + " btn";
        newDiv.id = "div" + divValue;
        newDiv.classList = "listDiv";

        newSpanBox.appendChild(newBtnMinus);
        newSpanBox.appendChild(newSpanNumX);
        newSpanBox.appendChild(newSpanNum);
        newSpanBox.appendChild(newBtnPlus);
        newDiv.appendChild(newSpan);
        newDiv.appendChild(newBtnBox);
        newBtnBox.appendChild(newSpanBox);
        newBtnBox.appendChild(newBtnEdit);
        newBtnBox.appendChild(newBtnRemove);
        listBox.appendChild(newDiv);
    } else {
        alert("You can't add an empty value!");
    }

    for (var i = 0; i < listBox.querySelectorAll(".btnMinus").length; i++) {
        listBox.querySelectorAll(".btnMinus")[i].addEventListener("click",
        downTheSpan);
    }

    for (var i = 0; i < listBox.querySelectorAll(".btnPlus").length; i++) {
        listBox.querySelectorAll(".btnPlus")[i].addEventListener("click",
        upTheSpan);
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

function upTheSpan(e) {
    console.log("+", e.currentTarget.parentNode.querySelector(".spanNum"));
    e.currentTarget.parentNode.querySelector(".spanNum").textContent++;
}

function downTheSpan(e) {
    if (e.currentTarget.parentNode.querySelector(".spanNum").textContent > 1) {
        e.currentTarget.parentNode.querySelector(".spanNum").textContent--;
    }
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