import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiUser } from "react-icons/fi";
import axios from 'axios';

const Contacts = () => {

  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        message
      });
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      alert("Error sending message.");
    }
  };



  return (
    <section className="min-h-screen bg-gradient-to-tr from-blue-950 to-blue-900 text-white px-6 py-20 flex flex-col items-center relative overflow-hidden">

      {/* Floating Symbols */}
      {[...Array(20)].map((_, i) => {
        const icons = ["{ }", "</>", "()", "React", "JS"];
        const icon = icons[Math.floor(Math.random() * icons.length)];
        const size = Math.random() * 18 + 14;
        const left = Math.random() * 100;
        const delay = Math.random() * 4;
        const duration = 8 + Math.random() * 4;

        return (
          <motion.div
            key={i}
            className="absolute text-blue-500 opacity-10 font-mono"
            style={{
              fontSize: `${size}px`,
              left: `${left}%`,
              top: "120%",
              zIndex: 0,
            }}
            initial={{ y: 0 }}
            animate={{ y: "-130%" }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {icon}
          </motion.div>
        );
      })}

      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-2 z-10"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        📬 Get in Touch
      </motion.h2>

      <motion.p
        className="text-blue-300 mb-10 text-center max-w-xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Have a project in mind? Let’s collaborate and bring your ideas to life!
      </motion.p>

      {/* Contact Form Card */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl backdrop-blur-md bg-blue-900/40 p-8 rounded-2xl shadow-2xl z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="mb-4">
          <label className="block mb-1 text-blue-200">Name</label>
          <div className="flex items-center bg-blue-950 rounded-xl border border-blue-700 px-4">
            <FiUser className="text-blue-400 mr-2" />
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 bg-transparent text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-blue-200">Email</label>
          <div className="flex items-center bg-blue-950 rounded-xl border border-blue-700 px-4">
            <FiMail className="text-blue-400 mr-2" />
            <input
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 bg-transparent text-white focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-blue-200">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-blue-950 text-white border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition shadow-md"
        >
          🚀 Send Message
        </button>

        {submitted && (
          <motion.p
            className="text-green-400 mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Your message has been sent!
          </motion.p>
        )}
      </motion.form>

      {/* Quick Contact Info */}
      <motion.div
        className="mt-12 text-sm text-blue-300 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
          <div className="flex items-center gap-2">
            <FiMail className="text-blue-400" />
            <a href="mailto:emanwaheed001@gmail.com" className="hover:text-white underline">
              emanwaheed001@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FiMapPin className="text-blue-400" />
            <span>Lahore, Pakistan</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
