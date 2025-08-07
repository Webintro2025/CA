"use client"
import React from 'react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
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

  // Why Choose Us points
  const whyChooseUsPoints = [
    {
      icon: "fas fa-award",
      title: "30+ Years of Trust & Expertise",
      description: "Three decades of proven excellence in financial advisory and compliance services"
    },
    {
      icon: "fas fa-users-cog",
      title: "Experienced Team with Big 4 Background",
      description: "Our professionals bring world-class expertise from leading global firms"
    },
    {
      icon: "fas fa-handshake",
      title: "Client-Centric Advisory Approach",
      description: "Personalized solutions tailored to your unique business requirements"
    },
    {
      icon: "fas fa-cogs",
      title: "End-to-End Financial & Compliance Solutions",
      description: "Comprehensive services covering all aspects of your business needs"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Located in Delhi's Prime Business District",
      description: "Strategically positioned for easy accessibility and business convenience"
    },
    {
      icon: "fas fa-chart-line",
      title: "Consulted for SME, Startups & Listed Companies Alike",
      description: "Diverse expertise across all business scales and industry verticals"
    }
  ];

  return (
    <motion.section 
      className="bg-gradient-to-br from-blue-50 via-slate-50 to-white py-16 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={leftToRightVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6"
            whileHover={{ 
              scale: 1.02,
              color: "#1e40af",
              transition: { duration: 0.3 }
            }}
          >
            Why Choose Us
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-slate-600 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          />
          <motion.p 
            className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We are not just service providers—we are strategic partners in your business journey. 
            Whether you are launching a startup, managing a fast-growing SME, or overseeing a listed company, 
            our team is equipped to provide customized, high-impact financial and legal advice to drive your goals forward.
          </motion.p>
        </motion.div>

        {/* Why Choose Us Points List */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
        >
          <motion.ul 
            className="space-y-6"
            variants={containerVariants}
          >
            {whyChooseUsPoints.map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-6 group"
                variants={leftToRightVariants}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Bullet Point Icon */}
                <motion.div 
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full flex-shrink-0 mt-1"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.6 }
                  }}
                >
                  <motion.i 
                    className={`${point.icon} text-lg text-white`}
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  />
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="flex-1"
                  variants={itemVariants}
                >
                  <motion.h3 
                    className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {point.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300"
                    variants={itemVariants}
                  >
                    {point.description}
                  </motion.p>

                  {/* Animated Underline */}
                  <motion.div
                    className="mt-3 h-0.5 bg-gradient-to-r from-blue-500 to-slate-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Our Clientele Section */}
        <motion.div 
          className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 rounded-3xl p-10 mb-16 text-white"
          variants={rightToLeftVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
            transition: { duration: 0.4 }
          }}
        >
          <motion.div 
            className="text-center mb-8"
            variants={leftToRightVariants}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4"
              whileHover={{ 
                scale: 1.05,
                color: "#60a5fa",
                transition: { duration: 0.3 }
              }}
            >
              Our Clientele
            </motion.h3>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-white mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>

          <motion.p 
            className="text-lg text-blue-100 leading-relaxed max-w-5xl mx-auto text-center"
            variants={itemVariants}
          >
            Over the years, we have worked closely with a diverse portfolio of clients, ranging from small business owners to public companies. 
            Our advisory services on complex compliance matters, strategic business structuring, and regulatory challenges have made us a trusted partner in their success.
          </motion.p>

          {/* Client Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
            variants={containerVariants}
          >
            {[
              { number: "500+", label: "Happy Clients", icon: "fas fa-smile" },
              { number: "30+", label: "Years Experience", icon: "fas fa-calendar-alt" },
              { number: "100%", label: "Client Satisfaction", icon: "fas fa-thumbs-up" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={leftToRightVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.i 
                  className={`${stat.icon} text-3xl text-blue-400 mb-3 block`}
                  animate={{ 
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  whileHover={{ 
                    scale: 1.1,
                    color: "#60a5fa",
                    transition: { duration: 0.3 }
                  }}
                >
                  {stat.number}
                </motion.div>
                <motion.p 
                  className="text-blue-200 font-medium"
                  variants={itemVariants}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          className="text-center bg-white rounded-3xl p-10 shadow-xl border-2 border-blue-100"
          variants={leftToRightVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)",
            borderColor: "#3b82f6",
            transition: { duration: 0.4 }
          }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-slate-800 mb-6"
            whileHover={{ 
              color: "#1e40af",
              transition: { duration: 0.3 }
            }}
          >
            Ready to Partner with Excellence?
          </motion.h3>
          
          <motion.p 
            className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            If you are looking for a Chartered Accountancy firm that blends traditional values with modern expertise, 
            we invite you to connect with us. Let's work together to build a financially sound and legally compliant future for your business.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={containerVariants}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-slate-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-slate-700 transition-all duration-300 flex items-center gap-3"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/919821575784', '_blank')}
            >
              <motion.i 
                className="fab fa-whatsapp text-xl"
                animate={{ 
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.span
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                Connect with Us
              </motion.span>
            </motion.button>

            <motion.button
              className="border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('tel:+919821575784', '_blank')}
            >
              <motion.i 
                className="fas fa-phone text-xl"
                animate={{ 
                  rotate: [0, 15, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.span
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                Call Now
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="mt-8 pt-8 border-t border-blue-100"
            variants={itemVariants}
          >
            <motion.p 
              className="text-slate-600 flex items-center justify-center gap-2 mb-2"
              whileHover={{ 
                color: "#1e40af",
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.i 
                className="fas fa-phone text-blue-500"
                animate={{ 
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              +91 98215 75784
            </motion.p>
            <motion.p 
              className="text-slate-600 flex items-center justify-center gap-2"
              whileHover={{ 
                color: "#1e40af",
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.i 
                className="fas fa-envelope text-blue-500"
                animate={{ 
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              adishwar@cklotech.com
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default WhyChooseUs
