"use client";

export default function AboutUs() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center">About Our Restaurant</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Our Story</h3>
            <p className="text-gray-700 mb-4">
              Started in 2024, our restaurant combines the love of fast food with gaming culture. 
              Inspired by PUBG, we've created a unique dining experience with bold flavors and 
              energetic atmosphere.
            </p>
            <p className="text-gray-700">
              Every dish is crafted with fresh ingredients and served with passion. We believe 
              good food brings people together, whether for a quick meal or a gaming session.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-green-600">Why Choose Us?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Fresh ingredients daily</li>
              <li>✅ Fast delivery within 30 mins</li>
              <li>✅ Hygienic food preparation</li>
              <li>✅ Easy WhatsApp ordering</li>
              <li>✅ Friendly customer service</li>
              <li>✅ Affordable prices</li>
              <li>✅ Open late till 2 AM</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Our Commitment</h3>
          <p className="text-gray-700 text-center">
            We're committed to providing the best food quality, quickest service, and most 
            enjoyable dining experience. Your satisfaction is our success!
          </p>
        </div>
      </div>
    </section>
  );
}
