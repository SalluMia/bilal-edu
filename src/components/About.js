import { motion } from 'framer-motion';
import aboutImage from '../assets/about.png';

const About = () => {
  return (
    <div className="py-20 px-4 md:px-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-green-700 mb-10"
      >
        Who Are We?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center"
      >
        <img src={aboutImage} alt="About" className="rounded-xl shadow-lg w-full md:w-1/2" />
        <p className="text-lg text-gray-700">
          At <span className="text-green-600 font-bold">EDU GIVE CIC</span>, we strive to bring learning to everyone. 
          Through donations, dedicated volunteers, and international projects, we reach remote communities and empower teachers and students with essential resources.
        </p>
      </motion.div>
    </div>
  );
};

export default About;