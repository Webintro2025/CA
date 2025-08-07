"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Slides = () => {
  // Updated images from public folder
  const images = [
    { src: '/Bookkeeping Services.png', alt: 'Bookkeeping Services' },
    { src: '/companyregistration.png', alt: 'Company Registration' },
    { src: '/GST Return Filing.png', alt: 'GST Return Filing' },
    { src: '/gstregistration.png', alt: 'GST Registration' },
    { src: '/Import Export Code Registration.png', alt: 'Import Export Code Registration' },
    { src: '/llpregistration.png', alt: 'LLP Registration' },
    { src: '/MSME Registration.png', alt: 'MSME Registration' },
    { src: '/Partnership Firm Registration.png', alt: 'Partnership Firm Registration' },
    { src: '/Society registration.png', alt: 'Society Registration' },
    { src: '/Sole Proprietorship Registration.png', alt: 'Sole Proprietorship Registration' },
    { src: '/Startupindia registration.png', alt: 'Startup India Registration' },
    { src: '/Trust registration.png', alt: 'Trust Registration' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const slideVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="w-full py-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Full width container - removed header text */}
      <motion.div 
        className="w-full px-0"
        variants={slideVariants}
      >
        {/* Full Width Sliding Container - Increased height */}
        <motion.div 
          className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-slate-50 py-20 w-full"
          variants={slideVariants}
          whileHover={{ 
            scale: 1.005,
            boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Infinite Sliding Track */}
          <motion.div
            className="flex gap-8"
            animate={{
              x: [-1200, -2400]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set of images - Increased size */}
            {images.map((image, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 relative group"
                variants={slideVariants}
                whileHover={{
                  scale: 1.15,
                  y: -15,
                  zIndex: 10,
                  transition: { duration: 0.4 }
                }}
              >
                <motion.div
                  className="w-[350px] h-[220px] rounded-2xl overflow-hidden shadow-xl border-3 border-white group-hover:border-blue-400 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    whileHover={{
                      filter: "brightness(1.15) saturate(1.3) contrast(1.1)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.div>
                
                {/* Enhanced Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/85 via-blue-800/40 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl flex items-end justify-center p-4 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.p
                    className="text-white text-lg font-bold text-center leading-tight"
                    initial={{ y: 25, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {image.alt}
                  </motion.p>
                </motion.div>

                {/* Enhanced Floating icons */}
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <motion.i 
                    className="fas fa-star text-white text-sm"
                    animate={{
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>

                {/* Service indicator */}
                <motion.div
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                >
                  <span className="text-xs font-semibold text-blue-600">Service {index + 1}</span>
                </motion.div>
              </motion.div>
            ))}

            {/* Second set for seamless loop - Increased size */}
            {images.map((image, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 relative group"
                variants={slideVariants}
                whileHover={{
                  scale: 1.15,
                  y: -15,
                  zIndex: 10,
                  transition: { duration: 0.4 }
                }}
              >
                <motion.div
                  className="w-[350px] h-[220px] rounded-2xl overflow-hidden shadow-xl border-3 border-white group-hover:border-blue-400 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    whileHover={{
                      filter: "brightness(1.15) saturate(1.3) contrast(1.1)",
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.div>
                
                {/* Enhanced Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/85 via-blue-800/40 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl flex items-end justify-center p-4 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.p
                    className="text-white text-lg font-bold text-center leading-tight"
                    initial={{ y: 25, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {image.alt}
                  </motion.p>
                </motion.div>

                {/* Enhanced Floating icons */}
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <motion.i 
                    className="fas fa-star text-white text-sm"
                    animate={{
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>

                {/* Service indicator */}
                <motion.div
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                >
                  <span className="text-xs font-semibold text-blue-600">Service {index + 1}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Gradient overlays for seamless fade */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
        </motion.div>

        {/* Enhanced Bottom decorative elements */}
        <motion.div 
          className="flex justify-center mt-8 gap-6 px-4"
          variants={slideVariants}
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <motion.div
              key={index}
              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: index * 0.3
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Floating background elements */}
      <motion.div
        className="absolute top-16 left-16 w-20 h-20 bg-blue-200 rounded-full opacity-15"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-16 h-16 bg-slate-300 rounded-full opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      <motion.div
        className="absolute top-1/2 left-8 w-12 h-12 bg-blue-300 rounded-full opacity-10"
        animate={{
          x: [0, 15, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </motion.section>
  )
}

export default Slides