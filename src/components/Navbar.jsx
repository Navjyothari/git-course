import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice.jsx';
import { ShoppingBag, Sprout, Menu, X, Home, Compass, Info } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalQuantity = useSelector(selectTotalQuantity);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-container">
      <nav className="navbar" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <div className="brand-icon-wrapper">
            <Sprout className="brand-icon" size={26} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-subtitle">Indoor Botanical Living</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <Home size={18} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/plants"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <Compass size={18} />
            <span>Plants</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            <Info size={18} />
            <span>About Us</span>
          </NavLink>
        </div>

        {/* Cart Link with Badge */}
        <div className="navbar-actions">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'cart-button active' : 'cart-button'
            }
            aria-label={`Shopping Cart with ${totalQuantity} items`}
          >
            <div className="cart-icon-wrapper">
              <ShoppingBag size={22} />
              <span className={`cart-badge ${totalQuantity > 0 ? 'has-items' : ''}`}>
                {totalQuantity}
              </span>
            </div>
            <span className="cart-label">Cart</span>
          </NavLink>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu" role="menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
            }
            onClick={closeMenu}
          >
            <Home size={20} />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/plants"
            className={({ isActive }) =>
              isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
            }
            onClick={closeMenu}
          >
            <Compass size={20} />
            <span>Plants Catalog</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
            }
            onClick={closeMenu}
          >
            <Info size={20} />
            <span>About Us</span>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
            }
            onClick={closeMenu}
          >
            <ShoppingBag size={20} />
            <span>Shopping Cart ({totalQuantity})</span>
          </NavLink>
        </div>
      )}
    </header>
  );
}
