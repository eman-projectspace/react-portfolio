import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMail, FiMapPin, FiUser, FiMessageSquare, FiSend, FiCheck,
  FiGithub, FiLinkedin, FiInstagram
} from "react-icons/fi";
import axios from 'axios';

const Contacts = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      alert("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };



  const socialLinks = [
    {
      icon: FiGithub,
      name: "GitHub",
      url: "https://github.com/eman-projectspace",
      color: "hover:from-gray-700 to-gray-800"
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/emanwaheed",
      color: "hover:from-blue-600 to-blue-700"
    },
    {
      icon: FiInstagram,
      name: "Instagram",
      url: "https://instagram.com/codiing_talks",
      color: "hover:from-pink-500 to-purple-500"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0f3460] to-[#16213e] text-white px-6 py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const icons = ["{ }", "</>", "()", "React", "JS", "CSS", "HTML"];
          const icon = icons[Math.floor(Math.random() * icons.length)];
          const size = Math.random() * 20 + 12;
          const left = Math.random() * 100;
          const delay = Math.random() * 4;
          const duration = 8 + Math.random() * 4;

          return (
            <motion.div
              key={i}
              className="absolute text-blue-400/20 font-mono font-bold"
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FiMessageSquare className="text-6xl text-blue-400 mx-auto" />
          </motion.div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's collaborate and bring your ideas to life!
            I'm always excited to work on new challenges and create amazing web experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <FiSend className="mr-3 text-blue-400" />
                Send Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-blue-200 font-medium mb-2">Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiUser className="text-blue-400 group-focus-within:text-blue-300 transition-colors" />
                    </div>
                    <input
                      type="text"
                      placeholder="Your full name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-blue-950/50 border border-blue-700/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-blue-200 font-medium mb-2">Email</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiMail className="text-blue-400 group-focus-within:text-blue-300 transition-colors" />
                    </div>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-blue-950/50 border border-blue-700/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-blue-200 font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-4 bg-blue-950/50 border border-blue-700/50 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center space-x-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl py-3"
                    >
                      <FiCheck className="text-xl" />
                      <span className="font-medium">Message sent successfully!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Location */}
            <motion.div
              className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-center mr-3">
                  <FiMapPin className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">Location</h4>
              </div>
              <p className="text-blue-200">Lahore, Pakistan</p>
              <p className="text-blue-300 text-sm mt-1">Available for remote work worldwide</p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="text-xl text-blue-400" />
                    <span className="font-medium text-white">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border border-blue-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-200 mb-6">
              Let's discuss your ideas and create something amazing together.
              I'm always excited to work on new challenges!
            </p>
            <motion.a
              href="mailto:emanwaheed.dev@gmail.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
              <span>Start a Conversation</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
