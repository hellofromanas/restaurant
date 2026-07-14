"use client";

import { generateWhatsAppLink } from "@/utils/whatsapp";
import { useState } from "react";

export default function Cart({ cart, setCart }) {
  const [customer, setCustomer] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const handleOrder = () => {
    if (!customer.name || !customer.phone) {
      alert("Please fill in your name and phone number");
      return;
    }

    const link = generateWhatsAppLink(cart, customer);
    
    // Save order to history
    const orders = JSON.parse(localStorage.getItem("pizzaVibeOrders") || "[]");
    const newOrder = {
      customer,
      items: cart,
      total: calculateTotal(),
      date: new Date().toLocaleString()
    };
    orders.push(newOrder);
    localStorage.setItem("pizzaVibeOrders", JSON.stringify(orders));
    
    window.open(link, "_blank");
    setCart([]);
    setCustomer({ name: "", address: "", phone: "" });
    alert("Order sent to WhatsApp! Check your phone.");
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">🛒 Your Order ({cart.length} items)</h2>

      {cart.length === 0 ? (
        <p className="text-gray-400 text-center py-8">Your cart is empty. Add items from the menu!</p>
      ) : (
        <>
          <div className="border-b border-yellow-400/20 pb-6 mb-6 max-h-64 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4 p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/10">
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-gray-400">Rs {item.price} × {item.quantity}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <span className="font-bold text-yellow-400">Rs {item.price * item.quantity}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-300 font-bold text-lg"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6 p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20 space-y-3">
            <input
              placeholder="Your Name"
              className="input"
              value={customer.name}
              onChange={e => setCustomer({ ...customer, name: e.target.value })}
            />
            <input
              placeholder="Phone Number"
              className="input"
              value={customer.phone}
              onChange={e => setCustomer({ ...customer, phone: e.target.value })}
            />
            <input
              placeholder="Delivery Address (optional)"
              className="input"
              value={customer.address}
              onChange={e => setCustomer({ ...customer, address: e.target.value })}
            />
          </div>

          <div className="bg-yellow-400/20 border border-yellow-400/40 p-4 rounded-lg mb-6">
            <p className="text-2xl font-bold text-yellow-400 text-center">Total: Rs {calculateTotal()}</p>
          </div>

          <button
            onClick={handleOrder}
            className="btn-primary w-full py-3 text-lg font-bold"
          >
            💬 Order via WhatsApp
          </button>
        </>
      )}
    </div>
  );
}