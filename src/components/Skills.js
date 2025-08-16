import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaLaravel,
  FaGithub, FaFigma, FaCode,
  FaBrain, FaRocket, FaTools, FaServer, FaPalette
} from 'react-icons/fa';
import {
  SiTailwindcss, SiBootstrap, SiExpress, SiMongodb,
  SiPhp, SiMysql, SiVercel,
  SiFirebase, SiTypescript, SiOpenai,
  SiCanva, SiNotion
} from 'react-icons/si';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillIcons = {
    'HTML5': FaHtml5,
    'CSS3': FaCss3Alt,
    'JavaScript': FaJs,
    'React.js': FaReact,
    'Tailwind CSS': SiTailwindcss,
    'Bootstrap': SiBootstrap,
    'Node.js': FaNodeJs,
    'Express.js': SiExpress,
    'Laravel': FaLaravel,
    'MongoDB': SiMongodb,
    'PHP': SiPhp,
    'MySQL': SiMysql,
    'Git & GitHub': FaGithub,
    'VS Code': FaCode,
    'Figma': FaFigma,
    'Vercel': SiVercel,
    'Firebase': SiFirebase,
    'TypeScript': SiTypescript,
    'ChatGPT / OpenAI': SiOpenai,
    'Google Bard': FaBrain,
    'Canva AI': SiCanva,
    'Notion AI': SiNotion
  };

  const categories = [
    {
      title: 'Frontend Development',
      icon: FaPalette,
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-blue-900/50',
      borderColor: 'border-blue-600',
      skills: [
        { name: 'HTML5', level: 95, color: '#E34F26' },
        { name: 'CSS3', level: 90, color: '#1572B6' },
        { name: 'JavaScript', level: 85, color: '#F7DF1E' },
        { name: 'React.js', level: 80, color: '#61DAFB' },
        { name: 'Tailwind CSS', level: 85, color: '#06B6D4' },
        { name: 'Bootstrap', level: 75, color: '#7952B3' }
      ]
    },
    {
      title: 'Backend Development',
      icon: FaServer,
      color: 'from-green-500 to-emerald-400',
      bgColor: 'bg-green-900/50',
      borderColor: 'border-green-600',
      skills: [
        { name: 'Node.js', level: 70, color: '#339933' },
        { name: 'Express.js', level: 65, color: '#000000' },
        { name: 'Laravel', level: 60, color: '#FF2D20' },
        { name: 'MongoDB', level: 55, color: '#47A248' },
        { name: 'PHP', level: 70, color: '#777BB4' },
        { name: 'MySQL', level: 65, color: '#4479A1' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: FaTools,
      color: 'from-purple-500 to-pink-400',
      bgColor: 'bg-purple-900/50',
      borderColor: 'border-purple-600',
      skills: [
        { name: 'Git & GitHub', level: 85, color: '#F05032' },
        { name: 'VS Code', level: 90, color: '#007ACC' },
        { name: 'Figma', level: 85, color: '#F24E1E' },
        { name: 'Vercel', level: 80, color: '#000000' },
        { name: 'Firebase', level: 50, color: '#FFCA28' }
      ]
    },
    {
      title: 'Currently Learning',
      icon: FaBrain,
      color: 'from-orange-500 to-red-400',
      bgColor: 'bg-orange-900/50',
      borderColor: 'border-orange-600',
      skills: [
        { name: 'TypeScript', level: 40, color: '#3178C6' },
        { name: 'ChatGPT / OpenAI', level: 60, color: '#10A37F' },
        { name: 'Google Bard', level: 55, color: '#4285F4' },
        { name: 'Canva AI', level: 50, color: '#00C4CC' },
        { name: 'Notion AI', level: 45, color: '#000000' }
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0f3460] to-[#16213e] text-white px-6 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
            <FaTools className="text-6xl text-blue-400 mx-auto" />
          </motion.div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            My Skills & Expertise
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of the technologies, tools, and platforms I work with.
            From frontend frameworks to backend systems, I'm constantly expanding my skill set.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className={`${category.bgColor} p-8 rounded-2xl border ${category.borderColor} hover:shadow-2xl hover:shadow-blue-500/20 transform transition-all duration-500 group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skillIcons[skill.name];
                  return (
                    <motion.div
                      key={skillIndex}
                      className="group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {IconComponent && (
                            <IconComponent
                              className="text-xl"
                              style={{ color: skill.color }}
                            />
                          )}
                          <span className="font-semibold text-blue-100 group-hover/skill:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-blue-300 font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-2 rounded-full relative"
                          style={{
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                            width: `${skill.level}%`
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        >
                          {/* Glow effect on hover */}
                          <div
                            className={`absolute inset-0 rounded-full transition-opacity duration-300 ${hoveredSkill === skill.name
                              ? 'opacity-100'
                              : 'opacity-0'
                              }`}
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}40)`,
                              filter: 'blur(4px)'
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-8 rounded-2xl border border-blue-600">
            <FaRocket className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
              I'm passionate about staying up-to-date with the latest technologies and best practices.
              Currently exploring AI tools, TypeScript, and advanced React patterns to enhance my development capabilities.
            </p>
          </div>
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-blue-200">Expert (90-100%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-blue-200">Advanced (80-89%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-blue-200">Intermediate (60-79%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-blue-200">Learning (40-59%)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
