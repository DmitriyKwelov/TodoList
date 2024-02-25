import { FC } from 'react'
import { IButton } from './types'

export const Button: FC<IButton> = ({ children, onClick }) => {
	return <button onClick={onClick}>{children}</button>
}
