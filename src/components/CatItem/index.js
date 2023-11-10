import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setCategory} from '../../store/features/selectedCategory'

import './index.css'

const CatItem = ({item}) => {
  const {name} = item

  const selected = useSelector(state => state.selectedCategory)

  const dispatch = useDispatch()

  console.log('selected', selected)

  const handleSelection = () => {
    dispatch(setCategory(name))
    console.log(name)
  }
  return (
    <button
      className={`product-item-bg ${selected && 'selected-bg'}`}
      onClick={handleSelection}
    >
      <div className="item-image-container">{name.slice(0, 1)}</div>
      <div className="product-cat-bg">
        <p className="item-text">{name}</p>
      </div>
    </button>
  )
}

export default CatItem
