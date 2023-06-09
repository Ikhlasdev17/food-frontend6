import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.scss'

const NotFound = () => {
	return (
		<div className='container mx-auto py-12'>
			<section className='page_404'>
				<div className=''>
					<div className='row_404'>
						<div className='col-sm-12 '>
							<div className='col-sm-10 col-sm-offset-1  text-center'>
								<div className='four_zero_four_bg'>
									<h1 className='text-center '>404</h1>
								</div>

								<div className='contant_box_404'>
									<h3 className='h2'>Page not found!</h3>

									<p>Please back to Home.</p>

									<Link to='/' className='link_404'>
										Go to Home
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default NotFound
