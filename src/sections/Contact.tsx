import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Send, Check, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_99z6l0a',
      'template_9uyx7qk',
      templateParams,
      '3FJjufT-tX9KGx6OU'
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="section-container">
        <SectionTitle 
          title="Contact Me" 
          subtitle="Get in touch with me for collaboration or any inquiries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <motion.div 
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="p-3 bg-background-lighter rounded-lg text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-text-secondary mb-1">Email</h4>
                    <a 
                      href="mailto:njpatel20031011@gmail.com" 
                      className="hover:text-primary transition-colors duration-300"
                    >
                      njpatel20031011@gmail.com 
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="p-3 bg-background-lighter rounded-lg text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-text-secondary mb-1">Location</h4>
                    <p>Ahmedabad, Gujarat, India</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="p-3 bg-background-lighter rounded-lg text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-text-secondary mb-1">Phone</h4>
                    <p>+91 7096796727</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="mt-8 text-text-secondary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p>
                  Feel free to reach out to me for any project inquiries, 
                  collaboration opportunities, or just to say hello!
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
      className="lg:col-span-3 order-1 lg:order-2"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
        
        {isSubmitted ? (
          <motion.div 
            className="flex flex-col items-center justify-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mb-6">
              <Check size={30} className="text-success" />
            </div>
            <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
            <p className="text-text-secondary text-center">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background-lighter border ${
                    errors.name ? 'border-error' : 'border-white/10'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-error">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background-lighter border ${
                    errors.email ? 'border-error' : 'border-white/10'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  placeholder="Your email"
                />
                {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-background-lighter border ${
                    errors.message ? 'border-error' : 'border-white/10'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none`}
                  placeholder="Your message"
                />
                {errors.message && <p className="mt-1 text-sm text-error">{errors.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full flex items-center justify-center ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  ) : (
                    <Send size={18} className="mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Contact;