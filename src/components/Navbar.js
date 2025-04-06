// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const navItems = ["home", "about", "what we do", "contact"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-white shadow-md z-50 h-[64px]"
    >
      {/* div  */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-0 h-full flex justify-between items-center">
        <motion.img
          src={logo}
          alt="EduGive Logo"
          className="h-[80px] sm:h-[80px] w-auto object-contain"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        {/* Desktop Nav */}
        <ul className="hidden sm:flex space-x-4 md:space-x-8 text-gray-700 font-semibold text-sm md:text-md mx-auto">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                className="hover:text-green-600 transition duration-300 cursor-pointer relative group"
              >
                <span className="group-hover:border-b-2 border-green-600 pb-1 transition-all duration-300">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Donate Now - Desktop */}
        <motion.div
          className="hidden sm:flex items-center space-x-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://www.launchgood.com/v4/campaign/edu_give_cic_empowering_the_entire_community__proposal_for_funding?src=internal_discover"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 shadow-md text-sm md:text-base"
          >
            💖 Donate Now
          </a>
        </motion.div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-gray-800 text-xl font-semibold z-30"
        >
          {navItems.map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-64}
              className="hover:text-green-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
