"use strict";
const input = document.querySelector(".input");

const btnAddTask = document.querySelector(".btn__add-task");

const tasks = document.querySelector(".tasks-container");
const task = document.querySelector(".task");
const taskName = document.querySelector(".task-name");
const btnEditTask = document.querySelector(".btn__edit-task");
const btnDoneTask = document.querySelector(".btn__finish-task");
const btnDeleteTask = document.querySelector(".btn__delete-task");

btnAddTask.addEventListener("click", function () {
  const text = input.value;
  console.log(text);
  taskName.innerHTML = text;
  input.value = "";
});

btnEditTask.addEventListener("click", function () {
  // input.value = ;
  taskName.innerHTML = "";
});
