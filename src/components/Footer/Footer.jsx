import { section } from 'framer-motion/client';
import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section id="footer">
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p>
              I'm a full-stack developer passionate about AI and design. I build projects that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary">Home</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary">Projects</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/?next=%2F" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/yasmine-oukemoum-493bb6317/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
                <FaLinkedin />
              </a>
              <a href="https://github.com/yasmine-oukemoum" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary">
                <FaGithub />
              </a>
            </div>
            {/* Contact Details */}
            <div>
             <p className="flex items-center text-gray-400">
               <span className="font-semibold mr-2"><FaPhoneAlt /></span> +213 6749907687
             </p>
             <p className="flex items-center text-gray-400">
                <span className="font-semibold mr-2"><MdEmail /></span> yasmineoukemoum@gmail.com
             </p>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Yasmine OUKEMOUM. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
