import { HomeIcon, ShoppingCartIcon} from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-indigo-600">Shop Here</h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-gray-600 font-medium">
        <li className="hover:text-indigo-600 cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:text-indigo-600 cursor-pointer"><Link to="/products">Products</Link></li>
      </ul>

      {/* Right */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block px-3 py-1 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <ShoppingCartIcon className="cursor-pointer text-gray-700 hover:text-indigo-600" />
      </div>
    </nav>
  );
}

