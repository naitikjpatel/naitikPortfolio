import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90, color: "primary" },
      { name: "JavaScript", level: 85, color: "primary" },
      { name: "HTML/CSS", level: 90, color: "primary" },
      { name: "Tailwind CSS", level: 80, color: "primary" },
      { name: "Redux", level: 75, color: "primary" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", level: 85, color: "secondary" },
      { name: "Java", level: 90, color: "secondary" },
      { name: "PostgreSQL", level: 70, color: "secondary" },
      { name: "RESTful APIs", level: 85, color: "secondary" },
      { name: "MySQL", level: 80, color: "secondary" },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 85, color: "accent" },
      { name: "Docker", level: 70, color: "accent" },
      { name: "C++", level: 80, color: "accent" },
      { name: "Agile/Scrum", level: 75, color: "accent" },
      { name: "Problem Solving", level: 90, color: "accent" },
    ]
  }
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-text-secondary text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-background-lighter rounded-full overflow-hidden">
        <motion.div 
          className={`h-full bg-${skill.color} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20">
      <div className="section-container">
        <SectionTitle 
          title="My Skills" 
          subtitle="Here are the technologies and tools I work with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h3 
                className={`text-xl font-bold mb-6 text-${category.skills[0].color}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {category.title}
              </motion.h3>
              
              <div>
                {category.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
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
            I'm constantly learning and adding new skills to my repertoire. 
            My experience allows me to quickly adapt to new technologies and frameworks.
          </p>
          
          <a 
            href="#projects" 
            className="btn btn-outline"
          >
            See My Projects
          </a>
        </motion.div>
      </div>

      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-1/3 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-1/3 h-64 bg-secondary/5 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Skills;