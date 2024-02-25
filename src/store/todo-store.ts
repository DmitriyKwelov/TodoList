import { makeAutoObservable, runInAction } from 'mobx'
import api from '@app/api'
import { ITodo } from '@app/types'

class TodosStore {
	todos: ITodo[] = []
	isLoading = true

	constructor() {
		makeAutoObservable(this)
	}

	fetchTodos = async () => {
		try {
			this.isLoading = true
			const data = await api.todo.fetchTodos()
			runInAction(() => {
				this.todos = data
				this.isLoading = false
			})
		} catch (e) {
			this.todos = []
			this.isLoading = false
		}
	}

	changeCompletedTodo = (value: boolean, id: number) => {
		for (let i = 0; i < this.todos.length; i++) {
			if (this.todos[i].id === id) {
				this.todos[i].completed = value
				break
			}
		}
	}

	changeTitleTodo = (value: string, id: number) => {
		for (let i = 0; i < this.todos.length; i++) {
			if (this.todos[i].id === id) {
				this.todos[i].title = value
				break
			}
		}
	}

	deleteTodoById = (id: number) => {
		this.todos = this.todos.filter((todo) => todo.id !== id)
	}

	addNewTodo = (title: string) => {
		let id
		if (this.todos.length) {
			id = this.todos[this.todos.length - 1].id + 1
		} else {
			id = 1
		}
		console.log(id)
		this.todos.push({ userId: 1, id, title, completed: false })
	}
}

export default new TodosStore()
