import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Baroque MERN Website',
    description: 'Full-stack e-commerce dress website built using React, Node.js, Express, and MongoDB.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    codeLink: 'https://github.com/eman-projectspace/Baroque-mern',
    demoLink: 'https://baroque-mern.vercel.app/'
  },
  {
    title: 'J .',
    description: 'Full-stack e-commerce dress website built using Html, Css, Bootstrap.',
    tech: ['Html', 'Css', 'Bootstrap'],
    codeLink: 'https://github.com/eman-projectspace/Laravel-Website',
    demoLink: 'https://j-website-eman-projectspaces-projects.vercel.app/'
  },
  {
    title: 'YouTube Clone',
    description: 'Static clone of the YouTube homepage using only HTML & CSS.',
    tech: ['HTML', 'CSS'],
    codeLink: 'https://github.com/eman-projectspace/youtube-clone',
    demoLink: 'https://youtube-clone-blue-iota.vercel.app/'
  },
  {
    title: 'Rock Paper Scissors',
    description: 'A fun interactive game using JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/Rock-papper-scissor',
    demoLink: 'https://rock-papper-scissor-git-main-eman-projectspaces-projects.vercel.app/'
  },
  {
    title: 'To-Do List',
    description: 'Dynamic task manager using JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/todo-list',
    demoLink: 'https://todo-list-git-main-eman-projectspaces-projects.vercel.app/'
  },
  {
    title: 'Book Store Website',
    description: 'Dynamic Website using Php Laravel.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Blade', 'Php', 'Laravel', 'MySql'],
    codeLink: 'https://github.com/eman-projectspace/Laravel-Website',
    demoLink: 'https://github.com/eman-projectspace/Laravel-Website'
  }
];

const Projects = () => {
  return (
    <section className="bg-blue-950 text-white py-20 px-6 min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-100 mb-4">💼 My Projects</h2>
        <p className="text-blue-300">Explore some of the projects I’ve built so far 👇</p>
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
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-600"
                >
                  Code
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-500 text-blue-300 rounded hover:bg-blue-800"
                >
                  Live Demo
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
