import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaCode,
  FaBookOpen,
  FaTerminal,
  FaRobot,
  FaTools,
  FaServer,
  FaWordpress,
  FaLinux,
  FaRoute,
  FaGraduationCap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiMysql,
  SiJquery,
  SiOpenai,
  SiVercel,
  SiVite,
  SiGithub,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
} from "react-icons/si";

import SmallDots from "../components/SmallDots";

/* =========================================================
   BLOG / LEARNING POSTS
========================================================= */

const blogPosts = [

  {
    id: 1,
    title: "VS Code",
    icon: FaCode,
    color: "#007ACC",
    date: "2024-09-07",
    category: "Tools & Platforms",
    content:
      "VS Code was where I started my coding journey. I learned how an editor, extensions, terminal and debugger can become part of a developer's everyday workflow."
  },

  {
    id: 2,
    title: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    date: "2024-09-08",
    category: "Frontend",
    content:
      "HTML taught me how websites are structured. I learned semantic elements, forms, tables, multimedia and the importance of creating meaningful page structure."
  },

  {
    id: 3,
    title: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    date: "2024-10-02",
    category: "Frontend",
    content:
      "CSS helped me understand layouts, responsive design, animations, gradients, spacing and how small visual details can completely change a user interface."
  },

  {
    id: 4,
    title: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
    date: "2024-10-07",
    category: "Frontend",
    content:
      "Bootstrap introduced me to reusable UI components, responsive grids and utility classes. It helped me understand how frameworks can speed up frontend development."
  },

  {
    id: 5,
    title: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    date: "2024-11-11",
    category: "Frontend",
    content:
      "JavaScript changed the way I thought about websites. I learned variables, functions, DOM manipulation, events, APIs and how logic can turn a static page into an interactive application."
  },

  {
    id: 6,
    title: "React",
    icon: FaReact,
    color: "#61DAFB",
    date: "2024-11-26",
    category: "Frontend",
    content:
      "React introduced me to component-based development. I learned props, state, hooks, reusable components and how applications can update parts of a page without rebuilding everything."
  },

  {
    id: 7,
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    date: "2024-12-19",
    category: "Frontend",
    content:
      "Tailwind changed the way I approach styling. Working directly with utility classes helped me build responsive interfaces faster while keeping the design consistent."
  },

  {
    id: 8,
    title: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    date: "2024-12-29",
    category: "Backend",
    content:
      "MongoDB introduced me to NoSQL databases and document-based data. I learned how applications can store flexible JSON-like data and connect it with backend APIs."
  },

  {
    id: 9,
    title: "Node.js",
    icon: FaNodeJs,
    color: "#339933",
    date: "2024-11-20",
    category: "Backend",
    content:
      "Node.js helped me understand JavaScript outside the browser. I learned about the runtime environment, servers, APIs, packages and backend development."
  },

  {
    id: 10,
    title: "Express.js",
    icon: SiExpress,
    color: "#FFFFFF",
    date: "2025-01-10",
    category: "Backend",
    content:
      "Express helped me understand backend routing, middleware and API development. It showed me how frontend applications communicate with a server."
  },

  {
    id: 11,
    title: "ChatGPT & OpenAI",
    icon: SiOpenai,
    color: "#10A37F",
    date: "2024-12-20",
    category: "AI Tools",
    content:
      "AI tools became part of my learning workflow. I use them for brainstorming, debugging and understanding unfamiliar concepts, but I believe you still need to understand the code yourself."
  },

  {
    id: 12,
    title: "Git & GitHub",
    icon: SiGithub,
    color: "#FFFFFF",
    date: "2025-02-06",
    category: "Tools & Platforms",
    content:
      "Git taught me how to track changes and recover from mistakes, while GitHub helped me understand repositories, branches, commits, collaboration and sharing projects."
  },

  {
    id: 13,
    title: "jQuery",
    icon: SiJquery,
    color: "#0769AD",
    date: "2025-04-10",
    category: "Frontend",
    content:
      "I explored jQuery while working with existing web projects. It helped me understand DOM manipulation, events and AJAX, especially when dealing with older codebases."
  },

  {
    id: 14,
    title: "PHP",
    icon: SiPhp,
    color: "#777BB4",
    date: "2025-04-14",
    category: "Backend",
    content:
      "Learning PHP gave me a stronger understanding of server-side programming, forms, database communication and backend logic."
  },

  {
    id: 15,
    title: "Laravel",
    icon: FaLaravel,
    color: "#FF2D20",
    date: "2025-04-20",
    category: "Backend",
    content:
      "Laravel introduced me to structured backend development with routing, controllers, models, migrations, Eloquent and APIs. Working with Laravel made backend concepts much clearer to me."
  },

  {
    id: 16,
    title: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    date: "2025-04-17",
    category: "Backend",
    content:
      "MySQL helped me understand relational databases, tables, relationships, queries and how applications store and retrieve structured information."
  },

  {
    id: 17,
    title: "XAMPP",
    icon: FaServer,
    color: "#FB7A24",
    date: "2025-04-17",
    category: "Backend",
    content:
      "XAMPP became useful while working with PHP and Laravel locally. I learned how Apache, PHP and MySQL work together during local development."
  },

  {
    id: 18,
    title: "Composer",
    icon: FaTools,
    color: "#6C3483",
    date: "2025-05-01",
    category: "Backend",
    content:
      "Composer helped me understand dependency management in PHP. I learned how packages and libraries are installed and managed in Laravel projects."
  },

  {
    id: 19,
    title: "Vercel",
    icon: SiVercel,
    color: "#FFFFFF",
    date: "2025-06-05",
    category: "Tools & Platforms",
    content:
      "Vercel introduced me to modern deployment workflows. I have used it to deploy frontend projects and learned how Git repositories can connect directly to deployment platforms."
  },

  {
    id: 20,
    title: "Vite",
    icon: SiVite,
    color: "#646CFF",
    date: "2025-08-14",
    category: "Frontend",
    content:
      "I explored Vite with React and experienced a faster development workflow. It helped me understand the role of modern build tools in frontend development."
  },

  {
    id: 21,
    title: "Next.js",
    icon: SiNextdotjs,
    color: "#FFFFFF",
    date: "2025-08-17",
    category: "Frontend",
    content:
      "Next.js introduced me to a broader React ecosystem with routing, server-side rendering, static generation, optimization and full-stack possibilities."
  },

  {
    id: 22,
    title: "Cursor AI",
    icon: FaRobot,
    color: "#10A37F",
    date: "2025-08-15",
    category: "AI Tools",
    content:
      "Cursor showed me how AI can become part of the development environment. It can suggest code, explain files and speed up repetitive work, but the developer still needs to understand and verify the result."
  },

  {
    id: 23,
    title: "Trae AI",
    icon: FaRobot,
    color: "#9333EA",
    date: "2025-08-17",
    category: "AI Tools",
    content:
      "I explored Trae AI as an AI-powered development environment. I learned how AI assistants can help with coding workflows and explored customizable AI agent capabilities."
  },

  {
    id: 24,
    title: "Amazon CLI",
    icon: FaTerminal,
    color: "#FF9900",
    date: "2025-08-27",
    category: "AI Tools",
    content:
      "Exploring command-line tools showed me another side of development. AI can make workflows faster, but I believe tools should support your understanding rather than replace it."
  },

  {
    id: 25,
    title: "WordPress",
    icon: FaWordpress,
    color: "#21759B",
    date: "2025-10-08",
    category: "Web Development",
    content:
      "I explored WordPress and experimented with themes, plugins and design tools. Building a professional video blogger website helped me understand how developers and creators can build useful websites with less custom code."
  },

  {
    id: 26,
    title: "Warp AI & AI Agents",
    icon: FaRobot,
    color: "#6C63FF",
    date: "2026-02-15",
    category: "AI Tools",
    content:
      "I started exploring AI agents and how they can provide interactive assistance inside digital products. This helped me understand the growing connection between traditional web development and AI-powered experiences."
  },

  {
    id: 27,
    title: "Botpress",
    icon: FaRobot,
    color: "#FF6B35",
    date: "2026-02-20",
    category: "AI Tools",
    content:
      "I built and integrated an AI agent with Botpress into my portfolio. This experience introduced me to conversational workflows, bot customization and connecting an AI assistant with a real website."
  },

  {
    id: 28,
    title: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    date: "2026-03-05",
    category: "Frontend",
    content:
      "I started exploring TypeScript to understand how static typing can make JavaScript projects easier to maintain. It helped me think more carefully about data, props and function structures."
  },

  {
    id: 29,
    title: "React Router",
    icon: FaRoute,
    color: "#CA4245",
    date: "2026-03-12",
    category: "Frontend",
    content:
      "React Router helped me understand client-side navigation and how multiple pages can work inside a React application without traditional full-page reloads."
  },

  {
    id: 30,
    title: "Framer Motion",
    icon: SiFramer,
    color: "#FFFFFF",
    date: "2026-03-20",
    category: "Frontend",
    content:
      "I explored Framer Motion to make interfaces feel more polished. I learned how animations can improve transitions and interactions when they are used with purpose rather than simply added for decoration."
  },

  {
    id: 31,
    title: "REST APIs",
    icon: FaServer,
    color: "#38BDF8",
    date: "2026-04-02",
    category: "Backend",
    content:
      "Working with APIs taught me how frontend and backend systems communicate. I learned about requests, responses, endpoints, JSON data and connecting a React frontend to backend services."
  },

  {
    id: 32,
    title: "Laravel Sanctum",
    icon: FaLaravel,
    color: "#FF2D20",
    date: "2026-04-15",
    category: "Backend",
    content:
      "While working on a Laravel project, I explored Sanctum authentication, tokens and protected API routes. This helped me understand how authenticated users can securely access their own application data."
  },

  {
    id: 33,
    title: "CRUD & Authentication",
    icon: FaCode,
    color: "#22D3EE",
    date: "2026-05-01",
    category: "Backend",
    content:
      "Building CRUD functionality and authentication made backend development much more practical for me. I learned how creating, reading, updating and deleting data connects with real user workflows."
  },

  {
    id: 34,
    title: "Linux & Virtual Machines",
    icon: FaLinux,
    color: "#FFFFFF",
    date: "2026-09-06",
    category: "Tools & Platforms",
    content:
      "I started learning Linux and experimenting with virtual machines through VirtualBox. It is helping me understand operating systems, terminals, environments and the tools developers use beyond Windows."
  },

  {
    id: 35,
    title: "Learning Through My Internship",
    icon: FaGraduationCap,
    color: "#22D3EE",
    date: "2026-08-30",
    category: "Web Development",
    content:
      "During my three-month Navtacc internship, I gained practical exposure to web development workflows. I worked with technologies such as PHP, Laravel, jQuery and MySQL while learning about CRUD functionality, authentication, testing and debugging in real projects."
  },

  {
    id: 36,
    title: "HopeCloud",
    icon: FaRobot,
    color: "#38BDF8",
    date: "2026-09-04",
    category: "AI Tools",
    content:
      "Working on HopeCloud gave me the opportunity to combine web development with AI-focused ideas. I worked on a React frontend and Laravel backend, authentication, donations, user-specific data and API communication while exploring how AI can improve a real-world donation workflow."
  },

  {
    id: 37,
    title: "Qoder & AI-Assisted Development",
    icon: FaRobot,
    color: "#A78BFA",
    date: "2026-08-20",
    category: "AI Tools",
    content:
      "Exploring Qoder during the AI hackathon helped me think differently about AI-assisted development. I learned that AI coding tools can accelerate development, but understanding the architecture, debugging the output and making technical decisions still belongs to the developer."
  },

  {
    id: 38,
    title: "Learning by Building",
    icon: FaBookOpen,
    color: "#22D3EE",
    date: "2026-09-08",
    category: "Web Development",
    content:
      "One of the biggest things I have learned is that tutorials are only the beginning. Building projects, breaking things, debugging errors and trying unfamiliar tools has taught me more than simply watching someone else write code."
  },

];

/* =========================================================
   CATEGORIES
========================================================= */

const categories = [
  "All",
  "Frontend",
  "Backend",
  "AI Tools",
  "Tools & Platforms",
  "Web Development",
];

/* =========================================================
   BLOG COMPONENT
========================================================= */

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts
    .filter((post) =>
      activeCategory === "All"
        ? true
        : post.category === activeCategory
    )
    .filter(
      (post) =>
        post.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        post.content
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    )
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const recentPosts = blogPosts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 8);

  return (
    <main className="min-h-screen bg-[#050b18] text-white overflow-x-hidden">

      {/* Background */}
      <SmallDots />

      <section className="relative px-6 pt-28 pb-24">

        {/* Background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[320px] bg-cyan-500/[0.07] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">

          {/* =================================================
              HEADER
          ================================================= */}

          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="w-14 h-14 mx-auto mb-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center">
              <FaBookOpen className="text-2xl text-cyan-400" />
            </div>

            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-4">
              My Learning Journal
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Things I've{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Learned
              </span>
            </h1>

            <p className="mt-6 text-slate-400 leading-7 text-base sm:text-lg">
              A collection of technologies, tools and lessons I've explored
              while learning, building projects and growing as a developer.
            </p>

          </motion.div>

          {/* =================================================
              CATEGORY FILTERS
          ================================================= */}

          <motion.div
            className="flex flex-wrap justify-center gap-2.5 mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  border transition-all duration-300
                  ${activeCategory === category
                    ? "bg-cyan-400 text-[#04101d] border-cyan-400 shadow-lg shadow-cyan-400/10"
                    : "bg-white/[0.03] text-slate-400 border-white/[0.08] hover:text-white hover:border-cyan-400/30 hover:bg-white/[0.05]"
                  }
                `}
              >
                {category}
              </button>

            ))}

          </motion.div>

          {/* =================================================
              LAYOUT
          ================================================= */}

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

            {/* =================================================
                MAIN CONTENT
            ================================================= */}

            <div>

              {/* Search - Mobile */}
              <div className="lg:hidden mb-8">

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm p-5">

                  <label className="text-sm font-medium text-slate-300">
                    Search my notes
                  </label>

                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search technologies or topics..."
                    className="mt-3 w-full px-4 py-3 rounded-xl bg-[#080f1d] border border-white/[0.08] text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/40 transition"
                  />

                </div>

              </div>

              {/* Posts */}
              {filteredPosts.length > 0 ? (

                <div className="grid gap-5 md:grid-cols-2">

                  {filteredPosts.map((post, index) => {

                    const Icon = post.icon;

                    return (

                      <motion.article
                        key={post.id}
                        className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm p-6 hover:bg-white/[0.045] hover:border-cyan-400/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: Math.min(index * 0.04, 0.25),
                          duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                      >

                        {/* Card glow */}
                        <div
                          className="absolute -top-16 -right-16 w-32 h-32 blur-3xl rounded-full opacity-10 pointer-events-none"
                          style={{
                            backgroundColor: post.color || "#22D3EE",
                          }}
                        />

                        <div className="relative">

                          {/* Icon + category */}
                          <div className="flex items-start justify-between gap-4 mb-5">

                            <div
                              className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-white/[0.05] border border-white/[0.06]"
                            >
                              {Icon && (
                                <Icon
                                  className="text-xl"
                                  style={{
                                    color: post.color || "#22D3EE",
                                  }}
                                />
                              )}
                            </div>

                            <span className="text-[11px] uppercase tracking-wider text-slate-500 border border-white/[0.07] bg-white/[0.02] px-2.5 py-1 rounded-full">
                              {post.category}
                            </span>

                          </div>

                          {/* Title */}
                          <h2 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {post.title}
                          </h2>

                          {/* Date */}
                          <p className="text-xs text-slate-600 mt-2 mb-4">
                            {new Date(post.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </p>

                          {/* Content */}
                          <p className="text-sm text-slate-400 leading-7">
                            {post.content}
                          </p>

                        </div>

                      </motion.article>

                    );
                  })}

                </div>

              ) : (

                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-12 text-center">

                  <FaBookOpen className="text-3xl text-slate-600 mx-auto mb-4" />

                  <h3 className="text-xl font-semibold">
                    No posts found
                  </h3>

                  <p className="text-slate-500 mt-2">
                    Try another search term or category.
                  </p>

                </div>

              )}

            </div>

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="lg:sticky lg:top-24 h-fit space-y-5">

              {/* Search */}
              <div className="hidden lg:block rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm p-5">

                <p className="text-sm font-medium text-slate-300 mb-3">
                  Search my notes
                </p>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-3 rounded-xl bg-[#080f1d] border border-white/[0.08] text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/40 transition"
                />

              </div>

              {/* About Journal */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm p-6">

                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 mb-3">
                  About this journal
                </p>

                <h3 className="text-lg font-semibold mb-3">
                  Learning by doing.
                </h3>

                <p className="text-sm text-slate-500 leading-6">
                  These notes reflect the technologies I've explored through
                  courses, internships, personal projects, university and
                  experimentation.
                </p>

              </div>

              {/* Recent Posts */}
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm p-6">

                <div className="flex items-center justify-between mb-5">

                  <h3 className="text-lg font-semibold">
                    Recent
                  </h3>

                  <span className="text-xs text-slate-600">
                    {blogPosts.length} notes
                  </span>

                </div>

                <ul className="space-y-3">

                  {recentPosts.map((post) => (

                    <li
                      key={post.id}
                      className="group flex items-start gap-3 cursor-pointer"
                    >

                      <div className="w-1.5 h-1.5 mt-2 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition" />

                      <div>

                        <p className="text-sm text-slate-400 group-hover:text-cyan-300 transition leading-5">
                          {post.title}
                        </p>

                        <p className="text-[11px] text-slate-600 mt-1">
                          {new Date(post.date).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </p>

                      </div>

                    </li>

                  ))}

                </ul>

              </div>

            </aside>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Blog;