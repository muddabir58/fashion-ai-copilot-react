import { useState } from 'react'
import ProductDetailPage from './ProductDetailPage'
import RelatedProducts from './RelatedProducts'
import { products } from '../data/products'
import './ProductDetailDemo.css'

function ProductDetailDemo() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product])
    // You can add a toast notification here
    console.log('Added to cart:', product)
  }

  const handleAddToWishlist = (product) => {
    setWishlist(prev => [...prev, product])
    // You can add a toast notification here
    console.log('Added to wishlist:', product)
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    // Scroll to top when changing products
    window.scrollTo(0, 0)
  }

  return (
    <div className="product-detail-demo">
      {/* Demo Header */}
      <div className="demo-header">
        <div className="container">
          <h1 className="demo-title">Product Detail Page Demo</h1>
          <p className="demo-subtitle">
            Interactive product detail page with image gallery, size/color selection, reviews, and related products
          </p>
          
          {/* Demo Stats */}
          <div className="demo-stats">
            <div className="demo-stat">
              <span className="demo-stat__number">{cart.length}</span>
              <span className="demo-stat__label">Items in Cart</span>
            </div>
            <div className="demo-stat">
              <span className="demo-stat__number">{wishlist.length}</span>
              <span className="demo-stat__label">Wishlist Items</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Page */}
      <ProductDetailPage 
        product={selectedProduct}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
      />

      {/* Related Products */}
      <RelatedProducts 
        products={products}
        currentProductId={selectedProduct.id}
        onProductClick={handleProductClick}
      />

      {/* Demo Footer */}
      <div className="demo-footer">
        <div className="container">
          <div className="demo-features">
            <h3>Features Included:</h3>
            <ul>
              <li>✅ Interactive image gallery with thumbnails</li>
              <li>✅ Color and size selection</li>
              <li>✅ Quantity selector</li>
              <li>✅ Add to cart and wishlist functionality</li>
              <li>✅ Product information tabs (Description, Details, Reviews)</li>
              <li>✅ Related products section</li>
              <li>✅ Responsive design for all devices</li>
              <li>✅ Modern UI with smooth animations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailDemo
