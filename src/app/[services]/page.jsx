"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import servicesData from "@/servicesData";
export default function ServicePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [service, setService] = useState(null);

  useEffect(() => {
    if (name) {
      // Find by title or fallback to partial match
      const found = servicesData.find(
        (s) =>
          s.title?.toLowerCase().includes(name.toLowerCase()) ||
          s.title?.toLowerCase() === name.toLowerCase()
      );
      setService(found || null);
    }
  }, [name]);

  if (!name)
    return (
      <div className="p-8 text-center text-xl text-gray-500">
        Please select a service from the menu.
      </div>
    );

  if (!service)
    return (
      <div className="p-8 text-center text-xl text-red-500">
        Service not found.
      </div>
    );

  // Helper to render arrays and objects with animation and hover
  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <motion.ul className="list-disc ml-6 space-y-1 w-full" initial="hidden" animate="visible" variants={{hidden: {}, visible: {transition: {staggerChildren: 0.05}}}}>
          {value.map((v, i) =>
            typeof v === "object" ? (
              <motion.li
                key={i}
                whileHover={{ scale: 1.04, backgroundColor: '#f0f6ff' }}
                className="rounded px-2 py-1 transition-colors"
              >
                <motion.ul className="list-none ml-0">
                  {Object.entries(v).map(([k, val]) => (
                    <motion.li key={k} whileHover={{ color: '#2563eb' }} className="transition-colors">
                      <span className="font-semibold">{k}:</span> {val}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.li>
            ) : (
              <motion.li
                key={i}
                whileHover={{ scale: 1.04, color: '#2563eb', backgroundColor: '#f0f6ff' }}
                className="rounded px-2 py-1 transition-colors"
              >
                {v}
              </motion.li>
            )
          )}
        </motion.ul>
      );
    }
    if (typeof value === "object") {
      return (
        <motion.ul className="list-none ml-0 w-full" initial="hidden" animate="visible" variants={{hidden: {}, visible: {transition: {staggerChildren: 0.05}}}}>
          {Object.entries(value).map(([k, val]) => (
            <motion.li key={k} whileHover={{ color: '#2563eb', scale: 1.04, backgroundColor: '#f0f6ff' }} className="rounded px-2 py-1 transition-colors">
              <span className="font-semibold">{k}:</span> {val}
            </motion.li>
          ))}
        </motion.ul>
      );
    }
    return <span>{value}</span>;
  };

  return (
    <motion.div
      className="w-full  max-w-full mx-0 p-0 md:p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100  shadow-2xl border border-blue-100 flex flex-col items-center justify-start"
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ minHeight: '80vh' }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-8 mt-8 drop-shadow-lg text-center w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
        whileHover={{ scale: 1.03, color: "#1e40af" }}
      >
        {service.title}
      </motion.h1>
      {service.image && (
        <motion.img
          src={`/${service.image}`}
          alt={service.title}
          className="mx-auto mb-10 w-[320px] h-[320px] md:w-[600px] md:h-[600px] object-contain rounded-2xl shadow-2xl border border-blue-200 bg-white transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.07, rotate: 2, boxShadow: "0 8px 32px #60a5fa33" }}
          style={{ maxWidth: 600, maxHeight: 600 }}
        />
      )}
      <div className="flex-1 w-full max-w-full mx-0 px-0 space-y-8">
        {Object.entries(service).map(
          ([key, value], idx) =>
            key !== "title" && key !== "image" && (
              <motion.div
                key={key}
                className="border-b  pb-6 w-full rounded-none shadow-none hover:shadow-md transition-all duration-200 mb-4"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, delay: idx * 0.07 + 0.1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="capitalize text-xl font-bold text-blue-600 mb-3 tracking-wide w-full"
                  whileHover={{ scale: 1.06, color: "#1e40af" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {key.replace(/_/g, " ")}
                </motion.h2>
                <motion.div
                  className="text-gray-700 text-lg w-full"
                  whileHover={{ scale: 1.01 }}
                >
                  {renderValue(value)}
                </motion.div>
              </motion.div>
            )
        )}
      </div>
    </motion.div>
  );
}