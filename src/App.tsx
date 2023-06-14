import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/navbar/navbar';
import { CategoryPage } from './Pages/CategoryPage/categoryPage';
import { Home } from './Pages/home/home';
import { NotFound } from './Pages/Errors/notFound';
import { SingleProduct } from './Pages/SingleProduct/singleProduct';
import { Cart } from './Pages/cart/cart';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop/:category" element={<CategoryPage />} />
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/shop/:category/:productId" element={<SingleProduct />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
