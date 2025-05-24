import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, DivideIcon as LucideIcon } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home', icon: Code },
  { name: 'About', href: '#about', icon: Code },
  { name: 'Skills', href: '#skills', icon: Code },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Experience', href: '#experience', icon: Code },
  { name: 'Contact', href: '#contact', icon: Code },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <motion.a 
            href="#home"
            className="text-2xl font-bold gradient-text"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Naitik<span className="text-white ms-2">Patel</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden pt-20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="h-full flex flex-col items-center justify-center">
              <ul className="space-y-8 text-center">
                {navItems.map((item, i) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <a 
                      href={item.href}
                      className="text-xl font-medium text-white hover:text-primary transition-colors duration-300 flex items-center justify-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="mr-2 h-5 w-5" />
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;