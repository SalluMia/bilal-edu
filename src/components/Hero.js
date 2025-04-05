// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import heroImage from '../assets/hero.png';

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
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Empowering Education Worldwide
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8">
          Join us in making a difference. Quality education for every child, everywhere.
        </p>
        <a
          href="#about"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 text-sm sm:text-base md:text-lg"
        >
          Learn More
        </a>
      </motion.div>

      {/* Floating Animated Box */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[180px] right-6 sm:right-10 bg-white px-4 py-2 rounded-xl shadow-lg text-xs sm:text-sm md:text-base text-green-800 font-semibold"
      >
        💡 Free Courses Ongoing!
      </motion.div>

      {/* Sequential Testimonials */}
      <div className="absolute bottom-10 left-4 sm:left-10 space-y-2 sm:space-y-3 max-w-xs sm:max-w-md md:max-w-lg">
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