import { MouseEventHandler, ReactNode } from 'react'

export interface IButton {
	children: ReactNode
	onClick?: MouseEventHandler
}
