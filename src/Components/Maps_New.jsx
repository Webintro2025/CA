'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Maps = () => {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapInstance = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const destinationLatLng = [ 28.5669083 ,  77.2716459];
  const destinationAddress = 'B-39 2nd Floor, Bharat Nagar, New Friends Colony, Delhi';

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

  const mapVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    // Load Leaflet CSS
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
    document.head.appendChild(leafletCSS);

    // Load Leaflet JS
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    leafletScript.async = true;

    leafletScript.onload = () => {
      if (window.L && mapRef.current && !mapInstance.current) {
        const L = window.L;

        const map = L.map(mapRef.current).setView(destinationLatLng, 15);
        mapInstance.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        // Custom marker for destination
        const destMarker = L.marker(destinationLatLng).addTo(map);
        destMarker.bindPopup(`
          <div style="text-align: center; padding: 10px;">
            <strong style="color: #1e40af; font-size: 16px;">Eazy Tax</strong><br/>
            <span style="color: #64748b; font-size: 14px;">${destinationAddress}</span><br/>
            <span style="color: #059669; font-size: 12px; margin-top: 5px; display: block;">📞 +91 98215 75784</span>
          </div>
        `).openPopup();

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation([latitude, longitude]);

              L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup('<div style="text-align: center; color: #dc2626; font-weight: bold;">📍 You are here</div>');
            },
            (error) => {
              console.warn('Geolocation error:', error);
            },
            { enableHighAccuracy: true }
          );
        }

        setIsLoading(false);
      }
    };

    document.body.appendChild(leafletScript);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      if (document.head.contains(leafletCSS)) {
        document.head.removeChild(leafletCSS);
      }
      if (document.body.contains(leafletScript)) {
        document.body.removeChild(leafletScript);
      }
    };
  }, []);

  const handleGetDirections = () => {
    let url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLatLng.join(',')}`;
    if (userLocation) {
      url += `&origin=${userLocation.join(',')}`;
    }
    window.open(url, '_blank');
  };

  return (
    <motion.section 
      className="py-8 sm:py-10 md:py-14 px-2 sm:px-4 bg-gradient-to-b from-blue-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-7 sm:mb-10 md:mb-12"
          variants={fadeInVariants}
        >
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-2 sm:mb-3 md:mb-4"
            whileHover={{ 
              scale: 1.02,
              color: "#1e40af",
              transition: { duration: 0.3 }
            }}
          >
            Find Us on Map
          </motion.h2>
          <motion.div 
            className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-slate-600 mx-auto mb-3 sm:mb-4 md:mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          />
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto"
            variants={fadeInVariants}
          >
            Visit our office in Delhi's prime business district for personalized consultation and expert financial advice.
          </motion.p>
        </motion.div>

        {/* Map Container */}
        <motion.div 
          className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-x-hidden border border-blue-100"
          variants={mapVariants}
          whileHover={{ 
            scale: 1.01,
            boxShadow: "0 30px 60px rgba(59, 130, 246, 0.15)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Address Bar */}
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-slate-700 p-3 sm:p-4 md:p-6 text-white"
            variants={fadeInVariants}
          >
            <motion.div 
              className="flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <motion.i 
                className="fas fa-map-marker-alt text-2xl"
                animate={{ 
                  y: [0, -3, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="text-center">
                <motion.h3 
                  className="text-base sm:text-lg md:text-xl font-bold mb-0.5 sm:mb-1"
                  variants={fadeInVariants}
                >
                  Eazy Tax - CA Office
                </motion.h3>
                <motion.p 
                  className="text-xs sm:text-sm md:text-base text-blue-100"
                  variants={fadeInVariants}
                >
                  {destinationAddress}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div 
            className="relative"
            variants={fadeInVariants}
          >
            {isLoading && (
              <motion.div 
                className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10"
                initial={{ opacity: 1 }}
                animate={{ opacity: isLoading ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="text-center"
                  animate={{ 
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.i 
                    className="fas fa-map text-4xl text-blue-500 mb-4 block"
                    animate={{ 
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <p className="text-slate-600">Loading Map...</p>
                </motion.div>
              </motion.div>
            )}
            
            <div
              ref={mapRef}
              style={{
                width: '100%',
                height: 250,
                minHeight: 180,
                maxHeight: 400,
              }}
              className="sm:h-[300px] md:h-[400px]"
            />
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="p-3 sm:p-4 md:p-6 bg-gradient-to-r from-slate-50 to-blue-50"
            variants={fadeInVariants}
          >
            <motion.div 
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.button
                onClick={handleGetDirections}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.i 
                  className="fas fa-directions"
                  animate={{ 
                    x: [0, 3, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                Get Directions
              </motion.button>

              <motion.button
                onClick={() => window.open('tel:+919971669475', '_blank')}
                className="border-2 border-blue-500 text-blue-500 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold text-xs sm:text-sm md:text-base hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
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
                Call Before Visit
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-blue-200 text-center"
              variants={fadeInVariants}
            >
              <motion.div 
                className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 md:gap-6 text-slate-600"
                variants={containerVariants}
              >
                <motion.div 
                  className="flex items-center gap-1.5 sm:gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#1e40af",
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
                  <span className="text-xs sm:text-sm md:text-base">+91 98215 75784</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-1.5 sm:gap-2"
                  whileHover={{ 
                    scale: 1.05,
                    color: "#1e40af",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.i 
                    className="fas fa-clock text-blue-500"
                    animate={{ 
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="text-xs sm:text-sm md:text-base">Mon-Sat: 9:00 AM - 6:00 PM</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Maps;
