# Product Detail Page (PDP) Component

A comprehensive, reusable Product Detail Page component for fashion e-commerce applications, built with React and modern CSS.

## Features

### 🎨 **Interactive Image Gallery**
- Main product image with zoom capability
- Thumbnail navigation
- Multiple image support
- Smooth transitions and hover effects

### 🎯 **Product Selection**
- Color selection with visual color swatches
- Size selection with availability indicators
- Quantity selector with increment/decrement
- Real-time validation

### 🛒 **Shopping Features**
- Add to cart functionality
- Add to wishlist functionality
- Price display with discount calculations
- Product badges (New, Sale)

### 📋 **Product Information**
- Tabbed interface (Description, Details, Reviews)
- Detailed product specifications
- Customer reviews and ratings
- Product features and benefits

### 🔗 **Related Products**
- Similar product recommendations
- Interactive product cards
- Quick navigation between products

### 📱 **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Adaptive layouts

## Components

### 1. ProductDetailPage
The main component that renders the complete product detail page.

**Props:**
```jsx
<ProductDetailPage 
  product={productObject}
  onAddToCart={handleAddToCart}
  onAddToWishlist={handleAddToWishlist}
/>
```

### 2. RelatedProducts
Shows related product recommendations.

**Props:**
```jsx
<RelatedProducts 
  products={productsArray}
  currentProductId={productId}
  onProductClick={handleProductClick}
/>
```

### 3. ProductDetailDemo
A demo component showcasing the PDP functionality.

## Product Data Structure

The component expects a product object with the following structure:

```javascript
{
  id: 1,
  name: "Product Name",
  price: 89.99,
  originalPrice: 129.99, // optional
  images: [
    "image-url-1.jpg",
    "image-url-2.jpg"
  ],
  brand: "BRAND NAME",
  category: "Category",
  isNew: true, // optional
  isSale: true, // optional
  colors: [
    { name: "Color Name", value: "#hexcode" }
  ],
  sizes: ["XS", "S", "M", "L", "XL"]
}
```

## Usage Examples

### Basic Implementation
```jsx
import ProductDetailPage from './components/ProductDetailPage'

function App() {
  const handleAddToCart = (product) => {
    console.log('Added to cart:', product)
    // Your cart logic here
  }

  const handleAddToWishlist = (product) => {
    console.log('Added to wishlist:', product)
    // Your wishlist logic here
  }

  return (
    <ProductDetailPage 
      product={productData}
      onAddToCart={handleAddToCart}
      onAddToWishlist={handleAddToWishlist}
    />
  )
}
```

### With Related Products
```jsx
import ProductDetailPage from './components/ProductDetailPage'
import RelatedProducts from './components/RelatedProducts'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  return (
    <div>
      <ProductDetailPage 
        product={selectedProduct}
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
      />
      <RelatedProducts 
        products={products}
        currentProductId={selectedProduct.id}
        onProductClick={setSelectedProduct}
      />
    </div>
  )
}
```

## Styling

The component uses CSS modules with BEM methodology. Key CSS classes:

- `.product-detail` - Main container
- `.product-detail__grid` - Two-column layout
- `.product-detail__images` - Image gallery section
- `.product-detail__info` - Product information section
- `.product-detail__tabs` - Tabbed content section

### Customization

You can customize the styling by overriding CSS variables or modifying the component styles:

```css
.product-detail {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #ff6b6b;
}
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- Lazy loading for images
- Optimized re-renders
- Efficient state management
- Minimal bundle size

## Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast support
- Focus management

## Installation

1. Copy the component files to your project:
   - `ProductDetailPage.jsx`
   - `ProductDetailPage.css`
   - `RelatedProducts.jsx`
   - `RelatedProducts.css`

2. Import and use the components in your application

3. Ensure your product data follows the expected structure

## Demo

To see the component in action, run the application and click "View PDP Demo" on the homepage.

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use in your projects.
