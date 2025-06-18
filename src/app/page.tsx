'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Coffee, Award, ChevronDown } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 z-50 bg-black/10 backdrop-blur-lg border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.span 
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.span>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center p-8 relative"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center max-w-3xl"
        >
          <motion.div 
            className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-2 gradient-border"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/profile-picture.jpg"
              alt="Profile Picture"
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </motion.div>
          <h1 className="text-6xl font-bold mb-4 gradient-text">
            Hello, I'm a Developer
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Crafting digital experiences with code and creativity
          </p>
          <div className="space-x-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-full bg-[var(--primary)] hover:bg-[var(--secondary)] transition-colors duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 rounded-full border-2 gradient-border hover:bg-[var(--secondary)] transition-colors duration-300"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-8 bg-white/5"
      >
        <motion.div 
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 gradient-text flex items-center justify-center gap-2"
          >
            <User className="w-8 h-8" /> About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                A passionate developer with a keen eye for design and a love for creating seamless user experiences. 
                I specialize in building modern web applications using cutting-edge technologies.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I transform ideas into reality through clean code and intuitive design. 
                My focus is on creating responsive, accessible, and performant web applications.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        id="skills"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-8"
      >
        <motion.div variants={staggerContainer} className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 gradient-text flex items-center justify-center gap-2"
          >
            <Code className="w-8 h-8" /> Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              "JavaScript", "TypeScript", "React", "Next.js",
              "Node.js", "Python", "TailwindCSS", "Git"
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={fadeInUp}
                className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                <span className="text-lg font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        id="projects"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-8 bg-white/5"
      >
        <motion.div variants={staggerContainer} className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 gradient-text flex items-center justify-center gap-2"
          >
            <Briefcase className="w-8 h-8" /> Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-black/20 rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  <Image
                    src={`/project-${project}.jpg`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-400 mb-4">A brief description of the project and its key features.</p>
                  <div className="flex gap-4">
                    <motion.a 
                      href="#" 
                      className="text-[var(--primary)] hover:text-[var(--secondary)]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-[var(--primary)] hover:text-[var(--secondary)]"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        id="experience"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-8"
      >
        <motion.div variants={staggerContainer} className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 gradient-text flex items-center justify-center gap-2"
          >
            <Award className="w-8 h-8" /> Experience
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                title: "Senior Developer",
                company: "Tech Corp",
                period: "2023 - Present",
                description: "Led development of various projects and mentored junior developers."
              },
              {
                title: "Full Stack Developer",
                company: "Digital Solutions",
                period: "2021 - 2023",
                description: "Developed and maintained multiple web applications using modern technologies."
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative pl-8 border-l-2 border-[var(--primary)]"
              >
                <div className="absolute w-4 h-4 bg-[var(--primary)] rounded-full -left-[9px] top-0" />
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-[var(--secondary)] mb-2">{exp.company} • {exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 px-8 bg-white/5"
      >
        <motion.div variants={staggerContainer} className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-16 gradient-text flex items-center justify-center gap-2"
          >
            <Mail className="w-8 h-8" /> Let's Connect
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-8"
          >
            <p className="text-xl text-center text-gray-300 max-w-2xl">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="flex justify-center gap-8 text-[var(--primary)]">
              <motion.a 
                href="#" 
                className="hover:text-[var(--secondary)] transition-colors"
                whileHover={{ y: -5 }}
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-[var(--secondary)] transition-colors"
                whileHover={{ y: -5 }}
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a 
                href="mailto:your.email@example.com" 
                className="hover:text-[var(--secondary)] transition-colors"
                whileHover={{ y: -5 }}
              >
                <Mail className="w-8 h-8" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Youssef Boumalek. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
