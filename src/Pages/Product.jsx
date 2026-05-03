import React, { useState, useEffect } from "react";
import loader from "../assets/loader.gif";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getProductData() {
    try {
      let data = await fetch("https://api.escuelajs.co/api/v1/products");
      let res = await data.json();
      console.log(res); // ✅ fixed
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
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={loader} alt="loading" />
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
      {product.map((e) => (
        <div key={e.id} className="border p-4 rounded-lg shadow">
          <img
            src={e.images?.[0] || "https://picsum.photos/300/200"}
            alt={e.title}
            onError={(ev) =>
              (ev.target.src = "https://picsum.photos/300/200")
            }
          />
          <h2 className="font-bold">{e.title}</h2>
          <p className="text-indigo-600 font-semibold">₹{e.price}</p>
          <p><b>Category:</b> {e.category?.name}</p>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
}