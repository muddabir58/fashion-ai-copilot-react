import { useState } from 'react'
import './ProductCard.css'

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const {
    id,
    name,
    price,
    originalPrice,
    images,
    brand,
    category,
    isNew,
    isSale,
    colors = [],
    sizes = []
  } = product

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <article 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="product-card__image-container">
        <img 
          src={images[0]} 
          alt={name}
          className="product-card__image product-card__image--primary"
        />
        {images[1] && (
          <img 
            src={images[1]} 
            alt={name}
            className={`product-card__image product-card__image--secondary ${isHovered ? 'product-card__image--visible' : ''}`}
          />
        )}
        
        {/* Badges */}
        <div className="product-card__badges">
          {isNew && <span className="badge badge--new">New</span>}
          {isSale && <span className="badge badge--sale">{discount}% OFF</span>}
        </div>

        {/* Quick Actions */}
        <div className={`product-card__actions ${isHovered ? 'product-card__actions--visible' : ''}`}>
          <button 
            className="action-btn action-btn--wishlist"
            onClick={() => setIsWishlisted(!isWishlisted)}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill={isWishlisted ? "currentColor" : "none"} 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          
          <button 
            className="action-btn action-btn--quick-view"
            aria-label="Quick view"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>

        {/* Quick Add to Cart */}
        <div className={`product-card__quick-add ${isHovered ? 'product-card__quick-add--visible' : ''}`}>
          <button className="btn btn--primary btn--full">
            Quick Add
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="product-card__info">
        <div className="product-card__meta">
          <span className="product-card__brand">{brand}</span>
          {category && <span className="product-card__category">{category}</span>}
        </div>
        
        <h3 className="product-card__name">
          <a href={`/product/${id}`} className="product-card__link">
            {name}
          </a>
        </h3>
        
        <div className="product-card__pricing">
          <span className="product-card__price">${price}</span>
          {originalPrice && (
            <span className="product-card__original-price">${originalPrice}</span>
          )}
        </div>

        {/* Color Options */}
        {colors.length > 0 && (
          <div className="product-card__colors">
            {colors.map((color, index) => (
              <button
                key={index}
                className="color-option"
                style={{ backgroundColor: color.value }}
                aria-label={`Color: ${color.name}`}
                title={color.name}
              />
            ))}
          </div>
        )}

        {/* Rating */}
        <div className="product-card__rating">
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={star <= 4 ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                className="star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <span className="rating-count">(24)</span>
        </div>
      </div>
    </article>
  )
}

export default ProductCard


