import { FC, memo, useState } from 'react'
import { Button, Checkbox } from '@app/ui'
import { EditTodo } from '../edit'
import { IPropsTodo } from './types'

export const Todo: FC<IPropsTodo> = memo(({ userId, completed, id, title, changeCompleted, deleteTodo, changeTitle }) => {
	const [isEdit, setIsEdit] = useState(false)

	return (
		<div className="todo">
			<Checkbox value={completed} onChange={(value) => changeCompleted(value, id)} />
			{isEdit && <EditTodo title={title} setIsEdit={setIsEdit} changeTitle={(value) => changeTitle(value, id)} />}
			{!isEdit && (
				<>
					<p>{title}</p>
					<Button onClick={() => setIsEdit(true)}>edit</Button>
					<Button onClick={() => deleteTodo(id)}>delete</Button>
				</>
			)}
		</div>
	)
})
