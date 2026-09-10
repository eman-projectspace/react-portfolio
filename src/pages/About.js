import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaRocket,
  FaCode,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa';

import SmallDots from '../components/SmallDots';
import TabNavigation from '../subpages/TabNavigation';

const About = () => {
  const stats = [
    {
      icon: FaCode,
      number: '10+',
      label: 'Projects Built',
    },
    {
      icon: FaLaptopCode,
      number: '1000+',
      label: 'Hours Coding',
    },
    {
      icon: FaRocket,
      number: '3 Months',
      label: 'Avtacc Internship',
    },
  ];

  return (
    <main className="min-h-screen bg-[#050b18] text-white overflow-x-hidden">

      {/* Background */}
      <SmallDots />

      {/* ================= HEADER ================= */}
      <section className="relative pt-28 pb-16 px-6">

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[450px] h-[300px] bg-cyan-500/[0.07] blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          className="relative max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Get to know me
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-slate-400 leading-7">
            A developer, learner and builder who enjoys turning ideas into
            practical digital experiences.
          </p>
        </motion.div>
      </section>

      {/* ================= PROFILE ================= */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24">

        <motion.div
          className="grid lg:grid-cols-[380px_1fr] gap-10 items-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Profile image */}
          <motion.div
            className="relative mx-auto lg:mx-0"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >

            {/* Glow */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl" />

            {/* Rounded Photo */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 overflow-hidden rounded-full border border-white/10 bg-[#0b1426] shadow-2xl">

              <img
                src="/Eman.jpeg"
                alt="Eman Waheed"
                className="w-full h-full object-cover"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b18]/30 via-transparent to-transparent" />

            </div>

            {/* Internship Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap rounded-full border border-white/10 bg-[#0b1426]/90 backdrop-blur-md px-5 py-3 shadow-xl">

              <div className="w-9 h-9 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <FaLaptopCode className="text-cyan-400" />
              </div>

            </div>

          </motion.div>

          {/* Content */}
          <div>

            <motion.p
              className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hello, I'm
            </motion.p>

            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Eman Waheed
            </motion.h2>

            <motion.p
              className="text-lg text-slate-300 leading-8 mb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              I'm a web developer and AI student who enjoys building modern,
              responsive and useful web experiences. I like taking an idea,
              breaking it down, and turning it into something people can
              actually interact with.
            </motion.p>

            <motion.p
              className="text-slate-400 leading-7 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              My work mainly revolves around React, JavaScript, Tailwind CSS,
              Laravel and WordPress. Along the way, I've also explored APIs,
              backend development, UI design and AI-powered tools.
            </motion.p>

            {/* Contact information */}
            <motion.div
              className="grid sm:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >

              <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span className="text-sm text-slate-300">
                  Lahore, Pakistan
                </span>
              </div>

              <a
                href="mailto:emanwaheed.dev@gmail.com"
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 hover:border-cyan-400/30 transition"
              >
                <FaEnvelope className="text-cyan-400" />
                <span className="text-sm text-slate-300 truncate">
                  emanwaheed.dev@gmail.com
                </span>
              </a>

            </motion.div>

          </div>

        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">

        <div className="max-w-6xl mx-auto px-6 py-20">

          <motion.div
            className="grid sm:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {stats.map((stat, index) => {

              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 text-center hover:bg-white/[0.045] hover:border-cyan-400/25 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >

                  <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-cyan-400/10 flex items-center justify-center">
                    <Icon className="text-xl text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <div className="text-3xl font-bold text-white">
                    {stat.number}
                  </div>

                  <div className="mt-2 text-sm text-slate-500">
                    {stat.label}
                  </div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>

      {/* ================= TAB NAVIGATION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="text-center mb-12">

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">
              Explore
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold">
              My Journey
            </h2>

            <p className="mt-4 text-slate-400">
              Learn more about my education, skills and experience.
            </p>

          </div>

          <TabNavigation />

        </motion.div>

      </section>

      {/* ================= LEARNING ================= */}
      <section className="relative px-6 pb-28">

        <motion.div
          className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-sm p-8 sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[90px] rounded-full" />

          <div className="relative flex flex-col md:flex-row items-start gap-7">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
              <FaRocket className="text-2xl text-cyan-400" />
            </div>

            <div>

              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400 mb-3">
                What's next
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold mb-5">
                Always Learning & Building
              </h3>

              <p className="text-slate-400 leading-7 max-w-3xl">
                Technology changes quickly, and that's one of the things I
                enjoy about development. I'm continuously exploring new tools,
                improving my React skills, learning more about AI and backend
                development, and building projects that challenge me to think
                differently.
              </p>

              <div className="flex flex-wrap gap-2 mt-7">

                {[
                  'React',
                  'AI Tools',
                  'TypeScript',
                  'Laravel',
                  'UI / UX',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </motion.div>

      </section>

      {/* ================= CTA ================= */}
      <section className="relative px-6 pb-28">

        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Let's connect
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            Have an idea worth building?
          </h2>

          <p className="max-w-xl mx-auto mt-4 text-slate-400 leading-7">
            I'm always interested in interesting projects, collaborations and
            opportunities to learn something new.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-xl bg-cyan-400 text-[#04101d] font-bold hover:bg-cyan-300 transition-all"
          >
            Get in touch
            <FaArrowRight />
          </a>

        </motion.div>

      </section>

    </main>
  );
};

export default About;