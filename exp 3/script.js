// ==================== TO-DO LIST FUNCTIONALITY ====================

// Add a new task
function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const todoList = document.getElementById('todoList');
    
    // Create new list item
    const li = document.createElement('li');
    
    // Create task text span
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    span.onclick = function() {
        this.parentElement.classList.toggle('completed');
        updateStats();
    };
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        this.parentElement.remove();
        updateStats();
    };
    
    // Append elements to list item
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    // Add to list
    todoList.appendChild(li);
    
    // Clear input
    input.value = '';
    
    // Update statistics
    updateStats();
}

// Update task statistics
function updateStats() {
    const allTasks = document.querySelectorAll('#todoList li');
    const completedTasks = document.querySelectorAll('#todoList li.completed');
    
    document.getElementById('totalTasks').textContent = allTasks.length;
    document.getElementById('completedTasks').textContent = completedTasks.length;
}

// Allow Enter key to add task
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});


// ==================== DOM MANIPULATION DEMOS ====================

// Change text content dynamically
function changeText() {
    const textElement = document.getElementById('dynamicText');
    const messages = [
        'Text changed using DOM!',
        'JavaScript is powerful!',
        'DOM manipulation is fun!',
        'You clicked the button!',
        'Content updated dynamically!'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    textElement.textContent = randomMessage;
}

// Change styles dynamically
function changeStyle() {
    const textElement = document.getElementById('dynamicText');
    textElement.classList.toggle('styled');
}

// Add/remove class
function addClass() {
    const textElement = document.getElementById('dynamicText');
    textElement.classList.toggle('highlight');
}

// Reset content
function resetContent() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'Click buttons to change this text!';
    textElement.className = '';
}

// Counter for paragraphs
let paragraphCount = 0;

// Add element dynamically
function addElement() {
    paragraphCount++;
    const container = document.getElementById('elementContainer');
    
    // Create new paragraph using DOM methods
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `This is paragraph #${paragraphCount} - Added dynamically using createElement()`;
    newParagraph.id = `para-${paragraphCount}`;
    
    container.appendChild(newParagraph);
}

// Remove last element
function removeElement() {
    const container = document.getElementById('elementContainer');
    const lastChild = container.lastElementChild;
    
    if (lastChild) {
        container.removeChild(lastChild);
    } else {
        alert('No elements to remove!');
    }
}
