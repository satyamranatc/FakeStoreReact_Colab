import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, Heart } from 'lucide-react'
import axios from 'axios';

export default function Products() {
  
  let navigate = useNavigate();
  const [MOCK_PRODUCTS,set_MOCK_PRODUCTS] = useState([]);

  useEffect(()=>{
    async function getData() {
      let res = await axios.get("https://fakestoreapi.com/products");
      set_MOCK_PRODUCTS(res.data);
    }
    getData();
  },[])

  return (
    <div className='mx-auto max-w-7xl px-6 py-24'>
      
      {/* Header */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-end gap-4'>
        <div>
          <h2 className='text-3xl font-bold'>Featured Collection</h2>
          <p className='text-gray-400 mt-2'>Discover our latest tech innovations.</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        
        {MOCK_PRODUCTS.map((product) => (
          
          <div 
            key={product.id}
            onClick={()=> navigate(`/products/details/${product.id}`)}
            className='cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition'
          >
            
            {/* Image */}
            <div className='h-64 flex items-center justify-center bg-gray-100'>
              <img 
                src={product.image} 
                alt={product.title} 
                className='h-40 object-contain'
              />
            </div>

            {/* Content */}
            <div className='p-4'>
              
              {/* Title */}
              <h3 className='text-sm font-semibold line-clamp-2'>
                {product.title}
              </h3>

              {/* Price */}
              <p className='text-lg font-bold text-green-600 mt-2'>
                ₹{product.price}
              </p>

              {/* Rating */}
              <div className='flex items-center gap-1 mt-2 text-yellow-500'>
                <Star size={16} fill="gold" />
                <span className='text-sm text-gray-600'>
                  {product.rating?.rate}
                </span>
              </div>

              {/* Button */}
              <button className='mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2'>
                <ShoppingCart size={16} />
                Add to Cart
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
  )
}