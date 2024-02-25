import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { RootStoreContext } from './store/root-store.context.ts'
import { RootStore } from './store/root-state.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<RootStoreContext.Provider value={new RootStore()}>
				<App />
			</RootStoreContext.Provider>
		</BrowserRouter>
	</React.StrictMode>,
)
