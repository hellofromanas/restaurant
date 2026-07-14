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
      <div className="bg-white p-6 rounded shadow text-center">
        <p className="text-gray-500">No previous orders yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Your Order History</h3>
      {orders.map((order, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow">
          <div className="flex justify-between items-start mb-2">
            <span className="font-bold text-green-600">Order #{idx + 1}</span>
            <span className="text-sm text-gray-500">{order.date}</span>
          </div>
          <div className="text-sm text-gray-600">
            <p><strong>Customer:</strong> {order.customer?.name}</p>
            <p><strong>Phone:</strong> {order.customer?.phone}</p>
          </div>
          <div className="mt-2 pt-2 border-t">
            {order.items?.map((item, i) => (
              <p key={i} className="text-sm">
                {item.name} x{item.quantity}
              </p>
            ))}
          </div>
          <div className="mt-2 text-right font-bold">
            Total: Rs {order.total}
          </div>
        </div>
      ))}
    </div>
  );
}
