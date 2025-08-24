import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import ProductDetailPage from './components/ProductDetailPage'
import { products } from './data/products'

function App() {
  const [currentView, setCurrentView] = useState('pdp') // 'home' or 'pdp'

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product)
  }

  const handleAddToWishlist = (product) => {
    console.log('Added to wishlist:', product)
  }

 

  return (
    <div className="app">
      {/* <Header /> */}
      
      <div className="app">
        <ProductDetailPage 
          product={products[0]}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      </div>
      
      {/* <Footer /> */}
    </div>
  )
}

export default App
