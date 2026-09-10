import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import SmallDots from '../components/SmallDots';
import Reviews from '../components/Reviews';

const projects = [
  {
    title: 'Baroque — Frontend',
    description:
      'A modern, responsive fashion e-commerce interface built with React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'React Router'],
    codeLink: 'https://github.com/eman-projectspace/Baroque-mern',
    demoLink: 'https://baroque-mern.vercel.app/',
    image: '/baroque.PNG',
  },
  {
    title: 'Spotify Clone',
    description:
      'A responsive music-player interface with functional playback controls, navigation and volume interaction.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/spotify-clone',
    demoLink: 'https://spotify-clone-tan-nine.vercel.app/',
    image: '/Spotify.jpeg',
  },
  {
    title: 'Video Blogger Website',
    description:
      'A professional WordPress website focused on video content, usability and a clean content-driven experience.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS', 'JavaScript'],
    codeLink: '',
    demoLink: '',
    image: '/wp-img.PNG',
  },
  {
    title: 'Twitter Clone',
    description:
      'A responsive social-media interface recreating the core layout and visual experience of Twitter.',
    tech: ['React', 'Tailwind CSS'],
    codeLink: 'https://github.com/eman-projectspace/twitter-clone-tailwind',
    demoLink: 'https://twitter-clone-tailwind-rho.vercel.app/',
    image: '/Twitter-Clone.PNG',
  },
];

const skills = [
  'React + Vite',
  'Tailwind CSS',
  'JavaScript',
  'HTML & CSS',
  'Git & GitHub',
  'PHP / Laravel',
  'REST APIs',
  'Figma to Code',
];

const Home = () => {
  return (
    <main className="min-h-screen bg-[#050b18] text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/fallback.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videoblue-bg.mp4" type="video/mp4" />
        </video>

        {/* Modern dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b18]/70 via-[#071225]/70 to-[#050b18]" />

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-600/10 blur-[100px] rounded-full" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >

          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md text-sm text-slate-300"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Eman
            </span>
          </h1>

          {/* Role */}
          <motion.h2
            className="mt-5 text-xl sm:text-2xl md:text-3xl font-medium text-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            Full Stack Web Developer
          </motion.h2>

          {/* Typewriter */}
          <motion.div
            className="mt-6 max-w-2xl mx-auto min-h-[56px] text-base sm:text-lg text-slate-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Typewriter
              words={[
                'I turn ideas into interactive, high-performing websites.',
                'Clean interfaces. Responsive experiences. Practical solutions.',
                'Building with React, Tailwind, Laravel and modern web technologies.',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={45}
              deleteSpeed={30}
              delaySpeed={1800}
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="/projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#071225] font-semibold hover:bg-cyan-100 transition-all duration-300"
            >
              View My Work
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-md text-white font-semibold hover:bg-white/[0.09] hover:border-cyan-400/40 transition-all duration-300"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="mt-10 flex justify-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a
              href="https://github.com/eman-projectspace"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/eman-waheed-84615b326"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white hover:border-blue-400/40 hover:bg-blue-400/10 transition-all"
            >
              <FaLinkedin size={20} />
            </a>
          </motion.div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-slate-500 tracking-[0.25em] uppercase"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.div>
      </section>

      <SmallDots />

      {/* ================= INTRO ================= */}
      <section className="relative max-w-6xl mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >

          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
              A little about me
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              I enjoy turning ideas into things people can actually use.
            </h2>
          </div>

          <div>
            <p className="text-slate-400 leading-8 text-lg">
              I'm a web developer who enjoys learning how technologies work
              and turning that knowledge into practical projects. I focus on
              building responsive interfaces, useful experiences and clean,
              maintainable applications.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 font-medium transition"
            >
              More about me
              <FaArrowRight className="text-sm" />
            </a>
          </div>

        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="relative py-24 px-6 border-y border-white/[0.06] bg-white/[0.015]">

        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">
              What I work with
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              Skills & Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.035] backdrop-blur-sm p-6 text-center hover:border-cyan-400/30 hover:bg-cyan-400/[0.04] transition-all duration-300"
              >
                <FaCode className="mx-auto mb-3 text-cyan-400/70 group-hover:text-cyan-300 transition" />

                <span className="text-sm sm:text-base text-slate-300 group-hover:text-white transition">
                  {skill}
                </span>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="max-w-7xl mx-auto py-28 px-6">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">
            Selected work
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Projects
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-slate-400">
            A few things I've built while learning, experimenting and solving
            real-world problems.
          </p>

        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1426] hover:border-cyan-400/30 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-slate-900">

                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1426] via-transparent to-transparent opacity-70" />

              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">

                <h3 className="text-lg font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.08] text-[11px] text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Links */}
                <div className="flex items-center gap-5 mt-6 pt-5 border-t border-white/[0.07]">

                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
                    >
                      <FaGithub />
                      Code
                    </a>
                  )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </motion.article>

          ))}

        </div>

        {/* More projects */}
        <div className="flex justify-center mt-12">

          <a
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan-400/30 transition-all"
          >
            Explore all projects
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </a>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative px-6 py-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.07] via-blue-500/[0.08] to-indigo-500/[0.07]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-500/10 blur-[100px] rounded-full" />

        <motion.div
          className="relative max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl px-7 py-14 sm:px-12 text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Have a project in mind?
          </p>

          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Let's build something
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              meaningful together.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-7">
            Whether you need a website, a web application or a developer to
            collaborate with, I'd love to hear what you're working on.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-xl bg-cyan-400 text-[#04101d] font-bold hover:bg-cyan-300 hover:scale-[1.02] transition-all"
          >
            Get in touch
            <FaArrowRight />
          </a>

        </motion.div>
      </section>

      {/* ================= BELIEF ================= */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-5">
            My approach
          </p>

          <blockquote className="text-2xl sm:text-3xl font-medium text-slate-200 leading-relaxed">
            “Every job is a self portrait of the person who did it.
            Autograph your work with excellence.”
          </blockquote>

        </motion.div>

      </section>

      {/* ================= REVIEWS ================= */}
      <Reviews />

      {/* ================= FOOTER ================= */}
      <motion.footer
        className="border-t border-white/[0.08] bg-[#030811]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">

          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">
              © 2026 Eman Waheed
            </p>

            <p className="text-sm text-slate-500 mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/eman-projectspace"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/eman-waheed-84615b326"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition"
            >
              <FaLinkedin size={19} />
            </a>

          </div>

        </div>

      </motion.footer>

    </main>
  );
};

export default Home;