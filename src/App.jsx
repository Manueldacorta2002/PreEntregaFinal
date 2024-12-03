import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartContainer from './components/CartContainer';
import CheckoutPage from './pages/CheckoutPage';

const products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 150 },
  { id: 3, name: 'Producto 3', price: 200 },
];

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer products={products} />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
