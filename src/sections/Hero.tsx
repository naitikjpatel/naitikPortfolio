import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  useGLTF, 
  Float
} from '@react-three/drei';

const Laptop = () => {
  // We're using a placeholder model URL - in a real implementation you'd need a valid GLTF model
  // This is a simplified model implementation - in production, use proper error handling
  const laptopUrl = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf';
  
  const { scene } = useGLTF(laptopUrl, true);
  
  return (
    <Float 
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
    >
      <primitive 
        object={scene} 
        scale={1.5} 
        position={[0, -1, 0]} 
        rotation={[0, 0.6, 0]}
      />
    </Float>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This is where we'd initialize any hero animations or interactions
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-3"
      ref={containerRef}
    >
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10"
        >
          <motion.span 
            className="inline-block text-primary font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hello, I'm
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Patel <span className="gradient-text">Naitikkumar</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-text-secondary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <span className="text-white">Full Stack Developer</span> specializing in React.js and Spring Boot
          </motion.h2>
          
          <motion.p 
            className="text-text-secondary max-w-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            I build exceptional digital experiences with modern technologies, 
            focusing on creating robust and scalable web applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </motion.div>

          <motion.div 
            className="flex items-center gap-6 mt-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
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
              href="mailto:njpatel20031011@gmail.com" 
              className="text-text-secondary hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="h-[400px] lg:h-[500px] w-full relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[6, 0, 7]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <Laptop />
            <OrbitControls 
              enableZoom={true} 
              enablePan={true}
              autoRotate
              autoRotateSpeed={1}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-text-secondary hover:text-primary transition-colors duration-300 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-radial from-primary/5 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-gradient-radial from-secondary/5 to-transparent opacity-50 blur-3xl"></div>
    </section>
  );
};

export default Hero;