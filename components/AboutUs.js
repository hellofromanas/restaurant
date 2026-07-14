"use client";

export default function AboutUs() {
  return (
    <section className="py-16 px-4 bg-yellow-400/5 rounded-3xl border border-yellow-400/20" id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">About Pizza Vibe</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Our Story</h3>
            <p className="text-gray-300 mb-4">
              Pizza Vibe grew from a love of bold flavors and fast service. The menu is inspired by street food culture and playful PUBG energy, with yellow accents and high-octane taste.
            </p>
            <p className="text-gray-300">
              Built for after-dark hunger, we mix pizza, shawarma, burgers and battle-ready deals. Every dish is crafted with fresh ingredients and served with passion.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Fresh ingredients
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Fast delivery & dine-in
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Hygienic preparation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> WhatsApp ordering
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Friendly service
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Affordable prices
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Open till 2 AM
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-400/10 border border-yellow-400/20 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-center text-yellow-400">Special Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-3xl mb-2">🍕</p>
              <h4 className="font-bold text-white mb-2">Special Pizza Crusts</h4>
              <p className="text-sm text-gray-400">Crown crust, kebab crust and donut-style pizza with melted cheese</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🎮</p>
              <h4 className="font-bold text-white mb-2">Combo Mission Deals</h4>
              <p className="text-sm text-gray-400">UMP Duo, Sanhok Single, Erangel Family - PUBG-inspired combos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl mb-2">🌙</p>
              <h4 className="font-bold text-white mb-2">Late Night Ready</h4>
              <p className="text-sm text-gray-400">Open until 2am for dinner, gaming parties and midnight cravings</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Our Commitment</h3>
          <p className="text-gray-300">
            We're committed to providing the best food quality, quickest service, and most enjoyable 
            dining experience. Your satisfaction is our success!
          </p>
        </div>
      </div>
    </section>
  );
}
