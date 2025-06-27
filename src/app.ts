interface Task {
    title: string;
    dueDate: string;
    priority: number;
    createdAt?: Date;
}

const tasks: Task[] = [];

export function addTask(task: Task): Task {
    /* const now = new Date();
     task.createdAt = now;
     tasks.push(task);
 
     const timeLeft = new Date(task.dueDate).getTime() - now.getTime();
     console.log("Recordatorio enviado");
 
 
     return task;*/
}

export function listTasks(): Task[] {
    /*return tasks;*/
}

export function getUpcomingTasks(): Task[] {
    /* const now = new Date();
     return tasks.filter(task => {
         const due = new Date(task.dueDate);
         return due < now && due.getTime() - now.getTime() <= 86400000;
     });*/
}