import React from 'react';
import NavBar from '../components/NavBar';
import { DollarSignIcon, ShoppingBag, TruckIcon, UserStarIcon } from 'lucide-react';


export default function Home() {

  return (

    <div className='flex flex-col gap-24 pb-24'>

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



      <section>

        <div className="px-10 flex justify-between items-center text-center text-black">

          <h3 className=" hover:text-indigo-600 cursor-pointer flex items-center gap-2.5 text-xl font-semibold"> 10,000+ Customers <UserStarIcon /> </h3>

          <div>
            <h3 className="hover:text-indigo-600 cursor-pointer flex items-center gap-2.5 text-xl font-semibold"> Fast Delivery <TruckIcon /> </h3>

          </div>

          <div>
            <h3 className="hover:text-indigo-600 cursor-pointer flex items-center gap-2.5 text-xl font-semibold"> Secure Payment <DollarSignIcon /> </h3>
          </div>

        </div>

      </section>

    </div>
  );
}

