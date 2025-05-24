import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-lighter py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold gradient-text mb-2">Naitik Patel</h3>
            <p className="text-text-secondary text-sm">Full Stack Developer</p>
          </motion.div>

          <motion.div 
            className="flex space-x-4 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="https://github.com/naitikjpatel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/naitikjpatel/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://x.com/naitik_jpatel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:njpatel20031011@gmail.com" 
              className="text-text-secondary hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 pt-8 border-t border-white/5 text-center text-text-tertiary text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} Patel Naitikkumar Jagdishkumar. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;