import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Trophy, Heart, User } from 'lucide-react';

interface AchievementItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const achievementItems: AchievementItem[] = [
  {
    title: "District-Level Football Player",
    description: "Led the Khel Mahakumbh district-level football team, demonstrating leadership and teamwork skills.",
    icon: <Trophy className="h-8 w-8 text-primary" />,
  },
  // {
  //   title: "Technical Paper Presentation",
  //   description: "Presented a technical paper on 'Modern Web Development Frameworks' at a state-level conference.",
  //   icon: <Trophy className="h-8 w-8 text-primary" />,
  // },
  {
    title: "Hackathon Winner",
    description: "First place at college hackathon for developing an innovative healthcare tracking application.",
    icon: <Trophy className="h-8 w-8 text-primary" />,
  },
];

interface HobbyItem {
  title: string;
  description: string;
  icon: JSX.Element;
}

const hobbyItems: HobbyItem[] = [
  // {
  //   title: "Drawing & Sketching",
  //   description: "Enjoy creating digital art and traditional sketches during free time.",
  //   icon: <Heart className="h-8 w-8 text-secondary" />,
  // },
  {
    title: "Traveling",
    description: "Exploring new places and cultures, with a special love for nature and mountains.",
    icon: <Heart className="h-8 w-8 text-secondary" />,
  },
  {
    title: "Volleyball",
    description: "Playing volleyball regularly and participating in local tournaments.",
    icon: <Heart className="h-8 w-8 text-secondary" />,
  },
  {
    title: "Swimming",
    description: "Swimming as a form of relaxation and fitness, enjoying both pool and open water.",
    icon: <Heart className="h-8 w-8 text-secondary" />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-20 bg-background-light bg-grid-pattern">
      <div className="section-container">
        <SectionTitle 
          title="Achievements & Hobbies" 
          subtitle="My accomplishments and the things I enjoy in my free time."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Trophy className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Achievements</h3>
            </motion.div>

            <div className="space-y-6">
              {achievementItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="glass-card p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-background-lighter rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                      <p className="text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <User className="h-6 w-6 text-secondary" />
              <h3 className="text-2xl font-bold">Hobbies & Interests</h3>
            </motion.div>

            <div className="space-y-6">
              {hobbyItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="glass-card p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-background-lighter rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">{item.title}</h4>
                      <p className="text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary max-w-2xl mx-auto">
            I believe in maintaining a healthy balance between professional development and personal interests. 
            My diverse hobbies help me approach problems with creativity and fresh perspectives.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;