import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './reducers/categorySlice'

export const store = configureStore({
	reducer: {
		categoryReducer,
	},
})
