function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");

    var span = document.createElement("span");
    span.textContent = taskText;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
    input.focus();
}

// Allow adding task by pressing Enter
document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
