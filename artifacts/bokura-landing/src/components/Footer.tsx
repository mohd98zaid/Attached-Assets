import React from "react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/80 backdrop-blur-xl pt-16 pb-8 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="text-3xl font-display font-bold tracking-wider text-white mb-4 block">
              BOKURA<span className="text-primary">.</span>
            </span>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Premium accounting, bookkeeping, and financial advisory services tailored for Dubai's modern enterprises and GCC businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Dubai, United Arab Emirates</li>
              <li>info@bokura-accounting.com</li>
              <li>+971 4 XXX XXXX</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-primary transition-colors">Why Us</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} BOKURA Accounting & Bookkeeping L.L.C. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}