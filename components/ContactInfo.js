"use client";

import { useState } from "react";

export default function ContactInfo() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold mb-2">Phone</h3>
            <a href="tel:+923235560802" className="text-green-600 hover:underline">
              +92 323 5560802
            </a>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-bold mb-2">Location</h3>
            <p className="text-gray-600">
              Near Fahad CNG<br />
              Sultanpur, Havelian
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl mb-3">⏰</div>
            <h3 className="font-bold mb-2">Hours</h3>
            <p className="text-gray-600">
              11 AM - 2 AM<br />
              Daily
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-4 text-lg">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/pizzavibe.pk" target="_blank" rel="noopener noreferrer" 
                 className="text-pink-600 hover:text-pink-800 text-2xl">
                📷 Instagram
              </a>
              <a href="https://facebook.com/pizzavibe.pk" target="_blank" rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 text-2xl">
                👍 Facebook
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-4 text-lg">Order Now</h3>
            <a href="https://wa.me/923235560802" target="_blank" rel="noopener noreferrer"
               className="inline-block bg-green-500 text-white px-6 py-2 rounded font-bold hover:bg-green-600">
              💬 WhatsApp Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
