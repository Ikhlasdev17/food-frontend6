import React from 'react'
import { Link } from 'react-router-dom'
import { headerMenus } from '../../assets/data/headerMenus'
import './Header.scss'

const Header = () => {
	return (
		<div className='w-full px-[10%] py-[20px] shadow-md bg-white z-50 sticky top-0 flex justify-between items-center'>
			<h1 className='logo text-slate-600 font-bold uppercase text-4xl'>
				MY <span className='text-red-800'>AWQAT</span>
			</h1>

			<ul className='flex gap-6'>
				{headerMenus.map(item => {
					return (
						<li key={item.id}>
							<Link
								className='font-semibold text-slate-600 text-2xl uppercase transition duration-200 hover:text-red-600'
								to={item.path}
							>
								{item.label}
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Header
