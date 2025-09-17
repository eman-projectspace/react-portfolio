import { motion } from 'framer-motion';
import {
  FaLaptopCode, FaUserGraduate,
  FaRocket, FaUsers, FaCode,
  FaMapMarkerAlt, FaEnvelope, FaDownload
} from 'react-icons/fa';
import SmallDots from '../components/SmallDots';
import TabNavigation from '../subpages/TabNavigation';

const About = () => {


  const stats = [
    { icon: FaCode, number: '10+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-400' },
    { icon: FaUsers, number: '5+', label: 'Happy Clients', color: 'from-green-500 to-emerald-400' },
    { icon: FaLaptopCode, number: '1000+', label: 'Hours of Coding', color: 'from-purple-500 to-pink-400' },
    { icon: FaRocket, number: '1+', label: 'Years Experience', color: 'from-orange-500 to-red-400' },
  ];



  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center  text-center overflow-x-hidden px-6 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {/* Animated Background */}
      <SmallDots />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaUserGraduate className="text-6xl text-blue-400 mx-auto" />
          </motion.div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Profile Image */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
              <img
                src="/profile-picc1.jpg"
                alt="Eman Waheed"
                className="w-full h-full object-top object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
              <FaCode className="text-2xl text-white" />
            </div>
          </motion.div>

          {/* Profile Content */}
          <div className="flex-1 max-w-2xl">
            <motion.h2
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Eman Waheed
            </motion.h2>

            <motion.p
              className="text-lg text-blue-200 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >

              Hello! I'm a passionate Full Stack Developer who loves turning complex problems into simple, beautiful, and intuitive solutions.
              I build modern web applications using React, Node.js, and other cutting-edge technologies, with a strong focus on creating seamless user experiences and scalable backend solutions.


            </motion.p>

            <motion.p
              className="text-blue-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community. I believe in continuous learning and staying up-to-date with the latest industry trends.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 text-blue-300">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-300">
                <FaEnvelope className="text-blue-400" />
                <span>emanwaheed.dev@gmail.com</span>
              </div>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/Eman-Waheed.Cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="text-2xl text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>


        {/* TabNav */}
        <TabNavigation />
        {/* Extra */}
        {/* Additional Info Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 p-8 rounded-2xl border border-blue-600">
            <FaRocket className="text-4xl text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
              I'm passionate about staying up-to-date with the latest technologies and best practices.
              Currently exploring AI tools, TypeScript, and advanced React patterns to enhance my development capabilities.
              I also believe in writing clean code, crafting beautiful UI designs, and solving real-world problems through technology.
              Learning new things and sharing knowledge with the developer community excites me every day.

            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
