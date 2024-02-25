import { FC, memo, useState } from 'react'
import { Button, Input } from '@app/ui'
import { IPropsAddNewTodo } from './types'

export const AddNewTodo: FC<IPropsAddNewTodo> = memo(({ addTodo }) => {
	const [newTodoTitle, setNewTodoTitle] = useState('')

	const create = () => {
		if (newTodoTitle.length) {
			addTodo(newTodoTitle)
			setNewTodoTitle('')
		}
	}

	return (
		<div>
			<Input value={newTodoTitle} onChange={setNewTodoTitle} />
			<Button onClick={create}>add</Button>
		</div>
	)
})
