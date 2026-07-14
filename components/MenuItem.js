"use client";

export default function MenuItem({ item, addToCart }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">{item.name}</h2>
      <p>Rs {item.price}</p>
      <button
        onClick={() => addToCart(item)}
        className="bg-green-500 text-white px-3 py-1 mt-2 rounded"
      >
        Add
      </button>
    </div>
  );
}