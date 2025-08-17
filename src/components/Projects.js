import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaFilter,
  FaStar,
  FaRocket,
  FaPalette,
  FaShoppingCart,
  FaGamepad,
  FaEdit
} from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Baroque',
    description: 'A stylish and fully responsive Baroque fashion website built using pure HTML, CSS, and JavaScript to showcase elegant dress collections.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/BAROQUE',
    demoLink: 'https://baroque-topaz.vercel.app/',
    image: '/baroque.PNG',
    category: 'E-commerce',
    featured: true,
    difficulty: 'Intermediate',
    status: 'Live'
  },
  {
    id: 2,
    title: 'J .',
    description: 'Full-stack e-commerce dress website built using Html, Css, Bootstrap.',
    tech: ['Html', 'Css', 'Bootstrap'],
    codeLink: 'https://github.com/eman-projectspace/J.-website',
    demoLink: 'https://j-website-eman-projectspaces-projects.vercel.app/',
    image: '/j. - Copy.PNG',
    category: 'E-commerce',
    featured: false,
    difficulty: 'Intermediate',
    status: 'Live'
  },
  {
    id: 3,
    title: 'Shoe Landing Page',
    description: 'This is a fully responsive product landing page created using HTML and CSS. Clean layout, modern design, mobile-friendly.',
    tech: ['HTML', 'CSS'],
    codeLink: 'https://github.com/eman-projectspace/shoe-landing-page',
    demoLink: 'https://shoe-landing-page-six.vercel.app/',
    image: '/shoe-landing.jpeg',
    category: 'Landing Page',
    featured: false,
    difficulty: 'Beginner',
    status: 'Live'
  },
  {
    id: 4,
    title: 'Ultra Edit Clone',
    description: 'A responsive clone of the UltraEdit download page using HTML and CSS. Built for learning and UI design practice.',
    tech: ['HTML', 'CSS'],
    codeLink: 'https://github.com/eman-projectspace/ultraEdit-clone',
    demoLink: 'https://ultra-edit-clone-sage.vercel.app/',
    image: '/ultra-edit.jpeg',
    category: 'Clone',
    featured: false,
    difficulty: 'Beginner',
    status: 'Live'
  },
  {
    id: 5,
    title: 'YouTube Clone',
    description: 'Static clone of the YouTube homepage using only HTML & CSS.',
    tech: ['HTML', 'CSS'],
    codeLink: 'https://github.com/eman-projectspace/youtube-clone',
    demoLink: 'https://youtube-clone-blue-iota.vercel.app/',
    image: '/youtube clone.PNG',
    category: 'Clone',
    featured: false,
    difficulty: 'Beginner',
    status: 'Live'
  },
  {
    id: 6,
    title: 'Baroque MERN Website',
    description: 'Full-stack e-commerce dress website built using React, Node.js, Express, and MongoDB.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    codeLink: 'https://github.com/eman-projectspace/Baroque-mern',
    demoLink: 'https://baroque-mern.vercel.app/',
    image: '/baroque.PNG',
    category: 'Full-Stack',
    featured: true,
    difficulty: 'Advanced',
    status: 'Live'
  },
  {
    id: 7,
    title: 'Rock Paper Scissors',
    description: 'A fun interactive game using JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/Rock-papper-scissor',
    demoLink: 'https://rock-papper-scissor-git-main-eman-projectspaces-projects.vercel.app/',
    image: '/rock-paper-scissor.PNG',
    category: 'Game',
    featured: false,
    difficulty: 'Beginner',
    status: 'Live'
  },
  {
    id: 8,
    title: 'Book Store Website',
    description: 'Dynamic Website using Php Laravel.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Blade', 'Php', 'Laravel', 'MySql'],
    codeLink: 'https://github.com/eman-projectspace/Laravel-Website',
    demoLink: 'https://github.com/eman-projectspace/Laravel-Website',
    image: '/pic2.jpg',
    category: 'Full-Stack',
    featured: false,
    difficulty: 'Advanced',
    status: 'Development'
  },
  {
    id: 9,
    title: 'Shop from Home',
    description: 'React-based e-commerce website where users can browse, filter, and purchase products online.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/shop-from-home',
    demoLink: 'https://shop-from-home.vercel.app/',
    image: '/shop-from-home.PNG',
    category: 'E-commerce',
    featured: true,
    difficulty: 'Intermediate',
    status: 'Live'
  }

];

const categories = ['All', 'E-commerce', 'Landing Page', 'Clone', 'Full-Stack', 'Game'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'E-commerce': return <FaShoppingCart className="text-pink-400" />;
      case 'Landing Page': return <FaRocket className="text-blue-400" />;
      case 'Clone': return <FaEdit className="text-green-400" />;
      case 'Full-Stack': return <FaCode className="text-purple-400" />;
      case 'Game': return <FaGamepad className="text-orange-400" />;
      default: return <FaPalette className="text-gray-400" />;
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Development': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="bg-[#0a192f] text-white py-20 px-6 min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1E90FF] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            💼 My Projects
          </h2>
          <p className="text-xl text-[#ccd6f6] max-w-2xl mx-auto">
            Explore my portfolio of creative and innovative projects, showcasing my skills across different technologies and domains
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-[#112240] backdrop-blur-sm rounded-lg hover:bg-[#1E90FF]/20 transition-all duration-300 border border-[#1E90FF]/30"
              >
                <FaFilter />
                Filters
              </button>
              {showFilters && (
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 bg-[#112240] backdrop-blur-sm rounded-lg border border-[#1E90FF]/50 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] text-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="px-3 py-2 bg-[#112240] backdrop-blur-sm rounded-lg border border-[#1E90FF]/50 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] text-white"
                  >
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty}>{difficulty}</option>
                    ))}
                  </select>
                </motion.div>
              )}
            </div>
            <div className="text-[#ccd6f6]">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedDifficulty}`}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-[#112240] backdrop-blur-sm rounded-2xl overflow-hidden border border-[#1E90FF]/30 hover:border-[#1E90FF]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1E90FF]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-semibold text-black">
                      <FaStar />
                      Featured
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>

                  {/* Difficulty Badge */}
                  <div className={`absolute bottom-4 left-4 px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(project.difficulty)}`}>
                    {project.difficulty}
                  </div>

                  {/* Category Icon */}
                  <div className="absolute bottom-4 right-4 text-2xl">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#8892b0] text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#1E90FF]/20 backdrop-blur-sm rounded-full text-xs font-medium text-cyan-400 border border-[#1E90FF]/30 hover:bg-[#1E90FF]/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1E90FF] rounded-lg hover:bg-[#1E90FF]/80 transition-all duration-300 font-medium cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-[#1E90FF] text-[#1E90FF] rounded-lg hover:bg-[#1E90FF]/10 transition-all duration-300 font-medium cursor-pointer"

                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </motion.a>
                  </div>


                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1E90FF]/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"

                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-[#8892b0]">Try adjusting your filters to see more projects</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
