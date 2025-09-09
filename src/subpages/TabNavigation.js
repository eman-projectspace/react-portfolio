import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap, FaLaptopCode, FaUserGraduate, FaBriefcase,
  FaHeart, FaLightbulb
} from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

function TabNavigation() {

  const [activeTab, setActiveTab] = useState('about');

  const education = [
    {
      year: '2025 - 2029',
      title: 'BS AI',
      institution: 'UMT',
      description: 'Currently pursuing degree in BSAI.',
      icon: FaGraduationCap,
      color: 'from-orange-500 to-red-400',
      status: 'Pursuing'
    },
    {
      year: '2024 - 2025',
      title: 'Web Development Course',
      duration: '6 Months',
      institution: 'MERN Stack Training',
      description: 'Comprehensive training in React, Node.js, MongoDB, and Express.js.',
      icon: FaLaptopCode,
      color: 'from-green-500 to-emerald-400'
    },
    {
      year: '2021 - 2023',
      title: 'Intermediate (FSC)',
      institution: 'Punjab Group Of Colleges',
      description: 'Completed intermediate studies with focus on sciences.',
      icon: FaGraduationCap,
      color: 'from-blue-500 to-cyan-400'
    }


  ];

  const experience = [
    {
      year: '2025',
      title: 'Navttac Internship',
      duration: '3 Months',
      institution: 'Government Training Program',
      description: [
        'Learned PHP, MySQL, jQuery.'
      ],
      icon: FaUserGraduate,
      color: 'from-purple-500 to-pink-400'
    }
    ,
    {
      year: 'Dec 2024 - Present',
      title: 'Frontend Developer',
      company: 'Freelance Projects',
      location: 'Remote',
      description: [    // <-- array ✅
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
    <div>   {/* Tab Navigation */}
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
      </AnimatePresence></div>
  )
}

export default TabNavigation