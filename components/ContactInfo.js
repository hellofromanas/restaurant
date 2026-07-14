"use client";

export default function ContactInfo() {
  return (
    <section className="py-16 px-4 bg-yellow-400/5 rounded-3xl border border-yellow-400/20">
      <h2 className="text-4xl font-bold mb-12 text-center text-yellow-400">Get in Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {/* Phone */}
        <div className="card text-center">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">📞 Phone</h3>
          <a 
            href="tel:+923235560802"
            className="text-yellow-400 hover:text-yellow-300 font-bold transition text-lg"
          >
            +92 323 5560802
          </a>
          <p className="text-sm text-gray-400 mt-2">Call for quick orders</p>
        </div>

        {/* Location */}
        <div className="card text-center">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">📍 Location</h3>
          <p className="text-sm text-gray-300">
            Near Fahad CNG<br/>
            Sultanpur, Havelian<br/>
            Pakistan
          </p>
          <a 
            href="https://maps.app.goo.gl/nybgidxBfczoLRQp8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 text-sm transition block mt-2"
          >
            View on Google Maps →
          </a>
        </div>

        {/* Hours */}
        <div className="card text-center">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">⏰ Hours</h3>
          <p className="text-sm text-gray-300">
            Mon-Thu: 11 AM - 2 AM<br/>
            Fri: 2 PM - 2 AM<br/>
            Sat & Sun: 11 AM - 2 AM
          </p>
        </div>

        {/* WhatsApp */}
        <div className="card text-center">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">💬 WhatsApp</h3>
          <a 
            href="https://wa.me/923235560802"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 font-bold transition"
          >
            Order on WhatsApp
          </a>
          <p className="text-sm text-gray-400 mt-2">Fast & easy ordering</p>
        </div>

        {/* Instagram */}
        <div className="card text-center">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">📷 Instagram</h3>
          <a 
            href="https://www.instagram.com/pizzavibe.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            @pizzavibe.pk
          </a>
        </div>

        {/* Facebook */}
        <div className="card text-center">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">👍 Facebook</h3>
          <a 
            href="https://www.facebook.com/pizzavibe.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            Pizza Vibe
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-yellow-400">Find Us on Map</h3>
        <div className="rounded-2xl overflow-hidden border border-yellow-400/20">
          <iframe
            title="Pizza Vibe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6612.204471385956!2d73.128208!3d34.0412485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de3583322b33fd%3A0x8ebcd363c86e2db6!2sPizza%20Vibe!5e0!3m2!1sen!2s!4v1783977026617!5m2!1sen!2s"
            style={{ border: 0, width: "100%", height: "400px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
