"use strict";
const input = document.querySelector(".input");

const btnAddTask = document.querySelector(".btn__add-task");

const tasks = document.querySelector(".tasks-container");
const task = document.querySelector(".task");
const taskName = document.querySelector(".task-name");
const btnEditTask = document.querySelector(".btn__edit-task");
const btnDoneTask = document.querySelector(".btn__finish-task");
const btnDeleteTask = document.querySelector(".btn__delete-task");

const html = `<div class="task">
<p class="task-name"></p>
<button class="btn__edit-task">edit</button>
<button class="btn__finish-task">done</button>
<button class="btn__delete-task">delete</button>
</div>`;

btnAddTask.addEventListener("click", function (e) {
  e.preventDefault();

  const text = input.value;
  console.log(text);
  taskName.innerHTML = text;
  input.value = "";
  tasks.insertAdjacentHTML("afterbegin", html);
});

btnEditTask.addEventListener("click", function () {
  input.value = taskName.innerHTML;
  taskName.innerHTML = "";
});

btnDoneTask.addEventListener("click", function () {
  taskName.classList.toggle("task-done");
});

btnDeleteTask.addEventListener("click", function () {
  task.remove();
});
