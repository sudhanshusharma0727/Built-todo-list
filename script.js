function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
          <span>${taskText}</span>
          <button class="editButton" onclick="editTask(this)">Edit</button>
          <button class="deleteButton" onclick="deleteTask(this)">Delete</button>
      `;
    taskList.appendChild(li);

    taskInput.value = "";
  }
}

function deleteTask(button) {
  const taskList = document.getElementById("taskList");
  const li = button.parentElement;
  taskList.removeChild(li);
}

function editTask(button) {
  const li = button.parentElement;
  const span = li.querySelector("span");
  const editButton = li.querySelector(".editButton");

  const newText = prompt("Edit the task:", span.innerText);

  if (newText !== null) {
    span.innerText = newText;
    editButton.innerText = "Edit";
  }
}

document.getElementById("addButton").addEventListener("click", addTask);
