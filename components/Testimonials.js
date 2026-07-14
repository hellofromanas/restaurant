"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anas",
      city: "Havelian",
      rating: 5,
      text: "Food taste is good, the vibe is strong. Highly recommended!"
    },
    {
      name: "Ali",
      city: "Sultanpur",
      rating: 5,
      text: "Quick delivery and tasty pizza with a PUBG-style twist."
    },
    {
      name: "Fatima",
      city: "Havelian",
      rating: 4,
      text: "Delicious burgers and amazing service. Will order again!"
    },
    {
      name: "Hassan",
      city: "Rawalpindi",
      rating: 5,
      text: "The combo deals are incredible value for money. Highly recommended!"
    }
  ];

  return (
    <section className="py-16 px-4 bg-yellow-400/5 rounded-3xl border border-yellow-400/20">
      <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Customer Reviews</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="testimonial-card">
            <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.city}</p>
              </div>
              <div className="rating">
                {"⭐".repeat(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
