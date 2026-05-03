import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function ProductsDetails() {
  const { id } = useParams()

  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function getProduct() {
      try {
        let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getProduct()
  }, [id])

  if (!product) {
    return <h2 className="text-center mt-10">Loading...</h2>
  }

  return (
    <div className='mx-auto max-w-7xl px-6 py-24'>
      <div className='grid md:grid-cols-2 gap-10'>

        {/* Image */}
        <div className='bg-white/5 p-10 rounded-2xl'>
          <img
            src={product.image}
            alt={product.title}
            className='w-full h-96 object-contain'
          />
        </div>

        {/* Details */}
        <div>
          <h1 className='text-3xl font-bold'>{product.title}</h1>

          <p className='text-gray-400 mt-2 capitalize'>
            Category: {product.category}
          </p>

          <div className='flex items-center gap-2 mt-3'>
            ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
          </div>

          <p className='text-2xl font-semibold mt-4 text-green-400'>
            ₹{product.price}
          </p>

          <p className='mt-6 text-gray-300 leading-relaxed'>
            {product.description}
          </p>

          <button className='mt-6 bg-blue-600 px-6 py-2 rounded-xl hover:bg-blue-700'>
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  )
}