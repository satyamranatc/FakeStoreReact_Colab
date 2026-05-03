import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-rose-50 via-white to-rose-50 border-t mt-10 shadow-inner">
      
      
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-rose-600 mb-3 tracking-wide">
          📞 Contact Us
        </h2>

        <p className="text-gray-500 text-sm mb-5">
          We’re always here to help you 
        </p>

        <div className="flex flex-col items-center gap-3 text-gray-600 text-sm">
          
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 hover:text-rose-600 transition duration-300"
          >
            <Phone size={16} />
            +91 98765 43210
          </a>

          <a
            href="mailto:support@shophere.com"
            className="flex items-center gap-2 hover:text-rose-600 transition duration-300"
          >
            <Mail size={16} />
            support@shophere.com
          </a>
        </div>

        
      </div>

     
      <div className="text-center text-gray-500 text-sm py-4 border-t bg-white/60 backdrop-blur">
        © 2026 <span className="text-rose-600 font-medium">Shop Here</span> • All Rights Reserved
      </div>
    </footer>
  );
}