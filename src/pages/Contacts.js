import { motion } from "framer-motion";
import {
  FiMail, FiMapPin, FiMessageSquare,
  FiGithub, FiLinkedin, FiInstagram, FiFacebook
} from "react-icons/fi";
import SmallDots from "../components/SmallDots";

const Contacts = () => {

  const socialLinks = [
    {
      icon: FiGithub,
      name: "GitHub",
      url: "https://github.com/eman-projectspace",
      color: "hover:from-gray-700 to-gray-800"
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/eman-waheed-84615b326/",
      color: "hover:from-blue-600 to-blue-700"
    },
    {
      icon: FiInstagram,
      name: "Instagram",
      url: "https://instagram.com/codiing_talks",
      color: "hover:from-pink-500 to-purple-500"
    }, {
      icon: FiFacebook,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61571853628263&mibextid=ZbWKwL",
      color: "hover:from-blue-500 to-blue-600"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#0f3460] to-[#16213e] text-white px-6 py-20 relative overflow-hidden">
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
            <FiMessageSquare className="text-6xl text-blue-400 mx-auto" />
          </motion.div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's collaborate and bring your ideas to life!
            I'm always excited to work on new challenges and create amazing web experiences.
          </p>
        </motion.div>



        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Location + Social Links */}
            {/* Contact Information */}
            <motion.div
              className="order-1 lg:order-2 space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              {/* Location */}
              <motion.div
                className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-center mr-3">
                    <FiMapPin className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Location</h4>
                </div>
                <p className="text-blue-200">Lahore, Pakistan</p>
                <p className="text-blue-300 text-sm mt-1">Available for remote work worldwide</p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  You can also find me on
                </h3>
                <p className="text-blue-200 mb-4">
                  Let’s connect and collaborate! 🚀
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="text-xl text-blue-400" />
                      <span className="font-medium text-white">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side: Image (only on laptop) */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_1280.jpg"
              alt="Work Desk"
              className="rounded-2xl shadow-lg border border-blue-500/20"
            />
          </motion.div>
        </div>



        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border border-blue-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-200 mb-6">
              Let's discuss your ideas and create something amazing together.
              I'm always excited to work on new challenges!
            </p>
            <motion.a
              href="mailto:emanwaheed.dev@gmail.com"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail />
              <span>Start a Conversation</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;
