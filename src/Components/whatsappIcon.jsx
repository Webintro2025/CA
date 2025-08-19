// Floating WhatsApp Icon (old style)
import React from "react";

const WhatsappIcon = () => (
  <a
    href="https://wa.me/919971669475"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-50 bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-5 flex items-center justify-center transition-colors duration-200"
    style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
    aria-label="Chat on WhatsApp"
  >
    <i className="fab fa-whatsapp text-4xl" />
  </a>
);

export default WhatsappIcon;
