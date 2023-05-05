import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import './Layout.scss'

const Layout = () => {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout
