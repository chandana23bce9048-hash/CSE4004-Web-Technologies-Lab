// Function to add a new task
function addTask() {
    const input = document.getElementById('taskInput');
    const taskName = input.value;

    if (taskName === "") {
        alert("Please enter a task name");
        return;
    }

    const taskId = "task-" + Date.now();
    const currentDate = new Date().toLocaleDateString();

    // Create Task Card element
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.id = taskId;
    taskCard.draggable = true;
    
    // Set Drag Event
    taskCard.ondragstart = drag;

    taskCard.innerHTML = `
        <strong>${taskName}</strong>
        <small>Created: ${currentDate}</small>
    `;

    document.getElementById('todo').appendChild(taskCard);
    input.value = ""; // Clear input
}

// DRAG AND DROP LOGIC

function allowDrop(ev) {
    ev.preventDefault(); // Necessary to allow dropping
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    
    // Find the closest column (target might be a child of the column)
    let targetColumn = ev.target;
    while (!targetColumn.classList.contains('column')) {
        targetColumn = targetColumn.parentElement;
    }

    targetColumn.appendChild(draggedElement);

    // Check if dropped in Completed column
    if (targetColumn.id === "completed") {
        draggedElement.classList.add('completed-task');
        alert("Task Completed Successfully");
    } else {
        draggedElement.classList.remove('completed-task');
    }
}