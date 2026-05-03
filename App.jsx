import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/NavBar.jsx';
import Footer from './Pages/Footer.jsx';
import Home from './Pages/Home.jsx';
import Product from './Pages/Product.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">

        <Navbar />

        <div className="grow">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/productdetails/:id' element={<ProductDetails/>} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}