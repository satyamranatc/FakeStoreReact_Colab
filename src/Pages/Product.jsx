
import React, { useState, useEffect } from "react";
import loader from "../assets/loader.gif";
import { useNavigate } from "react-router-dom";

export default function Product() {
  let navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProductData() {
    try {
      let data = await fetch("https://fakestoreapi.com/products");
      let res = await data.json();
      console.log(res);
      setProduct(res);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <img src={loader} alt="loading" className="w-40 h-40" />
        <p className="text-lg font-medium text-gray-600">
          Loading products...
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {product.map((e) => (
        <div

          key={e.id}
          className="shadow hover:shadow-lg p-4 rounded-lg shadow bg-slate-100"
          onClick={() => navigate(`/product/details/${e.id}`)}
        >
          <img
            src={e.image}
            alt={e.title}
            className="w-full h-48 object-contain mb-4"
          />

          <h2 className="font-bold">{e.title}</h2>
          <p className="text-indigo-600 font-semibold">₹{e.price}</p>
          <p className="text-gray-700" >
            <b>Category:</b> {e.category?.name}
          </p>

      
          <p className="line-clamp-2">
            {e.description}
          </p>

          <button className="bg-indigo-600 mt-5 text-white py-1 px-3 rounded-full hover:bg-indigo-700 transition" >
            Buy Now
          </button>

        </div>
      ))}
    </div>
  );
}