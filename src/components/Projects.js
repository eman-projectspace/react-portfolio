import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Baroque Dresses Website',
    image: '/baroque.png',
    description: 'An elegant e-commerce website built using React, Node.js, and MongoDB. Includes admin dashboard, filtering, product detail pages, and user login.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    demoLink: 'https://baroque-clone.vercel.app',
    codeLink: 'https://github.com/eman-projectspace/baroque-dress'
  },
  {
    title: 'Hospital Management System',
    image: '/hospital.png',
    description: 'A PHP & MySQL-based system for patient billing, doctor management, and appointment tracking. Built during internship.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    title: 'Instagram Clone (Frontend)',
    image: '/insta.png',
    description: 'Mini Instagram frontend clone using React, hooks, and Tailwind. Includes like button, comment section, and dark mode.',
    tech: ['React', 'Tailwind'],
    demoLink: '#',
    codeLink: 'https://github.com/eman-projectspace/instagram-clone'
  }
];

const Projects = () => {
  return (
    <section className="bg-blue-950 text-white py-20 px-6 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-100 mb-4">💼 My Projects</h2>
        <p className="text-blue-300">Some of the work I’ve done so far:</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-blue-900 rounded-xl overflow-hidden shadow hover:shadow-xl transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-100">{project.title}</h3>
              <p className="text-blue-300 mt-2">{project.description}</p>
              <div className="text-sm text-blue-400 mt-3 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-blue-800 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-600"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-500 text-blue-300 rounded hover:bg-blue-800"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
