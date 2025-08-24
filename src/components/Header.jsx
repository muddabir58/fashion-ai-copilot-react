import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <a href="/" className="logo">
            <span className="logo__text">FASHION</span>
            <span className="logo__accent">AI</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#women" className="nav__link">Women</a>
            </li>
            <li className="nav__item">
              <a href="#men" className="nav__link">Men</a>
            </li>
            <li className="nav__item">
              <a href="#accessories" className="nav__link">Accessories</a>
            </li>
            <li className="nav__item">
              <a href="#sale" className="nav__link nav__link--sale">Sale</a>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          {/* Search */}
          <button 
            className="header__action header__search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          {/* Account */}
          <a href="#account" className="header__action" aria-label="Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </a>

          {/* Wishlist */}
          <a href="#wishlist" className="header__action" aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </a>

          {/* Cart */}
          <a href="#cart" className="header__action header__cart" aria-label="Shopping Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span className="cart__badge">3</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-overlay__content">
            <div className="search-overlay__header">
              <h2>Search</h2>
              <button 
                className="search-overlay__close"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="search-overlay__input">
              <input 
                type="text" 
                placeholder="Search for products, brands, and more..."
                autoFocus
              />
              <button className="search-overlay__submit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header


