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
      title: "Family Combos",
      description: "Save up to 30% with our special family meal packages",
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  return (
    <div className="bg-gray-50 py-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <div className="text-4xl mb-3">{offer.icon}</div>
            <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
            <p className="text-gray-600">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
