import { ITodo } from '@app/types'
import instance from '../axios'

const todoApi = {
	fetchTodos,
}

export default todoApi

async function fetchTodos(): Promise<ITodo[]> {
	try {
		const response = await instance.get('todos')
		return response.data
	} catch (e) {
		return Promise.reject()
	}
}
