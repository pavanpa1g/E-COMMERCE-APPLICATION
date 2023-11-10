import {useEffect, useState} from 'react'

import CatItem from '../CatItem'

import './index.css'

const CategoryItem = () => {
  const [categoriesList, setCategories] = useState([])
  const fectchCategories = async () => {
    const url = 'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d'

    try {
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
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
    <div className="category-container">
      {categoriesList.map(item => (
        <CatItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default CategoryItem
