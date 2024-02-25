import { Route, Routes } from 'react-router-dom'
import { Todos } from './pages/todos'
import './style.css'

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Todos />} />
		</Routes>
	)
}

export default App
