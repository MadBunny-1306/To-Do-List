"use strict";
/**
 * change date format
 * style checkbox, maybe put it infront task-name
 * dragable task?
 * color theme?
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

//// Functions

let tasks = [];
let checks;
const renderTasks = function (task, index) {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const html = `<div class="task"><div class="task-line">
    <p class="task-name" contenteditable="true" spellcheck="false">${task.task}</p>
    <input type="checkbox" class="task-done"></div>
    <span class="date-span">${task.date}</span>
  </div>`;
    //   const btnsDelete = document.querySelectorAll(".btn--delete-task");
    //   btnsDelete.forEach(function (btn) {
    //     btn.removeEventListener("click", deleteTask);
    //     btn.addEventListener("click", deleteTask);
    //   });

    taskList.insertAdjacentHTML("afterbegin", html);
    // const taskName = document.querySelector(".task-name");
  });

  // checks = document.querySelectorAll(".btn--finish-task");
  // checks.forEach((b) => {
  //   b.addEventListener("click", function (e) {
  //     console.log("Print");
  //     // finishTask();
  //     const taskName = e.target.closest(".task-name");
  //     console.log(taskName);
  //     // taskName.style.color = red;
  //   });
  // });
  // console.log(checks);
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

// Events
btnAddTask.addEventListener("click", addTask);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});
