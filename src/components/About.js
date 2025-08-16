import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap, FaLaptopCode, FaUserGraduate, FaBriefcase,
  FaRocket, FaHeart, FaLightbulb, FaUsers, FaCode,
  FaMapMarkerAlt, FaEnvelope, FaDownload
} from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');

  const stats = [
    { icon: FaCode, number: '15+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-400' },
    { icon: FaUsers, number: '5+', label: 'Happy Clients', color: 'from-green-500 to-emerald-400' },
    { icon: FaLaptopCode, number: '1000+', label: 'Hours of Coding', color: 'from-purple-500 to-pink-400' },
    { icon: FaRocket, number: '2+', label: 'Years Experience', color: 'from-orange-500 to-red-400' },
  ];

  const education = [
    {
      year: '2021 - 2023',
      title: 'Intermediate (FSC)',
      institution: 'Punjab Group Of Colleges',
      description: 'Completed intermediate studies with focus on sciences.',
      icon: FaGraduationCap,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      year: '2024',
      title: 'Web Development Course',
      duration: '6 Months',
      institution: 'MERN Stack Training',
      description: 'Comprehensive training in React, Node.js, MongoDB, and Express.js.',
      icon: FaLaptopCode,
      color: 'from-green-500 to-emerald-400'
    },
    {
      year: '2024',
      title: 'Navttac Internship',
      duration: '3 Months',
      institution: 'Government Training Program',
      description: 'Learned PHP, MySQL, jQuery.',
      icon: FaUserGraduate,
      color: 'from-purple-500 to-pink-400'
    },
    {
      year: '2025 - 2029',
      title: 'BS Software Engineering',
      institution: 'University',
      description: 'Currently pursuing degree in Software Engineering.',
      icon: FaGraduationCap,
      color: 'from-orange-500 to-red-400',
      status: 'Pursuing'
    }
  ];

  const experience = [
    {
      year: 'Dec 2024 - Present',
      title: 'Frontend Developer',
      company: 'Freelance Projects',
      location: 'Remote',
      description: [
        'Designed and developed responsive UIs using React and Tailwind CSS',
        'Built reusable components and integrated REST APIs',
        'Delivered clean, mobile-friendly layouts for small business clients',
        'Collaborated with clients to understand requirements and deliver solutions'
      ],
      icon: FaBriefcase,
      color: 'from-blue-500 to-cyan-400'
    }
  ];

  const skills = [
    { name: 'React.js', level: 85, color: '#61DAFB' },
    { name: 'JavaScript', level: 80, color: '#F7DF1E' },
    { name: 'HTML5 & CSS3', level: 90, color: '#E34F26' },
    { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
    { name: 'Node.js', level: 70, color: '#339933' },
    { name: 'PHP', level: 75, color: '#777BB4' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0f3460] to-[#16213e] text-white px-6 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
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
            <FaUserGraduate className="text-6xl text-blue-400 mx-auto" />
          </motion.div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Passionate Full Stack Developer from Pakistan, crafting beautiful and functional web experiences
          </p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
              <img
                src="/code-1076533_1280.jpg"
                alt="Eman Waheed"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
              <FaCode className="text-2xl text-white" />
            </div>
          </motion.div>

          {/* Profile Content */}
          <div className="flex-1 max-w-2xl">
            <motion.h2
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Eman Waheed
            </motion.h2>

            <motion.p
              className="text-lg text-blue-200 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Hello! I'm a passionate Full Stack Developer based in Pakistan, specializing in creating responsive and user-friendly web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </motion.p>

            <motion.p
              className="text-blue-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 text-blue-300">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-300">
                <FaEnvelope className="text-blue-400" />
                <span>emanwaheed.dev@gmail.com</span>
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/Eman Waheed Cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="text-2xl text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {['about', 'education', 'experience', 'skills'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${activeTab === tab
                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg'
                : 'bg-blue-900/50 text-blue-300 hover:bg-blue-800/50 border border-blue-500/20'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <FaLightbulb className="text-2xl text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">What I Do</h3>
                  </div>
                  <p className="text-blue-200 leading-relaxed">
                    I specialize in building modern web applications using React, Node.js, and other cutting-edge technologies. My focus is on creating intuitive user experiences and scalable backend solutions.
                  </p>
                </motion.div>

                <motion.div
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <FaHeart className="text-2xl text-blue-400" />
                    <h3 className="text-xl font-semibold text-white">My Passion</h3>
                  </div>
                  <p className="text-blue-200 leading-relaxed">
                    I'm passionate about clean code, beautiful UI design, and solving real-world problems through technology. I love learning new things and sharing knowledge with the developer community.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="text-xl text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <span className="text-sm text-blue-400 font-medium">{item.year}</span>
                      </div>
                      <p className="text-blue-300 font-medium mb-1">{item.institution}</p>
                      {item.duration && (
                        <p className="text-sm text-blue-400 mb-2">Duration: {item.duration}</p>
                      )}
                      <p className="text-blue-200 leading-relaxed">{item.description}</p>
                      {item.status && (
                        <span className="inline-block mt-2 px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="text-xl text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <p className="text-blue-300 font-medium">{item.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-blue-400">
                          <span>{item.location}</span>
                          <span>•</span>
                          <span>{item.year}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start space-x-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span className="text-blue-200 leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-blue-100 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className="h-2 rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">Soft Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability', 'Attention to Detail'].map((skill, index) => (
                      <motion.div
                        key={index}
                        className="p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-blue-200 font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
