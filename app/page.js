"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MenuItem from "@/components/MenuItem";
import Cart from "@/components/Cart";
import Testimonials from "@/components/Testimonials";
import SpecialOffers from "@/components/SpecialOffers";
import AboutUs from "@/components/AboutUs";
import ContactInfo from "@/components/ContactInfo";
import OrderHistory from "@/components/OrderHistory";
import { menu } from "@/data/menu";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [showOrderHistory, setShowOrderHistory] = useState(false);

  const addToCart = (item) => {
    const exists = cart.find(i => i.id === item.id);

    if (exists) {
      setCart(cart.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <button
            onClick={() => setShowOrderHistory(!showOrderHistory)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {showOrderHistory ? "Hide" : "View"} Order History
          </button>
        </div>

        {showOrderHistory && (
          <div className="mb-8 bg-gray-100 p-6 rounded">
            <OrderHistory />
          </div>
        )}

        <SpecialOffers />

        <div className="my-12">
          <h2 className="text-3xl font-bold mb-6">Menu</h2>
          <div className="grid grid-cols-2 gap-4 p-4">
            {menu.map(item => (
              <MenuItem key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <Cart cart={cart} setCart={setCart} />
        </div>

        <Testimonials />
        <AboutUs />
        <ContactInfo />
      </div>
    </div>
  );
}