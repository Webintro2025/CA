"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = ({ itemVariants }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, message, phoneNumber }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
      } else {
        alert("Failed to send message: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      alert("Failed to send message: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 p-2 sm:p-3 md:p-5 mt-4 sm:mt-6 md:mt-10 lg:mt-14 border border-blue-400/40 max-w-lg rounded-2xl shadow-xl"
      variants={itemVariants}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.input
        type="text"
        name="fullName"
        placeholder="Your Name:"
        value={fullName}
        onChange={e => setFullName(e.target.value)}
        required
        className="w-full mb-2 sm:mb-3 md:mb-4 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded text-[10px] sm:text-xs md:text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300"
        variants={itemVariants}
        whileFocus={{
          scale: 1.02,
          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
          transition: { duration: 0.3 },
        }}
      />
      <motion.input
        type="email"
        name="email"
        placeholder="Your Email:"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        className="w-full mb-2 sm:mb-3 md:mb-4 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded text-[10px] sm:text-xs md:text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300"
        variants={itemVariants}
        whileFocus={{
          scale: 1.02,
          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
          transition: { duration: 0.3 },
        }}
      />
      <motion.input
        type="tel"
        name="phoneNumber"
        placeholder="Your Phone Number:"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        required
        className="w-full mb-3 sm:mb-4 md:mb-6 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded text-[10px] sm:text-xs md:text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300"
        variants={itemVariants}
        whileFocus={{
          scale: 1.02,
          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
          transition: { duration: 0.3 },
        }}
      />
      <motion.input
        type="text"
        name="message"
        placeholder="Your Message:"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        className="w-full mb-2 sm:mb-3 md:mb-4 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded text-[10px] sm:text-xs md:text-sm text-slate-700 placeholder-slate-400 bg-white transition-all duration-300"
        variants={itemVariants}
        whileFocus={{
          scale: 1.02,
          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
          transition: { duration: 0.3 },
        }}
      />
      <motion.button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-blue-600 to-slate-700 text-white font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg hover:from-blue-700 hover:to-slate-800 transition-all duration-300 text-[10px] sm:text-xs md:text-sm shadow-lg w-full disabled:opacity-60"
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className="flex items-center justify-center gap-2"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {loading ? "Sending..." : "SUBMIT NOW"}
          <motion.i
            className="fas fa-paper-plane"
            animate={{
              x: [0, 3, 0],
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.span>
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
