"use client";

import { useState } from "react";
import { menu } from "@/data/menu";

const categories = [
  "Pizza",
  "Special Pizza",
  "Starters",
  "Burgers",
  "Wraps",
  "Combos"
];

export default function MenuGrid({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("Pizza");

  const filteredItems = menu.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-yellow-400">Menu</h2>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-bold transition ${
              selectedCategory === cat
                ? "bg-yellow-400 text-black"
                : "bg-yellow-400/15 text-yellow-400 hover:bg-yellow-400/25"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item cursor-pointer group">
            <h3>{item.name}</h3>
            
            {item.sizes && (
              <p className="text-xs text-gray-400 mb-2">{item.sizes}</p>
            )}
            
            {item.desc && (
              <p className="text-xs text-gray-400 mb-2">{item.desc}</p>
            )}
            
            <div className="flex justify-between items-center mt-4">
              <span className="price">Rs {item.price}</span>
              <button
                onClick={() => addToCart(item)}
                className="btn-primary text-sm py-1 px-3"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
