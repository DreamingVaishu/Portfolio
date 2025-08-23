import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillBar from './SkillBar';
import { Layout, Code, PenTool, Brain, Database, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // 3D icon skill cards
  const skillCards = [
    { icon: <PenTool size={24} />, name: 'UI/UX Design', tools: ['Figma', 'Adobe XD', 'Sketch'] },
    { icon: <Code size={24} />, name: 'Frontend', tools: ['React', 'TypeScript', 'Tailwind CSS'] },
    { icon: <Database size={24} />, name: 'Backend', tools: ['Node.js', 'Django', 'Express'] },
    { icon: <Brain size={24} />, name: 'AI/ML', tools: ['TensorFlow', 'OpenAI', 'Python'] },
    { icon: <Smartphone size={24} />, name: 'Mobile', tools: ['React Native', 'Flutter', 'Swift'] },
    { icon: <Layout size={24} />, name: 'CMS', tools: ['WordPress', 'Strapi', 'Contentful'] },
  ];

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary-50 rounded-full opacity-50"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-50 rounded-full opacity-50"></div>
      
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
            className="inline-block py-1 px-3 rounded-full bg-accent-100 text-accent-700 text-sm font-medium mb-4"
          >
            My Expertise
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold mb-4"
          >
            Skills & Technologies
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-neutral-600 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills and the technologies I work with.
          </motion.p>
        </motion.div>
        
        {/* Skill cards grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCards.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-3d bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ 
                scale: 1.03,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="p-4 rounded-full bg-primary-50 text-primary-600 inline-block mb-4">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.tools.map((tool, i) => (
                  <span 
                    key={i}
                    className="text-xs py-1 px-2 rounded-full bg-neutral-100 text-neutral-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Skill bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <SkillBar name="UI/UX Design" percentage={95} color="bg-primary-500" delay={0.1} />
            <SkillBar name="Frontend Development" percentage={90} color="bg-secondary-500" delay={0.2} />
            <SkillBar name="Backend Development" percentage={85} color="bg-accent-500" delay={0.3} />
            <SkillBar name="AI/ML Tools" percentage={80} color="bg-primary-500" delay={0.4} />
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
            <SkillBar name="Project Management" percentage={90} color="bg-secondary-500" delay={0.1} />
            <SkillBar name="Communication" percentage={95} color="bg-primary-500" delay={0.2} />
            <SkillBar name="Problem Solving" percentage={90} color="bg-accent-500" delay={0.3} />
            <SkillBar name="Team Collaboration" percentage={95} color="bg-secondary-500" delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;