import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Cursor from './components/Cursor';
import Blog from './pages/Blog';
import Background from './components/Background';


function App() {
  return (
    <Router>
      <Background />
      <Navbar />
      <Cursor />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={< Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
