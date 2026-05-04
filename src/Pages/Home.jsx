import React from 'react';
import NavBar from '../components/NavBar';
import {
  DollarSignIcon,
  ShoppingBag,
  TruckIcon,
  UserStarIcon,
  Sparkles,
  BadgePercent,
  ShieldCheck
} from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col gap-28 pb-24">

      {/* HERO SECTION */}
      <section className="py-24 text-center bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
        <h2 className="text-5xl font-bold mb-4">
          Discover Your Style
        </h2>
        <p className="mb-8 text-lg opacity-90">
          Trendy collections at the best price
        </p>
        <Link to="/product" >
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg">
          Shop Now
        </button>
        </Link>
      </section>

      {/* TRUST / STATS SECTION */}
      <section className="px-10">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <UserStarIcon className="mx-auto mb-3 text-indigo-600" size={32} />
            <h3 className="text-xl font-semibold">10,000+ Customers</h3>
            <p className="text-gray-500 text-sm mt-2">Trusted by shoppers worldwide</p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <TruckIcon className="mx-auto mb-3 text-indigo-600" size={32} />
            <h3 className="text-xl font-semibold">Fast Delivery</h3>
            <p className="text-gray-500 text-sm mt-2">Quick & reliable shipping</p>
          </div>

          <div className="p-6 rounded-2xl shadow hover:shadow-lg transition">
            <DollarSignIcon className="mx-auto mb-3 text-indigo-600" size={32} />
            <h3 className="text-xl font-semibold">Secure Payment</h3>
            <p className="text-gray-500 text-sm mt-2">100% safe transactions</p>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="px-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Men", "Women", "Accessories"].map((cat, i) => (
            <div
              key={i}
              className="h-56 rounded-2xl bg-gray-100 flex items-center justify-center text-xl font-semibold hover:scale-105 transition cursor-pointer shadow"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="px-10">
        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6">
            <Sparkles className="mx-auto mb-3 text-pink-500" size={30} />
            <h3 className="font-semibold text-lg">Premium Quality</h3>
            <p className="text-gray-500 text-sm mt-2">
              Handpicked products with best materials
            </p>
          </div>

          <div className="p-6">
            <BadgePercent className="mx-auto mb-3 text-green-500" size={30} />
            <h3 className="font-semibold text-lg">Best Prices</h3>
            <p className="text-gray-500 text-sm mt-2">
              Affordable pricing with great discounts
            </p>
          </div>

          <div className="p-6">
            <ShieldCheck className="mx-auto mb-3 text-blue-500" size={30} />
            <h3 className="font-semibold text-lg">Secure Shopping</h3>
            <p className="text-gray-500 text-sm mt-2">
              Your data is protected & encrypted
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="mx-10 bg-indigo-600 text-white rounded-2xl py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Upgrade Your Style?
        </h2>
        <p className="mb-6 opacity-90">
          Join thousands of happy customers today
        </p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
          Start Shopping
        </button>
      </section>

    </div>
  );
}