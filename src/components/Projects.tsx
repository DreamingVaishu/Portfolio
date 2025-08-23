import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';

// Project data
const projects = [
  {
    title: 'Modern E-Commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory management and AI-powered recommendations.',
    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Finance Analytics Dashboard',
    description: 'Interactive dashboard for financial data visualization with customizable widgets and real-time updates.',
    image: 'https://images.pexels.com/photos/7947782/pexels-photo-7947782.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tags: ['TypeScript', 'D3.js', 'Firebase', 'Material UI'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'AI Content Creator',
    description: 'Tool that leverages machine learning to generate and optimize content for different platforms and audiences.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tags: ['Python', 'TensorFlow', 'React', 'OpenAI'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    image: 'https://images.pexels.com/photos/3927392/pexels-photo-3927392.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tags: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-neutral-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-full h-96 bg-gradient-to-r from-primary-50 to-secondary-50 transform -skew-y-6 z-0"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
          >
            My Work
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-neutral-600 max-w-2xl mx-auto"
          >
            Explore a selection of my recent work showcasing my skills in design, development, and problem-solving.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;