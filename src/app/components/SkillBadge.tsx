import React from 'react';
import { motion } from 'motion/react';

interface SkillBadgeProps {
  name: string;
  delay?: number;
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="group relative px-6 py-3 bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      <span className="relative font-futuristic text-[9px] tracking-[0.3em] uppercase text-white/60 group-hover:text-white transition-colors">
        {name}
      </span>

      {/* Glowing corner effect */}
      <div className="absolute top-0 left-0 w-1 h-1 bg-white opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-white opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
    </motion.div>
  );
};
