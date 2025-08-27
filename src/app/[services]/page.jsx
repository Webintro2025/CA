
"use client";
// import servicesMeta from "@/seo/servicesMeta"; // If you need to use metadata in the component, import like this
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import servicesData from "@/servicesData";
import GetInTouch from "@/Components/GetInTouch";
export default function ServicePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [service, setService] = useState(null);
  const [expandedFields, setExpandedFields] = useState({});
  const [minWordCount, setMinWordCount] = useState(0);

  useEffect(() => {
    if (name) {
      // Find by title or fallback to partial match
      const found = servicesData.find(
        (s) =>
          s.title?.toLowerCase().includes(name.toLowerCase()) ||
          s.title?.toLowerCase() === name.toLowerCase()
      );
      setService(found || null);
      // Calculate min word count for all fields except title/image
      if (found) {
        const entries = Object.entries(found).filter(([key]) => key !== "title" && key !== "image");
        let minWords = Infinity;
        entries.forEach(([_, value]) => {
          if (typeof value === "string") {
            const wc = value.trim().split(/\s+/).length;
            if (wc < minWords) minWords = wc;
          } else if (Array.isArray(value)) {
            // For arrays, join all items as string
            const arrText = value.map(v => typeof v === "string" ? v : JSON.stringify(v)).join(" ");
            const wc = arrText.trim().split(/\s+/).length;
            if (wc < minWords) minWords = wc;
          } else if (typeof value === "object" && value !== null) {
            const objText = Object.values(value).map(v => typeof v === "string" ? v : JSON.stringify(v)).join(" ");
            const wc = objText.trim().split(/\s+/).length;
            if (wc < minWords) minWords = wc;
          }
        });
        setMinWordCount(minWords === Infinity ? 0 : minWords);
      }
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

  // Helper to render arrays and objects with animation and hover, always showing full content
  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <motion.ul className="list-disc ml-6 space-y-1 w-full" initial="hidden" animate="visible" variants={{hidden: {}, visible: {transition: {staggerChildren: 0.05}}}}>
          {value.filter(v => v !== undefined && v !== null).map((v, i) =>
            typeof v === "object" ? (
              <motion.li
                key={i}
                whileHover={{ scale: 1.04, backgroundColor: '#f0f6ff' }}
                className="rounded px-2 py-1 transition-colors"
              >
                {v && typeof v === "object" ? (
                  <motion.ul className="list-none ml-0">
                    {Object.entries(v).filter(([k, val]) => val !== undefined && val !== null).map(([k, val]) => (
                      <motion.li key={k} whileHover={{ color: '#2563eb' }} className="transition-colors">
                        <span className="font-semibold">{k}:</span> {val}
                      </motion.li>
                    ))}
                  </motion.ul>
                ) : null}
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
    if (typeof value === "object" && value !== null) {
      return (
        <motion.ul className="list-none ml-0 w-full" initial="hidden" animate="visible" variants={{hidden: {}, visible: {transition: {staggerChildren: 0.05}}}}>
          {Object.entries(value).filter(([k, val]) => val !== undefined && val !== null).map(([k, val]) => (
            <motion.li key={k} whileHover={{ color: '#2563eb', scale: 1.04,  }} className="rounded px-2 py-1 transition-colors">
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
      className="w-full max-w-full mx-0 p-0 md:p-8 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-2xl border border-blue-100 flex flex-col items-center justify-start"
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ minHeight: '80vh' }}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full mt-8 mb-8 px-0"
        style={{
          padding: '2.5rem 2rem',
          borderRadius: '2rem',
          background: 'linear-gradient(90deg, #6dd5ed 0%, #2193b0 100%)',
          boxShadow: '0 8px 32px rgba(33,147,176,0.15)',
          minHeight: '340px',
        }}
      >
        <motion.h1
          className="font-extrabold drop-shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-0"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          whileHover={{ scale: 1.05, color: "#fff" }}
          style={{
            color: '#fff',
            margin: 0,
            textAlign: 'left',
            flex: 1,
            letterSpacing: '1px',
            textShadow: '0 2px 8px rgba(33,147,176,0.2)',
          }}
        >
          {service.title}
        </motion.h1>
        {service.image && (
          <motion.img
            src={`/${service.image}`}
            alt={service.title}
            className="object-contain rounded-2xl shadow-2xl border border-blue-200 transition-all duration-300 max-w-[220px] max-h-[220px] md:max-w-[340px] md:max-h-[340px] md:ml-4"
            initial={{ opacity: 0, x: 80, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.09, rotate: 2, boxShadow: "0 8px 32px #60a5fa33" }}
            style={{ marginRight: '0.5rem' }}
          />
        )}
      </div>
      <div className="flex-1 w-full max-w-full mx-0 px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(() => {
            const entries = Object.entries(service).filter(([key]) => key !== "title" && key !== "image");
            const pairs = [];
            for (let i = 0; i < entries.length; i += 2) {
              pairs.push(entries.slice(i, i + 2));
            }
            return pairs.map((pair, rowIdx) => (
              <div key={rowIdx} className="flex flex-col md:flex-row gap-8 w-full">
                {pair.map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    className="border-b pb-6 w-full rounded-none shadow-none hover:shadow-md transition-all duration-200 mb-4"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.5, delay: (rowIdx * 2 + idx) * 0.07 + 0.1, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    <motion.h2
                      className="capitalize font-bold text-blue-600 mb-3 tracking-wide w-full text-base sm:text-lg md:text-xl lg:text-2xl"
                      whileHover={{ scale: 1.06, color: "#1e40af" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {key.replace(/_/g, " ")}
                    </motion.h2>
                    <motion.div
                      className="text-gray-700 w-full text-sm sm:text-base md:text-lg lg:text-xl"
                      whileHover={{ scale: 1.01 }}
                    >
                      {renderValue(value)}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ));
          })()}
        </div>
      </div>
      <GetInTouch />
    </motion.div>
  );
}