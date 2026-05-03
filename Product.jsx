import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loader from "../assets/loader.gif";

export default function Product() {
  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search") || "";

  useEffect(() => {
    getProductData();
  }, []);

  async function getProductData() {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }

  const normalize = (text) =>
    text.toLowerCase().replace(/[\s-]/g, "");

  const filteredProducts = !search.trim()
    ? products
    : products.filter((item) => {
        const searchText = normalize(search);
        return (
          normalize(item.title).includes(searchText) ||
          normalize(item.category?.name || "").includes(searchText) ||
          normalize(item.description || "").includes(searchText)
        );
      });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={loader} alt="loading" className="w-20" />
        <p className="text-gray-600 mt-2">Loading Products...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-rose-600">
        Our Products
      </h1>

      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No products found 
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/productdetails/${item.id}`)}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition cursor-pointer flex flex-col"
            >
              <div className="h-48 flex items-center justify-center bg-gray-100">
                <img
                  src={item.images?.[0] || "https://picsum.photos/300/200"}
                  alt={item.title}
                  className="h-full object-contain"
                  onError={(e) =>
                    (e.target.src = "https://picsum.photos/300/200")
                  }
                />
              </div>

              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-rose-600 font-semibold line-clamp-1">
                  {item.title}
                </h2>

                <p className="text-rose-500 font-bold">
                  ₹{item.price}
                </p>

                <p className="text-rose-500 font-medium">
                  {item.category?.name}
                </p>

                <p className="text-rose-700 text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}