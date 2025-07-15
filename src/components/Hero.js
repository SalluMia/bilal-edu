import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import eduWelcomeVideo from '../assets/eduwelcome.mp4';

const testimonials = [
  '"Thanks to EduGive, I got my first chance to teach!" – Ms. Fatima 💚',
  '"EduGive helped me start my online learning journey!" – Zain ✨',
  '"Teaching rural students through EduGive has been life-changing!" – Mr. Raza 📘',
  '"I never imagined free courses could be so high-quality!" – Hira 🌍',
  '"I learned computer basics through EduGive. Thank you!" – Ahmed 👨‍💻',
  '"EduGive gave me the confidence to apply for my first teaching job." – Ms. Sana 📚'
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[index % testimonials.length],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length]
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Video Background */}
      <video
        src={eduWelcomeVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster={require('../assets/hero.png')}
      >
        Your browser does not support the video tag.
      </video>
      {/* Overlay for darkening video for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl relative z-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Empowering Education Worldwide
        </h1>
        <p className="text-white border-l-4 border-green-600 bg-[#00800083] p-4  text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-4">
        We are currently developing an online platform for our free courses, ensuring accessible and high-quality education for students and teachers worldwide. Our courses will be conducted via Microsoft Teams, Zoom, or on-site. Registration will be required through Eventbrite. Stay tuned for updates!
        </p>
        <a
          href="https://www.launchgood.com/v4/campaign/edu_give_cic_empowering_the_entire_community__proposal_for_funding?src=internal_discover"
          className=" mb-6 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 text-sm mx-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          💖 Donate Now
        </a>
      </motion.div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[180px] right-6 sm:right-10 bg-white px-4 py-2 rounded-xl shadow-lg text-xs sm:text-sm md:text-base text-green-800 font-semibold z-20"
      >
        💡 Free Courses Ongoing!
      </motion.div>
      <div className="absolute bottom-10 left-4 sm:left-10 space-y-2 sm:space-y-3 max-w-xs sm:max-w-md md:max-w-lg z-20">
        <AnimatePresence mode="wait">
          {visibleTestimonials.map((text, i) => (
            <motion.div
              key={`${index}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.5, delay: i * 1.2 }}
              className="bg-green-600 text-white text-xs sm:text-sm md:text-base px-4 py-2 rounded-xl shadow-xl"
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
