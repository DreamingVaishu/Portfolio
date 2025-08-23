import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Server, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-50 rounded-full opacity-50"></div>
      
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left column with image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl transform rotate-2 transition-transform hover:rotate-0 duration-500">
              <img
                src="https://avatars.githubusercontent.com/u/151725317?s=400&u=6b958d214c951c700b974f220de923e7b8080658&v=4"
                alt="image cant load"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating accent elements */}
            <motion.div 
              className="absolute -bottom-5 -left-5 w-20 h-20 bg-primary-100 rounded-lg z-0"
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -top-5 -right-5 w-16 h-16 bg-secondary-100 rounded-full z-0"
              animate={{ 
                rotate: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
          
          {/* Right column with text */}
          <div>
            <motion.span 
              variants={itemVariants}
              className="inline-block py-1 px-3 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium mb-4"
            >
              About Me
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Crafting Digital Experiences with Passion & Precision
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-neutral-700 mb-6"
            >
              I'm a multidisciplinary designer and developer with over 2 years of experience creating beautiful, functional digital experiences. I combine strategic thinking with technical expertise to build products that people love to use.
            </motion.p>
            
            {/* Skills highlight */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <Palette size={20} />, title: "UI/UX Design", description: "Creating intuitive, delightful user experiences" },
                { icon: <Code size={20} />, title: "Development", description: "Building robust, scalable web applications" },
                { icon: <Server size={20} />, title: "Backend", description: "Architecting efficient server-side solutions" },
                { icon: <Lightbulb size={20} />, title: "AI Integration", description: "Leveraging machine learning for smarter products" }
              ].map((skill, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 p-2 rounded-md bg-primary-50 text-primary-600">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-900">{skill.title}</h3>
                    <p className="text-sm text-neutral-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;