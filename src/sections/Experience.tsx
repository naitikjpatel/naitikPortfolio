import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    company: "Grownited Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    period: "January 2025 - May 2025",
    description: [
      "Developing and maintaining web applications using React.js and Spring Boot",
      "Collaborating with cross-functional teams to define, design, and ship new features",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and providing constructive feedback to other developers",
      "Writing clean, efficient, and maintainable code"
    ],
    technologies: ["React.js", "Spring Boot", "Java", "MySQL", "Git", "REST API"]
  },
  // {
  //   id: 2,
  //   title: "Lab Assistant",
  //   company: "MSc College",
  //   location: "Ahmedabad, Gujarat",
  //   period: "August 2022 - December 2022",
  //   description: [
  //     "Assisted professors in preparing and conducting laboratory sessions",
  //     "Provided technical support to students during programming exercises",
  //     "Maintained lab equipment and software installations",
  //     "Created documentation and tutorials for common programming tasks",
  //     "Helped evaluate student assignments and projects"
  //   ],
  //   technologies: ["C++", "Java", "Database Management", "Troubleshooting"]
  // }
];

const Experience = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section id="experience" className="relative py-20">
      <div className="section-container">
        <SectionTitle 
          title="Experience" 
          subtitle="Places where I've worked and gained valuable experience."
        />

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-12 last:mb-0 relative"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUpVariants}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[19px] top-[70px] bottom-0 w-[2px] bg-background-lighter"></div>
              )}
              
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/20 border-2 border-primary z-10 relative">
                    <Calendar size={16} className="text-primary" />
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <div className="flex items-center text-text-secondary text-sm">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-text-secondary text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4 text-text-secondary">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-3 py-1 rounded-full bg-background-lighter text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary max-w-2xl mx-auto mb-8">
            I'm open to new opportunities and challenges that will help me grow as a developer and contribute to impactful projects.
          </p>
          
          <a 
            href="#contact" 
            className="btn btn-outline"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Experience;