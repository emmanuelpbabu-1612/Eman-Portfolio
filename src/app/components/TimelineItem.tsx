import React from 'react';
import { motion } from 'motion/react';

interface TimelineItemProps {
  year: string;
  title: string;
  organization: string;
  description: string;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  organization,
  description,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-12 pb-16 last:pb-0 group"
    >
      {/* Glowing connector line */}
      <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-white/20 to-white/5 group-last:hidden" />

      {/* Glowing dot */}
      <div className="absolute left-0 top-2 w-6 h-6 border-2 border-white/20 bg-black flex items-center justify-center group-hover:border-white/60 transition-all duration-300">
        <div className="w-2 h-2 bg-white/40 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300" />
      </div>

      <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/30 mb-3">
        {year}
      </div>

      <h3 className="font-futuristic text-sm tracking-[0.2em] uppercase mb-2 text-white">
        {title}
      </h3>

      <div className="font-sans text-xs text-white/40 mb-3 tracking-wider">
        {organization}
      </div>

      <p className="font-sans text-xs text-white/30 leading-relaxed tracking-wider max-w-md">
        {description}
      </p>
    </motion.div>
  );
};
