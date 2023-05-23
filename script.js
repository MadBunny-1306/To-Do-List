"use strict";

///// Elements
const input = document.querySelector(".input");
const btnAddTask = document.querySelector(".btn--add-task");
const taskList = document.querySelector(".task-list");
const popup = document.querySelector(".popup");

//// Functions

let tasks = [];
let checks;
const renderTasks = function () {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<div>
    <p class="task-name" contenteditable="true" spellcheck="false">${task.task}</p><span>added on ${task.date}</span>
    <button class="btn btn--finish-task" data-index="${index}"><i class="fa-sharp fa-solid fa-check"></i></button>
    <button class="btn btn--delete-task" data-index="${index}"><i class="fa-solid fa-xmark"></i></button>
  </div>`;

    const btnsDelete = document.querySelectorAll(".btn--delete-task");
    btnsDelete.forEach(function (btn) {
      btn.removeEventListener("click", deleteTask);
      btn.addEventListener("click", deleteTask);
    });

    // const btnsFinish = document.querySelectorAll(".btn--finish-task");
    // btnsFinish.forEach(function (btn) {
    //   btn.removeEventListener("click", finishTask);
    //   btn.addEventListener("click", finishTask);
    // });

    taskList.appendChild(li);
  });

  checks = document.querySelectorAll(".btn--finish-task");
  checks.forEach((b) => {
    b.addEventListener("click", function (e) {
      // console.log("Print");
      // finishTask();
      const taskName = e.target.closest(".task-name");
      console.log(taskName);
      // taskName.style.color = red;
    });
  });
  console.log(checks);
};

const addTask = function () {
  const task = input.value.trim();
  if (task) {
    const date = new Date();
    const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    const newTask = { task, date: dateString };
    tasks.push(newTask);

    renderTasks();
    input.value = "";
  }
};
/*
const finishTask = function (e) {
  const index = e.target.dataset.index;
  const taskName = e.target.parentNode.previousSibling;

  if (taskName.classList.contains("finished")) {
    taskName.classList.remove("finished");
    tasks[index].finished = false;
  } else {
    taskName.classList.add("finished");
    tasks[index].finished = true;
  }
  taskName.classList.add("task-done");
};

const deleteTask = function (index) {
  const btnYes = popup.querySelector(".btn-yes");
  const btnNo = popup.querySelector(".btn-no");

  popup.classList.remove("hidden");
  btnYes.addEventListener("click", function () {
    tasks.splice(index, 1);
    renderTasks();
    popup.classList.add("hidden");
  });
  btnNo.addEventListener("click", function () {
    popup.classList.add("hidden");
  });
};

// const handleDoneButtonClick = function (e) {
//   // const taskElement = e.target.closest(".task");
//   // const taskName = taskElement.querySelector(".task-name");
//   const taskName = e.target.closest(".task-name");
//   taskName.classList.toggle("task-done");

// };



// taskList.addEventListener("click", function (e) {
//   if (e.target.classList.contains("btn--finish-task")) {
//     const index = e.target.dataset.index;
//     finishTask(index);
//   }
//   if (e.target.classList.contains("btn--delete-task")) {
//     const index = e.target.dataset.index;
//     deleteTask(index);
//   }
// });





const handleDeleteButtonClick = function (e) {
  const taskElement = e.target.closest(".task");
  const popupWindow = taskElement.querySelector(".popup");
  popupWindow.classList.remove("hidden");

  const btnsNo = document.querySelectorAll(".btn-no");
  const btnsYes = document.querySelectorAll(".btn-yes");

  btnsYes.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      popupWindow.classList.add("hidden");
      taskElement.remove();
    });
  });

  btnsNo.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      popupWindow.classList.add("hidden");
    });
  });
};

const handleTaskNameKeydown = function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    e.target.blur();
  }
};

const addEventListeners = function () {
  const doneButtons = document.querySelectorAll(".btn--finish-task");
  const deleteButtons = document.querySelectorAll(".btn--delete-task");
  const taskName = document.querySelectorAll(".task-name");

  doneButtons.forEach(function (btn) {
    btn.removeEventListener("click", handleDoneButtonClick);
    btn.addEventListener("click", handleDoneButtonClick);
  });

  deleteButtons.forEach(function (btn) {
    btn.removeEventListener("click", handleDeleteButtonClick);
    btn.addEventListener("click", handleDeleteButtonClick);
  });

  taskName.forEach(function (name) {
    name.removeEventListener("keydown", handleTaskNameKeydown);
    name.addEventListener("keydown", handleTaskNameKeydown);
  });
};

const addTask = function () {
  const text = input.value;
  if (text !== "") {
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerHTML = `<p class="task-name" contenteditable="true" spellcheck="false">${text}</p>
    <button class="btn btn--finish-task"><i class="fa-sharp fa-solid fa-check"></i></button>
    <button class="btn btn--delete-task"><i class="fa-solid fa-xmark"></i></button>  <div class="popup hidden">
    <p>Are you sure you want to delete task?</p>
    <div class="btns-popup">
      <button class="btn btn-no">No</button>
      <button class="btn btn-yes">Yes</button>
    </div>
  </div>`;
    tasks.appendChild(newTask);
    input.value = "";
    addEventListeners();
  }
};

*/
btnAddTask.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});
