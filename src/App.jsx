import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import Product from './Pages/Product'
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
          <Route path='/products/details/:id' element={<ProductsDetails />} />
          <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  )
}