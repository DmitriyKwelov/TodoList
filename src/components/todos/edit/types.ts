export interface IEditTodo {
	title: string
	setIsEdit: (value: boolean) => void
	changeTitle: (value: string) => void
}
