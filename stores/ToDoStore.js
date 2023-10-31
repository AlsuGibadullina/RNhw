import { makeAutoObservable } from 'mobx';

class ToDoStore {
    todoList = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(text) {
        const newItem = [text, false];
        this.todoList = [...this.todoList, newItem];
    }

    markAsCompleted(todo) {
        const index = this.todoList.indexOf(todo);
        this.todoList[index][1] = true;
    }

    deleteTodo(todo) {
        const index = this.todoList.indexOf(todo);
        delete this.todoList[index];
    }
}

const todoStore = new ToDoStore();
export default todoStore;