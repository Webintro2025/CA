"use client"
import React from 'react'
import { motion } from 'framer-motion'

const OurServices = () => {
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

  const topToBottomVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Services data with descriptions and icons
  const services = [
    {
      title: "Company Registration",
      icon: "fas fa-building",
      description: "Complete private limited company registration with expert guidance and documentation support.",
      points: [
        "Name approval & reservation",
        "DIN & DSC for directors",
        "MOA & AOA drafting",
        "Certificate of incorporation"
      ]
    },
    {
      title: "LLP Registration",
      icon: "fas fa-handshake",
      description: "Limited Liability Partnership registration for professional services and businesses.",
      points: [
        "LLP name availability check",
        "DPIN for designated partners",
        "LLP agreement drafting",
        "LLPIN certificate issuance"
      ]
    },
    {
      title: "Partnership Firm Registration",
      icon: "fas fa-users",
      description: "Traditional partnership firm registration with comprehensive partnership deed preparation.",
      points: [
        "Partnership deed drafting",
        "Registration certificate",
        "PAN & TAN application",
        "Bank account opening support"
      ]
    },
    {
      title: "Sole Proprietorship Registration",
      icon: "fas fa-user-tie",
      description: "Individual business registration for entrepreneurs starting their business journey.",
      points: [
        "Business name registration",
        "Shop & establishment license",
        "UDYAM registration",
        "GST registration support"
      ]
    },
    {
      title: "MSME Registration",
      icon: "fas fa-industry",
      description: "Micro, Small & Medium Enterprise registration for government benefits and schemes.",
      points: [
        "UDYAM registration portal",
        "Classification assistance",
        "Government subsidy access",
        "Priority sector lending"
      ]
    },
    {
      title: "Startupindia Registration",
      icon: "fas fa-rocket",
      description: "Startup India recognition for tax benefits, funding support, and government schemes.",
      points: [
        "DPIIT recognition certificate",
        "Tax exemption benefits",
        "IPR fast-track process",
        "Government tender benefits"
      ]
    },
    {
      title: "Society Registration",
      icon: "fas fa-heart",
      description: "Non-profit society registration for charitable, educational, and social welfare activities.",
      points: [
        "Society registration certificate",
        "Governing body formation",
        "12A & 80G registration",
        "FCRA compliance support"
      ]
    },
    {
      title: "Trust Registration",
      icon: "fas fa-shield-alt",
      description: "Public & private trust registration for charitable and religious purposes.",
      points: [
        "Trust deed preparation",
        "Registration certificate",
        "Tax exemption applications",
        "Compliance management"
      ]
    },
    {
      title: "Import Export Code Registration",
      icon: "fas fa-globe",
      description: "IEC license for businesses engaged in import and export of goods and services.",
      points: [
        "IEC application filing",
        "DGFT portal registration",
        "AD code activation",
        "Export benefits access"
      ]
    },
    {
      title: "GST Registration",
      icon: "fas fa-file-invoice",
      description: "Goods & Services Tax registration for businesses with comprehensive GST compliance.",
      points: [
        "GSTIN certificate",
        "State-wise registration",
        "Composition scheme option",
        "Input tax credit benefits"
      ]
    },
    {
      title: "GST Return Filing",
      icon: "fas fa-calculator",
      description: "Monthly and quarterly GST return filing services with timely compliance management.",
      points: [
        "GSTR-1 & GSTR-3B filing",
        "Input tax credit reconciliation",
        "Late fee minimization",
        "Notice handling support"
      ]
    },
    {
      title: "Bookkeeping Services",
      icon: "fas fa-book",
      description: "Professional bookkeeping and accounting services for accurate financial record maintenance.",
      points: [
        "Daily transaction recording",
        "Financial statements preparation",
        "Bank reconciliation",
        "MIS reports generation"
      ]
    }
  ];

  return (
    <motion.section 
      className="bg-gradient-to-br from-slate-50 via-blue-50 to-white py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          variants={topToBottomVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4"
            whileHover={{ 
              scale: 1.02,
              color: "#1e40af",
              transition: { duration: 0.3 }
            }}
          >
            Our Professional Services
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          />
          <motion.p 
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive business registration and compliance services tailored for your success
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={topToBottomVariants}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                borderColor: "#3b82f6",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Service Icon */}
              <motion.div 
                className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-4 mx-auto"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6 }
                }}
              >
                <motion.i 
                  className={`${service.icon} text-2xl text-white`}
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                />
              </motion.div>

              {/* Service Title */}
              <motion.h3 
                className="text-xl font-bold text-slate-800 mb-3 text-center"
                whileHover={{ 
                  color: "#1e40af",
                  transition: { duration: 0.3 }
                }}
              >
                {service.title}
              </motion.h3>

              {/* Service Description */}
              <motion.p 
                className="text-sm text-slate-600 leading-relaxed mb-4 text-center"
                variants={itemVariants}
              >
                {service.description}
              </motion.p>

              {/* Service Points */}
              <motion.ul 
                className="space-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {service.points.map((point, pointIndex) => (
                  <motion.li
                    key={pointIndex}
                    className="flex items-center text-sm text-slate-700"
                    variants={itemVariants}
                    whileHover={{ 
                      x: 5,
                      color: "#1e40af",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"
                      animate={{ 
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        delay: pointIndex * 0.1
                      }}
                    />
                    {point}
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Button */}
              <motion.button
                className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://wa.me/919821575784', '_blank')}
              >
                <motion.span
                  className="flex items-center justify-center gap-2"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  Get Started
                  <motion.i 
                    className="fas fa-arrow-right"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-12"
          variants={topToBottomVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-slate-800 rounded-2xl p-8 text-white"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-4"
              variants={itemVariants}
            >
              Need Help Choosing the Right Service?
            </motion.h3>
            <motion.p 
              className="text-blue-100 mb-6"
              variants={itemVariants}
            >
              Our experts are ready to guide you through the best options for your business needs
            </motion.p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,255,255,0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/919821575784', '_blank')}
            >
              <motion.span
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.i 
                  className="fab fa-whatsapp text-green-500"
                  animate={{ 
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Consult Our Experts
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default OurServices