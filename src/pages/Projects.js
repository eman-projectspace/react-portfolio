import React, { useMemo, useState } from 'react';
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
  FaEdit,
  FaTimes,
} from 'react-icons/fa';

import SmallDots from '../components/SmallDots';

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: 1,
    title: 'Baroque MERN Website',
    description:
      'A full-stack fashion e-commerce website built with React, Node.js, Express and MongoDB.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    codeLink: 'https://github.com/eman-projectspace/Baroque-mern',
    demoLink: 'https://baroque-mern.vercel.app/',
    image: '/baroque.PNG',
    category: 'Full-Stack',
    featured: true,
    difficulty: 'Advanced',
    status: 'Live',
  },

  {
    id: 2,
    title: 'J.',
    description:
      'A responsive fashion e-commerce website built with HTML, CSS and Bootstrap.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    codeLink: 'https://github.com/eman-projectspace/J.-website',
    demoLink:
      'https://j-website-eman-projectspaces-projects.vercel.app/',
    image: '/j. - Copy.PNG',
    category: 'E-commerce',
    featured: false,
    difficulty: 'Intermediate',
    status: 'Live',
  },

  {
    id: 3,
    title: 'Baroque',
    description:
      'A stylish and responsive fashion website built with pure HTML, CSS and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/BAROQUE',
    demoLink: 'https://baroque-topaz.vercel.app/',
    image: '/baroque-bannerr.PNG',
    category: 'E-commerce',
    featured: true,
    difficulty: 'Intermediate',
    status: 'Live',
  },

  {
    id: 4,
    title: 'Book Store Website',
    description:
      'A dynamic book store project developed with PHP and Laravel, exploring backend functionality and database integration.',
    tech: [
      'HTML',
      'CSS',
      'JavaScript',
      'Blade',
      'PHP',
      'Laravel',
      'MySQL',
    ],
    codeLink: 'https://github.com/eman-projectspace/Laravel-Website',
    demoLink: 'https://github.com/eman-projectspace/Laravel-Website',
    image: '/pic2.jpg',
    category: 'Full-Stack',
    featured: false,
    difficulty: 'Advanced',
    status: 'Development',
  },

  {
    id: 5,
    title: 'Shop from Home',
    description:
      'A React-based e-commerce website where users can browse, filter and explore products through a responsive interface.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/shop-from-home',
    demoLink: 'https://shop-from-home.vercel.app/',
    image: '/shop-from-home.PNG',
    category: 'E-commerce',
    featured: true,
    difficulty: 'Intermediate',
    status: 'Live',
  },

  {
    id: 6,
    title: '6Dot',
    description:
      'A responsive footwear e-commerce website built with React and Tailwind CSS, with interactive UI elements and animations.',
    tech: ['JavaScript', 'React.js', 'Tailwind CSS', 'Framer Motion'],
    codeLink: 'https://github.com/eman-projectspace/sixdot',
    demoLink: 'https://sixdot.vercel.app/',
    image: '/Shoe1.PNG',
    category: 'E-commerce',
    featured: true,
    difficulty: 'Advanced',
    status: 'Live',
  },

  {
    id: 7,
    title: 'Professional Video Blogger Website',
    description:
      'A professional and responsive WordPress website designed for video bloggers using themes, plugins and visual design tools.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS', 'JavaScript'],
    codeLink: '',
    demoLink: '',
    image: '/wp-img.PNG',
    category: 'WordPress',
    featured: true,
    difficulty: 'Intermediate',
    status: 'Live',
  },
  {
    id: 8,
    title: 'Glazen — Handcrafted Décor eCommerce Website',
    description:
      'A visually engaging handcrafted décor eCommerce website built with HTML, CSS, and JavaScript, featuring interactive animations, dynamic cart functionality, category filtering, smooth page transitions, and responsive UI design. The frontend is complete, with backend development planned next.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/eman-projectspace/glazen',
    demoLink: '',
    image: '/glazen1.PNG',
    category: 'Frontend',
    featured: true,
    difficulty: 'Intermediate',
    status: 'In Progress',
  },
  {
    id: 9,
    title: 'HopeCloud — Donation Management Platform',
    description:
      'A donation management platform developed during the Alibaba Cloud AI Hackathon 2026 to simplify the process of donating items. The project includes user authentication, donation management, personalized donation history, impact tracking, and a responsive user interface. I contributed primarily to the Laravel backend, API development, authentication, database integration, and donation-related functionality.',
    tech: ['React', 'Laravel', 'PHP', 'MySQL', 'REST API'],
    codeLink: 'https://github.com/eman-projectspace/HopeCloud-backend',
    demoLink: '',
    image: '/hopeCloud.PNG',
    category: 'Full Stack',
    featured: true,
    difficulty: 'Intermediate',
    status: 'In Progress',
  },
];

/* =========================================================
   FILTER OPTIONS
========================================================= */

const categories = [
  'All',
  'E-commerce',
  'Landing Page',
  'Clone',
  'Full-Stack',
  'Game',
  'WordPress',
];

const difficulties = [
  'All',
  'Beginner',
  'Intermediate',
  'Advanced',
];

/* =========================================================
   PROJECTS COMPONENT
========================================================= */

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  /* =======================================================
     FILTER PROJECTS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        const categoryMatch =
          selectedCategory === 'All' ||
          project.category === selectedCategory;

        const difficultyMatch =
          selectedDifficulty === 'All' ||
          project.difficulty === selectedDifficulty;

        return categoryMatch && difficultyMatch;
      })
      .sort((a, b) => b.id - a.id);
  }, [selectedCategory, selectedDifficulty]);

  /* =======================================================
     CATEGORY ICON
  ======================================================= */

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'E-commerce':
        return <FaShoppingCart />;

      case 'Landing Page':
        return <FaRocket />;

      case 'Clone':
        return <FaEdit />;

      case 'Full-Stack':
        return <FaCode />;

      case 'Game':
        return <FaGamepad />;

      case 'WordPress':
        return <FaPalette />;

      default:
        return <FaPalette />;
    }
  };

  /* =======================================================
     DIFFICULTY STYLE
  ======================================================= */

  const getDifficultyStyle = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20';

      case 'Intermediate':
        return 'text-amber-300 bg-amber-400/10 border-amber-400/20';

      case 'Advanced':
        return 'text-rose-300 bg-rose-400/10 border-rose-400/20';

      default:
        return 'text-slate-300 bg-white/[0.04] border-white/[0.08]';
    }
  };

  /* =======================================================
     STATUS STYLE
  ======================================================= */

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Live':
        return 'text-emerald-300 bg-emerald-400/10 border-emerald-400/20';

      case 'Development':
        return 'text-amber-300 bg-amber-400/10 border-amber-400/20';

      default:
        return 'text-slate-300 bg-white/[0.04] border-white/[0.08]';
    }
  };

  /* =======================================================
     RESET FILTERS
  ======================================================= */

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedDifficulty('All');
  };

  return (
    <main className="min-h-screen bg-[#050b18] text-white overflow-x-hidden">

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <SmallDots />

      {/* ===================================================
          PAGE HEADER
      =================================================== */}

      <section className="relative px-6 pt-28 pb-16">

        {/* Background glow */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[500px] h-[320px] bg-cyan-500/[0.07] blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Icon */}
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center">
            <FaCode className="text-2xl text-cyan-400" />
          </div>

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Selected Work
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">

            My{' '}

            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>

          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-slate-400 leading-7 text-base sm:text-lg">
            A collection of projects I've built while learning web
            development, exploring new technologies and turning ideas into
            working digital experiences.
          </p>

        </motion.div>

      </section>

      {/* ===================================================
          PROJECT SECTION
      =================================================== */}

      <section className="relative px-6 pb-28">

        <div className="max-w-7xl mx-auto">

          {/* =================================================
              FILTER BAR
          ================================================= */}

          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

              {/* Filter button */}
              <div className="flex flex-wrap items-center gap-3">

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`
                    inline-flex items-center gap-2
                    px-4 py-2.5 rounded-xl
                    border transition-all duration-300
                    ${showFilters
                      ? 'bg-cyan-400 text-[#04101d] border-cyan-400'
                      : 'bg-white/[0.03] text-slate-300 border-white/[0.08] hover:border-cyan-400/30 hover:text-white'
                    }
                  `}
                >
                  <FaFilter />
                  Filters
                </button>

                {/* Active filter indicators */}
                {selectedCategory !== 'All' && (
                  <span className="px-3 py-1.5 rounded-full text-xs border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    {selectedCategory}
                  </span>
                )}

                {selectedDifficulty !== 'All' && (
                  <span className="px-3 py-1.5 rounded-full text-xs border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    {selectedDifficulty}
                  </span>
                )}

                {(selectedCategory !== 'All' ||
                  selectedDifficulty !== 'All') && (
                    <button
                      onClick={resetFilters}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-300 transition"
                    >
                      <FaTimes />
                      Clear
                    </button>
                  )}

              </div>

              {/* Project count */}
              <p className="text-sm text-slate-500">
                Showing{' '}
                <span className="text-slate-300 font-medium">
                  {filteredProjects.length}
                </span>{' '}
                of {projects.length} projects
              </p>

            </div>

            {/* =================================================
                FILTER PANEL
            ================================================= */}

            <AnimatePresence>

              {showFilters && (

                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >

                  <div className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm p-5">

                    <div className="grid sm:grid-cols-2 gap-5">

                      {/* Category */}
                      <div>

                        <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">
                          Category
                        </label>

                        <select
                          value={selectedCategory}
                          onChange={(e) =>
                            setSelectedCategory(e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#080f1d] border border-white/[0.08] text-slate-300 focus:outline-none focus:border-cyan-400/40 transition"
                        >

                          {categories.map((category) => (
                            <option
                              key={category}
                              value={category}
                              className="bg-[#080f1d]"
                            >
                              {category}
                            </option>
                          ))}

                        </select>

                      </div>

                      {/* Difficulty */}
                      <div>

                        <label className="block text-xs uppercase tracking-wider text-slate-500 mb-2">
                          Difficulty
                        </label>

                        <select
                          value={selectedDifficulty}
                          onChange={(e) =>
                            setSelectedDifficulty(e.target.value)
                          }
                          className="w-full px-4 py-3 rounded-xl bg-[#080f1d] border border-white/[0.08] text-slate-300 focus:outline-none focus:border-cyan-400/40 transition"
                        >

                          {difficulties.map((difficulty) => (
                            <option
                              key={difficulty}
                              value={difficulty}
                              className="bg-[#080f1d]"
                            >
                              {difficulty}
                            </option>
                          ))}

                        </select>

                      </div>

                    </div>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </motion.div>

          {/* =================================================
              PROJECT GRID
          ================================================= */}

          <AnimatePresence mode="wait">

            <motion.div
              key={`${selectedCategory}-${selectedDifficulty}`}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >

              {filteredProjects.map((project, index) => (

                <motion.article
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm hover:bg-white/[0.045] hover:border-cyan-400/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: Math.min(index * 0.07, 0.35),
                    duration: 0.55,
                  }}
                  whileHover={{ y: -5 }}
                >

                  {/* =================================================
                      IMAGE
                  ================================================= */}

                  <div className="relative h-52 overflow-hidden bg-[#080f1d]">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent opacity-80" />

                    {/* Featured */}
                    {project.featured && (

                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#050b18]/80 backdrop-blur-md border border-white/10 text-xs font-medium text-amber-300">

                        <FaStar className="text-amber-300" />

                        Featured

                      </div>

                    )}

                    {/* Status */}
                    <div
                      className={`absolute top-4 right-4 px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-medium ${getStatusStyle(
                        project.status
                      )}`}
                    >
                      <span className="inline-flex items-center gap-1.5">

                        <span
                          className={`w-1.5 h-1.5 rounded-full ${project.status === 'Live'
                            ? 'bg-emerald-300'
                            : 'bg-amber-300'
                            }`}
                        />

                        {project.status}

                      </span>
                    </div>

                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="p-6">

                    {/* Category + difficulty */}
                    <div className="flex items-center justify-between gap-3 mb-4">

                      <div className="inline-flex items-center gap-2 text-xs text-slate-500">

                        <span className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400">
                          {getCategoryIcon(project.category)}
                        </span>

                        {project.category}

                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-full border text-[10px] uppercase tracking-wider ${getDifficultyStyle(
                          project.difficulty
                        )}`}
                      >
                        {project.difficulty}
                      </span>

                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-6 min-h-[72px]">
                      {project.description}
                    </p>

                    {/* =================================================
                        TECH STACK
                    ================================================= */}

                    <div className="flex flex-wrap gap-2 mt-5">

                      {project.tech.map((tech) => (

                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.035] border border-white/[0.07] text-[11px] text-slate-400 group-hover:text-slate-300 transition"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                    {/* =================================================
                        ACTIONS
                    ================================================= */}

                    <div className="flex gap-3 mt-6">

                      {project.codeLink ? (

                        <motion.a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-400 text-[#04101d] text-sm font-semibold hover:bg-cyan-300 transition"
                          whileTap={{ scale: 0.97 }}
                        >
                          <FaGithub />
                          Code
                        </motion.a>

                      ) : (

                        <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-slate-600 text-sm font-medium cursor-not-allowed">
                          <FaGithub />
                          No Code
                        </div>

                      )}

                      {project.demoLink ? (

                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-400/30 text-cyan-300 text-sm font-semibold hover:bg-cyan-400/10 hover:border-cyan-400/50 transition"
                          whileTap={{ scale: 0.97 }}
                        >
                          <FaExternalLinkAlt />
                          Demo
                        </motion.a>

                      ) : (

                        <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-slate-600 text-sm font-medium cursor-not-allowed">
                          <FaExternalLinkAlt />
                          No Demo
                        </div>

                      )}

                    </div>

                  </div>

                  {/* Bottom hover line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                </motion.article>

              ))}

            </motion.div>

          </AnimatePresence>

          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {filteredProjects.length === 0 && (

            <motion.div
              className="py-24 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >

              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                <FaCode className="text-2xl text-slate-600" />
              </div>

              <h3 className="text-xl font-semibold text-white">
                No projects found
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Try changing your category or difficulty filter.
              </p>

              <button
                onClick={resetFilters}
                className="mt-6 px-5 py-2.5 rounded-xl bg-cyan-400 text-[#04101d] text-sm font-semibold hover:bg-cyan-300 transition"
              >
                Clear filters
              </button>

            </motion.div>

          )}

        </div>

      </section>

    </main>
  );
};

export default Projects;