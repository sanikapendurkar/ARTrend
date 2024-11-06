import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import lookify from '../lookify.png';

const HeaderFooter = ({ children, wishlist, products }) => {
  const navigate = useNavigate();
  const [showWishlistDropdown, setShowWishlistDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate('/ProductCatalog', { state: { searchTerm } });
  };

  const handleMenuClick = (category) => {
    navigate('/ProductCatalog', { state: { category } });
  };

  const handleProfileClick = () => {
    if (loggedIn) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const categories = [
    { name: 'Headwear', subcategories: ['Hats', 'Caps', 'Headbands'] },
    { name: 'Eyewear', subcategories: ['Sunglasses', 'Prescription Glasses', 'Aviators'] },
    { name: 'Jewellery', subcategories: ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Anklets'] },
    { name: 'Watches', subcategories: ['Analog Watches', 'Digital Watches', 'Smartwatches'] },
    { name: 'Bags and Clutches', subcategories: ['Handbags', 'Tote Bags', 'Clutches', 'Backpacks', 'Wallets'] },
    { name: 'Footwear', subcategories: ['Sneakers', 'Sandals', 'Heels', 'Loafers', 'Boots', 'Flats'] }
  ];

  return (
    <div className="homepage">
      <header className="header">
        <Link to="/" className="logo">
          <img src={lookify} alt="Jewellery" />
        </Link>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search For Items"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
        <div className="icons">
          {/* Wishlist Icon */}
          <div
            className="wishlist-icon cursor-pointer"
            onMouseEnter={() => setShowWishlistDropdown(true)}
            onMouseLeave={() => setShowWishlistDropdown(false)}
          >
            <span role="img" aria-label="wishlist">🖤</span>
            {showWishlistDropdown && (
              <ul className="wishlist-dropdown">
                {wishlist.length > 0 ? (
                  wishlist.map((itemId) => {
                    const product = products.find(p => p.id === itemId);
                    return (
                      <li key={itemId}>
                        {product ? product.name : 'Product not found'}
                      </li>
                    );
                  })
                ) : (
                  <li>No items in wishlist</li>
                )}
              </ul>
            )}
          </div>

          {/* Cart Icon */}
          <div
            className="cart-icon cursor-pointer"
            onClick={() => navigate('/cart')}
            onMouseEnter={(e) => {
              const cartText = document.createElement('span');
              cartText.textContent = 'Cart';
              cartText.className = 'cart-text';
              e.currentTarget.appendChild(cartText);
            }}
            onMouseLeave={(e) => {
              const cartText = e.currentTarget.querySelector('.cart-text');
              if (cartText) e.currentTarget.removeChild(cartText);
            }}
          >
            <span role="img" aria-label="cart">🛒</span>
          </div>

          {/* Account Icon */}
          <div
            className="account-icon cursor-pointer"
            onMouseEnter={() => setShowAccountDropdown(true)}
            onMouseLeave={() => setShowAccountDropdown(false)}
          >
            <span role="img" aria-label="account">👤</span>
            {showAccountDropdown && (
              <ul className="account-dropdown" style={{ right: 0 }}>
                <li onClick={handleProfileClick}>My Profile</li>
                <li onClick={() => navigate('/orders')}>My Orders</li>
              </ul>
            )}
          </div>
        </div>
      </header>

      <nav className="navbar">
        <ul>
          {categories.map(category => (
            <li className="dropdown-parent" key={category.name}>
              <div onClick={() => handleMenuClick(category.name)}>{category.name}</div>
              <ul className="dropdown">
                {category.subcategories.map(subcategory => (
                  <li key={subcategory} onClick={() => handleMenuClick(subcategory)}>
                    {subcategory}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        {children}
      </main>

      <footer className="footer">
        <div className="footer-content">
          &copy; 2024 Lookify. All rights reserved.
        </div>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};

export default HeaderFooter;
