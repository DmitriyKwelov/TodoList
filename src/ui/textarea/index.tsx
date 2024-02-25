import { FC } from 'react'
import { ITextarea } from './types'

export const Textarea: FC<ITextarea> = ({ value, onChange }) => {
	return <textarea value={value} onChange={(e) => onChange(e.target.value)} />
}
