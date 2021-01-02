window.addEventListener("DOMContentLoaded", show);
function getItem () {
    let list = [];
    let itemStr = localStorage.getItem("todo");
    if (itemStr !== null) {
        list = JSON.parse(itemStr);
    }
    return list;
};
function addItem () {
    let userInput = document.getElementById("input").value;
    if (userInput === "") {
        alert("empty");
    } else {
        let existingItems = getItem();
        existingItems.unshift(userInput);
        localStorage.setItem('todo', JSON.stringify(existingItems));
        document.getElementById("input").value = "";
    }
    show();
};
function removeItem() {
    let thisItem = this.getAttribute("id");
    let list = getItem();
    list.splice(thisItem, 1);
    localStorage.setItem('todo', JSON.stringify(list));
    show();
};
function show() {
    let listDisplay = getItem();
    let html = "<ul class='list'>";
    for (let i = 0; i < listDisplay.length; i++) {
        html += `<li class='list_item'>${listDisplay[i]}<button class='remove' id='${i}'>X</button><br><div class='separator'></div></li>
        `;
    }
    html += "</ul>";
    document.getElementById("list").innerHTML = html;
    let removeBtn = document.querySelectorAll(".remove");
    for (let i = 0; i < removeBtn.length; i++) {
        removeBtn[i].addEventListener("click", removeItem);
    }
};
document.getElementById("add").addEventListener('click', addItem);