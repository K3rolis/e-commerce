import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/navbar/navbar';
import { CategoryPage } from './Pages/CategoryPage/categoryPage';
import { Home } from './Pages/home/home';
import { NotFound } from './Pages/Errors/notFound';
import { SingleProduct } from './Pages/SingleProduct/singleProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/shop/:category/:productId" element={<SingleProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
