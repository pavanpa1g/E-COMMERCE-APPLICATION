import {configureStore} from '@reduxjs/toolkit'

import {selectedCategory} from '../features/selectedCategory'
import {addToCart} from '../features/addToCart'

const store = configureStore({
  reducer: {
    selectedCategory,
    addToCart,
  },
})

export default store
