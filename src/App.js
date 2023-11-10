import {Provider} from 'react-redux'
import {useState} from 'react'

import Header from './components/Header'
import Counter from './components/Counter'
import CategoryItem from './components/CategoryItem'
import Products from './components/Products'

import store from './store/store'

import './App.css'

const App = () => {
  const [selectedCat, setSelectedCat] = useState("Women's clothing")
  return (
    <Provider store={store}>
      <Header />
      <div className="bg-container">
        <CategoryItem selectedCat={selectedCat} />
        <Products selectedCat={selectedCat} />
      </div>
    </Provider>
  )
}

export default App
