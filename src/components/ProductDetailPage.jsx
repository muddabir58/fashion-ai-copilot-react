import { useState } from 'react'
import './ProductDetailPage.css'

function ProductDetailPage({ product, onAddToCart, onAddToWishlist }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('Black')
  const [quantity, setQuantity] = useState(1)

  const productImages = [
    '/images/product-main.jpg',
    '/images/product-thumbnail-2.jpg', 
    '/images/product-thumbnail-2.jpg',
    '/images/product-thumbnail-3.jpg',
    '/images/product-thumbnail-4.jpg',
    '/images/product-thumbnail-5.jpg',
    '/images/product-thumbnail-6.jpg'
  ]

  const colors = [
    { name: 'Black', hex: '#113081' },
    { name: 'Olive', hex: '#7D3D0E' }
  ]

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    onAddToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity
    })
  }

  const handleAddToWishlist = () => {
    onAddToWishlist(product)
  }

  return (
    <div className="product-detail-page">
      {/* Header */}


      {/* Main Product Section */}
      <section className="product-section">
        <div className="product-container">
          {/* Product Images */}
          <div className="product-images">
            <div className="image-grid">
              {/* First row: Main image + 1 thumbnail */}
              <div className="thumbnail-grid">
                <div className="main-image-container">
                  <img 
                    src={productImages[selectedImage]} 
                    alt="Product" 
                    className="main-image"
                  />
                  <div className="sale-badge">30% off</div>
                </div>
                <img 
                  src={productImages[1]} 
                  alt="Product view 2" 
                  className="thumbnail-image"
                  onClick={() => setSelectedImage(1)}
                />
              </div>
              
              {/* Second row: 2 thumbnails */}
              <div className="thumbnail-grid">
                <img 
                  src={productImages[2]} 
                  alt="Product view 3" 
                  className="thumbnail-image"
                  onClick={() => setSelectedImage(2)}
                />
                <img 
                  src={productImages[3]} 
                  alt="Product view 4" 
                  className="thumbnail-image"
                  onClick={() => setSelectedImage(3)}
                />
              </div>
              
              {/* Third row: 2 thumbnails */}
              <div className="thumbnail-grid">
                <img 
                  src={productImages[4]} 
                  alt="Product view 5" 
                  className="thumbnail-image"
                  onClick={() => setSelectedImage(4)}
                />
                <img 
                  src={productImages[5]} 
                  alt="Product view 6" 
                  className="thumbnail-image"
                  onClick={() => setSelectedImage(5)}
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="product-header">
              <div className="breadcrumb">Men / Outerwear - Jackets & Coats</div>
              <div className="product-title-section">
                <h1 className="product-title">The ReWool® Oversized Shirt Jacket</h1>
                <div className="price-section">
                  <span className="original-price">$238</span>
                  <span className="sale-price">$167</span>
                </div>
              </div>
              <div className="rating-section">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 12 12">
                      <path d="M6 1L7.5 4.5L11 5L8.5 8L9.5 11.5L6 9.5L2.5 11.5L3.5 8L1 5L4.5 4.5L6 1Z" fill="#262626"/>
                    </svg>
                  ))}
                </div>
                <span className="rating-text">5.0 (2 Reviews)</span>
              </div>
            </div>

            {/* Color Selection */}
            <div className="selection-section">
              <div className="selection-header">
                <span className="selection-label">Color</span>
                <span className="selection-value">Black / Olive</span>
              </div>
              <div className="color-options">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`color-option ${selectedColor === color.name ? 'selected' : ''}`}
                    onClick={() => setSelectedColor(color.name)}
                    style={{ '--color': color.hex }}
                  >
                    <div className="color-circle"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="selection-section">
              <div className="selection-header">
                <span className="selection-label">Size</span>
                <span className="size-guide">Size Guide</span>
              </div>
              <div className="size-options">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag Button */}
            <div className="add-to-bag-section">
              <button className="add-to-bag-btn" onClick={handleAddToCart}>
                ADD TO BAG
              </button>
            </div>

            {/* Shipping Info */}
            <div className="shipping-info">
              <div className="info-item">
                <svg width="34" height="34" viewBox="0 0 34 34">
                  <path d="M1.42 4.25L22.67 11.33L4.25 22.67L22.67 22.67" stroke="#262626" strokeWidth="1.5"/>
                </svg>
                <div className="info-text">
                  <h4>Free Shipping</h4>
                  <p>On all U.S. orders over $100 Learn more.</p>
                </div>
              </div>
              <div className="info-item">
                <svg width="34" height="34" viewBox="0 0 34 34">
                  <path d="M10.63 5.96L4.25 2.84L4.63 9.86L17 17" stroke="#262626" strokeWidth="1.5"/>
                </svg>
                <div className="info-text">
                  <h4>Easy Returns</h4>
                  <p>Extended returns through January 31. Returns Details.</p>
                </div>
              </div>
              <div className="info-item">
                <svg width="34" height="34" viewBox="0 0 34 34">
                  <path d="M5.67 17L2.83 9.92L17 9.92L7.08 2.83L17 2.83" stroke="#262626" strokeWidth="1.5"/>
                </svg>
                <div className="info-text">
                  <h4>Send It As A Gift</h4>
                  <p>Add a free personalized note during checkout.</p>
                </div>
              </div>
            </div>

            {/* Product Description */}
            <div className="product-description">
              <h3>Part shirt, part jacket, all style.</h3>
              <p>
                Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it's made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.
              </p>
            </div>

            {/* Model Info */}
            <div className="model-info">
              <h4>Model</h4>
              <p>Model is 6′2″, wearing a size M</p>
            </div>

            {/* Fit Info */}
            <div className="fit-info">
              <h4>Fit</h4>
              <p>Questions about fit? Contact Us Size Guide</p>
            </div>

            {/* Sustainability */}
            <div className="sustainability-info">
              <h4>Sustainability</h4>
              <div className="sustainability-image">
                <img src="/images/sustainability-badge.jpg" alt="Sustainability Badge" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="recommended-section">
        <h2>Recommended Products</h2>
        <div className="recommended-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="recommended-product">
              <div className="product-image">
                <img src={`/images/recommended-${item}.jpg`} alt="Recommended product" />
              </div>
              <div className="product-details">
                <h3>The Waffle Long-Sleeve Crew</h3>
                <div className="price">
                  <span className="original-price">$60</span>
                  <span className="current-price">$60</span>
                </div>
                <span className="color-name">Bone</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>Reviews</h2>
        <div className="reviews-container">
          <div className="reviews-summary">
            <div className="overall-rating">
              <h3>5.0 Overall Rating</h3>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="22" height="22" viewBox="0 0 22 22">
                    <path d="M11 1L13.5 7.5L20 8L15 13L16.5 20L11 16.5L5.5 20L7 13L2 8L8.5 7.5L11 1Z" fill="#262626"/>
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="rating-breakdown">
              <div className="rating-bar">
                <span>5</span>
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path d="M9 1L11 6L16 6L12 10L13 15L9 12L5 15L6 10L2 6L7 6L9 1Z" fill="#262626"/>
                </svg>
                <div className="bar">
                  <div className="bar-fill" style={{width: '100%'}}></div>
                </div>
                <span>2</span>
              </div>
              {/* More rating bars... */}
            </div>
            
            <div className="fit-rating">
              <h4>Runs slightly large</h4>
              <div className="fit-bars">
                <div className="fit-bar"></div>
                <div className="fit-bar"></div>
                <div className="fit-bar"></div>
                <div className="fit-bar active"></div>
                <div className="fit-bar"></div>
              </div>
              <div className="fit-labels">
                <span>Run small</span>
                <span>Run large</span>
              </div>
            </div>
          </div>

          <div className="reviews-filters">
            <button className="filter-btn">
              <span>Filter</span>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M3.75 12L3.75 6L20.25 6L20.25 12" stroke="#262626" strokeWidth="1.5"/>
                <path d="M3.75 6L3.75 18L20.25 18L20.25 12" stroke="#262626" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="sort-btn">
              <span>Sort by: Highest to Lowest Rating</span>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M4.5 9L12 16.5L19.5 9" stroke="#262626" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>

          <div className="reviews-list">
            <div className="review-item">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>ElizabethRBklyn</h4>
                  <div className="verified-badge">
                    <svg width="18" height="18" viewBox="0 0 18 18">
                      <path d="M9 1L11 6L16 6L12 10L13 15L9 12L5 15L6 10L2 6L7 6L9 1Z" fill="#262626"/>
                    </svg>
                    <span>Verified</span>
                  </div>
                  <div className="reviewer-details">
                    <span>Height: 5'9" - 5'11"</span>
                    <span>Weight (lbs): 161 - 180 lb</span>
                    <span>Body Type: Petite</span>
                    <span>Size Purchased: L</span>
                    <span>Usual Size: L</span>
                  </div>
                </div>
                <div className="review-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20">
                        <path d="M10 1L12.5 7.5L19 8L14.5 12.5L15.5 19L10 15.5L4.5 19L5.5 12.5L1 8L7.5 7.5L10 1Z" fill="#262626"/>
                      </svg>
                    ))}
                  </div>
                  <h4>Warm and very attractive on</h4>
                  <p>Got this to keep my husband warm on those chilly late fall days. He loves it as it not only is pretty warm but he looks good in it and he knows it.</p>
                </div>
              </div>
              <span className="review-date">14 days ago</span>
            </div>

            <div className="review-item">
              <div className="review-header">
                <div className="reviewer-info">
                  <h4>Anonymous</h4>
                  <div className="verified-badge">
                    <svg width="18" height="18" viewBox="0 0 18 18">
                      <path d="M9 1L11 6L16 6L12 10L13 15L9 12L5 15L6 10L2 6L7 6L9 1Z" fill="#262626"/>
                    </svg>
                    <span>Verified</span>
                  </div>
                  <div className="reviewer-details">
                    <span>Height: 5'9" - 5'11"</span>
                    <span>Weight (lbs): 161 - 180 lb</span>
                    <span>Body Type: Petite</span>
                    <span>Size Purchased: L</span>
                    <span>Usual Size: L</span>
                  </div>
                </div>
                <div className="review-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 20 20">
                        <path d="M10 1L12.5 7.5L19 8L14.5 12.5L15.5 19L10 15.5L4.5 19L5.5 12.5L1 8L7.5 7.5L10 1Z" fill="#262626"/>
                      </svg>
                    ))}
                  </div>
                  <h4>Super comfy</h4>
                  <p>Great quality, warm and super comfy. Got the XL cuz I have a large back and it fits perfect. It does run a bit oversized which is good.</p>
                </div>
              </div>
              <span className="review-date">14 days ago</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="pricing-section">
        <div className="pricing-header">
          <h2>Transparent Pricing</h2>
          <p>
            We publish what it costs us to make every one of our products. There are a lot of costs we can't neatly account for - like design, fittings, wear testing, rent on office and retail space - but we believe you deserve to know what goes into making the products you love.
          </p>
        </div>
        <div className="pricing-breakdown">
          <div className="pricing-item">
            <div className="pricing-icon">
              <svg width="58" height="59" viewBox="0 0 58 59">
                <path d="M1 9.38L26.63 36.58L31.49 5.28L31.49 1L22.37 9.55L1 1L22.37 13.83L35.76 5.28L22.37 13.83L22.37 57.96" stroke="#737373" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="pricing-text">
              <span>Materials</span>
              <span>$47.96</span>
            </div>
          </div>
          <div className="pricing-item">
            <div className="pricing-icon">
              <svg width="58" height="58" viewBox="0 0 58 58">
                <path d="M18.75 18.75L27.25 18.75L30.75 18.75L30.75 30.75L18.75 30.75L1 1L56 56" stroke="#737373" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="pricing-text">
              <span>Hardware</span>
              <span>$5.74</span>
            </div>
          </div>
          <div className="pricing-item">
            <div className="pricing-icon">
              <svg width="69" height="57" viewBox="0 0 69 57">
                <path d="M10.75 0.75L27.25 0.75L0.75 20.75L23 16L17.5 21L17.75 56.25L30.75 56.25L43.75 56.25L56.75 56.25" stroke="#737373" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="pricing-text">
              <span>Labor</span>
              <span>$13.75</span>
            </div>
          </div>
          <div className="pricing-item">
            <div className="pricing-icon">
              <svg width="46" height="59" viewBox="0 0 46 59">
                <path d="M1 1L44 57L19 21L19 30L23 18L23 39" stroke="#737373" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="pricing-text">
              <span>Duties</span>
              <span>$8.09</span>
            </div>
          </div>
          <div className="pricing-item">
            <div className="pricing-icon">
              <svg width="74" height="60" viewBox="0 0 74 60">
                <path d="M1 1L71.58 58" stroke="#737373" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="pricing-text">
              <span>Transport</span>
              <span>$1.53</span>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default ProductDetailPage
