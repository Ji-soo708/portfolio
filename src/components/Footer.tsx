import React from "react";
import GitHub from "../assets/svg/github-circle.svg";
import LinkedIn from "../assets/svg/linkedin-square-mono.svg";
import Email from "../assets/svg/email.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191919] flex items-center justify-center mt-32">
      <div className="py-6 md:py-8 lg:py-10 text-left max-w-screen-lg w-full mx-6 sm:mx-8 md:mx-10 lg:mx-12">
        {/* Contact Title */}
        <div className="text-white font-bold text-base sm:text-lg md:text-xl mb-3">
          Contact
        </div>

        {/* Description */}
        <div className="text-[#C5C5C5] text-xs sm:text-sm md:text-base mb-3">
          The main stack is server development based on SpringBoot. And web
          front-end development is possible. I aim for an atmosphere where we
          all grow together through knowledge sharing and continue to pursue
          endless development.
        </div>

        {/* Email Information */}
        <div className="flex items-center text-[#C5C5C5] text-xs sm:text-sm md:text-base mb-6">
          <img src={Email} alt="Email" className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          dlawotn321@gmail.com
        </div>

        {/* Social Icons */}
        <div className="flex space-x-3">
          <a
            href="https://github.com/Ji-soo708"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="GitHub" className="w-5 h-5 md:w-7 md:h-7" />
          </a>
          <a
            href="https://linkedin.com/in/limjisoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
