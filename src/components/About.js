import { motion } from 'framer-motion';
import { FaUsers, FaChalkboardTeacher, FaTools, FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import aboutImage from '../assets/about.png';

const differencePoints = [
  { icon: <FaUsers className="text-green-600 text-2xl mr-4" />, text: 'Community-first, not-for-profit model' },
  { icon: <FaChalkboardTeacher className="text-green-600 text-2xl mr-4" />, text: 'Courses taught by qualified and passionate educators' },
  { icon: <FaTools className="text-green-600 text-2xl mr-4" />, text: 'Practical skills for real-world application' },
  { icon: <FaHandsHelping className="text-green-600 text-2xl mr-4" />, text: 'Supportive, inclusive, and welcoming environment' },
  { icon: <FaLightbulb className="text-green-600 text-2xl mr-4" />, text: 'Focus on creativity, confidence, and opportunity' },
];

const About = () => {
  return (
    <div className="py-20 px-2 md:px-8 bg-gradient-to-br from-green-50 via-white to-green-100">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center text-green-700 mb-10 drop-shadow-lg"
      >
        Who We Are
      </motion.h2>
      {/* First row: image + who we are + mission */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center mb-10">
        <img src={aboutImage} alt="About" className="rounded-2xl shadow-2xl w-full md:w-1/2 object-cover border-4 border-green-100" />
        <div className="flex-1 w-full space-y-6">
          <div>
            <span className="text-green-700 font-bold text-2xl block mb-2">🌟 Who We Are – Edu Give CIC</span>
            <p className="leading-relaxed text-gray-800">
              Edu Give CIC is a community-driven, not-for-profit organisation dedicated to making high-quality education accessible, inclusive, and empowering for all.<br /><br />
              Founded by experienced educators and digital innovators, we believe that learning should be creative, practical, and rooted in real-life skills. Whether through coding, photography, or community projects, we help people of all ages unlock their potential and gain the confidence to thrive.<br /><br />
              At Edu Give, we deliver inspiring courses, workshops, and projects across Birmingham and beyond — with a special focus on supporting underrepresented and underserved communities.
            </p>
          </div>
          <div>
            <span className="font-bold text-green-700 block mb-1">👥 Our Mission</span>
            <p className="text-gray-800 leading-relaxed">
              To educate, empower, and uplift individuals through engaging, skill-based learning that creates real opportunities for personal and professional growth.
            </p>
          </div>
        </div>
      </div>
      {/* Second row: what makes us different + short version */}
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div>
          <span className="font-bold text-green-700 block mb-1">📍 What Makes Us Different:</span>
          <ul className="flex flex-col gap-4 mt-2">
            {differencePoints.map((point, idx) => (
              <li key={idx} className="flex items-center text-gray-800 text-base bg-green-50 rounded-lg p-3 shadow-sm border border-green-100">
                {point.icon}
                <span>{point.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-gray-700">
            Whether you're a young learner, adult returning to education, or someone looking to build a new skill — Edu Give is here to support your journey.
          </p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-100">
          <span className="font-bold text-green-700 block mb-1">Short version for social media or flyers:</span>
          <p className="text-base text-gray-800">
            🌟 <span className="font-bold">Edu Give CIC:</span> A not-for-profit making education creative, practical, and accessible for all.<br />
            Courses, workshops, and projects led by passionate educators — empowering communities across Birmingham and beyond.<br />
            <span className="font-semibold">Learn. Grow. Thrive.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;