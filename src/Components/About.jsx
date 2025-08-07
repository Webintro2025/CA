"use client"
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -200,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  }

  const floatingButtonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const iconBounce = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 via-gray-50 to-blue-100 min-h-screen flex items-center justify-center p-3 sm:p-4 md:p-6">
      <motion.div 
        className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-12 lg:gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Left Section - Image */}
        <motion.div 
          className="flex-shrink-0 w-full sm:w-3/4 md:w-[320px] lg:w-[400px] xl:w-[500px]"
          variants={slideInLeft}
        >
          <motion.img
            src="/about1.jpg"
            alt="About Eazy Tax - Professional CA Services"
            className="w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-[320px] lg:max-w-[400px] xl:max-w-[500px] aspect-square rounded-full shadow-xl mx-auto"
            initial={{ scale: 1.1, x: -100, opacity: 0 }}
            whileInView={{ scale: 1, x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2
            }}
            whileHover={{ 
              scale: 1.05,
              opacity: 0.85,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        {/* Right Section - Text Content */}
        <motion.div 
          className="max-w-2xl w-full text-gray-800"
          variants={slideInRight}
        >
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-5 md:mb-6 leading-tight bg-gradient-to-r from-blue-600 to-gray-700 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            About Us
          </motion.h2>
          
          <motion.div
            className="space-y-4 sm:space-y-5 md:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.p 
              className="text-sm sm:text-base md:text-[17px] font-normal leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300"
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              With a legacy spanning over 30 years, our Chartered Accountancy firm stands as a symbol of trust, professionalism, and unwavering commitment to excellence in financial and compliance advisory services. Located in New Friends Colony, New Delhi, we have been a dependable partner for businesses of all sizes—from emerging startups and SMEs to large listed entities—offering a comprehensive suite of services tailored to meet their ever-evolving regulatory and financial challenges.
            </motion.p>

            <motion.h3 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 mt-6 sm:mt-7 md:mt-8 mb-2 sm:mb-3 md:mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{
                scale: 1.02,
                color: "#1E40AF",
                transition: { duration: 0.2 }
              }}
            >
              Our Legacy and Values
            </motion.h3>

            <motion.p 
              className="text-sm sm:text-base md:text-[17px] font-normal leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              Established over three decades ago by{" "}
              <motion.strong 
                className="text-blue-600 font-bold"
                whileHover={{ 
                  color: "#1E40AF",
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                CA Avish Jain
              </motion.strong>
              , a seasoned Chartered Accountant with over 35 years of hands-on experience, our firm has consistently delivered clarity and compliance in a constantly shifting financial landscape. CA Avish Jain is widely regarded as a compliance expert, with a deep-rooted understanding of company formation laws, GST regulations, and business structuring. Under his guidance, the firm has grown in strength and reputation, anchored in values of integrity, client-focus, and proactive service.
            </motion.p>

            <motion.p 
              className="text-sm sm:text-base md:text-[17px] font-normal leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
            >
              Today, we continue to expand under the dynamic leadership of the next generation—
              <motion.strong 
                className="text-blue-600 font-bold"
                whileHover={{ 
                  color: "#1E40AF",
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                {" "}CA Adishwar Jain{" "}
              </motion.strong>
              and{" "}
              <motion.strong 
                className="text-blue-600 font-bold"
                whileHover={{ 
                  color: "#1E40AF",
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                CA Nidhi Jain
              </motion.strong>
              —both qualified professionals with rich experience at the Big Four firms and specialized knowledge in their respective fields.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About