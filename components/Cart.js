"use client";

import { generateWhatsAppLink } from "../utils/whatsapp";
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
    <div className="bg-white p-4 mt-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">🛒 Cart ({cart.length} items)</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="border-b pb-4 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-3 p-2 bg-gray-50 rounded">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Rs {item.price} x {item.quantity}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Rs {item.price * item.quantity}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4 p-3 bg-blue-50 rounded">
            <input
              placeholder="Your Name"
              className="border p-2 w-full mt-2 rounded"
              value={customer.name}
              onChange={e => setCustomer({ ...customer, name: e.target.value })}
            />
            <input
              placeholder="Phone Number"
              className="border p-2 w-full mt-2 rounded"
              value={customer.phone}
              onChange={e => setCustomer({ ...customer, phone: e.target.value })}
            />
            <input
              placeholder="Address (optional)"
              className="border p-2 w-full mt-2 rounded"
              value={customer.address}
              onChange={e => setCustomer({ ...customer, address: e.target.value })}
            />
          </div>

          <div className="bg-green-50 p-3 rounded mb-4">
            <p className="text-lg font-bold">Total: Rs {calculateTotal()}</p>
          </div>

          <button
            onClick={handleOrder}
            className="bg-green-600 text-white w-full p-3 mt-3 rounded font-bold hover:bg-green-700"
          >
            ✓ Order via WhatsApp
          </button>
        </>
      )}
    </div>
  );
}