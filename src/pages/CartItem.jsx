import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
import {
  selectCartItems,
  selectTotalQuantity,
  selectTotalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart
} from '../redux/CartSlice.jsx';
import {
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Truck,
  Leaf,
  X,
  CreditCard
} from 'lucide-react';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to remove all plants from your cart?')) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="cart-page">
        <div className="cart-container">
          {/* Cart Header */}
          <header className="cart-header">
            <div>
              <h1 className="cart-title">Your Botanical Cart</h1>
              <p className="cart-subtitle">
                Review your selected houseplants, adjust quantities, and prepare for healthy doorstep delivery.
              </p>
            </div>
            {cartItems.length > 0 && (
              <button
                type="button"
                className="clear-cart-btn"
                onClick={handleClearCart}
                aria-label="Remove all items from shopping cart"
              >
                <Trash2 size={16} />
                <span>Clear All</span>
              </button>
            )}
          </header>

          {/* Empty Cart State */}
          {cartItems.length === 0 ? (
            <div className="empty-cart-view">
              <div className="empty-cart-illustration">
                <div className="empty-icon-circle">
                  <Leaf size={48} className="empty-leaf-icon" />
                </div>
              </div>
              <h2 className="empty-title">Your cart is currently empty</h2>
              <p className="empty-description">
                Looks like you haven't brought any green companions into your cart yet!
                Explore our hand-tended indoor houseplants to purify your air and revitalize your home.
              </p>
              <Link to="/plants" className="continue-shopping-btn primary-btn">
                <ArrowLeft size={18} />
                <span>Browse Plant Catalog</span>
              </Link>
            </div>
          ) : (
            /* Cart Content with Grid Layout */
            <div className="cart-layout">
              {/* Cart Items List */}
              <section className="cart-items-section" aria-label="Shopping Cart Items List">
                <div className="cart-items-header">
                  <span>Product Details</span>
                  <span>Unit Price</span>
                  <span>Quantity</span>
                  <span>Line Total</span>
                  <span className="sr-only">Actions</span>
                </div>

                <div className="cart-items-list">
                  {cartItems.map((item) => {
                    const lineTotal = item.price * item.quantity;

                    return (
                      <article key={item.id} className="cart-item-card">
                        {/* Thumbnail and Info */}
                        <div className="cart-item-info">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-thumb"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = '/images/plant-fallback.svg';
                            }}
                          />
                          <div className="cart-item-text">
                            <h3 className="cart-item-name">{item.name}</h3>
                            <span className="cart-item-cat">{item.category}</span>
                            <span className="cart-item-mobile-price">
                              Unit: ₹{item.price.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>

                        {/* Unit Price (Desktop) */}
                        <div className="cart-item-unit-price">
                          ₹{item.price.toLocaleString('en-IN')}
                        </div>

                        {/* Quantity Controls */}
                        <div className="cart-quantity-controls">
                          <button
                            type="button"
                            className="qty-btn minus"
                            onClick={() => handleDecrease(item.id)}
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus size={15} />
                          </button>
                          <span className="qty-value" aria-label={`Current quantity: ${item.quantity}`}>
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="qty-btn plus"
                            onClick={() => handleIncrease(item.id)}
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus size={15} />
                          </button>
                        </div>

                        {/* Line Total */}
                        <div className="cart-line-total">
                          <span className="line-total-label">Subtotal:</span>
                          <span className="line-total-amount">
                            ₹{lineTotal.toLocaleString('en-IN')}
                          </span>
                        </div>

                        {/* Delete Button */}
                        <div className="cart-item-actions">
                          <button
                            type="button"
                            className="remove-item-btn"
                            onClick={() => handleRemove(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                            title="Remove from cart"
                          >
                            <Trash2 size={18} />
                            <span className="remove-text">Remove</span>
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Back to Shopping Button */}
                <div className="cart-actions-row">
                  <Link to="/plants" className="continue-shopping-link">
                    <ArrowLeft size={18} />
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </section>

              {/* Order Summary Sidebar */}
              <aside className="order-summary-card" aria-label="Order Summary">
                <h2 className="summary-title">Order Summary</h2>

                <div className="summary-row">
                  <span className="summary-label">Total Items</span>
                  <span className="summary-value" id="summary-total-quantity">
                    {totalQuantity} {totalQuantity === 1 ? 'plant' : 'plants'}
                  </span>
                </div>

                <div className="summary-row">
                  <span className="summary-label">Standard Shipping</span>
                  <span className="summary-value free-shipping">FREE (Eco Transit)</span>
                </div>

                <div className="summary-row">
                  <span className="summary-label">Safe Arrival Guarantee</span>
                  <span className="summary-value included">Included</span>
                </div>

                <div className="summary-divider" />

                <div className="summary-row total-row">
                  <span className="summary-total-label">Grand Total</span>
                  <span className="summary-total-amount" id="summary-total-price">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  type="button"
                  id="checkout-button"
                  className="checkout-btn primary-btn"
                  onClick={() => setCheckoutModalOpen(true)}
                  aria-label={`Proceed to checkout for grand total ₹${totalPrice.toLocaleString('en-IN')}`}
                >
                  <CreditCard size={20} />
                  <span>Checkout (Coming Soon!)</span>
                </button>

                {/* Continue Shopping Secondary Button */}
                <Link to="/plants" className="continue-shopping-alt-btn">
                  <span>Continue Shopping</span>
                </Link>

                {/* Guarantee Badges */}
                <div className="summary-trust-badges">
                  <div className="trust-badge">
                    <Truck size={18} />
                    <span>Delivered in 100% Recyclable Eco-Packaging</span>
                  </div>
                  <div className="trust-badge">
                    <ShieldCheck size={18} />
                    <span>30-Day Healthy Plant Guarantee</span>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>

        {/* Coming Soon Modal */}
        {checkoutModalOpen && (
          <div
            className="modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="modal-card">
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setCheckoutModalOpen(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="modal-icon-wrapper">
                <Sparkles size={36} className="modal-sparkle-icon" />
              </div>

              <h2 id="modal-title" className="modal-title">
                Checkout Feature Coming Soon!
              </h2>

              <p className="modal-text">
                Thank you for your interest in ordering from <strong>Paradise Nursery</strong>!
                Our secure digital payment integration is currently undergoing final botanical testing.
              </p>

              <div className="modal-summary-box">
                <p>
                  <strong>Cart Summary:</strong> {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
                </p>
                <p>
                  <strong>Total Value:</strong> ₹{totalPrice.toLocaleString('en-IN')}
                </p>
              </div>

              <p className="modal-subtext">
                Stay tuned! Soon you will be able to bring these gorgeous plants straight to your doorstep.
              </p>

              <div className="modal-actions">
                <button
                  type="button"
                  className="modal-primary-btn"
                  onClick={() => setCheckoutModalOpen(false)}
                >
                  Got It, Thanks!
                </button>
                <Link
                  to="/plants"
                  className="modal-secondary-btn"
                  onClick={() => setCheckoutModalOpen(false)}
                >
                  Explore More Plants
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <Leaf size={20} />
              <span>Paradise Nursery</span>
            </div>
            <p>Your sanctuary for lush indoor greenery, air-purifying plants, and succulents.</p>
          </div>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/plants">Plant Catalog</Link>
            <Link to="/about">About Us</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Paradise Nursery. Handcrafted for botanical lovers. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
