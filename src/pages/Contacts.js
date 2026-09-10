import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiFacebook,
  FiArrowUpRight,
} from "react-icons/fi";
import SmallDots from "../components/SmallDots";

const Contacts = () => {
  const socialLinks = [
    {
      icon: FiGithub,
      name: "GitHub",
      username: "eman-projectspace",
      url: "https://github.com/eman-projectspace",
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      username: "Connect professionally",
      url: "https://www.linkedin.com/in/eman-waheed-84615b326/",
    },
    {
      icon: FiInstagram,
      name: "Instagram",
      username: "@life.incode",
      url: "https://instagram.com/life.incode",
    },
    {
      icon: FiFacebook,
      name: "Facebook",
      username: "Let's connect",
      url: "https://www.facebook.com/profile.php?id=61571853628263&mibextid=ZbWKwL",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050b18] text-white overflow-x-hidden">
      <SmallDots />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 pt-28 pb-16">

        {/* Background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/[0.07] blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          className="relative max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Icon */}
          <motion.div
            className="w-14 h-14 mx-auto mb-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <FiMessageSquare className="text-2xl text-cyan-400" />
          </motion.div>

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Let's Connect
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Get in{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 text-base sm:text-lg leading-7">
            Have an idea, project, or opportunity you'd like to discuss?
            I'm always open to meaningful conversations and new challenges.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ===================================================== */}

      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-6">

            {/* =================================================
                LEFT — CONTACT CARD
            ================================================= */}

            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm p-7 sm:p-9"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Subtle glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/[0.06] blur-3xl rounded-full pointer-events-none" />

              <div className="relative">

                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
                  Contact
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                  Let's build something useful.
                </h2>

                <p className="text-slate-400 leading-7 mb-8">
                  Whether you're looking for a web developer, want to
                  collaborate on a project, or simply want to connect,
                  feel free to reach out.
                </p>

                {/* Email */}
                <motion.a
                  href="mailto:emanwaheed.dev@gmail.com"
                  className="group flex items-center gap-4 p-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] hover:bg-cyan-400/[0.05] hover:border-cyan-400/20 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center">
                    <FiMail className="text-cyan-400 text-lg" />
                  </div>

                  <div className="text-left min-w-0">
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                      Email
                    </p>

                    <p className="text-sm sm:text-base text-slate-200 group-hover:text-cyan-300 transition-colors break-all">
                      emanwaheed.dev@gmail.com
                    </p>
                  </div>

                  <FiArrowUpRight className="ml-auto shrink-0 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                </motion.a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.025]">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center">
                    <FiMapPin className="text-cyan-400 text-lg" />
                  </div>

                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                      Location
                    </p>

                    <p className="text-sm sm:text-base text-slate-200">
                      Lahore, Pakistan
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Available for remote work
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  Open to opportunities and collaborations
                </div>

              </div>
            </motion.div>

            {/* =================================================
                RIGHT — SOCIAL LINKS
            ================================================= */}

            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm p-7 sm:p-9"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/[0.06] blur-3xl rounded-full pointer-events-none" />

              <div className="relative">

                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
                  Social
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                  Find me online.
                </h2>

                <p className="text-slate-400 leading-7 mb-8">
                  You can also find me across these platforms. Feel free
                  to connect, follow my work, or explore what I'm building.
                </p>

                <div className="grid sm:grid-cols-2 gap-3">

                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;

                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.045] hover:border-cyan-400/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: index * 0.08,
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
                          <Icon className="text-slate-400 group-hover:text-cyan-400 transition-colors text-lg" />
                        </div>

                        <div className="text-left min-w-0">
                          <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                            {social.name}
                          </p>

                          <p className="text-xs text-slate-500 truncate mt-0.5">
                            {social.username}
                          </p>
                        </div>

                        <FiArrowUpRight className="ml-auto shrink-0 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                      </motion.a>
                    );
                  })}

                </div>

              </div>
            </motion.div>

          </div>

          {/* =================================================
              EMAIL CTA
          ================================================= */}

          <motion.div
            className="relative mt-6 overflow-hidden rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.07] to-blue-500/[0.04] p-8 sm:p-10 text-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* Glow */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-32 w-72 h-72 bg-cyan-400/[0.07] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative">

              <div className="w-12 h-12 mx-auto mb-5 rounded-2xl bg-cyan-400/10 border border-cyan-400/15 flex items-center justify-center">
                <FiMail className="text-cyan-400 text-xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">
                Have something in mind?
              </h2>

              <p className="max-w-xl mx-auto text-slate-400 leading-7 mb-7">
                I'd love to hear about it. Send me an email and let's
                start a conversation.
              </p>

              <motion.a
                href="mailto:emanwaheed.dev@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-[#04101d] font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-400/10"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiMail />
                Start a Conversation
                <FiArrowUpRight />
              </motion.a>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default Contacts;