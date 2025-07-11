import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Laravel', 'MongoDB', 'PHP', 'MySQL']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git & GitHub', 'VS Code', 'Figma', 'Netlify', 'Firebase']
    },
    {
      title: 'Currently Learning',
      skills: [
        'TypeScript',
        'AI Tools:',
        '↳ ChatGPT / OpenAI',
        '↳ Google Bard',
        '↳ Gemini AI',
        '↳ Canva AI',
        '↳ Notion AI'
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-blue-950 text-white px-8 py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-blue-100 mb-2">🛠 My Skills</h2>
        <p className="text-blue-300 text-lg">
          Technologies, tools, and platforms I work with and am currently learning:
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-blue-900 p-6 rounded-2xl border border-blue-700 hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-100 mb-3">{category.title}</h3>
            <ul className="text-blue-300 space-y-2 text-sm">
              {category.skills.map((skill, i) => (
                <li key={i} className={skill.startsWith('↳') ? 'ml-4 list-disc' : ''}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </section>

  );
};

export default Skills;
