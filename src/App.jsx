import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductsDetails from './Pages/Productdetails'
import Footer from './components/Footer'
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Product />} />
          <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
