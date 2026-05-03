import { HomeIcon, SearchIcon, ShoppingCartIcon, ShirtIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';



export default function NavBar() {

  return (

    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">

      <h1 className="text-2xl font-bold text-indigo-600 flex items-center gap-1">
        Shop Here
        <ShirtIcon />
      </h1>


      <ul className="hidden md:flex gap-6 text-gray-600 font-medium">

        <li className="hover:text-indigo-600 cursor-pointer flex items-center gap-1">
          <HomeIcon />
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-indigo-600 cursor-pointer flex items-center gap-1">
          <ShoppingCartIcon />
          <Link to="/product">Product</Link>
        </li>
      </ul>


      <div className="flex items-center gap-3">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block px-2 py-1 border rounded-md outline-none focus:ring-2 focus:ring-indigo-400" />
      </div>
    </nav>
  );
}


