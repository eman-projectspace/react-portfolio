import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiFolder, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Navigation items with icons
  const navItems = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/about', label: 'About', icon: FiUser },
    { path: '/blog', label: 'Blog', icon: FiCode },
    { path: '/projects', label: 'Projects', icon: FiFolder },
    { path: '/contact', label: 'Contact', icon: FiMail },
  ];

  // Check if current path is active
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Enhanced Navbar */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-[#0a192f]/95 backdrop-blur-md shadow-lg border-b border-blue-500/20'
          : 'bg-[#0a192f]/80 backdrop-blur-sm'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-8xl mx-auto px-3 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/"
                className="text-xl md:text-xl font-extrabold tracking-widest relative group"
              >
                {/* Gradient on Eman */}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
                  Eman
                </span>
                <span className="text-white">CodeCrafts</span>

                {/* Underline hover effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </motion.div>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const active = isActive(item.path);

                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -2 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 relative group ${active
                        ? 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
                        : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/5'
                        }`}
                    >
                      <IconComponent className="text-lg" />
                      <span className="font-medium">{item.label}</span>

                      {/* Active indicator */}
                      {active && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"
                          layoutId="activeTab"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.div>
                );
              })}



            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleSidebar}
              className="md:hidden p-2 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-[#0a192f] to-[#0f3460] text-white z-50 md:hidden border-r border-blue-500/20"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">E</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Eman Waheed</h2>
                      <p className="text-blue-300 text-sm">Full Stack Developer</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={toggleSidebar}
                    className="p-2 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FiX size={24} />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => {
                      const IconComponent = item.icon;
                      const active = isActive(item.path);

                      return (
                        <motion.li
                          key={item.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <Link
                            to={item.path}
                            onClick={toggleSidebar}
                            className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 group ${active
                              ? 'text-blue-400 bg-blue-500/20 border border-blue-500/30'
                              : 'text-gray-300 hover:text-blue-400 hover:bg-blue-500/10'
                              }`}
                          >
                            <IconComponent className="text-xl" />
                            <span className="font-medium">{item.label}</span>

                            {/* Active indicator */}
                            {active && (
                              <motion.div
                                className="w-2 h-2 bg-blue-400 rounded-full ml-auto"
                                layoutId="mobileActiveTab"
                                initial={false}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              />
                            )}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Footer with Social Links */}
                <div className="border-t border-blue-500/20 pt-6">
                  <p className="text-blue-300 text-sm mb-4">Connect with me</p>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com/eman-projectspace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub className="text-xl" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/eman-waheed-84615b326"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiLinkedin className="text-xl" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
