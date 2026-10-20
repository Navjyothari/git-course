# Paradise Nursery Shopping Application

[![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg?style=flat&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1.6-646CFF.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.2.1-764ABC.svg?style=flat&logo=redux)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React%20Router-6.22.3-CA4245.svg?style=flat&logo=react-router)](https://reactrouter.com/)

A modern, responsive, and aesthetically crafted botanical e-commerce web application for indoor houseplants. Built as a graded final React project, **Paradise Nursery** satisfies all technical and design requirements, featuring state-managed shopping cart operations via Redux Toolkit, dynamic routing with React Router DOM, and a rich botanical user experience.

---

## 🌿 Table of Contents

1. [Project Overview](#-project-overview)
2. [Key Features](#-key-features)
3. [Technology Stack](#-technology-stack)
4. [Project Structure](#-project-structure)
5. [Redux Cart State Architecture](#-redux-cart-state-architecture)
6. [Installation & Running Locally](#-installation--running-locally)
7. [Step-by-Step Testing Guide](#-step-by-step-testing-guide)
8. [Direct GitHub Grading File Links](#-direct-github-grading-file-links)

---

## 📖 Project Overview

**Paradise Nursery** is a dedicated online haven for houseplant lovers and aspiring indoor gardeners. The application provides an intuitive platform to discover, learn about, and purchase 21 hand-tended indoor houseplants divided into three purposeful categories:
- **Air-Purifying Plants** (e.g., Snake Plant, Peace Lily, Boston Fern)
- **Low-Maintenance Plants** (e.g., ZZ Plant, Golden Pothos, Jade Plant)
- **Succulents & Decorative Plants** (e.g., Monstera Deliciosa, Fiddle Leaf Fig, String of Pearls)

Every plant card showcases authentic botanical information, care guidelines, transparent INR (₹) pricing, and responsive cart interaction.

---

## ✨ Key Features

- **Full-Screen Botanical Hero Landing Page (`App.jsx` & `App.css`)**:
  - Immersive high-definition botanical background with sunlit greenhouse atmosphere.
  - Prominent title *Paradise Nursery* and tagline *"Bring Nature Home"*.
  - Introduction to the nursery's mission and prominent "Get Started" call-to-action button that navigates directly to the catalog.
  - Landing page story highlights and quick feature previews.
- **Dedicated About Us Page (`AboutUs.jsx`)**:
  - Exploration of company mission, NASA-backed air purification benefits, stress reduction, and indoor aesthetic enhancement.
  - Ethical commitment to 100% peat-free organic soils, recyclable packaging, and 30-day healthy plant guarantees.
  - Seamless navigation back to the plant catalog.
- **Comprehensive Product Catalog (`ProductList.jsx`)**:
  - 21 distinct houseplant varieties across 3 categories (7 plants per category).
  - Category filter pills for rapid browsing and clean section organization.
  - Instant Add to Cart button with real-time feedback: state flips to disabled and label changes to **"Added to Cart"**.
  - Dynamic button re-enabling: if an item is completely removed from the cart, its Add to Cart button is immediately unlocked again.
  - Floating Quick-Cart bar for effortless checkout navigation.
- **Redux Shopping Cart (`CartSlice.jsx` & `CartItem.jsx`)**:
  - Global cart state powered by Redux Toolkit `createSlice`.
  - Automatic duplicate prevention upon repeated adds.
  - Fine-grained quantity adjustments via plus (`+`) and minus (`-`) buttons.
  - Automatic removal when quantity reaches zero (`0`).
  - Total quantity badge on the shared navigation bar reflecting the **sum of all item quantities**.
  - Precise arithmetic calculation for line totals (`unit price × quantity`) and grand totals in INR (`₹`).
  - "Checkout" button triggering an accessible *"Coming Soon!"* notification modal.
  - "Continue Shopping" button routing back to the catalog.
  - Friendly empty cart state with direct link to browse plants.

---

## 🛠 Technology Stack

- **Framework**: [React 18](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)
- **Styling**: Pure CSS3 with modern CSS custom properties (variables), Flexbox, CSS Grid, and responsive media queries
- **Typography**: Google Fonts (*Outfit* and *Playfair Display*)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
paradise-nursery/
├── public/
│   └── images/
│       ├── hero-bg.jpg            # Full-screen botanical greenhouse hero background
│       └── plant-fallback.svg     # Offline SVG plant artwork fallback
├── src/
│   ├── components/
│   │   └── Navbar.jsx             # Shared responsive navigation bar with dynamic cart badge
│   ├── data/
│   │   └── plants.js              # Central catalog containing 21 houseplants across 3 categories
│   ├── redux/
│   │   ├── store.js               # Redux Toolkit store configuration
│   │   └── CartSlice.jsx          # Shopping cart slice (actions & reducers)
│   ├── pages/
│   │   ├── AboutUs.jsx            # Mission, plant benefits, and sustainability promise
│   │   ├── ProductList.jsx        # Responsive plant catalog with category filters
│   │   └── CartItem.jsx           # Full shopping cart page with quantity & total calculations
│   ├── App.jsx                    # Landing page hero & main React Router setup
│   ├── App.css                    # Complete botanical styling system & background imagery
│   └── main.jsx                   # Application entry point with Redux Provider & BrowserRouter
├── index.html                     # HTML document shell with fonts and metadata
├── package.json                   # Dependencies and npm scripts
├── vite.config.js                 # Vite build & development configuration
└── README.md                      # Complete project documentation
```

---

## 🧠 Redux Cart State Architecture

The shopping cart state is managed centrally in `src/redux/CartSlice.jsx` and provided through `src/redux/store.js`.

### State Structure:
```javascript
{
  cart: {
    items: [
      {
        id: 1,
        name: 'Snake Plant',
        price: 449,
        image: 'https://images.unsplash.com/...',
        category: 'Air-Purifying Plants',
        quantity: 2
      }
    ]
  }
}
```

### Action Creators:
1. **`addItem(product)`**: Appends a selected plant into `state.items` with an initial `quantity: 1`. If the item is already present, accidental duplicates are avoided.
2. **`increaseQuantity(id)`**: Increments the targeted item's `quantity` by `1`.
3. **`decreaseQuantity(id)`**: Decrements the targeted item's `quantity` by `1`. If the quantity drops to zero (`0`), the item is automatically excised from `state.items`.
4. **`removeItem(id)`**: Completely removes the targeted item from the cart regardless of its quantity.
5. **`clearCart()`**: Resets `state.items` to an empty array (`[]`).

### Selectors:
- `selectCartItems`: Selects the list of cart items.
- `selectTotalQuantity`: Computes $\sum (\text{item.quantity})$ to display on the navigation cart badge and summary card.
- `selectTotalPrice`: Computes $\sum (\text{item.price} \times \text{item.quantity})$ formatted in Indian Rupees.

---

## 🚀 Installation & Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v16.0.0 or higher recommended)
- `npm` (v8.0.0 or higher)

### Setup Steps
1. Clone or navigate into the project directory:
   ```bash
   cd "paradise-nursery"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 🧪 Step-by-Step Testing Guide

Follow these steps to verify full project compliance:

1. **Landing Page Verification (`/`)**:
   - Verify the full-screen botanical background is rendered via `App.css`.
   - Check title *"Paradise Nursery"*, tagline *"Bring Nature Home"*, and introductory paragraphs.
   - Click the **"Get Started"** button and confirm it navigates to `/plants`.
   - Check the **"Our Story"** button and confirm it navigates to `/about`.
2. **About Us Page Verification (`/about`)**:
   - Inspect the company mission, 4 benefit cards (Air, Calm, Aesthetics, Joy), and sustainability pledge.
   - Click **"Browse Plant Catalog"** to navigate to `/plants`.
3. **Catalog & Cart Addition Verification (`/plants`)**:
   - Confirm all 21 houseplants are rendered with name, category, price in INR (₹), thumbnail, and description.
   - Click **"Add to Cart"** on any plant (e.g. *Snake Plant*).
   - Observe that the button immediately disables and updates its label to **"Added to Cart"**.
   - Notice the top navigation cart badge increments immediately to `1`.
   - Add another plant (e.g. *ZZ Plant*) and confirm the cart badge updates to `2`.
4. **Cart Operations Verification (`/cart`)**:
   - Click on the cart link or icon in the navbar.
   - Verify each item displays its thumbnail, title, unit price, quantity, and correct line total (`unit price × quantity`).
   - Click the plus (`+`) button on an item: verify quantity increments, line total updates, navbar badge increments, and Grand Total updates.
   - Click the minus (`-`) button: verify quantity decrements.
   - Click minus (`-`) on an item with quantity `1`: verify the item is removed from the cart.
   - Click the **"Remove"** trash button on another item: verify it is removed completely.
   - Return to `/plants` and observe that the removed product's **"Add to Cart"** button is re-enabled!
5. **Checkout & Empty State Verification**:
   - In the cart, click the **"Checkout"** button: verify the *"Checkout Feature Coming Soon!"* modal appears with the accurate order summary.
   - Close the modal.
   - Remove any remaining items until the cart is empty: verify the friendly empty state appears with a **"Browse Plant Catalog"** button.

---

## 🔗 Direct GitHub Grading File Links

The repository is hosted at [https://github.com/Navjyothari/git-course](https://github.com/Navjyothari/git-course). The 7 required grading files are located at the following exact direct URLs:

1. **`README.md`**:  
   https://github.com/Navjyothari/git-course/blob/main/README.md
2. **`AboutUs.jsx`**:  
   https://github.com/Navjyothari/git-course/blob/main/src/pages/AboutUs.jsx
3. **`App.css`**:  
   https://github.com/Navjyothari/git-course/blob/main/src/App.css
4. **`App.jsx`**:  
   https://github.com/Navjyothari/git-course/blob/main/src/App.jsx
5. **`CartSlice.jsx`**:  
   https://github.com/Navjyothari/git-course/blob/main/src/redux/CartSlice.jsx
6. **`ProductList.jsx`**:  
   https://github.com/Navjyothari/git-course/blob/main/src/pages/ProductList.jsx
7. **`CartItem.jsx`**:  
   https://github.com/Navjyothari/git-course/blob/main/src/pages/CartItem.jsx

---

## 🌿 License & Academic Integrity

This project is built for the final graded React coursework. All rights reserved.
