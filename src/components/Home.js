import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import Reviews from './Reviews';
const letters = ['C', 'O', 'D', 'E', 'R'];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -50, y: 50, rotate: -45 },
  visible: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 100 } }
};




const Home = () => {


  return (
    <section className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center px-4 text-center overflow-x-hidden">

      {/* Profile Image */}
      <motion.div
        className="text-[5rem] mb-6 mt-24"
        initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        👩‍💻
      </motion.div>

      {/* Name & Title */}
      <motion.h1
        className="text-5xl font-extrabold tracking-wide"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi, I'm Eman
      </motion.h1>

      {/*  */}
      <motion.div
        className="flex gap-4 text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mt-3 mb-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span key={index} variants={item}>
            {char}
          </motion.span>
        ))}
      </motion.div>



      <motion.p
        className="mt-2 text-xl text-[#8892b0] font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Full Stack Web Developer | React Specialist
      </motion.p>



      {/* Tagline */}
      <motion.p
        className="max-w-2xl mt-4 text-[#ccd6f6] leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        I turn ideas into interactive, high-performing websites using React & Tailwind. Clean UI. Fast. Responsive.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-6 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a
          href="/Eman Waheed Cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#0a192f] transition"
        >
          View Resume
        </a>
        <a
          href="/contact"
          className="text-[#8892b0] px-6 py-2 rounded-full border border-[#112240] hover:text-white hover:border-white transition"
        >
          Contact Me
        </a>
      </motion.div>



      {/*  2nd portion*/}


      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: -50,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* 3rd */}

      {/* Skills Section */}
      <section className=" w-full py-16 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">🛠️ Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-blue-300 text-lg">
            <span>React</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
            <span>HTML5 & CSS3</span>
            <span>Git & GitHub</span>
            <span>Firebase</span>
            <span>REST APIs</span>
            <span>Figma to Code</span>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className=" w-full py-16 px-6 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
          <p className="text-blue-300 mb-6">
            I’m open to freelance projects, internships, and collaborations. Let’s bring your vision to life.
          </p>
          <a
            href="/contact"
            className="bg-blue-700 px-8 py-3 text-white rounded-full hover:bg-blue-600 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>


      {/* Testimonials */}
      <section className=" w-full py-16 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">✨ What I Believe in </h2>
          <blockquote className="text-blue-300 italic">
            “Every job is a self portrait of the person who did it . Autograph your work with excellence.”
          </blockquote>
          <p className="text-blue-500 mt-2">— </p>
        </motion.div>
      </section>

      {/* <Reviews /> */}


      {/* Footer */}
      <motion.footer
        className="w-full bg-[#0a192f] text-white py-6 border-t-4 border-[#1E90FF] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">© 2025 Eman Waheed</h2>
            <p className="text-sm text-[#8892b0]">Built with ❤️ using React & Tailwind</p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/eman-projectspace"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1E90FF] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/eman-waheed-84615b326"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1E90FF] transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.footer>




    </section>
  );
};

export default Home;
