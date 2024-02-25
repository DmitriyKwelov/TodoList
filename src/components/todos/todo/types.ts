import { ITodo } from '@app/types'

export interface IPropsTodo extends ITodo {
	changeCompleted: (value: boolean, id: number) => void
	deleteTodo: (id: number) => void
	changeTitle: (value: string, id: number) => void
}
