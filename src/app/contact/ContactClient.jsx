"use client"
import React from 'react'
import { motion } from 'framer-motion'
import GetInTouch from '../../Components/GetInTouch'
import Maps from '../../Components/Maps'

const ContactClient = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Header Section */}
      <motion.section 
        className="relative min-h-[40vh] sm:min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden"
        variants={headerVariants}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
          {/* Animated Circles */}
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-24 h-24 bg-slate-300 rounded-full opacity-15"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-300 rounded-full opacity-10"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-1/4 left-1/3 w-6 h-6 bg-white opacity-20"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 120, 240, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-blue-200 opacity-25 rotate-45"
            animate={{
              y: [0, 15, 0],
              rotate: [45, 225, 405],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        {/* Header Content */}
        <motion.div 
          className="relative z-10 text-center px-2 sm:px-4 max-w-2xl md:max-w-4xl mx-auto"
          variants={fadeInVariants}
        >
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1 
              className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: 'linear-gradient(45deg, #ffffff, #60a5fa, #e2e8f0, #ffffff)',
                backgroundSize: '300% 300%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Contact Us
            </motion.h1>
          </motion.div>

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-blue-100 mb-6 md:mb-8 leading-relaxed"
            variants={fadeInVariants}
          >
            Ready to transform your business with expert financial guidance? 
            <br className="hidden md:block" />
            Let's start your journey to financial excellence today.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center"
            variants={fadeInVariants}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 sm:px-7 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 md:gap-3 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact-form').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              <motion.i 
                className="fas fa-envelope"
                animate={{ 
                  y: [0, -3, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              Get In Touch
            </motion.button>

            <motion.button
              className="border-2 border-white text-white px-5 py-2 sm:px-7 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center gap-2 md:gap-3"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('tel:+919821575784', '_blank')}
            >
              <motion.i 
                className="fas fa-phone"
                animate={{ 
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              Call Now
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 10, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.i 
              className="fas fa-chevron-down text-lg sm:text-xl text-white opacity-70"
              whileHover={{ scale: 1.2, opacity: 1 }}
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Get In Touch Component */}
      <motion.section 
        id="contact-form"
        variants={fadeInVariants}
      >
        <GetInTouch />
      </motion.section>

      {/* Maps Component */}
      <motion.section 
        id="maps-section"
        variants={fadeInVariants}
      >
        <Maps />
      </motion.section>

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          className="bg-green-500 text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)",
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            y: [0, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => window.open('https://wa.me/919821575784', '_blank')}
        >
          <motion.i 
            className="fab fa-whatsapp text-lg sm:text-2xl"
            animate={{ 
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default ContactClient
