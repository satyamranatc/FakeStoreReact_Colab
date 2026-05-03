import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProduct();
  }, [id]);

  
  if (!product) {
    return <h2 className='text-center mt-10'>Loading...</h2>;
  }

  return (
    <div className='mx-auto max-w-7xl px-6 py-24'>
      <div className='grid md:grid-cols-2 gap-10 items-center'>

        {/* IMAGE */}
        <div className='bg-white/5 p-10 rounded-2xl flex items-center justify-center'>
          <img
            src={product.images?.[0] || "https://picsum.photos/400/300"}
            alt={product.title}
            className='w-full h-96 object-contain'
            onError={(e) => (e.target.src = "https://picsum.photos/400/300")}
          />
        </div>

        {/* DETAILS */}
        <div>

          <h1 className='text-3xl font-bold'>
            {product.title}
          </h1>

          <p className='text-red-700 mt-2 capitalize'>
            Category: {product.category?.name}
          </p>

          <div className='flex items-center gap-2 mt-3'>
            ⭐ 4.5 (120 reviews)
          </div>

          <p className='text-2xl font-semibold mt-4 text-rose-500'>
            Rs. {product.price}
          </p>

          <p className='text-lg mt-4 text-rose-700 leading-relaxed'>
            {product.description}
          </p>

          <button className='mt-6 bg-rose-500 text-white px-6 py-2 rounded-xl hover:bg-rose-700 transition'>
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}