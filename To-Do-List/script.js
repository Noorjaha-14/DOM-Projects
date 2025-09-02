function generateTaskId() {
    return Math.floor(1000 + Math.random() * 9000);
}

const addButton = document.getElementById('add-button');
const inputField = document.getElementById('input-field');
let taskList = document.getElementById("task-list");
let tasks = [];
const filterButtons = document.querySelectorAll(".filter-btn");
let currentFilter = "All";
let filteredTasks = [];

addButton.addEventListener("click", () => {
    let taskText = inputField.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    addTask(taskText);
    applyFilter();
    inputField.value = '';
});

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterButtons.forEach((b) => {
            b.classList.remove("active");
        });
        btn.classList.add("active");
        currentFilter = btn.getAttribute('data-filter');
        applyFilter();
    });
});

function applyFilter() {
    if (currentFilter === "All") {
        filteredTasks = tasks;
    } else if (currentFilter === "Active") {
        filteredTasks = tasks.filter(task => !task.completed);
    } else {
        filteredTasks = tasks.filter(task => task.completed);
    }
    showTasks();
}

function addTask(userInput) {
    const newTask = {
        id: generateTaskId(),
        text: userInput,
        completed: false
    };
    tasks.push(newTask);
}

inputField.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let taskText = inputField.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        addTask(taskText);
        applyFilter();
        inputField.value = '';
    }
});

function showTasks() {
    taskList.innerHTML = "";

    if (filteredTasks.length === 0 && tasks.length === 0) {
        taskList.innerHTML = '<li class="empty-message">Your to-do list is empty</li>';
        return;
    } else if (filteredTasks.length === 0 && tasks.length > 0) {
        taskList.innerHTML = '<li class="empty-message">No tasks found for this filter.</li>';
        return;
    }

    filteredTasks.forEach((task) => {
        let li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        const checkbox = document.createElement('input');
        const span = document.createElement('span');
        const deleteBtn = document.createElement('i');

        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => {
            handleToggle(task.id);
        });

        span.innerText = task.text;
        if (task.completed) {
            span.classList.add('Completed');
        }

        deleteBtn.classList.add('fas', 'fa-trash');
        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });

        li.append(checkbox);
        li.append(span);
        li.append(deleteBtn);
        taskList.append(li);
    });

    updateItemsLeft();
}

function handleToggle(id) {
    tasks = tasks.map((task) => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        } else {
            return task;
        }
    });
    applyFilter();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    applyFilter();
}

function updateItemsLeft() {
    const itemsLeftSpan = document.querySelector(".list-footer span");
    const activeTasks = tasks.filter(task => !task.completed).length;
    itemsLeftSpan.textContent = `${activeTasks} items left`;
}

const clearCompletedButton = document.querySelector(".list-footer button");
clearCompletedButton.addEventListener("click", () => {
    tasks = tasks.filter(task => !task.completed);
    applyFilter();
});

document.addEventListener("DOMContentLoaded", () => {
    applyFilter();
    updateItemsLeft();
});
