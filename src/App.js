import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Cursor from './components/Cursor';


function App() {
  return (
    <Router>
      <Navbar />
      <Cursor />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={< Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
