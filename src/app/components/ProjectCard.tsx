import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code2, Beaker, Rocket } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  type: 'code' | 'research' | 'startup';
  image?: string;
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, type, image, link }) => {
  const icons = {
    code: <Code2 className="text-white" size={18} />,
    research: <Beaker className="text-white" size={18} />,
    startup: <Rocket className="text-white" size={18} />
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden bg-black/40 border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-white/30"
    >
      {image && (
        <div className="h-48 w-full overflow-hidden opacity-40 group-hover:opacity-60 transition-opacity duration-700">
          <ImageWithFallback 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover grayscale transition-transform duration-1000 scale-100 group-hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="p-2.5 bg-white/5 border border-white/10">
            {icons[type]}
          </div>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <h3 className="font-futuristic text-sm text-white mb-3 tracking-[0.2em] uppercase">
          {title}
        </h3>
        <p className="font-sans text-xs text-white/40 mb-8 leading-relaxed tracking-wider">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span key={tag} className="text-[9px] font-sans tracking-[0.2em] uppercase text-white/20 group-hover:text-white/40 transition-colors">
              [{tag}]
            </span>
          ))}
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/0 group-hover:border-white/20 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/0 group-hover:border-white/20 transition-all duration-500" />
    </motion.div>
  );
};
