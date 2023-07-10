"use strict";
/**
 * change date format
 * style checkbox, maybe put it infront task-name
 * dragable task?
 * color theme?
 *
 * 

// buttons for html
//  <button class="btn btn--finish-task" data-index="${index}"><i class="fa-sharp fa-solid fa-check"></i></button>
//<button class="btn btn--delete-task" data-index="${index}"><i class="fa-solid fa-xmark"></i></button>



 */

///// Elements
const input = document.querySelector(".input");
const btnAddTask = document.querySelector(".btn--add-task");
const taskList = document.querySelector(".task-list");
const popup = document.querySelector(".popup");
const task = document.querySelectorAll(".task-name");
const checkBox = document.querySelectorAll(".task-done");

//// Functions

let tasks = [];
const renderTasks = function () {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    const taskLineDiv = document.createElement("div");
    taskLineDiv.className = "task-line";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-done";
    checkbox.id = `task-${index}`;
    checkbox.checked = task.checked;

    checkbox.addEventListener("change", function () {
      const taskName = this.nextSibling;
      tasks[index].checked = this.checked;
      if (this.checked) {
        taskName.classList.add("finished");
      } else {
        taskName.classList.remove("finished");
      }
    });

    const taskName = document.createElement("p");
    taskName.className = "task-name";
    taskName.contentEditable = true;
    taskName.spellcheck = false;
    taskName.textContent = task.task;

    if (task.checked) {
      taskName.classList.add("finished");
    } else {
      taskName.classList.remove("finished");
    }

    const deleteBtn = document.createElement("span");
    deleteBtn.className = "btn--delete-task";

    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      renderTasks();
    });

    const dateSpan = document.createElement("span");
    dateSpan.className = "date-span";
    dateSpan.textContent = task.date;

    taskLineDiv.appendChild(checkbox);
    taskLineDiv.appendChild(taskName);
    taskLineDiv.appendChild(deleteBtn);
    taskDiv.appendChild(taskLineDiv);
    taskDiv.appendChild(dateSpan);

    taskList.appendChild(taskDiv);

    taskName.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        taskName.blur();
        tasks[index].task = taskName.textContent.trim();
      }
    });
  });
};

const addTask = function () {
  const task = input.value.trim();
  if (task) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();

    const dateString = `${day}.${month}.${year}. ${hour}:${min}`;
    const newTask = { task, date: dateString };
    tasks.push(newTask);

    renderTasks();
    input.value = "";
  }
};

// Events
btnAddTask.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

renderTasks();
