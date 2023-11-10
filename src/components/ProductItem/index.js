import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {addToCart} from '../../store/features/addToCart'

import './index.css'

const ProductItem = ({item}) => {
  const {name, image, price, weight} = item

  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(addToCart(item))
    console.log('clicked')
  }
  return (
    <div>
      <div className="image-container">
        <img src={image} alt={name} className="image" />
        <button className="plus-container" onClick={handleOnClick}>
          <p className="plus">+</p>
        </button>
      </div>
      <div className="text-container">
        <h3 className="price">{price}</h3>
        <h4 className="name">{name}</h4>
        <p className="weight"> {weight}</p>
      </div>
    </div>
  )
}

export default ProductItem
