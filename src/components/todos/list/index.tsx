import { useEffect, useCallback } from 'react'
import { Todo } from '../todo'
import { useStores } from '@app/store'
import { observer } from 'mobx-react-lite'
import { AddNewTodo } from '../add'

export const TodoList = observer(() => {
	const {
		todos: { changeCompletedTodo, fetchTodos, deleteTodoById, changeTitleTodo, addNewTodo, todos, isLoading },
	} = useStores()

	useEffect(() => {
		fetchTodos()
	}, [])

	const changeCompleted = useCallback((value: boolean, id: number) => {
		changeCompletedTodo(value, id)
	}, [])

	const deleteTodo = useCallback((id: number) => {
		deleteTodoById(id)
	}, [])

	const addTodo = useCallback((value: string) => {
		addNewTodo(value)
	}, [])

	const changeTitle = useCallback((value: string, id: number) => {
		changeTitleTodo(value, id)
	}, [])

	return (
		<div className="todo-list">
			<h3 className="title">Todo List</h3>
			<AddNewTodo addTodo={addTodo} />
			{!isLoading ? (
				[...todos]
					.reverse()
					.map((todo) => (
						<Todo
							key={todo.id}
							completed={todo.completed}
							id={todo.id}
							title={todo.title}
							userId={todo.userId}
							changeCompleted={changeCompleted}
							deleteTodo={deleteTodo}
							changeTitle={changeTitle}
						/>
					))
			) : (
				<p>Загрузка...</p>
			)}
		</div>
	)
})
