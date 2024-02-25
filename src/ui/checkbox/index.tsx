import { FC } from 'react'
import { ICheckboxProps } from './types'

export const Checkbox: FC<ICheckboxProps> = ({ value, onChange }) => {
	return <input checked={value} onChange={(e) => onChange(e.target.checked)} type="checkbox" />
}
