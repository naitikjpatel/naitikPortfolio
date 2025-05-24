import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Github, ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  details: string;
  features: string[];
  tech: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Urban Service App",
    description: "A full-stack application connecting service providers with customers in urban areas.",
    tags: ["React.js", "Spring Boot", "MySQL"],
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com/naitikpatel/urban-service",
    live: "https://urban-service-app.com",
    details: "Urban Service App is a comprehensive platform that connects service providers with customers in urban areas. The application streamlines the process of finding, booking, and reviewing local services.",
    features: [
      "User authentication and profile management",
      "Service provider listings with filtering capabilities",
      "Booking system with real-time availability",
      "Review and rating system",
      "Admin dashboard for monitoring"
    ],
    tech: ["Jsp", "Spring Boot", "Java", "MySQL", "Hibernate", "REST API", "JWT","Email Service","Google Maps API","Chart js"]
  },
  {
    id: 2,
    title: "CRM Backend",
    description: "A robust backend system for customer relationship management with comprehensive API endpoints.",
    tags: ["Spring Boot", "Java", "MySQL"],
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // github: "https://github.com/naitikpatel/crm-backend",
    details: "CRM Backend is a scalable and secure system that provides comprehensive API endpoints for customer relationship management. It handles data processing, authentication, and business logic for CRM applications.",
    features: [
      "RESTful API design",
      "Role-based access control",
      "Customer data management",
      "Reporting and analytics endpoints",
      "Integration capabilities with third-party services"
    ],
    tech: ["Spring Boot", "Java", "MySQL", "Hibernate", "JWT"]
  },
  {
    id: 3,
    title: "Employee Management System",
    description: "A comprehensive system for managing employee data, attendance, and performance.",
    tags: ["React.js", "Node.js", "MongoDB"],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // github: "https://github.com/naitikpatel/employee-management",
    live: "https://employee-mgmt-system.com",
    details: "Employee Management System is a comprehensive solution for organizations to manage their workforce efficiently. It handles various aspects of employee management including personal data, attendance tracking, and performance evaluation.",
    features: [
      "Employee onboarding and profile management",
      "Attendance tracking with leave management",
      "Performance evaluation system",
      "Document management",
      "Reporting and analytics dashboard"
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Chart.js"]
  },
  {
    id: 4,
    title: "Healthcare Android App",
    description: "A mobile application for patients to book appointments and track health metrics.",
    tags: ["Java", "Android SDK"],
    image: "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // github: "https://github.com/naitikpatel/healthcare-app",
    details: "Healthcare Android App is designed to provide patients with a convenient way to manage their healthcare needs. It offers features like appointment booking, health metric tracking, and medication reminders.",
    features: [
      "User registration and medical profile management",
      "Appointment booking with healthcare providers",
      "Medication reminders",
      "Medical records access"
    ],
    tech: ["Java", "Android SDK",  "Retrofit", "Room Database"]
  },
  {
    id: 5,
    title: "Food Ordering System",
    description: "An online platform for restaurants to showcase their menu and accept orders.",
    tags: ["React.js", "Stripe"],
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // github: "https://github.com/naitikpatel/food-ordering",
    live: "https://food-ordering-system.com",
    details: "Food Ordering System is a complete solution for restaurants to establish their online presence. It allows customers to browse menus, place orders, and make payments online while providing restaurants with order management capabilities.",
    features: [
      "Restaurant profile and menu management",
      "User registration and order history",
      "Cart and checkout system",
      "Payment integration with Stripe",
      "Order tracking and notifications"
    ],
    tech: ["React.js", "Firebase", "Stripe API", "Redux", "Styled Components"]
  },
  {
    id: 6,
    title: "Bus Management Android App",
    description: "A mobile application for tracking buses and managing routes and schedules.",
    tags: ["Java", "Android SDK", "Google Maps API"],
    image: "https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // github: "https://github.com/naitikpatel/bus-management",
    details: "Bus Management Android App offers a solution for public transportation agencies to manage their bus fleets efficiently. It provides real-time tracking, route management, and schedule optimization features.",
    features: [
      "Real-time bus tracking using GPS",
      "Route visualization on maps",
      "Schedule management and updates",
      "User journey planning",
      "Ridership analytics"
    ],
    tech: ["Java", "Android SDK", "Google Maps API", "Room Database", "Retrofit", "Firebase"]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="relative py-20 bg-background-light bg-grid-pattern">
      <div className="section-container">
        <SectionTitle 
          title="My Projects" 
          subtitle="Here are some of the projects I've worked on."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card rounded-xl overflow-hidden group cursor-pointer"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleOpenProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-background-lighter text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="text-primary text-sm font-medium hover:underline"
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseProject}
          >
            <motion.div
              className="bg-background-lighter max-w-4xl rounded-2xl overflow-hidden w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={handleCloseProject}
                  className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors duration-300"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors duration-300"
                        aria-label="GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {selectedProject.live && (
                      <a 
                        href={selectedProject.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary transition-colors duration-300"
                        aria-label="Live site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-text-secondary mb-6">{selectedProject.details}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3">Key Features</h4>
                  <ul className="space-y-2 text-text-secondary">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-3 py-1 rounded-full bg-background text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;