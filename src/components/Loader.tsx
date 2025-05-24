import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-background z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-16 h-16 mb-8 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1
          }}
        >
          <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-t-2 border-secondary animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full border-t-2 border-accent animate-pulse-slow"></div>
        </motion.div>
        
        <motion.h2
          className="text-xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <span className="gradient-text font-bold">Naitik Patel</span>
        </motion.h2>
        
        <motion.div
          className="mt-2 text-text-secondary text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Building something amazing...
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;