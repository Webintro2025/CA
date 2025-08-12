"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Teams = () => {
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

  const cardVariants = {
    hidden: { 
      x: 100, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const partners = [
    {
      name: "CA Avish Jain",
      experience: "35+ years of experience",
      description: "With 35+ years of experience in the profession, CA Avish Jain has been at the forefront of advising Indian businesses on a wide range of regulatory and compliance matters.",
      expertise: [
        "Company Law Compliance",
        "GST Registration & Advisory", 
        "Company Incorporation and Structuring",
        "SME Business Advisory"
      ],
      additionalInfo: "His deep understanding of Indian regulations has helped hundreds of clients stay compliant while scaling their operations smoothly."
    },
    {
      name: "CA Adishwar Jain",
      experience: "6 years in the industry",
      description: "An experienced Chartered Accountant with 6 years in the industry, Adishwar brings valuable exposure from his tenure at KPMG and specializes in:",
      expertise: [
        "Insolvency and Bankruptcy matters",
        "Debt recovery and NCLT representations",
        "Business Restructuring and Financial Health Assessments"
      ],
      additionalInfo: "He has advised on multiple insolvency cases, representing both debtors and creditors, and brings a strategic perspective to clients facing financial distress or complex recovery situations."
    },
    {
      name: "CA Nidhi Jain",
      experience: "6 years of deep taxation expertise",
      description: "CA Nidhi Jain carries 6 years of deep taxation expertise, backed by her experience at KPMG, Deloitte, and Grant Thornton. Her domain includes:",
      expertise: [
        "Domestic and International Taxation",
        "Tax Advisory and Litigation Support",
        "Transfer Pricing & Corporate Tax Filings"
      ],
      additionalInfo: "Nidhi has advised high-net-worth clients, corporates, and multinational entities on intricate tax matters, bringing precision and foresight to every engagement."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-sky-50 py-8 sm:py-12 md:py-20">
      <motion.div 
        className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          variants={cardVariants}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-sky-400 to-gray-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Our Partners & Their Expertise
          </motion.h2>
          <motion.p 
            className="text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-gray-600"
            variants={cardVariants}
          >
            Meet our experienced team of Chartered Accountants who bring decades of combined expertise to serve your business needs
          </motion.p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="relative group"
              variants={cardVariants}
              custom={index}
            >
              <motion.div
                className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 h-full relative overflow-x-hidden"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-gray-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Name and Experience */}
                  <motion.div 
                    className="mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.h3 
                      className="text-base sm:text-lg md:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-gray-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {partner.name}
                    </motion.h3>
                    <motion.p 
                      className="text-sky-600 font-semibold text-xs sm:text-sm"
                      whileHover={{ color: "#0EA5E9" }}
                    >
                      {partner.experience}
                    </motion.p>
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 md:mb-6 group-hover:text-gray-700 transition-colors duration-300"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {partner.description}
                  </motion.p>

                  {/* Expertise List */}
                  <motion.div 
                    className="mb-3 sm:mb-4 md:mb-6"
                    variants={containerVariants}
                  >
                    <motion.h4 
                      className="text-gray-800 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm"
                      whileHover={{ color: "#0EA5E9" }}
                    >
                      Core Expertise:
                    </motion.h4>
                    <motion.ul className="space-y-1 sm:space-y-2">
                      {partner.expertise.map((skill, skillIndex) => (
                        <motion.li
                          key={skill}
                          className="flex items-start gap-2 text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: skillIndex * 0.1,
                            duration: 0.3
                          }}
                          whileHover={{ x: 5, color: "#0EA5E9" }}
                        >
                          <motion.span
                            className="w-1.5 h-1.5 bg-gradient-to-r from-sky-400 to-gray-500 rounded-full mt-1.5 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          <span>{skill}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* Additional Info */}
                  <motion.p 
                    className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {partner.additionalInfo}
                  </motion.p>

                  {/* Hover Effect Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-sky-200 rounded-2xl transition-all duration-300"
                    whileHover={{ 
                      borderColor: "#BAE6FD",
                      boxShadow: "inset 0 0 20px rgba(14, 165, 233, 0.1)"
                    }}
                  />
                </div>

                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sky-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-10 sm:mt-12 md:mt-16"
          variants={cardVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-sky-400 to-gray-600 rounded-2xl p-4 sm:p-6 md:p-8 text-white relative overflow-x-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(14, 165, 233, 0.3)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
              whileHover={{ opacity: 1 }}
            />
            <div className="relative z-10">
              <motion.h3 
                className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4"
                variants={cardVariants}
              >
                Ready to Work with Our Expert Team?
              </motion.h3>
              <motion.p 
                className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 opacity-90"
                variants={cardVariants}
              >
                Get personalized advice from our experienced Chartered Accountants
              </motion.p>
              <motion.button 
                className="bg-white text-sky-600 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(255,255,255,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/919971669475', '_blank')}
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Teams