interface Task {
    title: string;
    dueDate: string;
    priority: number;
    createdAt?: Date;
}

const tasks: Task[] = [];

export function addTask(task: Task): Task {

}

export function listTasks(): Task[] {
}

export function getUpcomingTasks(): Task[] {

}