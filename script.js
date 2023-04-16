"use strict";

///// Elements
const input = document.querySelector(".input");
const btnAddTask = document.querySelector(".btn--add-task");
const tasks = document.querySelector(".tasks-container");

//// Handlers
const handleDoneButtonClick = function (e) {
  const taskElement = e.target.closest(".task");
  const taskName = taskElement.querySelector(".task-name");
  taskName.classList.toggle("task-done");
};

const handleDeleteButtonClick = function (e) {
  const taskElement = e.target.closest(".task");
  taskElement.remove();
};

const handleTaskNameKeydown = function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    e.target.blur();
  }
};

///// Events
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

btnAddTask.addEventListener("click", function (e) {
  e.preventDefault();

  const text = input.value;
  if (text !== "") {
    const newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerHTML = `<p class="task-name" contenteditable="true">${text}</p>
    <button class="btn btn--finish-task"><i class="fa-sharp fa-solid fa-check"></i></button>
    <button class="btn btn--delete-task"><i class="fa-solid fa-xmark"></i></button>`;
    tasks.appendChild(newTask);
    input.value = "";
    addEventListeners();
  }
});
