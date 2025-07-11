import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen bg-blue-950 text-white px-8 py-20 flex flex-col items-center">

      {/* Profile Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.img
          src="/Eman.webp"
          alt="Eman"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-blue-700 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-blue-100">About Me</h2>
          <p className="text-blue-200">
            Hello! I’m Eman, a frontend developer based in Pakistan. I love crafting responsive and user-friendly web experiences using React and Tailwind CSS.
          </p>
          <p className="mt-4 text-blue-300">
            I'm passionate about clean code, beautiful UI, and continuous learning. I enjoy building projects that solve real problems.
          </p>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="w-full max-w-4xl mb-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-6 text-blue-100 border-b border-blue-700 pb-2">🎓 Education</h3>
        <ul className="space-y-4">
          <li>
            <h4 className="text-xl font-semibold text-white">Intermediate (FSC)</h4>
            <p className="text-blue-300">Punjab Group Of Colleges – 2021 - 2023</p>
          </li>
          <li>
            <h4 className="text-xl font-semibold text-white">Web Development Course – 6 Months</h4>
            <p className="text-blue-300">Learned MERN stack (React, Node.js, MongoDB, Express)</p>
          </li>
          <li>
            <h4 className="text-xl font-semibold text-white">Navttac Internship – 3 Months</h4>
            <p className="text-blue-300">Learned PHP, MySQL, jQuery and worked on real projects</p>
          </li>
          <li>
            <h4 className="text-xl font-semibold text-white">
              BS Software Engineering <span className="text-sm text-blue-400">(Pursuing)</span>
            </h4>
            <p className="text-blue-300 italic">Expected Duration: 2025 – 2029</p>
          </li>
        </ul>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="w-full max-w-4xl"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-semibold mb-6 text-blue-100 border-b border-blue-700 pb-2">💼 Experience</h3>
        <ul className="space-y-4">
          <li>
            <h4 className="text-xl font-semibold text-white">Frontend Developer – Freelance Projects</h4>
            <p className="text-blue-300">Remote | Dec 2024 – Present</p>
            <p className="text-blue-400 text-sm">
              • Designed and developed responsive UIs using React and Tailwind CSS
              <br />
              • Built reusable components and integrated APIs
              <br />
              • Delivered clean, mobile-friendly layouts for small business clients
            </p>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
