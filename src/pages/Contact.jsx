import React, { useState } from "react";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submit
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Have a question or need help with your order? We’re here to help. Drop us a message and
          we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="bg-pink-50 p-8 rounded-2xl shadow-md max-w-3xl mx-auto">
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Send Message
          </button>

          {success && (
            <p className="text-green-600 text-center mt-4">✅ Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
