import {createSlice} from '@reduxjs/toolkit'

const initialState = []

export const addToCart = createSlice({
  name: 'selectedCategory',
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const isPresentInState = state.some(
        item => item.id === actions.payload.id,
      )
      if (isPresentInState) {
        const filteredCart = state.filter(
          item => item.id !== actions.payload.id,
        )
        return filteredCart
      }

      const newState = [...state, actions.payload]
      return newState
    },
  },
})

export const {setCategory} = addToCart.actions

export default addToCart.reducer
