import { makeAutoObservable } from "mobx"

export default new class Todo {
	todos = []
	loading = false

	constructor() {
		makeAutoObservable(this)
	}

	addTodo(todo) {
		this.todos.push(todo)
	}

	removeTodo(todo) {
		this.todos = this.todos.filter(item => item.id !== todo.id)
	}

	completeTodo(todo) {
		this.todos = this.todos.map(item => 
			item.id === todo.id 
				? { ...item, completed: !item.completed } 
				: item
		)
	}

	fetchTodos(){
		this.loading = false
		fetch('https://jsonplaceholder.typicode.com/todos/?_limit=20')
		.then(response => response.json())
		.then(json => {this.todos = json})
		.finally(()=>{this.loading = true})
		.catch(err => console.log(err));
	}
}