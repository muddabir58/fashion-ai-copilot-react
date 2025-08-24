import './FashionHeroSection.css'

function FashionHeroSection() {
  return (
    <section className="fashion-hero" aria-labelledby="fashion-hero-title">
      <div className="fashion-hero__inner">
        <div className="fashion-hero__content">
          <p className="fashion-hero__eyebrow">New Season Drop</p>
          <h1 id="fashion-hero-title" className="fashion-hero__title">Elevate Your Style</h1>
          <p className="fashion-hero__subtitle">Discover the Autumn/Winter collection featuring premium fabrics, modern silhouettes, and timeless essentials.</p>
          <div className="fashion-hero__actions">
            <a href="#shop" className="btn btn--primary">Shop Now</a>
            <a href="#explore" className="btn btn--ghost">Explore Collection</a>
          </div>
          <ul className="fashion-hero__highlights" aria-label="Key highlights">
            <li>
              <span className="highlight__title">Free Shipping</span>
              <span className="highlight__desc">On orders over $50</span>
            </li>
            <li>
              <span className="highlight__title">30-Day Returns</span>
              <span className="highlight__desc">Hassle-free exchanges</span>
            </li>
            <li>
              <span className="highlight__title">New Arrivals</span>
              <span className="highlight__desc">Updated weekly</span>
            </li>
          </ul>
        </div>

        <div className="fashion-hero__visual" role="img" aria-label="Fashion editorial photography">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop"
            alt="Model in autumn fashion outfit"
            className="fashion-hero__image"
          />
        </div>
      </div>
    </section>
  )
}

export default FashionHeroSection


