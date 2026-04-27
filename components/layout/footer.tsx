"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-12 space-y-6 lg:space-y-0">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-text-light text-[3rem] sm:text-[3.5rem] md:text-[4rem] font-wegato font-thin">
              Decorco
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 sm:space-x-6">
            {['twitter', 'instagram', 'linkedin', 'pinterest'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white text-[#1a1a1a] flex items-center justify-center transition-all hover:translate-y-[-4px] sm:hover:translate-y-[-6px] lg:hover:translate-y-[-10px]"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                  {social === 'twitter' && (
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  )}
                  {social === 'instagram' && (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  )}
                  {social === 'linkedin' && (
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  )}
                  {social === 'pinterest' && (
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  )}
                </svg>
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem] font-wegato font-light tracking-wide mb-2 sm:mb-4 leading-[0.9]">
            Get in touch
          </h2>
        </div>

        {/* Contact Information Container */}
        <div className="mx-auto mb-12 md:mb-16 lg:mb-20">
          <div className="border border-white rounded-[3rem] sm:rounded-[5rem] lg:rounded-[10rem] px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-6 lg:py-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
            <div>
              <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-white font-wegato">
                Contacts
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center sm:text-left w-full md:w-auto">
              {/* Address */}
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                  Address
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg">
                  123 Business Street
                  <br />
                  City, State 12345
                </p>
              </div>

              {/* Phone */}
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                  Phone
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg">+1 (555) 123-4567</p>
              </div>

              {/* Email */}
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                  Email
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg">hello@company.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 md:pt-8 border-t border-[#cdcdcd] text-center text-sm sm:text-base">
          <p className="mb-2">
            &copy; 2025 <strong>Decorco</strong>. All rights reserved.
          </p>
          <p>
            Designed and Developed by{' '}
            <Link href="https://elrayes.vercel.app" className="hover:underline">
              <strong>Elrayes</strong>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;