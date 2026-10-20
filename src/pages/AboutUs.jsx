import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import {
  Sprout,
  Wind,
  Heart,
  Sparkles,
  ShieldCheck,
  Recycle,
  Award,
  ArrowRight,
  Sun,
  Smile
} from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="about-page">
        {/* About Hero Header */}
        <section className="about-hero">
          <div className="about-hero-badge">
            <Sprout size={16} />
            <span>Rooted in Passion & Nature</span>
          </div>
          <h1 className="about-title">Nurturing Homes, Enriching Lives</h1>
          <p className="about-lead">
            Welcome to Paradise Nursery — your serene sanctuary for hand-tended indoor houseplants.
            We believe that every home deserves a touch of green tranquility, vitality, and living art.
          </p>
        </section>

        {/* Mission Section */}
        <section className="about-section mission-section">
          <div className="section-container">
            <div className="mission-grid">
              <div className="mission-content">
                <span className="section-tag">Our Sacred Mission</span>
                <h2 className="section-title">Bringing Botanical Wonder to Modern Urban Living</h2>
                <p className="section-text">
                  Founded with a deep reverence for the plant kingdom, Paradise Nursery began with
                  a simple observation: in our fast-paced digital world, connecting with living greenery
                  restores balance, joy, and peace of mind.
                </p>
                <p className="section-text">
                  Our mission is to make indoor gardening accessible, effortless, and rewarding for
                  everyone. Whether you are nurturing your very first succulent or curating a lush
                  urban jungle, we provide carefully acclimated plants, ethical care guides, and lifelong
                  botanical support.
                </p>
                <div className="mission-stats">
                  <div className="stat-card">
                    <span className="stat-number">10,000+</span>
                    <span className="stat-label">Happy Plant Parents</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">99.8%</span>
                    <span className="stat-label">Healthy Arrival Rate</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">Sustainable Packaging</span>
                  </div>
                </div>
              </div>
              <div className="mission-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80"
                  alt="Paradise Nursery Greenhouse"
                  className="mission-image"
                  loading="lazy"
                />
                <div className="mission-image-card">
                  <Sparkles size={20} className="card-icon" />
                  <div>
                    <strong>Hand-Grown With Care</strong>
                    <p>Acclimated for real home environments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Benefits of Indoor Plants */}
        <section className="about-section benefits-section">
          <div className="section-container">
            <div className="text-center">
              <span className="section-tag">Living Wellness</span>
              <h2 className="section-title">Why Bring Plants Into Your Space?</h2>
              <p className="section-subtitle">
                Beyond their captivating aesthetic beauty, houseplants provide proven psychological
                and physiological benefits that elevate daily living.
              </p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon-box air">
                  <Wind size={28} />
                </div>
                <h3>Natural Air Purification</h3>
                <p>
                  Plants act as biological bio-filters. NASA clean-air studies demonstrate that species
                  like Snake Plants and Peace Lilies effectively trap volatile organic compounds (VOCs),
                  dust, and toxins while elevating natural room humidity.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon-box stress">
                  <Heart size={28} />
                </div>
                <h3>Mental Well-being & Calm</h3>
                <p>
                  Scientific studies show that interacting with indoor foliage reduces cortisol levels,
                  lowers blood pressure, relieves stress, and sharpens mental focus by up to 20%.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon-box aesthetics">
                  <Sun size={28} />
                </div>
                <h3>Architectural Warmth</h3>
                <p>
                  Greenery softens harsh architectural edges, adds dynamic textures, and transforms
                  sterile corners into inviting, organic living sanctuaries full of life.
                </p>
              </div>

              <div className="benefit-card">
                <div className="benefit-icon-box easy">
                  <Smile size={28} />
                </div>
                <h3>Mindful Routine & Joy</h3>
                <p>
                  Caring for plants offers a grounding ritual. Watching a new leaf unfurl or a vine
                  cascade creates an innate sense of accomplishment and natural rhythm in daily life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Quality & Sustainability */}
        <section className="about-section commitment-section">
          <div className="section-container">
            <div className="commitment-card">
              <div className="commitment-header text-center">
                <span className="section-tag">Our Ethical Promise</span>
                <h2 className="section-title">Rooted in Sustainable Excellence</h2>
                <p className="section-subtitle">
                  We don't just sell plants; we nurture lasting relationships between people and the natural world.
                </p>
              </div>

              <div className="commitments-grid">
                <div className="commitment-item">
                  <ShieldCheck size={32} className="commitment-icon" />
                  <div>
                    <h4>Rigorous Quality Selection</h4>
                    <p>Every plant undergoes thorough inspection of root health, stem vitality, and pest-free foliage before dispatch.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <Recycle size={32} className="commitment-icon" />
                  <div>
                    <h4>Eco-Friendly Practices</h4>
                    <p>Our pots utilize recycled materials and peat-free organic potting blends, paired with 100% plastic-free recyclable transit boxes.</p>
                  </div>
                </div>

                <div className="commitment-item">
                  <Award size={32} className="commitment-icon" />
                  <div>
                    <h4>30-Day Plant Guarantee</h4>
                    <p>If your plant struggles within its first 30 days, our botanical specialists will troubleshoot or replace it free of charge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta-section">
          <div className="cta-container">
            <h2>Ready to Cultivate Your Indoor Paradise?</h2>
            <p>
              Explore our curated collection of air purifiers, resilient low-light wonders,
              and statement succulents today.
            </p>
            <Link to="/plants" className="cta-button primary-btn">
              <span>Browse Plant Catalog</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <Sprout size={22} />
              <span>Paradise Nursery</span>
            </div>
            <p>Bringing vibrant green nature and tranquility into contemporary living spaces.</p>
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
