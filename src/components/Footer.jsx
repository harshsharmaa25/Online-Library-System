import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-6 mt-10 shadow-lg transition-transform duration-300 hover:scale-105">
      <p className="text-lg font-semibold">
        &copy; {new Date().getFullYear()} Harsh Sharma. All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Privacy Policy</a>
        <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Terms of Service</a>
        <a href="#" className="hover:text-yellow-300 transition-colors duration-200">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
