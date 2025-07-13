import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-900 fixed top-0 w-full z-20 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-wider text-blue-300">
            Code <span className="text-white">with Eman</span>
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 text-sm">
            <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
            <li><Link to="/skills" className="hover:text-blue-300">Skills</Link></li>
            <li><Link to="/projects" className="hover:text-blue-300">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleSidebar}>
              {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white z-30 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-6">Navigation</h2>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" onClick={toggleSidebar} className="block hover:text-blue-300">Home</Link></li>
            <li><Link to="/about" onClick={toggleSidebar} className="block hover:text-blue-300">About</Link></li>
            <li><Link to="/skills" onClick={toggleSidebar} className="block hover:text-blue-300">Skills</Link></li>
            <li><Link to="/projects" onClick={toggleSidebar} className="block hover:text-blue-300">Projects</Link></li>
            <li><Link to="/contact" onClick={toggleSidebar} className="block hover:text-blue-300">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Overlay (dark background when sidebar is open) */}
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
        />
      )}
    </>
  );
};

export default Navbar;
