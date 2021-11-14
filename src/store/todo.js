import {makeAutoObservable} from "mobx";

class Todo {
    todos =[{id:1, title: "Выучи mobx", completed: false},
        {id:2, title: "Выучи React", completed: false},
        {id:3, title: "Выучи Redux", completed: false}]
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
        console.log('add')
    }

    removeToDo(id) {
        this.todos = this.todos.filter(todo => todo.id !==id)
        console.log('remove')
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id ===id ?{...todo,completed: !todo.completed}:todo)
        console.log('complete')
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
            this.todos = [...this.todos,...json]
            })
    }
}

export default new Todo()