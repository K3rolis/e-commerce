import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { CategoryPage } from './Pages/CategoryPage/CategoryPage';
import { Home } from './Pages/Home/Home';
import { NotFound } from './Pages/Errors/NotFound';
import { SingleProduct } from './Pages/SingleProduct/SingleProduct';
import { Cart } from './Pages/Cart/Cart';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import { Footer } from './Components/Footer/Footer';
import { FooterNavbar } from './Components/Navbar/FooterNavbar';

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
          <FooterNavbar />
        </Router>

        <Footer />
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
