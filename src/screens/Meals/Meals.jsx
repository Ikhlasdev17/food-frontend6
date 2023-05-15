import { message } from 'antd'
import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import cartSound from '../../assets/music/addCart.mp3'
import Heading from '../../components/Heading/Heading'
import { addToCart } from '../../store/reducers/cartSlice'
import {
	fetchedMeals,
	fetchingErrorMeals,
	fetchingMeals,
} from '../../store/reducers/mealSlice'
import './Meals.scss'
const Meals = () => {
	const { meals, loadingMeals } = useSelector(store => store.meal)
	const { cartMeals } = useSelector(store => store.cart)
	const dispatch = useDispatch()
	const params = useParams()
	const cartMusicPlayer = useRef(null)

	useEffect(() => {
		dispatch(fetchingMeals())
		axios
			.get(
				`https://themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
			)
			.then(res => {
				dispatch(fetchedMeals(res.data.meals))
			})
			.catch(err => {
				dispatch(fetchingErrorMeals())
			})
	}, [])

	function addingMealToBasket(meal) {
		dispatch(addToCart(meal))

		cartMusicPlayer.current.currentTime = 0
		cartMusicPlayer.current.play()
		setTimeout(() => {
			cartMusicPlayer.current.pause()
		}, 2000)
		message.success('Product added to cart!')
	}

	return (
		<div className='container mx-auto py-12'>
			<Heading>
				Meals of category{' '}
				<b className='text-orange-600'>{params.categoryName}</b>
			</Heading>

			<audio className='hidden' src={cartSound} ref={cartMusicPlayer}></audio>

			{/* our meals */}
			<div className='row'>
				{meals.map(item => (
					<div className='item relative' key={item.strMeal}>
						<img className='rounded-md' src={item.strMealThumb} />
						<h1 className='text-center w-full truncate'>{item.strMeal}</h1>
						<button
							onClick={() => addingMealToBasket(item)}
							className={`absolute p-4 bg-orange-500 text-white text-3xl top-6 right-6 rounded-md shadow-md hover:bg-orange-600 active:opacity-75 transform active:scale-95 disabled:opacity-75`}
							disabled={cartMeals.find(x => x.idMeal === item.idMeal)}
						>
							{cartMeals.findIndex(x => x.idMeal === item.idMeal) === -1 ? (
								<i className='bx bx-cart'></i>
							) : (
								<i className='bx bx-check'></i>
							)}
						</button>
					</div>
				))}
			</div>

			{/* category btn */}
			<Link
				to={'/cart'}
				className='min-w-[70px] h-[70px] rounded-md shadow-md bg-orange-500 flex items-center justify-center fixed bottom-[100px] right-[5%] text-4xl text-white px-4'
			>
				<i className='bx bx-cart'></i>({cartMeals.length})
			</Link>
		</div>
	)
}

export default Meals
