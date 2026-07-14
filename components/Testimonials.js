"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ahmed Khan",
      city: "Havelian",
      rating: 5,
      text: "Best pizza in town! The ordering through WhatsApp is so convenient. Delivery was super fast!"
    },
    {
      name: "Fatima Ali",
      city: "Islamabad",
      rating: 5,
      text: "Amazing taste and quality. The combo deals are unbeatable. Highly recommended!"
    },
    {
      name: "Hassan Malik",
      city: "Rawalpindi",
      rating: 5,
      text: "Great service and delicious food. Love the PUBG-inspired menu names. Keep it up!"
    },
    {
      name: "Zara Ayub",
      city: "Havelian",
      rating: 5,
      text: "Perfect for late-night cravings. Fresh ingredients and quick delivery. Worth every penny!"
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Customer Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-bold text-lg">{testimonial.name}</h4>
              <span className="text-yellow-500">★★★★★</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">{testimonial.city}</p>
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
