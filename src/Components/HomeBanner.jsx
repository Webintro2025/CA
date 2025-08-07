"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HomeBanner = () => {
  // Banner images array
  const banners = [
    {
      id: 1,
      src: "/banner1.jpg",
      alt: "Professional Tax Services Banner 1"
    },
    {
      id: 2,
      src: "/banner2.jpg",
      alt: "Company Registration Services Banner 2"
    },
    {
      id: 3,
      src: "/banner3.jpg",
      alt: "CA Services Banner 3"
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [banners.length])

  // Manual navigation functions
  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => 
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(59, 130, 246, 0.9)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  }

  const dotVariants = {
    active: {
      scale: 1.3,
      backgroundColor: "#3B82F6",
      transition: { duration: 0.3 }
    },
    inactive: {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      transition: { duration: 0.3 }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      x: 100, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }

  const taglineVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const descriptionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  return (
    <motion.div 
      className="relative w-full h-[28vh] sm:h-[35vh] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Slider Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={banners[currentIndex].src}
              alt={banners[currentIndex].alt}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Overlay for better contrast */}
            <motion.div 
              className="absolute inset-0 bg-black/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* Text Content for First Banner */}
            {currentIndex === 0 && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-end pr-4 sm:pr-10 md:pr-24 lg:pr-16"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="max-w-xs sm:max-w-md md:max-w-lg text-left text-white"
                  variants={textVariants}
                >
                  {/* Tagline */}
                  <motion.h1 
                    className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6"
                    variants={taglineVariants}
                    whileHover={{ 
                      scale: 1.02,
                      textShadow: "0 0 20px rgba(255,255,255,0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="bg-gradient-to-r from-sky-400 to-white bg-clip-text text-transparent"
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      "Start Solo.
                    </motion.span>
                    <br />
                    <motion.span 
                      className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      Stay Compliant."
                    </motion.span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p 
                    className="text-xs sm:text-sm md:text-lg leading-relaxed mb-3 sm:mb-5 md:mb-8 text-gray-100"
                    variants={descriptionVariants}
                    whileHover={{ 
                      scale: 1.02,
                      color: "#ffffff"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      animate={{ 
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Get your sole proprietorship registered for smooth business operations.
                    </motion.span>
                  </motion.p>

                  {/* Call to Action Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <motion.button 
                      className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-xs sm:text-base md:text-lg shadow-lg backdrop-blur-md"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)",
                        backgroundColor: "rgba(14, 165, 233, 0.9)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open('https://wa.me/919821575784', '_blank')}
                      animate={{
                        boxShadow: [
                          "0 10px 30px rgba(14, 165, 233, 0.2)",
                          "0 15px 40px rgba(14, 165, 233, 0.4)",
                          "0 10px 30px rgba(14, 165, 233, 0.2)"
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <motion.span 
                        className="flex items-center gap-1 sm:gap-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Get Started Today
                        <motion.i 
                          className="fas fa-arrow-right"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.span>
                    </motion.button>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-10 -right-10 w-20 h-20 bg-sky-400/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-5 -left-5 w-16 h-16 bg-white/20 rounded-full blur-lg"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>
              </motion.div>
            )}

            {/* Text Content for Third Banner (GST Return Filing) */}
            {currentIndex === 2 && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-start pl-2 sm:pl-6 md:pl-12 lg:pl-20"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="max-w-xs sm:max-w-sm md:max-w-md text-left text-white"
                  variants={textVariants}
                >
                  {/* Service Badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md border border-blue-400/40 rounded-full px-3 py-1.5 mb-4"
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(0, 0, 0, 0.5)"
                    }}
                  >
                    <motion.i 
                      className="fas fa-check-circle text-blue-400 text-sm"
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                        scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                    <span className="text-blue-300 font-semibold text-xs">GST Return Filing</span>
                  </motion.div>

                  {/* Tagline */}
                  <motion.h1 
                    className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight mb-2 sm:mb-3 md:mb-4"
                    variants={taglineVariants}
                    whileHover={{ 
                      scale: 1.02,
                      textShadow: "0 0 20px rgba(255,255,255,0.5)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="bg-gradient-to-r from-blue-400 to-black bg-clip-text text-transparent"
                      animate={{ 
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      "No Penalties.
                    </motion.span>
                    <br />
                    <motion.span 
                      className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      Timely GST Filing."
                    </motion.span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p 
                    className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-2 sm:mb-4 md:mb-6 text-blue-100"
                    variants={descriptionVariants}
                    whileHover={{ 
                      scale: 1.02,
                      color: "#ffffff"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      animate={{ 
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Monthly/quarterly GST return filing services to keep your business on track.
                    </motion.span>
                  </motion.p>

                  {/* Features List */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {[
                      "GSTR-1, GSTR-3B Filing",
                      "Error-free Returns",
                      "Timely Submissions"
                    ].map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-2 mb-1.5"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: 0.7 + (index * 0.1), 
                          duration: 0.5 
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-blue-400 rounded-full"
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                        />
                        <span className="text-[10px] sm:text-xs text-blue-200">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Call to Action Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <motion.button 
                      className="bg-gradient-to-r from-black to-blue-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold text-xs sm:text-base md:text-lg shadow-lg backdrop-blur-md border border-blue-400/30"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                        backgroundColor: "rgba(0, 0, 0, 0.8)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open('https://wa.me/919821575784', '_blank')}
                      animate={{
                        boxShadow: [
                          "0 10px 30px rgba(0, 0, 0, 0.3)",
                          "0 15px 40px rgba(59, 130, 246, 0.4)",
                          "0 10px 30px rgba(0, 0, 0, 0.3)"
                        ]
                      }}
                      transition={{
                        boxShadow: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <motion.span 
                        className="flex items-center gap-1 sm:gap-2"
                        whileHover={{ x: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.i 
                          className="fas fa-arrow-left"
                          animate={{ x: [0, -5, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        File GST Returns Now
                      </motion.span>
                    </motion.button>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-8 -left-8 w-16 h-16 bg-black/30 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400/30 rounded-full blur-lg"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-blue-600/80 transition-all duration-300"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        initial="hidden"
        animate="visible"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-blue-600/80 transition-all duration-300"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        initial="hidden"
        animate="visible"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Dot Indicators */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3"
        variants={containerVariants}
      >
        {banners.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            variants={dotVariants}
            animate={index === currentIndex ? "active" : "inactive"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>

      {/* Slide Counter */}
      <motion.div 
        className="absolute top-6 right-6 z-10 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {currentIndex + 1} / {banners.length}
        </motion.span>
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-blue-500 z-10"
        key={currentIndex}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ 
          duration: 4,
          ease: "linear"
        }}
      />
    </motion.div>
  )
}

export default HomeBanner