import React from "react";

const offers = [
  {
    title: "Summer Sale",
    description: "Up to 50% off on all clothing items. Limited time offer!",
    image: "https://via.placeholder.com/600x300?text=Summer+Sale",
  },
  {
    title: "Buy 1 Get 1 Free",
    description: "On select accessories and fashion items. Don't miss out!",
    image: "https://via.placeholder.com/600x300?text=Buy+1+Get+1+Free",
  },
  {
    title: "Mega Electronics Discount",
    description: "Save big on latest gadgets and electronics.",
    image: "https://via.placeholder.com/600x300?text=Electronics+Discount",
  },
];

const Offers = () => (
  <section className="bg-white py-12 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">🔥 Today's Top Offers</h2>

      <div className="space-y-8">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow border hover:shadow-lg transition duration-300"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-60 object-cover"
              loading="lazy"
            />
            <div className="p-5 bg-gray-50">
              <h3 className="text-xl font-semibold text-pink-600">{offer.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Offers;
