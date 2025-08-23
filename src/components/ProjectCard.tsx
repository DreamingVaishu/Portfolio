import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  index
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Handle 3D rotation effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    setIsHovered(false);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-3d relative"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
        {/* Image section */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
          
          {/* Overlay with links that appear on hover */}
          <div 
            className={`absolute inset-0 bg-primary-900 bg-opacity-70 flex items-center justify-center gap-4 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-primary-600 hover:text-primary-700 transition-all duration-300 hover-lift"
                aria-label="View live project"
              >
                <ExternalLink size={20} />
              </a>
            )}
            
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white text-primary-600 hover:text-primary-700 transition-all duration-300 hover-lift"
                aria-label="View source code"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-neutral-900">{title}</h3>
          <p className="text-neutral-600 mb-4">{description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span 
                key={i}
                className="text-xs py-1 px-2 rounded-full bg-secondary-50 text-secondary-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;