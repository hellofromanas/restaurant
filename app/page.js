"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Cart from "@/components/Cart";
import Testimonials from "@/components/Testimonials";
import SpecialOffers from "@/components/SpecialOffers";
import AboutUs from "@/components/AboutUs";
import ContactInfo from "@/components/ContactInfo";
import OrderHistory from "@/components/OrderHistory";
import MenuGrid from "@/components/MenuGrid";
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
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <section className="hero-section mb-16 py-20 text-center">
          <div className="mb-4">
            <span className="text-yellow-400 text-sm font-bold tracking-widest uppercase">PUBG x Yellow Fast Food</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-yellow-400">Pizza Vibe</span>
          </h1>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Best late-night pizza, burgers, shawarma and PUBG-style food deals in Havelian
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn-primary">Explore Menu</button>
            <a href="tel:+923235560802" className="btn-secondary">Call Now</a>
          </div>
        </section>

        {/* Order History Toggle */}
        <div className="mb-8 text-center">
          <button
            onClick={() => setShowOrderHistory(!showOrderHistory)}
            className="btn-secondary px-6 py-2"
          >
            {showOrderHistory ? "Hide" : "View"} Order History
          </button>
        </div>

        {showOrderHistory && (
          <div className="mb-12 bg-yellow-400/5 border border-yellow-400/20 rounded-3xl p-8">
            <OrderHistory />
          </div>
        )}

        {/* Special Offers */}
        <section className="mb-16">
          <SpecialOffers />
        </section>

        {/* Full Menu Grid */}
        <section className="mb-16">
          <MenuGrid addToCart={addToCart} />
        </section>

        {/* Shopping Cart */}
        <section className="mb-16">
          <div className="bg-yellow-400/5 border border-yellow-400/20 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">Your Order</h2>
            <Cart cart={cart} setCart={setCart} />
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <Testimonials />
        </section>

        {/* About Us */}
        <section className="mb-16">
          <AboutUs />
        </section>

        {/* Contact Info */}
        <section className="mb-16">
          <ContactInfo />
        </section>
      </main>

      {/* Footer */}
      <footer className="footer mt-20">
        <p>Pizza Vibe · Near Fahad CNG, Sultanpur, Havelian · +92 323 5560802</p>
        <p className="mt-2">
          Instagram: <a href="https://www.instagram.com/pizzavibe.pk" target="_blank" rel="noopener noreferrer">@pizzavibe.pk</a> · 
          Facebook: <a href="https://www.facebook.com/pizzavibe.pk/" target="_blank" rel="noopener noreferrer">Pizza Vibe</a>
        </p>
        <p className="mt-2 text-sm">© 2026 Pizza Vibe. All rights reserved.</p>
      </footer>
    </div>
  );
}