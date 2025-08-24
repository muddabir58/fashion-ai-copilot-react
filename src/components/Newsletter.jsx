import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1000)
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2 className="newsletter-title">Stay in the Loop</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter for exclusive offers, new arrivals, and style inspiration delivered straight to your inbox.
            </p>
            
            <div className="newsletter-benefits">
              <div className="benefit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Exclusive early access to sales</span>
              </div>
              <div className="benefit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Weekly style inspiration</span>
              </div>
              <div className="benefit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>New collection alerts</span>
              </div>
            </div>
          </div>

          <div className="newsletter-form">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="subscribe-form">
                <div className="form-group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="email-input"
                    required
                  />
                  <button 
                    type="submit" 
                    className={`subscribe-btn ${isLoading ? 'subscribe-btn--loading' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <svg className="loading-spinner" width="20" height="20" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="31.416" strokeDashoffset="31.416">
                          <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                          <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                        </circle>
                      </svg>
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                </div>
                <p className="form-note">
                  By subscribing, you agree to our{' '}
                  <a href="#privacy" className="form-link">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#terms" className="form-link">Terms of Service</a>
                </p>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3>Welcome to the family!</h3>
                <p>Thank you for subscribing. You'll receive your first email soon.</p>
                <button 
                  onClick={() => setIsSubscribed(false)}
                  className="btn btn--outline"
                >
                  Subscribe Another Email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter



