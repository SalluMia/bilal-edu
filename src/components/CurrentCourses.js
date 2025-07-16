import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaComment, FaStar } from 'react-icons/fa';

const courses = [
  {
    id: 1,
    title: "Photoshop CC 2017",
    author: "M S Nawaz",
    date: "20.5.15",
    description: "There are many variations of sages of Lorem Ipsum available, but the mrity have suffered alteration in some orm. by injected humo ur.There are many but the mri have suffered alteration in some",
    views: 59,
    comments: 19,
    rating: 4,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Illustrator CC 2017",
    author: "Subas Das",
    date: "20.5.15",
    description: "There are many variations of sages of Lorem Ipsum available, but the mrity have suffered alteration in some orm. by injected humo ur.There are many but the mri have suffered alteration in some",
    views: 59,
    comments: 19,
    rating: 4,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Indesign CC 2017",
    author: "Momin Boss",
    date: "20.5.15",
    description: "There are many variations of sages of Lorem Ipsum available, but the mrity have suffered alteration in some orm. by injected humo ur.There are many but the mri have suffered alteration in some",
    views: 59,
    comments: 19,
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

const CurrentCourses = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-100">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center text-green-700 mb-12 drop-shadow-lg"
      >
        Current Courses
      </motion.h2>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Course Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Course Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                
                {/* Author and Date */}
                <div className="text-sm text-gray-600 mb-3">
                  <p>By: {course.author}</p>
                  <p>Date: {course.date}</p>
                </div>
                
                {/* Description */}
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {course.description}
                </p>
                
                {/* Engagement Metrics */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <FaEye className="text-green-600" />
                      <span>{course.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaComment className="text-green-600" />
                      <span>{course.comments}</span>
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < course.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Learn Now Button */}
                <button className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 uppercase tracking-wide">
                  Learn Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentCourses; 