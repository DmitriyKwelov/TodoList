import { FC } from 'react'
import { IInput } from './types'

export const Input: FC<IInput> = ({ value, onChange }) => {
	return <input value={value} onChange={(e) => onChange(e.target.value)} />
}
