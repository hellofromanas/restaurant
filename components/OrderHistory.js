"use client";

import { useEffect, useState } from "react";

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("pizzaVibeOrders");
    if (stored) {
      try {
        setOrders(JSON.parse(stored));
      } catch (error) {
        console.error("Error loading orders:", error);
      }
    }
  }, []);

  if (orders.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No previous orders yet. Start with your first order!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-yellow-400 mb-6">📋 Your Order History</h3>
      {orders.map((order, idx) => (
        <div key={idx} className="bg-yellow-400/10 border border-yellow-400/20 p-6 rounded-lg">
          <div className="flex justify-between items-start mb-3 pb-3 border-b border-yellow-400/15">
            <span className="font-bold text-yellow-400">Order #{idx + 1}</span>
            <span className="text-sm text-gray-400">{order.date}</span>
          </div>
          <div className="text-sm text-gray-300 mb-4">
            <p className="mb-1"><strong className="text-yellow-400">Customer:</strong> {order.customer?.name}</p>
            <p className="mb-1"><strong className="text-yellow-400">Phone:</strong> {order.customer?.phone}</p>
            {order.customer?.address && (
              <p><strong className="text-yellow-400">Address:</strong> {order.customer.address}</p>
            )}
          </div>
          <div className="mt-3 pt-3 border-t border-yellow-400/15 bg-yellow-400/5 p-3 rounded">
            <p className="text-xs text-gray-400 mb-2 font-bold">Items:</p>
            {order.items?.map((item, i) => (
              <p key={i} className="text-sm text-gray-300 ml-2">
                • {item.name} × {item.quantity} = Rs {item.price * item.quantity}
              </p>
            ))}
          </div>
          <div className="mt-3 text-right font-bold text-lg text-yellow-400">
            Total: Rs {order.total}
          </div>
        </div>
      ))}
    </div>
  );
}
