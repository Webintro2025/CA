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

  // Helper to render arrays and objects
  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <ul className="list-disc ml-6 space-y-1">
          {value.map((v, i) =>
            typeof v === "object" ? (
              <li key={i}>
                <ul className="list-none ml-0">
                  {Object.entries(v).map(([k, val]) => (
                    <li key={k}>
                      <span className="font-semibold">{k}:</span> {val}
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={i}>{v}</li>
            )
          )}
        </ul>
      );
    }
    if (typeof value === "object") {
      return (
        <ul className="list-none ml-0">
          {Object.entries(value).map(([k, val]) => (
            <li key={k}>
              <span className="font-semibold">{k}:</span> {val}
            </li>
          ))}
        </ul>
      );
    }
    return <span>{value}</span>;
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg my-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {service.image && (
        <img
          src={`/${service.image}`}
          alt={service.title}
          className="mx-auto mb-6 w-32 h-32 object-contain rounded-lg shadow"
        />
      )}
      <motion.h1
        className="text-3xl font-bold text-blue-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {service.title}
      </motion.h1>
      <div className="space-y-6">
        {Object.entries(service).map(
          ([key, value]) =>
            key !== "title" && key !== "image" && (
              <motion.div
                key={key}
                className="border-b pb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <motion.h2
                  className="capitalize text-lg font-semibold text-blue-600 mb-2"
                  whileHover={{ scale: 1.05, color: "#1e40af" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {key.replace(/_/g, " ")}
                </motion.h2>
                <motion.div
                  className="text-gray-700 text-base"
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