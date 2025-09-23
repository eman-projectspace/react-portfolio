import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import SmallDots from '../components/SmallDots';

// import Reviews from './Reviews';
const letters = ['C', 'O', 'D', 'E', '', '', 'C', 'R', 'A', 'F', 'T', 'S'];

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

// 
const projects = [
  {
    title: 'Baroque-Frontend',
    description: 'A modern and fully responsive Baroque fashion website built using React and Tailwind.',
    tech: ['React', 'Tailwind Css', 'JavaScript', 'React Router'],
    codeLink: 'https://github.com/eman-projectspace/Baroque-mern',
    demoLink: 'https://baroque-mern.vercel.app/',
    image: '/baroque.PNG',
  }, {
    title: 'Spotify Clone',
    description: 'A responsive Spotify music player clone built using HTML, CSS, and JavaScript. Features include a working play/pause, next/previous buttons, and volume control. Developed for learning web development and UI/UX design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/spotify-clone',
    demoLink: 'https://spotify-clone-tan-nine.vercel.app/',
    image: '/Spotify.jpeg',
  },

  {
    title: 'Swifturl',
    description: 'Modern and responsive URL shortener built with Next.js and Tailwind CSS, allowing users to generate, manage, and share shortened links easily with a clean UI.',
    tech: ['Next.js', 'Tailwind Css', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/swifturl',
    demoLink: 'https://swifturl-beryl.vercel.app/',
    image: '/Swifturl.PNG',
  },
  {
    title: 'Twitter Clone',
    description: 'responsive Twitter clone built with Tailwind CSS, replicating the core UI and layout of the social media platform.',
    tech: ['React', 'Tailwindcss'],
    codeLink: 'https://github.com/eman-projectspace/twitter-clone-tailwind',
    demoLink: 'https://twitter-clone-tailwind-rho.vercel.app/',
    image: '/Twitter-Clone.PNG',
  },
];



const Home = () => {


  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center  text-center overflow-x-hidden px-6 py-0">

      {/* Profile Image */}
      <motion.div
        className="text-[5rem] mb-6 mt-24"
        initial={{ scale: 0, rotate: -15, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
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
        className="flex gap-2 text-3xl  font-bold mt-3 mb-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={item}
            whileHover={{ scale: 1.3, color: "#38bdf8" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent cursor-pointer"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>



      <motion.p
        className="mt-2 text-xl font-medium bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        Full Stack Web Developer
      </motion.p>




      {/* Tagline */}
      <motion.p
        className="max-w-2xl mt-4 text-[#ccd6f6] leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <Typewriter
          words={[
            "I turn ideas into interactive, high-performing websites.",
            "Clean UI. Fast. Responsive.",
            "React & Tailwind at their best 🚀"
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </motion.p>



      {/* Animation */}
      <SmallDots />

      {/*2nd  */}

      {/* Skills Section */}
      <section className="w-full py-24 px-6">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12">🛠️ Skills</h2> {/* ⬅️ was mb-8 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-blue-300 text-lg"> {/*  was gap-6 */}
            <span>React+Vite</span>
            <span>Tailwind CSS</span>
            <span>JavaScript</span>
            <span>HTML5 & CSS3</span>
            <span>Git & GitHub</span>
            <span>Php/Laravel</span>
            <span>REST APIs</span>
            <span>Figma to Code</span>
          </div>
        </motion.div>
      </section>


      {/* 3rd Projects */}
      <section className="max-w-6xl mx-auto py-20 px-7 text-white">
        <h2 className="text-3xl font-bold mb-12 text-center tracking-wide">🚀 My Projects</h2>

        <div className="grid gap-10   sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {projects.map(({ title, description, tech, codeLink, demoLink, image }, index) => (
            <motion.div
              key={index}
              className="bg-[#112240] rounded-xl shadow-xl flex flex-col overflow-hidden hover:shadow-blue-500 transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={image}
                alt={`${title} Screenshot`}
                className="w-full h-48 object-cover objext-top rounded-t-xl"
                loading="lazy"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-white hover:text-blue-400 transition-colors cursor-pointer">
                  {title}
                </h3>
                <p className="text-sm text-gray-300 mb-6 flex-grow">{description}</p>

                <div className="mb-5">
                  <h4 className="font-semibold mb-2 text-gray-400 uppercase tracking-wide text-xs">Tech Stack:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                      <li
                        key={i}
                        className="text-xs bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full px-3 py-1 font-semibold text-white shadow-md"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 text-sm font-semibold transition-colors"
                  >
                    Code
                  </a>
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 text-sm font-semibold transition-colors"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">

          <a
            href="/projects"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-colors"
          >
            View More Projects
          </a>
        </div>
      </section>

      {/* 5th Final CTA  Get in touch*/}
      <section
        className="w-full py-20 px-6 text-white bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg')" }}
      >
        {/* Light blue overlay */}
        <div className="absolute inset-0 bg-blue-600/30"></div>

        <motion.div
          className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="md:w-2/3 text-center md:text-left">
            <h2 className="text-4xl font-extrabold mb-4 tracking-wide">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
              Whether you’re looking for freelance support, guidance in web development, or a reliable collaborator,
              I’m here to turn your ideas into clean, performant, and impactful web applications.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-white hover:to-blue-600 text-white font-bold px-10 py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get In Touch
          </a>

        </motion.div>
      </section>



      {/* 5th Testimonials Quote */}
      <section className=" w-full py-20 px-6">
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
            <h2 className="text-lg font-semibold"> 2025 Eman Waheed</h2>
            <p className="text-sm text-[#8892b0]">Built with React & Tailwind</p>
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
