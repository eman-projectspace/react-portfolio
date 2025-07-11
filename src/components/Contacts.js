import React from 'react';
import { motion } from 'framer-motion';

const Contacts = () => {
  return (
    <section className="min-h-screen bg-blue-950 text-white px-6 py-20 flex flex-col items-center">

      {/* Heading with animation */}
      <motion.h2
        className="text-4xl font-bold text-blue-100 mb-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📬 Contact Me
      </motion.h2>

      <motion.p
        className="text-blue-300 mb-10 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Have a project in mind or want to collaborate? Let’s build something amazing together!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        className="w-full max-w-xl bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl shadow-2xl space-y-6"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div>
          <label className="block mb-2 text-blue-200 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-blue-950 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-200 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl bg-blue-950 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-200 font-medium">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full px-4 py-3 rounded-xl bg-blue-950 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition shadow-md"
        >
          🚀 Send Message
        </button>
      </motion.form>

      {/* Optional Contact Info */}
      <motion.div
        className="mt-8 text-blue-300 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Or email me directly at:{" "}
        <a
          href="mailto:emanwaheed001@gmail.com"
          className="underline hover:text-blue-100"
        >
          emanwaheed001@gmail.com
        </a>
      </motion.div>
    </section>
  );
};

export default Contacts;
