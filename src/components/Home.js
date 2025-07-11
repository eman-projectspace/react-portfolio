import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Home = () => {
  return (
    <section className="min-h-screen bg-blue-950 text-white flex flex-col items-center justify-center px-4 text-center overflow-x-hidden">

      {/* Profile Image */}
      <motion.img
        src="/Eman.webp"
        alt="Eman"
        className="w-32 h-32 rounded-full border-4 border-blue-700 shadow-lg mb-4 mt-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Name & Title */}
      <motion.h1
        className="text-5xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi, I'm Eman 👋
      </motion.h1>

      <motion.p
        className="mt-2 text-xl text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Frontend Developer | React Specialist
      </motion.p>

      {/* Detailed Tagline */}
      <motion.p
        className="max-w-2xl mt-4 text-blue-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        I turn ideas into interactive, high-performing websites with modern technologies like React and Tailwind. I specialize in crafting clean UI, responsive layouts, and seamless user experiences that leave a lasting impression.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a
          href="/Eman Waheed Dev.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600 transition"
        >
          View Resume
        </a>

        <a
          href="/contact"
          className="border border-blue-500 text-blue-300 px-6 py-2 rounded-full hover:bg-blue-800 transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="mt-6 flex gap-6 text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <a
          href="https://github.com/eman-projectspace"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
      </motion.div>

      {/* What I Do */}
      <motion.div
        className="mt-12 text-blue-200 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-blue-100 mb-4">💡 What I Do</h3>
        <ul className="text-blue-300 space-y-1">
          <li>• Build responsive and accessible web apps</li>
          <li>• Create reusable React components</li>
          <li>• Integrate APIs and backend services</li>
          <li>• Use Git, Figma, Firebase, and modern dev tools</li>
          <li>• Focus on performance, design, and UX</li>
        </ul>
      </motion.div>

      {/* Personal Quote */}
      <motion.p
        className="italic text-blue-400 mt-10 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        “Crafting meaningful web experiences with every line of code.”
      </motion.p>

      {/* Scroll Down Arrow */}
      <motion.div
        className="mt-12 text-blue-500 text-4xl animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 0.6 }}
      >
        <FiChevronDown className="drop-shadow-glow" />
      </motion.div>
    </section>
  );
};

export default Home;
