import './CategorySection.css'

function CategorySection() {
  const categories = [
    {
      id: 1,
      name: 'Women',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
      count: '2,847',
      link: '#women'
    },
    {
      id: 2,
      name: 'Men',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
      count: '1,923',
      link: '#men'
    },
    {
      id: 3,
      name: 'Accessories',
      image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
      count: '1,456',
      link: '#accessories'
    },
    {
      id: 4,
      name: 'Footwear',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
      count: '892',
      link: '#footwear'
    }
  ]

  return (
    <section className="category-section">
      <div className="category-container">
        <div className="category-header">
          <h2 className="category-title">Shop by Category</h2>
          <p className="category-subtitle">Discover our curated collections for every style and occasion</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <a href={category.link} className="category-link">
                <div className="category-image-container">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="category-image"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <h3 className="category-name">{category.name}</h3>
                      <span className="category-count">{category.count} items</span>
                      <span className="category-cta">Shop Now</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="category-features">
          <div className="feature">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="feature-content">
              <h4>Premium Quality</h4>
              <p>Curated selection of high-quality fashion items</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 7h-9m9 10h-9m9-5h-9M5 7h2m2 5h2m2 5h2"/>
              </svg>
            </div>
            <div className="feature-content">
              <h4>Fast Shipping</h4>
              <p>Free shipping on orders over $50</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div className="feature-content">
              <h4>Easy Returns</h4>
              <p>30-day hassle-free return policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategorySection


