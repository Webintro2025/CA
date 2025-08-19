"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;

      if (scrollTop >= maxScroll - 5) {
        // Reset to top when reached bottom (with small buffer)
        setTimeout(() => {
          if (container && isAutoScrolling) {
            container.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 1000);
      } else {
        // Scroll down by 2 pixels for smoother effect
        container.scrollTop += 2;
      }
    };

    const interval = setInterval(autoScroll, 100); // Scroll every 100ms

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Handle manual scroll
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollTop);
      // Pause auto-scroll temporarily when user manually scrolls
      setIsAutoScrolling(false);
      
      // Resume auto-scroll after 3 seconds of inactivity
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 3000);
    }
  };

  // Manual scroll controls
  const scrollToTop = () => {
    setIsAutoScrolling(false);
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };

  const scrollToBottom = () => {
    setIsAutoScrolling(false);
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
    }
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const serviceCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      title: "Company Registration",
      description: "Register your private limited company with complete legal compliance. Get professional guidance for smooth incorporation process with all required documentation.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "LLP Registration", 
      description: "Limited Liability Partnership registration with minimal compliance requirements. Perfect for professional services and small businesses seeking flexibility.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "Partnership Firm Registration",
      description: "Register your partnership firm with proper legal documentation. Get partnership deed preparation and registration services.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "Sole Proprietorship Registration",
      description: "Simple and cost-effective business registration for individual entrepreneurs. Get trade license and necessary registrations.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "MSME Registration",
      description: "Micro, Small & Medium Enterprise registration for government benefits. Get Udyam registration and subsidy assistance.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "Startup India Registration",
      description: "Register under Startup India scheme for tax benefits and government support. Get DPIIT recognition and startup certificate.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "Society Registration",
      description: "Register your non-profit society under Societies Registration Act. Complete documentation and legal compliance services.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "Trust Registration",
      description: "Public and private trust registration services. Get complete legal documentation and registration assistance.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "Import Export Code Registration",
      description: "IEC registration for international trade business. Get complete documentation for import-export operations.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "GST Registration",
      description: "Goods and Services Tax registration with expert guidance. Get GST number and complete compliance setup.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "GST Return Filing",
      description: "Monthly and quarterly GST return filing services. Expert handling of GSTR-1, GSTR-3B, and annual returns.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    },
    {
      title: "Bookkeeping Services",
      description: "Professional bookkeeping and accounting services. Maintain accurate financial records and statutory compliance.",
      icon: "https://storage.googleapis.com/a1aa/image/b2625329-cfc8-4ba5-2853-9832d83ef14b.jpg"
    }
  ];

  return (
    <div className="bg-[#F9FAFB] text-[#111827] py-6 sm:py-10 md:py-16">
      <motion.main 
        className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-sky-400 to-gray-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Our Professional Services
          </motion.h1>
          <motion.p 
            className="text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-gray-600"
            variants={itemVariants}
          >
            We provide comprehensive business registration and compliance services to help your business grow with complete legal protection and professional expertise.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 mb-8 sm:mb-12 md:mb-16">
          <motion.section 
            className="lg:col-span-6"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-base sm:text-lg md:text-2xl font-extrabold leading-tight mb-2 sm:mb-3 md:mb-4"
              whileHover={{ color: "#0EA5E9" }}
              transition={{ duration: 0.3 }}
            >
              Advantages of Registering a Company
            </motion.h2>
            <motion.p 
              className="text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mb-4 sm:mb-6 md:mb-10"
              variants={itemVariants}
            >
              Registering a private limited company offers various benefits to the shareholders, including a flexible management structure, legal identity and limited liability protection. Let us explore some of the most
              <strong> important benefits</strong> below:
            </motion.p>
            <motion.img 
              alt="Illustration of a person in a yellow hoodie holding a pencil, looking at a computer screen with a long document and icons for information and checkmark" 
              className="w-full max-w-xs sm:max-w-md md:max-w-xl rounded-lg shadow-lg mx-auto" 
              height="400" 
              loading="lazy" 
              src="https://storage.googleapis.com/a1aa/image/a4b4259c-e5b3-4d38-d3a0-6929c6ed87f0.jpg" 
              width="600"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.4 }}
              variants={itemVariants}
            />
          </motion.section>

          {/* Services Section - Right Side */}
          <motion.section 
            className="lg:col-span-6"
            variants={containerVariants}
          >
            <motion.div className="flex items-center justify-between mb-4 sm:mb-6">
              <motion.h2 
                className="text-base sm:text-lg md:text-2xl font-extrabold leading-tight"
                variants={itemVariants}
                whileHover={{ color: "#0EA5E9" }}
              >
                Our Professional Services
              </motion.h2>
              {/* Scroll Controls */}
              <motion.div 
                className="flex gap-1 sm:gap-2"
                variants={itemVariants}
              >
                <motion.button
                  onClick={scrollToTop}
                  className="p-1.5 sm:p-2 bg-sky-100 hover:bg-sky-200 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Scroll to top"
                >
                  <motion.i 
                    className="fas fa-chevron-up text-sky-600 text-xs sm:text-sm"
                    whileHover={{ y: -2 }}
                  />
                </motion.button>
                <motion.button
                  onClick={scrollToBottom}
                  className="p-1.5 sm:p-2 bg-sky-100 hover:bg-sky-200 rounded-full transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Scroll to bottom"
                >
                  <motion.i 
                    className="fas fa-chevron-down text-sky-600 text-xs sm:text-sm"
                    whileHover={{ y: 2 }}
                  />
                </motion.button>
                <motion.button
                  onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                  className={`p-1.5 sm:p-2 rounded-full transition-colors duration-200 ${
                    isAutoScrolling 
                      ? 'bg-sky-100 hover:bg-sky-200' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={isAutoScrolling ? 'Pause auto-scroll' : 'Resume auto-scroll'}
                >
                  <motion.i 
                    className={`fas ${
                      isAutoScrolling ? 'fa-pause' : 'fa-play'
                    } text-xs sm:text-sm ${
                      isAutoScrolling ? 'text-sky-600' : 'text-gray-600'
                    }`}
                    animate={{ 
                      scale: isAutoScrolling ? [1, 1.2, 1] : 1 
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: isAutoScrolling ? Infinity : 0,
                      repeatDelay: 1 
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div 
              ref={scrollContainerRef}
              className="max-h-[400px] sm:max-h-[500px] md:max-h-[600px] overflow-x-hidden pr-2 sm:pr-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-sky-400 scrollbar-track-gray-200 relative"
              variants={containerVariants}
              onScroll={handleScroll}
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setTimeout(() => setIsAutoScrolling(true), 1000)}
            >
              {/* Auto-scroll indicator */}
              <motion.div 
                className={`absolute top-2 right-2 z-10 ${
                  isAutoScrolling ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300`}
                animate={{ 
                  rotate: isAutoScrolling ? 360 : 0 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: isAutoScrolling ? Infinity : 0,
                  ease: "linear"
                }}
              >
                <motion.div className="w-3 h-3 bg-sky-500 rounded-full shadow-lg">
                  <motion.div 
                    className="w-full h-full bg-sky-400 rounded-full"
                    animate={{ 
                      scale: isAutoScrolling ? [1, 1.5, 1] : 1 
                    }}
                    transition={{ 
                      duration: 1, 
                      repeat: isAutoScrolling ? Infinity : 0 
                    }}
                  />
                </motion.div>
              </motion.div>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 shadow-sm"
                  variants={serviceCardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    borderColor: "0EA5E9",
                    x: 5
                  }}
                  transition={{ duration: 0.3 }}
                  custom={index}
                >
                  <motion.div 
                    className="flex items-start gap-2 sm:gap-3"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.img 
                      alt="Service icon" 
                      className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10" 
                      src={service.icon}
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="flex-1">
                      <motion.h3 
                        className="text-xs sm:text-sm md:text-base font-bold leading-snug mb-1 sm:mb-2 text-gray-800"
                        whileHover={{ color: "#0EA5E9" }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        className="text-xs sm:text-xs md:text-sm leading-relaxed text-gray-600 line-clamp-3"
                        whileHover={{ color: "#374151" }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.description}
                      </motion.p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className="text-sky-600 font-semibold text-xs sm:text-sm hover:text-sky-800 flex items-center gap-1"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More 
                      <motion.i 
                        className="fas fa-arrow-right text-xs sm:text-sm"
                        whileHover={{ x: 2 }}
                      />
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-10 sm:mt-12 md:mt-16"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-sky-400 to-gray-600 rounded-lg p-4 sm:p-6 md:p-8 text-white"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(14, 165, 233, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4"
              variants={itemVariants}
            >
              Ready to Start Your Business?
            </motion.h3>
            <motion.p 
              className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 opacity-90"
              variants={itemVariants}
            >
              Get expert guidance for your business registration and compliance needs
            </motion.p>
            <motion.button 
              className="bg-white text-sky-600 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-md font-semibold text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/919971669475', '_blank')}
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.main>
    {/* Floating WhatsApp Button - Old Icon */}
   
  </div>
  )
}

export default Services