import React, { useState } from 'react';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Kurti',
    price: 799,
    image: 'https://ekantastudio.com/cdn/shop/products/designer-kurti_fe3144d2-67c2-40e3-81f5-595e5fd618af.jpg?v=1747396262'
  },
  {
    id: 2,
    name: 'Earrings',
    price: 299,
    image: 'https://www.theshoppingtree.in/cdn/shop/products/IMG_20230420_170930.jpg?v=1682058120'
  },
  {
    id: 3,
    name: 'Handbag',
    price: 1299,
    image: 'https://assets.ajio.com/medias/sys_master/root/20231129/WUKk/65667024afa4cf41f5a74462/-473Wx593H-466834426-purple-MODEL.jpg'
  }
 
];

function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    const alreadyInCart = cart.find(item => item.id === product.id);
    if (!alreadyInCart) {
      setCart([...cart, product]);
      setMessage(`✅ "${product.name}" added to cart!`);
    } else {
      setMessage(`⚠️ "${product.name}" is already in the cart.`);
    }
    setTimeout(() => setMessage(''), 3000);
  };

  const removeFromCart = (idToRemove) => {
    setCart(cart.filter(item => item.id !== idToRemove));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-center">
          <h1>Andal's Boutique</h1>
          <div className="nav-links">
            <button>Home</button>
            <button onClick={toggleCart}>Cart ({cart.length})</button>
          </div>
        </div>
      </nav>

      {message && <div className="cart-message">{message}</div>}

      {showCart && (
        <div className="cart-preview">
          <h2>🛒 Cart Items</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cart.map(item => (
                  <li key={item.id}>
                    {item.name} — ₹{item.price}
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <p><strong>Total:</strong> ₹{totalPrice}</p>
            </>
          )}
        </div>
      )}
     
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <main className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name || 'Product image'} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
