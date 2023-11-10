import {useState, useEffect} from 'react'
import ProductCat from '../ProductCat'

import './index.css'

const Products = () => {
  const [categoriesList, setCategories] = useState([])

  const dataSet = [{id: 1}, {id: 2}]

  const fectchCategories = async () => {
    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'

    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        const {categories} = data
        setCategories(categories)
        console.log('data', data)
      } else {
        console.log(response)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    console.log('helo')
    fectchCategories()
  }, [])
  return (
    <div className="poducts-bg-container">
      {categoriesList.map(item => (
        <ProductCat item={item} key={item.name} />
      ))}
    </div>
  )
}
export default Products
