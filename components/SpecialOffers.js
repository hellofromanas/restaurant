"use client";

export default function SpecialOffers() {
  const offers = [
    {
      title: "50% Off Weekdays",
      description: "Monday to Wednesday - Get 50% off on all pizzas",
      icon: "🏷️"
    },
    {
      title: "Free Delivery",
      description: "Orders above Rs 1000 get free delivery in Havelian area",
      icon: "🚚"
    },
    {
      title: "Loyalty Rewards",
      description: "Get 1 point per rupee spent. Redeem for discounts!",
      icon: "🎁"
    },
    {
      title: "Combo Deals",
      description: "Save up to 50% with our PUBG-inspired family meal packages",
      icon: "🎮"
    }
  ];

  return (
    <section className="py-16 px-4 bg-yellow-400/5 rounded-3xl border border-yellow-400/20">
      <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {offers.map((offer, idx) => (
          <div key={idx} className="card hover:border-yellow-400/60 group cursor-pointer">
            <div className="text-5xl mb-4 group-hover:scale-110 transition">{offer.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-yellow-400">{offer.title}</h3>
            <p className="text-sm text-gray-400">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
