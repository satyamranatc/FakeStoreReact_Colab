import React from 'react'

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="py-20 text-center bg-linear-to-r from-indigo-500 to-pink-500 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Discover Your Style
        </h2>
        <p className="mb-6 text-lg">
          Trendy collections at the best price
        </p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-medium hover:scale-105 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="py-12 px-6">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Featured Products
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((item) => (
            <div key={item} className="bg-white p-4 rounded-xl shadow hover:shadow-lg hover:scale-105 transition">
              <div className="h-40 bg-gray-200 rounded mb-3"></div>
              <h4 className="font-medium">Product Name</h4>
              <p className="text-indigo-600 font-semibold">₹999</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 bg-linear-to-r from-pink-50 to-indigo-50">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          Categories
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Men", "Women", "Kids", "Accessories"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-6 rounded-xl text-center shadow hover:shadow-md hover:scale-105 transition cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}