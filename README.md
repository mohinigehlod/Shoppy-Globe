
# 🛍️ ShoppyGlobe – React E-commerce Application

ShoppyGlobe is a basic e-commerce application built with React. It demonstrates essential React concepts including components, routing, props, state management using Redux, data fetching with `useEffect`, and performance optimizations like code-splitting. The app allows users to browse products, view details, manage a shopping cart, and place orders.


## 🎯 Project Requirements Breakdown

### ✅ Component Structure – 
- `App` – Root component
- `Header` – Navigation and cart icon
- `ProductList` – Shows list of products
- `ProductItem` – Represents a single product with "Add to Cart"
- `ProductDetail` – Shows product info by ID
- `Cart` – Manages cart with quantity, remove
- `CartItem` – Each item in cart
- `NotFound` – Handles undefined routes

### 📦 Props – 
- Props used to pass product and cart data between components
- All components are functional and reusable

### 🔄 Data Fetching with useEffect 
- `ProductList`: Fetch from `https://dummyjson.com/products` on mount
- `ProductDetail`: Fetch specific product by ID using route params
- Custom hook `useFetchProducts` created for reusability
- Graceful error handling implemented

### 📦 State Management (Redux) 
- Used Redux Toolkit for cart state
- Implemented actions and reducers for add/remove/update
- Selectors used to retrieve cart details
- Search feature in `ProductList` filters by title or brand

### 🖱️ Event Handling
- `Add to Cart` button on each product item
- `Remove from Cart` and quantity update in cart
- All events dispatch Redux actions correctly

### 🧭 React Routing 
- React Router used for navigation:
  - `/` - Home
  - `/product/:id` - Product Detail
  - `/cart` - Cart Page
  - `/checkout` - Checkout Page
- Dynamic routing for product details

### 📃 React Lists 
- Products and cart items rendered using `.map()`
- Each element has a unique `key` prop

### 🚀 Performance Optimization 
- Code splitting implemented with `React.lazy` and `Suspense`
- Reduces initial bundle size

### 🎨 Styling 
- Styled using CSS and responsive layout
- Mobile-friendly design



## 🧪 Features Overview

| Feature                  | Description |
|--------------------------|-------------|
| 🛒 Product Fetching      | From DummyJSON API |
| 🔍 Product Search        | Filter by title or brand |
| ➕ Add to Cart           | Adds item to cart using Redux |
| ➖ Remove from Cart      | Removes item via Redux |
| 🔢 Quantity Control      | Increment/decrement in cart |
| 💳 Checkout Page        | Enter address and place order |
| ✅ Confirmation          | Order success message shown |
| 🚧 404 Handling          | Friendly not-found page |
| 💻 Responsive Design     | Works on all screen sizes |

## 🛠️ Tech Stack

- React
- Redux Toolkit
- React Router
- CSS
- DummyJSON API

## 📂 Setup Instructions

```bash
git clone https://github.com/mohinigehlod/Shoppy-Globe
cd Shoppy-Globe
npm install
npm run dev
```

## 👩‍💻 Author

Made by Mohini Gehlod 
GitHub: https://github.com/mohinigehlod
