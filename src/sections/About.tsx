import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { Briefcase, GraduationCap, Code, User } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Full Stack Developer",
      description: "Passionate about creating efficient, scalable, and user-friendly web applications.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Education",
      description: "BTech in Computer Science with specialized focus on modern web technologies.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Experience",
      description: "Codemech Solutions Pvt. Ltd. working on React.js and Spring Boot applications.",
    },
    {
      icon: <User className="h-6 w-6 text-primary" />,
      title: "Personal",
      description: "Volleyball enthusiast,Cricket, Swimming.",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-background-light bg-grid-pattern" ref={ref}>
      <div className="section-container">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about me, my background, and what I do."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My Journey
            </motion.h3>
            
            <motion.div 
              className="space-y-4 text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                Hello! I'm <span className="text-white font-medium">Patel Naitikkumar Jagdishkumar</span>, a passionate 
                Full Stack Developer with expertise in building modern web applications.
              </p>
              <p>
                I specialize in <span className="text-primary">React.js</span> for frontend development and 
                <span className="text-primary"> Spring Boot</span> for backend services. My technical toolkit 
                also includes <span className="text-white">Java, C++, and MySQL</span> for creating robust, 
                scalable applications.
              </p>
              {/* <p>
                Currently, I'm interning at <span className="text-white font-medium">Grownited Pvt. Ltd.</span>, 
                where I'm gaining valuable industry experience while contributing to real-world projects.
              </p> */}
              <p>
                My passion for technology extends beyond work—I'm constantly learning new technologies and 
                approaches to improve my skills and deliver better solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#contact" className="btn btn-primary">
                Let's Connect
              </a>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 md:order-2">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 rounded-xl"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-background-lighter mr-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold">{item.title}</h4>
                </div>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;