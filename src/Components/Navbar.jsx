"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isStickyServicesOpen, setIsStickyServicesOpen] = useState(false);
  const { scrollY } = useScroll();

  // Handle scroll detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Updated services list
  const services = [
    'Company Registration',
    'LLP Registration', 
    'Partnership Firm Registration',
    'Sole Proprietorship Registration',
    'MSME Registration',
    'Startupindia Registration',
    'Society Registration',
    'Trust Registration',
    'Import Export Code Registration',
    'GST Registration',
    'GST Return Filing',
    'Bookkeeping Services'
  ];

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  // Sticky navbar variants
  const stickyNavVariants = {
    hidden: { 
      y: -100, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const stickyItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8
      }
    }
  };

  const menuItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        delay: 0.6
      }
    }
  };

  return (
    <>
      {/* Original Navbar */}
      <motion.div 
        className="m-0 p-0"
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <header className="w-full shadow-lg">
          <motion.nav 
            className="flex items-center justify-between px-4 md:px-8 py-3 border-b border-gray-200 bg-gradient-to-r from-white via-gray-50 to-blue-50"
            variants={navVariants}
          >
          <motion.div 
            className="flex items-center space-x-2"
            variants={logoVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            <motion.img 
              alt="Eazy Tax logo" 
              className="object-contain cursor-pointer w-12 sm:w-[70px]" 
              height={50} 
              src="/log.jpg" 
              width={70}
              whileHover={{ 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            />
          </motion.div>
          <motion.ul 
            className="hidden md:flex items-center space-x-6 text-sm font-semibold relative z-[10000]"
            variants={navVariants}
            style={{ zIndex: 10000 }}
          >
            <motion.li 
              className="text-blue-600 cursor-pointer relative group"
              variants={menuItemVariants}
              whileHover={{ 
                scale: 1.1,
                color: "#1E40AF",
                transition: { duration: 0.3 }
              }}
            >
              <Link href="/">
                <motion.span
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  Home
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-gray-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </Link>
            </motion.li>
            <motion.li 
              className="text-blue-600 cursor-pointer relative group"
              variants={menuItemVariants}
              whileHover={{ 
                scale: 1.1,
                color: "#1E40AF",
                transition: { duration: 0.3 }
              }}
            >
              <Link href="/about">
                <motion.span
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  About Us
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-gray-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </Link>
            </motion.li>
            <motion.li 
              className="cursor-pointer relative font-normal text-gray-700 z-[10000]"
              variants={menuItemVariants}
              onMouseEnter={() => { setIsServicesOpen(true); setIsStickyServicesOpen(false); }}
              onMouseLeave={() => setIsServicesOpen(false)}
              whileHover={{ 
                scale: 1.1,
                color: "#374151",
                transition: { duration: 0.3 }
              }}
              style={{ zIndex: 10000 }}
            >
              <motion.span
                className="relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                Our Services
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              <motion.i 
                className="fas fa-caret-down ml-1"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              ></motion.i>
              
              {/* Updated Dropdown Menu with Scroll */}
              <AnimatePresence>
                {isServicesOpen && !isStickyServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-[99999]"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ zIndex: 99999 }}
                  >
                    {/* Header */}
                    <motion.div 
                      className="px-4 pb-2 mb-2 border-b border-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-sm font-semibold text-gray-800">Our Services</h3>
                      <p className="text-xs text-gray-500">{services.length} Professional Services</p>
                    </motion.div>

                    {/* Scrollable Services List */}
                     <motion.div 
                      className="max-h-64 overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.ul className="space-y-1 px-2">
                        {services.map((service, index) => (
                          <motion.li
                            key={service}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.2,
                              delay: index * 0.03
                            }}
                            whileHover={{ 
                              backgroundColor: "#EBF8FF",
                              color: "#2563EB",
                              x: 8,
                              scale: 1.02
                            }}
                            className="px-3 py-2.5 text-sm text-gray-700 cursor-pointer transition-all duration-200 rounded-md mx-1"
                          >
                            <Link href={`/services?name=${encodeURIComponent(service)}`} className="flex items-center space-x-3 w-full h-full">
                              <motion.span
                                className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
                                whileHover={{ 
                                  scale: 1.4,
                                  backgroundColor: "#1e40af"
                                }}
                                transition={{ duration: 0.2 }}
                                animate={{
                                  scale: [1, 1.1, 1],
                                  opacity: [0.7, 1, 0.7]
                                }}
                                style={{
                                  animationDelay: `${index * 0.1}s`,
                                  animationDuration: '2s',
                                  animationIterationCount: 'infinite'
                                }}
                              />
                              <span className="leading-tight">{service}</span>
                              <motion.i 
                                className="fas fa-arrow-right text-xs ml-auto opacity-0 group-hover:opacity-100"
                                initial={{ x: -10, opacity: 0 }}
                                whileHover={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.2 }}
                              />
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    {/* Footer */}
                    <motion.div 
                      className="px-4 pt-3 mt-2 border-t border-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.button
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open('https://wa.me/919821575784', '_blank')}
                      >
                        <i className="fas fa-phone mr-2"></i>
                        Get Free Consultation
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
            <motion.li 
              className="cursor-pointer relative group font-normal text-gray-700"
              variants={menuItemVariants}
              whileHover={{ 
                scale: 1.1,
                color: "#374151",
                transition: { duration: 0.3 }
              }}
            >
              <Link href="/contact">
                <motion.span
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  Contact Us
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </Link>
            </motion.li>
          </motion.ul>
          <motion.div 
            className="hidden md:flex items-center space-x-4 text-sm font-normal"
            variants={buttonVariants}
          >
            <motion.i 
              className="fab fa-whatsapp text-[#25D366] text-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 4
              }}
            ></motion.i>
            <motion.span 
              className="text-gray-700 font-semibold select-text"
              whileHover={{ 
                color: "#374151",
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              9971669475
            </motion.span>
            <motion.button 
              className="bg-gradient-to-r from-[#25D366] to-[#1da851] text-white px-4 py-2 rounded-md font-semibold flex items-center space-x-2 shadow-lg" 
              type="button"
              onClick={() => window.open('https://wa.me/919971669475', '_blank')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              variants={buttonVariants}
            >
              <motion.i 
                className="fab fa-whatsapp"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              ></motion.i>
              <span>WhatsApp</span>
            </motion.button>
          </motion.div>
          {/* Hamburger Icon for Mobile/Tab - Main Navbar */}
          <motion.div className="flex md:hidden items-center">
            <motion.button
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-gray-700 hover:text-blue-600 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.i 
                className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              ></motion.i>
            </motion.button>
          </motion.div>
        </motion.nav>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`md:hidden bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200 fixed top-0 left-0 w-full z-[99999] ${isScrolled ? 'mt-[52px]' : ''}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul className="px-4 py-4 space-y-3">
                <motion.li
                  className="text-gray-700 font-medium py-2 border-b border-gray-200 cursor-pointer"
                  whileHover={{ x: 10, color: "#1E40AF", transition: { duration: 0.3 } }}
                >
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  className="text-gray-700 font-medium py-2 border-b border-gray-200 cursor-pointer"
                  whileHover={{ x: 10, color: "#1E40AF", transition: { duration: 0.3 } }}
                >
                  <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </Link>
                </motion.li>
                {/* Our Services with dropdown for mobile */}
                <motion.li
                  className="text-gray-700 font-medium py-2 border-b border-gray-200 cursor-pointer relative"
                  whileHover={{ x: 10, color: "#1E40AF", transition: { duration: 0.3 } }}
                >
                  <div onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center justify-between">
                    <span>Our Services</span>
                    <motion.i className={`fas fa-caret-down ml-2 ${isServicesOpen ? 'rotate-180' : ''}`}></motion.i>
                  </div>
                  {isServicesOpen && (
                    <motion.ul className="bg-white rounded shadow-lg mt-2 border border-gray-200 absolute left-0 w-64 z-50">
                      {services.map((service, idx) => (
                        <motion.li
                          key={service}
                          className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 cursor-pointer"
                          whileHover={{ x: 8, color: "#2563EB" }}
                        >
                          <Link href={`/services?name=${encodeURIComponent(service)}`} onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }}>
                            {service}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.li>
                <motion.li
                  className="text-gray-700 font-medium py-2 border-b border-gray-200 cursor-pointer"
                  whileHover={{ x: 10, color: "#1E40AF", transition: { duration: 0.3 } }}
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact Us
                  </Link>
                </motion.li>
                <motion.li
                  className="pt-4"
                >
                  <motion.button 
                    className="bg-gradient-to-r from-[#25D366] to-[#1da851] text-white px-6 py-3 rounded-md font-semibold flex items-center space-x-2 w-full justify-center shadow-lg" 
                    onClick={() => { window.open('https://wa.me/919971669475', '_blank'); setIsMenuOpen(false); }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Attractive WhatsApp SVG icon for mobile */}
                    <span className="inline-flex items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#25D366"/>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.075.149.198 2.099 3.205 5.077 4.372.711.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
                      </svg>
                      <span className="font-semibold">WhatsApp - 9971669475</span>
                    </span>
                  </motion.button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
        
        </header>
      </motion.div>

      {/* Sticky Navbar */}
      <motion.div 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'block' : 'hidden'
        }`}
        initial="hidden"
        animate={isScrolled ? "visible" : "hidden"}
        variants={stickyNavVariants}
        style={{ y: hidden ? -100 : 0 }}
      >
        <motion.nav 
          className="flex items-center justify-between px-4 md:px-8 py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          variants={stickyNavVariants}
        >
          {/* Sticky Navbar Logo */}
          <motion.div variants={stickyItemVariants}>
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent">
                EAZY TAX
              </div>
            </Link>
          </motion.div>

          {/* Sticky Navbar Links - Desktop */}
          <motion.div 
            className="hidden md:flex space-x-8 relative z-[10000]"
            variants={stickyItemVariants}
            style={{ zIndex: 10000 }}
          >
            <motion.div
              variants={stickyItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 relative group"
              >
                <motion.span
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  Home
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-gray-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </Link>
            </motion.div>
            
            <motion.div
              variants={stickyItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/about"
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 relative group"
              >
                <motion.span
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  About Us
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-gray-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              className="cursor-pointer relative font-semibold text-gray-700 z-[10000]"
              variants={stickyItemVariants}
              onMouseEnter={() => { setIsStickyServicesOpen(true); setIsServicesOpen(false); }}
              onMouseLeave={() => setIsStickyServicesOpen(false)}
              whileHover={{ 
                scale: 1.05,
                color: "#374151",
                transition: { duration: 0.3 }
              }}
              style={{ zIndex: 10000 }}
            >
              <motion.span
                className="relative"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                Our Services
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              <motion.i 
                className="fas fa-caret-down ml-1"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              ></motion.i>
              
              {/* Updated Dropdown Menu for Sticky Navbar with Scroll */}
              <AnimatePresence>
                {isStickyServicesOpen && !isServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-[99999]"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ zIndex: 99999 }}
                  >
                    {/* Header */}
                    <motion.div 
                      className="px-4 pb-2 mb-2 border-b border-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="text-sm font-semibold text-gray-800">Our Services</h3>
                      <p className="text-xs text-gray-500">{services.length} Professional Services</p>
                    </motion.div>

                    {/* Scrollable Services List */}
                     <motion.div 
                      className="max-h-64 overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <motion.ul className="space-y-1 px-2">
                        {services.map((service, index) => (
                          <motion.li
                            key={service}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.2,
                              delay: index * 0.03
                            }}
                            whileHover={{ 
                              backgroundColor: "#EBF8FF",
                              color: "#2563EB",
                              x: 8,
                              scale: 1.02
                            }}
                            className="px-3 py-2.5 text-sm text-gray-700 cursor-pointer transition-all duration-200 rounded-md mx-1"
                          >
                            <Link href={`/services?name=${encodeURIComponent(service)}`} legacyBehavior>
                              <a className="flex items-center space-x-3 w-full h-full">
                                <motion.span
                                  className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"
                                  whileHover={{ 
                                    scale: 1.4,
                                    backgroundColor: "#1e40af"
                                  }}
                                  transition={{ duration: 0.2 }}
                                  animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.7, 1, 0.7]
                                  }}
                                  style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animationDuration: '2s',
                                    animationIterationCount: 'infinite'
                                  }}
                                />
                                <span className="leading-tight">{service}</span>
                                <motion.i 
                                  className="fas fa-arrow-right text-xs ml-auto opacity-0 group-hover:opacity-100"
                                  initial={{ x: -10, opacity: 0 }}
                                  whileHover={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                />
                              </a>
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    {/* Footer */}
                    <motion.div 
                      className="px-4 pt-3 mt-2 border-t border-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.button
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => window.open('https://wa.me/919821575784', '_blank')}
                      >
                        <i className="fas fa-phone mr-2"></i>
                        Get Free Consultation
                      </motion.button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              variants={stickyItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="text-gray-700 hover:text-gray-900 font-semibold transition-colors duration-200 relative group"
              >
                <motion.span
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  Contact Us
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Sticky WhatsApp Button */}
          <motion.div variants={stickyItemVariants}>
            <motion.a
              href="https://wa.me/919971669475"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-medium transition-colors duration-200 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>💬</span>
              <span className="hidden sm:inline">WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button for Sticky Nav */}
          <motion.div 
            className="flex md:hidden items-center"
            variants={stickyItemVariants}
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.nav>
      </motion.div>
    </>
  )
}

export default Navbar