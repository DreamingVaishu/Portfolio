import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Font, { Text } from 'react-font'

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen  justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-secondary-100 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      {/* Floating 3D elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 opacity-20 sm:opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0], 
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 opacity-20 sm:opacity-30"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/3 left-1/5 w-8 h-8 rounded-md bg-gradient-to-br from-accent-400 to-accent-600 opacity-20 sm:opacity-30"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Hero content */}
      <div className="section-container relative z-0">
        <div className="d-flex justify-content-around ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
            >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
              Available for Work
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-4"
            >
            <span style={{fontSize: 40, color : 'black'}} className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-secondary-400">Hi , There!</span> 
            <span style={{fontSize : 12}} className="m-2 py-1 px-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 text-white">
               UI/UX
            </span>
            <br />
            <span style={{fontSize: 60, 
            background: 'linear-gradient(to right , yello 100% , green 100)',
            WebkitBackgroundClip: 'text' ,
            // webkitTextFillColor: 'transparent' 
          }} 
          className="text-transparent bg-clip-text bg-black solid">
              Vaishnav

              </span>
          </motion.h1>
          <br />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-1sxl text-neutral-600 mb-8"
            >
            UI/UX Designer | Full-stack Developer | AI Expert
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              style={{borderRadius : 100, backgroundColor: 'black'}}
              to="contact"
              smooth={true}
              duration={800}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-accents-700 transition-colors duration-300 hover-lift"
            >
              Contact Me <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <Link
              style={{borderRadius : 100, border: '2px solid black'}}
              to="projects"
              smooth={true}
              duration={800}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary-600 text-dark-600 font-medium hover:bg-primary-50 transition-colors duration-300 hover-lift"
            >
              View My Work
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex space-x-5"
          >
            {[
              { icon: <Github size={20} />, url: "https://github.com/DreamingVaishu", label: "Github" },
              { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
              // { icon: < size={20} />, url: "#", label: "Twitter" },
              { icon: <Instagram size={20} />, url: "#", label: "Twitter" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                className="p-3 rounded-full bg-white shadow-md text-neutral-700 hover:text-primary-600 transition-all duration-300 hover-lift"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-neutral-400 flex justify-center pt-2">
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-neutral-400"
            animate={{ y: [0, 8, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;