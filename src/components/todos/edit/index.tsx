import { FC, useState } from 'react'
import { Textarea, Button } from '@app/ui'
import { IEditTodo } from './types'

export const EditTodo: FC<IEditTodo> = ({ title, setIsEdit, changeTitle }) => {
	const [newTitleValue, setNewTitleValue] = useState(title)

	const save = () => {
		changeTitle(newTitleValue)
		setIsEdit(false)
	}

	return (
		<>
			<Textarea value={newTitleValue} onChange={setNewTitleValue} />
			<Button onClick={save}>save</Button>
			<Button onClick={() => setIsEdit(false)}>cancel</Button>
		</>
	)
}
