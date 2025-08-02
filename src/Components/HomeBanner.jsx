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

  return (
    <motion.div 
      className="relative w-full h-[70vh] overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800"
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
              className="absolute inset-0 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
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