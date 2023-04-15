"use strict";
const input = document.querySelector(".input");

const btnAddTask = document.querySelector(".btn__add-task");

const tasks = document.querySelector(".tasks-container");

// const addEventListeners = function () {
//   const editButtons = document.querySelectorAll(".btn__edit-task");
//   const doneButtons = document.querySelectorAll(".btn__finish-task");
//   const deleteButtons = document.querySelectorAll(".btn__delete-task");

//   editButtons.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       const taskElement = e.target.closest(".task");
//       const taskName = taskElement.querySelector(".task-name");

//       if (taskName.textContent !== "") {
//         input.value = taskName.textContent;
//         taskName.textContent = "";
//       } else {
//         taskName.textContent = input.value;
//         input.value = "";
//       }
//     });
//   });

//   doneButtons.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       const taskElement = e.target.closest(".task");
//       const taskName = taskElement.querySelector(".task-name");
//       taskName.classList.toggle("task-done");
//     });
//   });

//   deleteButtons.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       const taskElement = e.target.closest(".task");
//       taskElement.remove();
//     });
//   });
// };

// addEventListeners();

btnAddTask.addEventListener("click", function (e) {
  e.preventDefault();

  const text = input.value;
  if (text !== "") {
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerHTML = `<p class="task-name" contenteditable="true">${text}</p>
    <button class="btn__edit-task">edit</button>
    <button class="btn__finish-task">done</button>
    <button class="btn__delete-task">delete</button>`;
    tasks.appendChild(newTask);
    input.value = "";
    addEventListeners();
  }
});

tasks.addEventListener("click", function (e) {
  const task = e.target.closest(".task");

  // const taskName = e.target.closest(".task-name");
  // const btnEditTask = e.target.closest(".btn__edit-task");
  // const btnDoneTask = e.target.closest(".btn__finish-task");
  // const btnDeleteTask = e.target.closest(".btn__delete-task");

  const taskName = document.querySelector(".task-name");
  const btnEditTask = document.querySelector(".btn__edit-task");
  const btnDoneTask = document.querySelector(".btn__finish-task");
  const btnDeleteTask = document.querySelector(".btn__delete-task");

  if (e.target === btnEditTask) {
    if (taskName.textContent !== "") {
      input.value = taskName.textContent;
      taskName.textContent = "";
    } else {
      taskName.textContent = input.value;
      input.value = "";
    }
  } else if (e.target === btnDoneTask) {
    taskName.classList.toggle("task-done");
  } else if (e.target === btnDeleteTask) {
    tasks.removeChild(task);
  }

  taskName.addEventListener("keydown", function (e) {
    e.preventDefault();
  });
});
