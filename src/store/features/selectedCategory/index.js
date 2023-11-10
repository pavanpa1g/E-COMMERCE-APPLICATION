import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  selectedCategory: '',
}

export const selectedCategory = createSlice({
  name: 'selectedCategory',
  initialState,
  reducers: {
    setCategory: (state, actions) => {
      console.log(actions)
      return actions.payload
    },
  },
})

export const {setCategory} = selectedCategory.actions

export default selectedCategory.reducer
