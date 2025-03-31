import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300 text-center py-2 mt-1">
      <div className="container mx-auto flex items-center justify-center">
        <Logo />
        <div className="ml-2 flex items-center gap-1">
          Powered by{" "}
          <h1
            className="text-blue-400"
          >
            ENHANCE
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
