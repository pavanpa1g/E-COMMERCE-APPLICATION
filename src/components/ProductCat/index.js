import {useState} from 'react'
import ProductItem from '../ProductItem'

import './index.css'

const ProductCat = ({item}) => {
  const {name, products} = item
  console.log(products)
  return (
    <div>
      <div className="text-product-head-container">
        <h1 className="product-name">{name}</h1>
        <p className="view-all">view all</p>
      </div>
      <div className="products-container">
        {products.map(pitem => (
          <ProductItem item={pitem} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default ProductCat
