import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color, delay = 0 }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-neutral-800 font-medium">{name}</h3>
        <span className="text-neutral-600 text-sm">{percentage}%</span>
      </div>
      
      <div className="w-full h-3 bg-neutral-200 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: delay 
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;