import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 fixed top-0 w-full z-10 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Eman's Portfolio</h1>
        <ul className="flex space-x-6 text-sm">
          <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
          <li><Link to="/skills" className="hover:text-blue-300">Skills</Link></li>
          <li><Link to="/projects" className="hover:text-blue-300">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
