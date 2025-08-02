"use client"
import React from 'react'
import { motion } from 'framer-motion'

const TopHeader = () => {
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <motion.div 
      className="w-full bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 text-white py-2 px-4 md:px-8"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Corner - Contact Information */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-1 md:space-y-0"
          variants={slideInLeft}
        >
          <motion.div 
            className="flex items-center space-x-2 text-xs md:text-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-blue-300">📱</span>
            <a 
              href="tel:+919821575784"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              9821575784
            </a>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 text-xs md:text-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-green-300">🏢</span>
            <span className="hover:text-blue-300 transition-colors duration-200">
              GST: 09AAJCC5657K1Z3
            </span>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-2 text-xs md:text-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-yellow-300">📧</span>
            <a 
              href="mailto:adishwar@cklotech.com"
              className="hover:text-blue-300 transition-colors duration-200"
            >
              adishwar@cklotech.com
            </a>
          </motion.div>
        </motion.div>

        {/* Right Corner - Company Branding */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-1 md:space-y-0 text-right"
          variants={slideInRight}
        >
          <motion.div 
            className="text-xs md:text-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-end space-x-2">
              <span className="text-green-400">🚀</span>
              <span className="text-blue-300 font-semibold">Startup - 2025</span>
              <span className="text-white">as</span>
              <span className="text-yellow-300 font-bold">EazyTax</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-xs md:text-sm border-l border-gray-600 pl-4 md:pl-8"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-end space-x-2">
                <span className="text-orange-300">⭐</span>
                <span className="text-blue-300 font-semibold">CA firm since 1990</span>
              </div>
              <div className="text-gray-300 text-xs mt-1">
                Now coming in tech enable way to revolutionize tax consultancy
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Responsive Separator */}
      <motion.div 
        className="md:hidden mt-2 pt-2 border-t border-gray-600"
        variants={itemVariants}
      >
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-green-400">🚀</span>
            <span className="text-blue-300 font-semibold">Startup - 2025 as EazyTax</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-300">⭐</span>
            <span className="text-blue-300 font-semibold">CA firm since 1990</span>
          </div>
        </div>
        <div className="text-gray-300 text-xs mt-1 text-center">
          Tech enabled tax consultancy revolution
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TopHeader
