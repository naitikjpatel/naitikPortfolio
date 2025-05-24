import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={18} />, 
      url: "https://github.com/naitikjpatel" 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={18} />, 
      url: 'https://www.linkedin.com/in/naitikjpatel/' 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter size={18} />, 
      url: 'https://x.com/naitik_jpatel' 
    },
    { 
      name: 'Email', 
      icon: <Mail size={18} />, 
      url: 'mailto:njpatel20031011@gmail.com' 
    },
  ];

  return (
    <motion.div 
      className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-24 after:bg-text-secondary"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-primary hover:translate-y-[-5px] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
          aria-label={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;