import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaLaravel, FaCode,
  FaBookOpen, FaTerminal, FaRobot, FaTools, FaServer
} from "react-icons/fa";
import {
  SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiPhp, SiMysql,
  SiJquery, SiOpenai, SiVercel, SiVite, SiGithub, SiNextdotjs
} from "react-icons/si";
import SmallDots from "../components/SmallDots";
// year---month---date

const blogPosts = [
  { id: 1, title: "VS Code", icon: FaCode, color: "#007ACC", date: "2024-09-07", category: "Tools & Platforms", content: "VS Code is a powerful editor with extensions, terminal and debugger.I started my coding Journey with Vs code." },

  { id: 2, title: "HTML5", icon: FaHtml5, color: "#E34F26", date: "2024-09-08", category: "Frontend", content: "HTML5 is the structure of every web page — semantic tags, multimedia, forms & tables etc." },

  { id: 3, title: "CSS3", icon: FaCss3Alt, color: "#1572B6", date: "2024-10-02", category: "Frontend", content: "CSS3 brings layout, animations, gradients and media queries for responsive, beautiful UIs." },

  { id: 4, title: "Bootstrap", icon: SiBootstrap, color: "#7952B3", date: "2024-10-07", category: "Frontend", content: "Bootstrap speeds up UI development with a consistent grid, components and utilities." },

  { id: 5, title: "JavaScript", icon: FaJs, color: "#F7DF1E", date: "2024-11-11", category: "Frontend", content: "JavaScript powers interactivity — from DOM manipulation to modern frameworks like React." },

  { id: 6, title: "React", icon: FaReact, color: "#61DAFB", date: "2024-11-26", category: "Frontend", content: "React enables component-driven UIs — master hooks, composition and performance techniques.By using react our page changes fast they don't take time in loading ." },

  { id: 7, title: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", date: "2024-12-19", category: "Frontend", content: "Tailwind is a utility-first CSS framework for rapid UI composition." },

  { id: 8, title: "MongoDB", icon: SiMongodb, color: "#47A248", date: "2024-12-29", category: "Backend", content: "MongoDB is a flexible NoSQL database for JSON-like documents." },

  { id: 9, title: "Node.js", icon: FaNodeJs, color: "#339933", date: "2024-11-20", category: "Backend", content: "Node.js runs JavaScript server-side to build fast APIs and services.Node.js is also called run time environment" },

  { id: 10, title: "Express.js", icon: SiExpress, color: "#000000", date: "2025-01-10", category: "Backend", content: "Express is a minimal web framework for Node.js — routing and middleware." },

  { id: 11, title: "ChatGPT / OpenAI", icon: SiOpenai, color: "#10A37F", date: "2024-12-20", category: "AI Tools", content: "ChatGPT helps me with writing, debugging, and brainstorming — but you have to know how the code works." },

  { id: 12, title: "Git & GitHub", icon: SiGithub, color: "#181717", date: "2025-02-06", category: "Tools & Platforms", content: "Git & GitHub enable version control and collaboration — You can put your code to github pages or make repository." },

  { id: 13, title: "jQuery", icon: SiJquery, color: "#0769AD", date: "2025-04-10", category: "Frontend", content: "jQuery simplifies DOM & AJAX for legacy projects — useful for older codebases." },

  { id: 14, title: "PHP", icon: SiPhp, color: "#777BB4", date: "2025-04-14", category: "Backend", content: "PHP runs many backends — core syntax, forms, and DB integration." },

  { id: 15, title: "Laravel", icon: FaLaravel, color: "#FF2D20", date: "2025-04-20", category: "Backend", content: "Laravel is a modern PHP framework with routing, Eloquent and Blade templating." },

  { id: 16, title: "MySQL", icon: SiMysql, color: "#4479A1", date: "2025-04-17", category: "Backend", content: "MySQL is a reliable relational database — learn schema design and queries." },
  {
    id: 17, title: "XAMPP", icon: FaServer, color: "#FB7A24", date: "2025-04-17", category: "Backend", content: "XAMPP is a local development server that provides Apache, MySQL, PHP, and Perl."
  },
  {
    id: 18,
    title: "Composer", icon: FaTools, color: "#6C3483", date: "2025-05-01", category: "Backend", content: "Composer is a dependency manager for PHP that helps manage libraries and packages in Laravel and other projects."
  },
  { id: 19, title: "Vercel", icon: SiVercel, color: "#000000", date: "2025-06-05", category: "Tools & Platforms", content: "Vercel offers frictionless static & serverless deployments with previews.I have deployed Html,css,javscript and react websites." },

  { id: 20, title: "Vite", icon: SiVite, color: "#646CFF", date: "2025-08-14", category: "Frontend", content: "Vite is a fast build tool and dev server for modern frontends.I have used Vite with React." },

  {
    id: 21, title: "Next.js", icon: SiNextdotjs, date: "2025-08-17", category: "Frontend",
    content: "Next.js is a powerful React framework that supports server-side rendering (SSR), static site generation (SSG), and API routes. It offers built-in routing, image optimization, and fast performance, making it ideal for modern full-stack and SEO-friendly applications."
  },

  { id: 22, title: "Cursor AI", icon: FaRobot, color: "#10A37F", date: "2025-08-15", category: "AI Tools", content: "Cursor AI give coding suggestions and it boosts productivity ." },

  { id: 23, title: "Trae AI", icon: FaRobot, color: "#9333EA", date: "2025-08-17", category: "AI Tools", content: "Trae AI is an IDE that helps in coding we can also make customizable Ai agent with the help of it.We can use Cloud 3.7 sonnet in trae ai." },

  { id: 24, title: "Amazon CLI", icon: FaTerminal, color: "#FF9900", date: "2025-08-27", category: "AI Tools", content: "Amazon CLI manages AWS resources from terminal — We can make simple webites from its terminal.One thing to keep in mind these ai tools can support and speed things up,but you cant rely on it entirely -you still need to understand and build things yourself." },

];

const categories = ["All", "Frontend", "Backend", "AI Tools", "Tools & Platforms"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // filtered & sorted (newest first)
  const filteredPosts = blogPosts
    .filter(post => activeCategory === "All" ? true : post.category === activeCategory)
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0f3460] to-[#16213e] text-white px-6 py-20">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Animated Header (same pattern as About) */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.07, rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaBookOpen className="text-6xl text-blue-400 mx-auto" />
          </motion.div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            My Blog
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Sharing in-depth posts about tools, frameworks and workflows — one topic at a time.
          </p>
        </motion.div>

        <SmallDots />
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${activeCategory === cat
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg"
                : "bg-blue-900/40 text-blue-200 hover:bg-blue-800/50 border border-blue-600/30"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of posts */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map(post => {
            const Icon = post.icon;
            return (
              <article key={post.id} className="bg-[#112240] p-6 rounded-2xl shadow-lg border border-blue-600 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-3">
                  {Icon && <Icon className="text-4xl" style={{ color: post.color }} />}
                  <div>
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <div className="text-sm text-blue-400">{new Date(post.date).toLocaleDateString()}</div>
                  </div>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">{post.content}</p>
                <div className="flex justify-between items-center">
                  {/* <span className="text-sm text-blue-300 px-3 py-1 bg-blue-900/30 rounded-full">{post.category}</span> */}
                  {/* <button className="text-sm text-blue-400 hover:text-cyan-300 font-medium">Read More →</button> */}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
