"use strict";
/**
 * color theme?
 * sort? -by alphabetical order and by date. then style buttons and make them into one, adn also those up-down arrows to show in which direction is sorting
 
 */

///// Elements
const input = document.querySelector(".input");
const btnAddTask = document.querySelector(".btn--add-task");
const taskList = document.querySelector(".task-list");
const popup = document.querySelector(".popup");
const task = document.querySelectorAll(".task-name");
const checkBox = document.querySelectorAll(".task-done");
const sortAlphabetBtn = document.getElementById("sort-letters");
const sortDateBtn = document.getElementById("sort-date");

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
      saveToLocalStorage();
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
      // task[index].deleted = true;

      saveToLocalStorage();
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
  const taskText = input.value.trim();
  if (taskText) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();

    // const day = String(date.getDate()).padStart(2, "0");
    // const month = String(date.getMonth() + 1).padStart(2, "0");
    // const year = date.getFullYear();
    // const hour = String(date.getHours()).padStart(2, "0");
    // const min = String(date.getMinutes()).padStart(2, "0");

    const dateString = `${day}.${month}.${year}. ${hour}:${min}`;
    // const dateString = `${year}-${month + 1}-${day} ${hour}:${min}`;
    const newTask = { task: taskText, date: dateString, checked: false };
    tasks.push(newTask);

    saveToLocalStorage();

    renderTasks();
    input.value = "";
  }
};

const saveToLocalStorage = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadFromLocalStorage = function () {
  const storedTasks = localStorage.getItem("tasks");
  tasks = storedTasks ? JSON.parse(storedTasks) : [];
};

const sortByAlphabet = function () {
  tasks.sort((a, b) => a.task.localeCompare(b.task));

  renderTasks();
};

const sortByDate = function () {
  const validTasks = tasks.filter((task) => checkIfValidDateFormat(task.date));
  const invalidTasks = tasks.filter(
    (task) => !checkIfValidDateFormat(task.date)
  );
  // tasks.sort((a, b) => new Date(a.date) - new Date(b.date));

  validTasks.sort((a, b) => a.date - b.date);

  // tasks = validTasks.concat(
  //   tasks.filter((task) => !checkIfValidDateFormat(task.date))
  // );

  tasks = [...validTasks, ...invalidTasks];

  // console.log(
  //   "After sorting:",
  //   tasks.map((task) => task.date)
  // );

  renderTasks();
};

const checkIfValidDateFormat = function (dateString) {
  // const dateRegex = /^\d{1,2}\.\d{1,2}\.\d{4}\. \d{1,2}:\d{2}$/;
  const dateRegex =
    /^(0?[1-9]|[1-2][0-9]|3[0-1])\.(0?[1-9]|1[0-2])\.\d{4}\. (0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return dateRegex.test(dateString);
};

// Events
btnAddTask.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

sortAlphabetBtn.addEventListener("click", sortByAlphabet);
sortDateBtn.addEventListener("click", sortByDate);

loadFromLocalStorage();
renderTasks();
// console.log(checkIfValidDateFormat("20.6.2023. 22:46"));
