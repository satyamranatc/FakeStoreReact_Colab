import React, { useState, useEffect } from 'react';
import { Home, Search, ShoppingCart, Shirt , ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getCategories() {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        const unique = [...new Set(data.map(item => item.category?.name))];
        setCategories(unique);
      } catch (err) {
        console.log(err.message);
      }
    }
    getCategories();
  }, []);

  const filteredCategories = categories.filter(cat =>
    cat?.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/product?search=${search}`);
      setShowDropdown(false);
    }
  };

  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-white shadow-sm'>

      <h1 className='text-2xl font-bold text-rose-600 flex items-center gap-1'>
        Shop Here <Shirt/>
      </h1>

      <ul className='hidden md:flex gap-6 text-gray-600 font-medium'>
        <li className='flex items-center gap-1 hover:text-rose-600'>
          <Home/> <Link to="/">Home</Link>
        </li>

        <li className='flex items-center gap-1 hover:text-rose-600'>
          <ShoppingCart/> <Link to="/product">Product</Link>
        </li>
      </ul>

      <div className='relative w-64'>
        <div className='flex items-center gap-2 border rounded-md px-2 py-1'>
          <Search className='text-gray-500'/>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              const value = e.target.value;
              setSearch(value);
              setShowDropdown(true);

              if (value.trim() === "") {
                navigate("/product");
              }
            }}
            onKeyDown={handleSearch}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            className='outline-none text-sm w-full'
          />
        </div>

        {showDropdown && search && (
          <div className='absolute w-full bg-white border mt-1 rounded-lg shadow-md z-10 max-h-40 overflow-y-auto'>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, index) => (
                <p
                  key={index}
                  onClick={() => {
                    navigate(`/product?search=${cat}`);
                    setSearch(cat);
                    setShowDropdown(false);
                  }}
                  className='px-4 py-2 hover:bg-rose-100 cursor-pointer'
                >
                  {cat}
                </p>
              ))
            ) : (
              <p className='px-4 py-2 text-gray-400'>No result</p>
            )}
          </div>
        )}

      </div>

    </nav>
  );
}