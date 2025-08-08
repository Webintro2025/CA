"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import servicesData from "@/servicesData";
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

  // Helper to truncate text to minWordCount
  const truncateText = (text, minWords) => {
    const words = text.trim().split(/\s+/);
    if (words.length <= minWords) return text;
    return words.slice(0, minWords).join(" ") + "...";
  };

  // Helper to render arrays and objects with animation and hover, with truncation and read more
  const renderValue = (value, fieldKey) => {
    // For string
    if (typeof value === "string") {
      const words = value.trim().split(/\s+/);
      const isTruncated = words.length > minWordCount && !expandedFields[fieldKey];
      return (
        <>
          <span>{isTruncated ? truncateText(value, minWordCount) : value}</span>
          {isTruncated && (
            <button
              className="ml-2 text-blue-600 underline cursor-pointer text-sm"
              onClick={() => setExpandedFields(f => ({ ...f, [fieldKey]: true }))}
            >
              Read More
            </button>
          )}
        </>
      );
    }
    // For array
    if (Array.isArray(value)) {
      // Flatten array to string for word count
      const arrText = value.filter(v => v !== undefined && v !== null).map(v => typeof v === "string" ? v : JSON.stringify(v)).join(" ");
      const arrWords = arrText.trim().split(/\s+/);
      const isTruncated = arrWords.length > minWordCount && !expandedFields[fieldKey];
      let displayArr = value.filter(v => v !== undefined && v !== null);
      if (isTruncated) {
        // Truncate array to minWordCount
        let count = 0;
        displayArr = [];
        for (let i = 0; i < value.length; i++) {
          const v = value[i];
          if (v === undefined || v === null) continue;
          const vText = typeof v === "string" ? v : JSON.stringify(v);
          const vWords = vText.trim().split(/\s+/);
          if (count + vWords.length > minWordCount) {
            // Add only needed words from this item
            const needed = minWordCount - count;
            displayArr.push(needed > 0 ? (typeof v === "string" ? vWords.slice(0, needed).join(" ") + "..." : v) : null);
            break;
          } else {
            displayArr.push(v);
            count += vWords.length;
          }
        }
      }
      return (
        <>
          <motion.ul className="list-disc ml-6 space-y-1 w-full" initial="hidden" animate="visible" variants={{hidden: {}, visible: {transition: {staggerChildren: 0.05}}}}>
            {displayArr.filter(v => v !== undefined && v !== null).map((v, i) =>
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
          {isTruncated && (
            <button
              className="ml-2 text-blue-600 underline cursor-pointer text-sm"
              onClick={() => setExpandedFields(f => ({ ...f, [fieldKey]: true }))}
            >
              Read More
            </button>
          )}
        </>
      );
    }
    // For object
    if (typeof value === "object" && value !== null) {
      // Flatten object to string for word count
      const objText = Object.values(value).filter(v => v !== undefined && v !== null).map(v => typeof v === "string" ? v : JSON.stringify(v)).join(" ");
      const objWords = objText.trim().split(/\s+/);
      const isTruncated = objWords.length > minWordCount && !expandedFields[fieldKey];
      let displayObj = value;
      if (isTruncated) {
        // Truncate object values to minWordCount
        let count = 0;
        displayObj = {};
        for (const [k, v] of Object.entries(value)) {
          if (v === undefined || v === null) continue;
          const vText = typeof v === "string" ? v : JSON.stringify(v);
          const vWords = vText.trim().split(/\s+/);
          if (count + vWords.length > minWordCount) {
            const needed = minWordCount - count;
            displayObj[k] = needed > 0 ? (typeof v === "string" ? vWords.slice(0, needed).join(" ") + "..." : v) : null;
            break;
          } else {
            displayObj[k] = v;
            count += vWords.length;
          }
        }
      }
      return (
        <>
          <motion.ul className="list-none ml-0 w-full" initial="hidden" animate="visible" variants={{hidden: {}, visible: {transition: {staggerChildren: 0.05}}}}>
            {Object.entries(displayObj).filter(([k, val]) => val !== undefined && val !== null).map(([k, val]) => (
              <motion.li key={k} whileHover={{ color: '#2563eb', scale: 1.04,  }} className="rounded px-2 py-1 transition-colors">
                <span className="font-semibold">{k}:</span> {val}
              </motion.li>
            ))}
          </motion.ul>
          {isTruncated && (
            <button
              className="ml-2 text-blue-600 underline cursor-pointer text-sm"
              onClick={() => setExpandedFields(f => ({ ...f, [fieldKey]: true }))}
            >
              Read More
            </button>
          )}
        </>
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
          className="mx-auto mb-10 w-[320px] h-[320px] md:w-[600px] md:h-[600px] object-contain rounded-2xl shadow-2xl border border-blue-200  transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.07, rotate: 2, boxShadow: "0 8px 32px #60a5fa33" }}
          style={{ maxWidth: 600, maxHeight: 600 }}
        />
      )}
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
                      {renderValue(value, key)}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ));
          })()}
        </div>
      </div>
    </motion.div>
  );
}