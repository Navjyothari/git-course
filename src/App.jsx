import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import AboutUs from './pages/AboutUs.jsx';
import ProductList from './pages/ProductList.jsx';
import CartItem from './pages/CartItem.jsx';
import './App.css';
import {
  Sprout,
  ArrowRight,
  Sparkles,
  Heart,
  ShieldCheck,
  Wind,
  CheckCircle2,
  TreeDeciduous,
  Compass
} from 'lucide-react';

/**
 * Landing Page Component
 * Featuring full-screen botanical background, brand title, tagline, intro,
 * Get Started button, and About Us preview section.
 */
export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <Navbar />

      {/* Full-Screen Botanical Hero Section */}
      <section className="landing-hero" id="landing-hero">
        <div className="landing-overlay">
          <div className="landing-hero-content">
            <div className="landing-badge">
              <Sprout size={18} className="badge-icon" />
              <span>Welcome to Botanical Living</span>
            </div>

            <h1 className="landing-title">Paradise Nursery</h1>
            <p className="landing-tagline">Bring Nature Home</p>

            <p className="landing-intro">
              At Paradise Nursery, we are dedicated to transforming modern living spaces into
              lush, serene, and oxygen-rich sanctuaries. Explore our hand-tended collection of
              NASA-proven air purifiers, resilient low-maintenance foliage, and statement
              succulents — all delivered with guaranteed vitality.
            </p>

            <div className="landing-cta-group">
              <button
                type="button"
                id="get-started-btn"
                className="get-started-btn primary-btn"
                onClick={() => navigate('/plants')}
                aria-label="Get Started and view plant catalog"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>

              <Link
                to="/about"
                className="landing-secondary-btn"
                aria-label="Learn more about Paradise Nursery mission and benefits"
              >
                <span>Our Story</span>
              </Link>
            </div>

            {/* Quick Feature Badges */}
            <div className="landing-feature-strip">
              <div className="feature-pill">
                <Wind size={18} />
                <span>Air Purifying</span>
              </div>
              <div className="feature-pill">
                <Heart size={18} />
                <span>Beginner Friendly</span>
              </div>
              <div className="feature-pill">
                <ShieldCheck size={18} />
                <span>30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small About Us Section on Landing Page */}
      <section className="landing-about-section">
        <div className="landing-about-container">
          <div className="landing-about-grid">
            <div className="landing-about-text">
              <span className="section-tag">About Paradise Nursery</span>
              <h2 className="preview-heading">Cultivating Tranquility & Natural Health</h2>
              <p className="preview-paragraph">
                Paradise Nursery was born from a passion for botanical well-being. We believe that
                surrounding yourself with living green plants elevates creativity, purifies everyday
                indoor air, and creates a grounding sanctuary away from digital distractions.
              </p>
              <p className="preview-paragraph">
                Every plant in our catalog is grown with organic, peat-free practices and acclimated
                specifically for residential spaces. Discover how effortless plant parenting can be.
              </p>

              <div className="landing-about-highlights">
                <div className="highlight-item">
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Curated for apartments, homes & workspaces</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Plastic-free, 100% recyclable shipping packaging</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={20} className="check-icon" />
                  <span>Care instructions included with every plant</span>
                </div>
              </div>

              <div className="preview-actions">
                <Link to="/about" className="preview-link">
                  <span>Explore Our Mission & Plant Benefits</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/plants" className="preview-catalog-btn">
                  <Compass size={18} />
                  <span>Browse All 21 Plants</span>
                </Link>
              </div>
            </div>

            <div className="landing-about-card-visual">
              <div className="visual-card">
                <TreeDeciduous size={40} className="visual-leaf" />
                <h3>Pure Botanical Living</h3>
                <p>
                  From resilient ZZ Plants to majestic Monsteras, every selection brings immediate
                  warmth, cleaner air, and timeless botanical charm to your environment.
                </p>
                <div className="visual-stat">
                  <span className="stat-big">100%</span>
                  <span className="stat-desc">Root Health Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <Sprout size={22} />
              <span>Paradise Nursery</span>
            </div>
            <p>Bringing nature, calm, and botanical wonder to every home.</p>
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

/**
 * Main App Router Component
 */
export default function App() {
  return (
    <div className="app-root">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </div>
  );
}
