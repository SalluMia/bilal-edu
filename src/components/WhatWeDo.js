import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaUsers, FaGlobe, FaHandsHelping } from 'react-icons/fa';

const data = [
  { icon: <FaBook />, title: 'Educational Support', desc: 'Books, supplies, and digital tools for learners.' },
  { icon: <FaUsers />, title: 'Empowerment', desc: 'Training & support for students and educators.' },
  { icon: <FaGlobe />, title: 'Global Outreach', desc: 'Reaching remote areas with international aid.' },
  { icon: <FaHandsHelping />, title: 'Sustainable Impact', desc: 'Creating lasting educational opportunities.' },
];

const WhatWeDo = () => {
  return (
    <div className="py-20 px-6 bg-green-50">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-16">What We Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <div className="text-4xl text-green-600 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
