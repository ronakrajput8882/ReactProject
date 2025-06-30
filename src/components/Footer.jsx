import React from "react";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-pink-950 text-white fixed bottom-0 w-full z-50 flex items-center"
      style={{ height: "50px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center w-full">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} QuickShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
