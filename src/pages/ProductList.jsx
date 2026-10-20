import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import { plants, plantCategories } from '../data/plants.js';
import { addItem, selectCartItems, selectTotalQuantity } from '../redux/CartSlice.jsx';
import {
  Check,
  Plus,
  ShoppingBag,
  Sparkles,
  Sun,
  Droplets,
  ArrowRight,
  Filter
} from 'lucide-react';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [notification, setNotification] = useState(null);

  // Set of plant IDs currently present in cart
  const cartItemIds = new Set(cartItems.map((item) => item.id));

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setNotification(`Added "${plant.name}" to your botanical cart!`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Filter plants based on selected category pill
  const filteredCategories =
    selectedCategory === 'All'
      ? plantCategories
      : plantCategories.filter((cat) => cat === selectedCategory);

  return (
    <div className="page-wrapper">
      <Navbar />

      {/* Toast Notification */}
      {notification && (
        <aside className="toast-notification" role="status" aria-live="polite">
          <Check size={18} />
          <span>{notification}</span>
          <Link to="/cart" className="toast-link">
            View Cart ({totalQuantity})
          </Link>
        </aside>
      )}

      <main className="catalog-page">
        {/* Catalog Hero Banner */}
        <header className="catalog-header">
          <div className="catalog-header-content">
            <div className="catalog-badge">
              <Sparkles size={16} />
              <span>Premium Nursery Collection</span>
            </div>
            <h1 className="catalog-title">Our Indoor Plant Sanctuary</h1>
            <p className="catalog-subtitle">
              Discover carefully acclimatized houseplants for every light level and lifestyle.
              All varieties are shipped in eco-friendly pots with guaranteed healthy arrival.
            </p>

            {/* Category Filter Pills */}
            <nav className="category-filter-bar" aria-label="Filter plants by category">
              <button
                type="button"
                className={`filter-pill ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('All')}
              >
                All Plants ({plants.length})
              </button>
              {plantCategories.map((cat) => {
                const count = plants.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Catalog Categories and Plants */}
        <div className="catalog-body">
          {filteredCategories.map((categoryName) => {
            const categoryPlants = plants.filter((p) => p.category === categoryName);

            return (
              <section key={categoryName} className="category-section" id={categoryName.replace(/\s+/g, '-').toLowerCase()}>
                <div className="category-heading-wrapper">
                  <div>
                    <h2 className="category-heading">{categoryName}</h2>
                    <p className="category-subtext">
                      {categoryName === 'Air-Purifying Plants' &&
                        'Natural bio-filters scientifically proven to enhance indoor oxygenation and eliminate toxins.'}
                      {categoryName === 'Low-Maintenance Plants' &&
                        'Forgiving, drought-resistant varieties tailored for busy professionals and beginner plant lovers.'}
                      {categoryName === 'Succulents and Decorative Plants' &&
                        'Architectural textures, sculptural forms, and statement foliage to complement modern spaces.'}
                    </p>
                  </div>
                  <span className="category-count">{categoryPlants.length} Plants</span>
                </div>

                <div className="plant-grid">
                  {categoryPlants.map((plant) => {
                    const isInCart = cartItemIds.has(plant.id);

                    return (
                      <article key={plant.id} className="plant-card">
                        <div className="plant-image-container">
                          <img
                            src={plant.image}
                            alt={plant.name}
                            className="plant-image"
                            loading="lazy"
                            onError={(e) => {
                              // Reliable local fallback if external network is unavailable
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = '/images/plant-fallback.svg';
                            }}
                          />
                          <span className="plant-badge">{plant.category.split(' ')[0]}</span>
                        </div>

                        <div className="plant-card-body">
                          <div className="plant-title-row">
                            <h3 className="plant-name">{plant.name}</h3>
                            <span className="plant-price">₹{plant.price.toLocaleString('en-IN')}</span>
                          </div>

                          {plant.scientificName && (
                            <p className="plant-scientific">{plant.scientificName}</p>
                          )}

                          <p className="plant-description">{plant.description}</p>

                          <div className="plant-care-tags">
                            {plant.light && (
                              <span className="care-tag" title="Light requirement">
                                <Sun size={13} />
                                {plant.light}
                              </span>
                            )}
                            {plant.water && (
                              <span className="care-tag" title="Watering requirement">
                                <Droplets size={13} />
                                {plant.water}
                              </span>
                            )}
                          </div>

                          <div className="plant-card-footer">
                            <button
                              type="button"
                              id={`add-to-cart-${plant.id}`}
                              className={`add-to-cart-btn ${isInCart ? 'added' : ''}`}
                              onClick={() => handleAddToCart(plant)}
                              disabled={isInCart}
                              aria-label={
                                isInCart
                                  ? `${plant.name} is already added to cart`
                                  : `Add ${plant.name} to cart for ₹${plant.price}`
                              }
                            >
                              {isInCart ? (
                                <>
                                  <Check size={18} className="btn-icon" />
                                  <span>Added to Cart</span>
                                </>
                              ) : (
                                <>
                                  <Plus size={18} className="btn-icon" />
                                  <span>Add to Cart</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Quick Cart Summary Floating Bar when items exist */}
        {totalQuantity > 0 && (
          <aside className="quick-cart-bar" aria-label="Cart quick summary">
            <div className="quick-cart-content">
              <div className="quick-cart-info">
                <ShoppingBag size={22} className="quick-cart-icon" />
                <span>
                  <strong>{totalQuantity}</strong> {totalQuantity === 1 ? 'plant' : 'plants'} in your cart
                </span>
              </div>
              <Link to="/cart" className="quick-cart-cta">
                <span>View Cart & Checkout</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </aside>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <Sparkles size={20} />
              <span>Paradise Nursery</span>
            </div>
            <p>Bringing nature, wellness, and botanical calm into modern interiors.</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Plant Catalog</Link>
            <Link to="/about">About Us</Link>
            <Link to="/cart">Cart ({totalQuantity})</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Paradise Nursery. Handcrafted for botanical lovers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
