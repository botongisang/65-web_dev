function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.innerText = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("deleteBtn");

    // Delete task on click
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    // Add to list
    document.getElementById("taskList").appendChild(li);

    // Clear input
    input.value = "";
}
