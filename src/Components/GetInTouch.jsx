"use client"
import React from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
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

  const leftToRightVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightToLeftVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
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
      className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {/* Contact Info Section - Left to Right Animation */}
        <motion.div 
          className="w-full lg:w-1/2 flex flex-col justify-center"
          variants={leftToRightVariants}
        >
          <motion.h2 
            className="text-xs sm:text-sm md:text-lg lg:text-2xl font-extrabold text-slate-800 mb-2 sm:mb-3 md:mb-5 lg:mb-7 text-left"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              color: "#1e40af",
              transition: { duration: 0.3 }
            }}
          >
            Contact Information
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 border-l-2 sm:border-l-4 md:border-l-8 border-blue-500 shadow-xl rounded-2xl p-2 sm:p-3 md:p-5 max-w-xl mx-auto flex flex-col gap-2 sm:gap-3 md:gap-5"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
          >
            {/* Company Name */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="bg-blue-500 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl font-bold"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "#1e40af",
                  transition: { duration: 0.5 }
                }}
              >
                <i className="fas fa-building"></i>
              </motion.span>
              <div>
                <div className="text-slate-600 font-semibold text-[10px] sm:text-xs md:text-sm">Company Name</div>
                <motion.div 
                  className="text-slate-800 font-bold text-[10px] sm:text-xs md:text-base"
                  whileHover={{ 
                    color: "#1e40af",
                    transition: { duration: 0.3 }
                  }}
                >
                  Eazy Tax
                </motion.div>
              </div>
            </motion.div>

            {/* Mail ID */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="bg-slate-600 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "#334155",
                  transition: { duration: 0.5 }
                }}
              >
                <i className="fas fa-envelope"></i>
              </motion.span>
              <div>
                <div className="text-slate-600 font-semibold text-[10px] sm:text-xs md:text-sm">Mail ID</div>
                <motion.div 
                  className="text-slate-800 font-bold text-[10px] sm:text-xs md:text-base"
                  whileHover={{ 
                    color: "#1e40af",
                    transition: { duration: 0.3 }
                  }}
                >
                  adishwar@cklotech.com
                </motion.div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="bg-blue-600 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "#1d4ed8",
                  transition: { duration: 0.5 }
                }}
              >
                <i className="fas fa-map-marker-alt"></i>
              </motion.span>
              <div>
                <div className="text-slate-600 font-semibold text-[10px] sm:text-xs md:text-sm">Address</div>
                <motion.div 
                  className="text-slate-800 font-bold text-[10px] sm:text-xs md:text-base"
                  whileHover={{ 
                    color: "#1e40af",
                    transition: { duration: 0.3 }
                  }}
                >
                  B-39 2nd Floor, Bharat Nagar, New Friends Colony, Delhi
                </motion.div>
              </div>
            </motion.div>

            {/* Phone Number */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="bg-slate-700 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "#475569",
                  transition: { duration: 0.5 }
                }}
              >
                <i className="fas fa-phone-alt"></i>
              </motion.span>
              <div>
                <div className="text-slate-600 font-semibold text-[10px] sm:text-xs md:text-sm">Phone Number</div>
                <motion.div 
                  className="text-slate-800 font-bold text-[10px] sm:text-xs md:text-base"
                  whileHover={{ 
                    color: "#1e40af",
                    transition: { duration: 0.3 }
                  }}
                >
                  9821575784
                </motion.div>
              </div>
            </motion.div>

            {/* GST Number */}
            <motion.div 
              className="flex items-center gap-3 sm:gap-4"
              variants={itemVariants}
              whileHover={{ 
                x: 10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.span 
                className="bg-blue-700 text-white rounded-full p-2 sm:p-3 text-base sm:text-xl"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360,
                  backgroundColor: "#1e3a8a",
                  transition: { duration: 0.5 }
                }}
              >
                <i className="fas fa-id-card"></i>
              </motion.span>
              <div>
                <div className="text-slate-600 font-semibold text-[10px] sm:text-xs md:text-sm">GST Number</div>
                <motion.div 
                  className="text-slate-800 font-bold text-[10px] sm:text-xs md:text-base"
                  whileHover={{ 
                    color: "#1e40af",
                    transition: { duration: 0.3 }
                  }}
                >
                  09AAJCC5657K1Z3
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Get In Touch Section - Right to Left Animation */}
        <motion.div 
          className="w-full lg:w-1/2"
          variants={rightToLeftVariants}
        >
          <motion.h2 
            className="text-xs sm:text-sm md:text-lg lg:text-2xl font-extrabold text-blue-600 mb-2 sm:mb-3 md:mb-5 lg:mb-7"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              color: "#1e40af",
              transition: { duration: 0.3 }
            }}
          >
            Get In Touch
          </motion.h2>
          <motion.form
            action="#"
            method="POST"
            className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-2 sm:p-3 md:p-5 mt-4 sm:mt-6 md:mt-10 lg:mt-14 border border-blue-400/40 max-w-lg rounded-2xl shadow-xl"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name:"
              className="w-full mb-2 sm:mb-3 md:mb-4 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded text-[10px] sm:text-xs md:text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300"
              variants={itemVariants}
              whileFocus={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email:"
              className="w-full mb-2 sm:mb-3 md:mb-4 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded text-[10px] sm:text-xs md:text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300"
              variants={itemVariants}
              whileFocus={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
            />
            <motion.input
              type="text"
              name="message"
              placeholder="Your Message:"
              className="w-full mb-2 sm:mb-3 md:mb-4 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded text-[10px] sm:text-xs md:text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300"
              variants={itemVariants}
              whileFocus={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
            />
            <motion.input
              type="tel"
              name="phone"
              placeholder="Your Phone Number:"
              className="w-full mb-3 sm:mb-4 md:mb-6 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded text-[10px] sm:text-xs md:text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300"
              variants={itemVariants}
              whileFocus={{ 
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
            />
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-slate-700 text-white font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg hover:from-blue-700 hover:to-slate-800 transition-all duration-300 text-[10px] sm:text-xs md:text-sm shadow-lg w-full"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="flex items-center justify-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                SUBMIT NOW
                <motion.i 
                  className="fas fa-paper-plane"
                  animate={{ 
                    x: [0, 3, 0],
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Bottom Banner */}
      <motion.section 
        className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 py-2 sm:py-3 md:py-4 px-1 sm:px-2 md:px-4 mt-4 sm:mt-6 md:mt-8 rounded-2xl"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.01,
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.div 
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 md:gap-3"
          variants={containerVariants}
        >
          <motion.p 
            className="text-white text-[10px] sm:text-xs md:text-sm font-light max-w-xl text-center sm:text-left"
            variants={leftToRightVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            If You Need Any <motion.span 
              className="text-blue-400 font-semibold"
              whileHover={{ 
                color: "#60a5fa",
                transition: { duration: 0.3 }
              }}
            >
              Tax Solution
            </motion.span>
            <motion.span 
              className="text-blue-400 font-semibold"
              whileHover={{ 
                color: "#60a5fa",
                transition: { duration: 0.3 }
              }}
            >
              ... We Are Available For You
            </motion.span>
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-blue-500 to-slate-600 text-white font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg whitespace-nowrap hover:from-blue-600 hover:to-slate-700 transition-all duration-300 text-[10px] sm:text-xs md:text-sm shadow-lg"
            variants={rightToLeftVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/919821575784', '_blank')}
          >
            <motion.span
              className="flex items-center gap-1 sm:gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.i 
                className="fab fa-whatsapp"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              CONTACT US
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.section>
    </motion.section>
  );
};

export default GetInTouch;
