import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(prev =>  (prev === "dark" ? "light" : "dark"))
  }
  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])

  const addToCart = (newItem) => {
    setCart(prev => [...prev, newItem])
    // console.log(cart);
  }

  // console.log(cart[0].category);

  // TODO: Implement state for category filtering
  const [category , setCategory] = useState("all")

  const filterGategory = (e) => {
    setCategory(e.target.value)
  }

  return (
    <div className={`app ${theme}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle toggleTheme={toggleTheme} theme={theme}/>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={filterGategory}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList addToCart={addToCart} category={category}/>

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart}/>
    </div>
  )
}

export default App
