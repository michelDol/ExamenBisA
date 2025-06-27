"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
exports.listTasks = listTasks;
exports.getUpcomingTasks = getUpcomingTasks;
const tasks = [];
function addTask(task) {
    /* const now = new Date();
     task.createdAt = now;
     tasks.push(task);
 
     const timeLeft = new Date(task.dueDate).getTime() - now.getTime();
     console.log("Recordatorio enviado");
 
 
     return task;*/
}
function listTasks() {
    /*return tasks;*/
}
function getUpcomingTasks() {
    /* const now = new Date();
     return tasks.filter(task => {
         const due = new Date(task.dueDate);
         return due < now && due.getTime() - now.getTime() <= 86400000;
     });*/
}
