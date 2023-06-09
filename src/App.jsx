import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import { RoutesData } from './utils/routes.data'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{RoutesData.map(item => (
					<Route key={item.path} path={item.path} element={<item.element />} />
				))}
			</Route>
		</Routes>
	)
}

export default App
