"use strict";

///// Elements
const input = document.querySelector(".input");
const btnAddTask = document.querySelector(".btn--add-task");
const tasksList = document.querySelector(".tasks-list");
const taskList = document.querySelector(".task-list");
const popup = document.querySelector(".popup");
const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-zes");

//// Functions

let tasks = [];

const renderTask = function () {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
  });
};

/** 
const handleDoneButtonClick = function (e) {
  const taskElement = e.target.closest(".task");
  const taskName = taskElement.querySelector(".task-name");
  taskName.classList.toggle("task-done");
};

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

///// Events

btnAddTask.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
*/
