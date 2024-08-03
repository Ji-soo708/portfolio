import React from "react";
import GitHub from "../assets/svg/github-circle.svg";
import LinkedIn from "../assets/svg/linkedin-square-mono.svg";
import Email from "../assets/svg/email.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191919] flex items-center justify-center mt-40">
      <div className="py-16 text-left">
        <div className="w-24 text-white h-8 mb-4 font-bold ml-0.5">Contact</div>
        <div className="w-[700px] text-[#C5C5C5] h-16 mb-4 ml-0.5">
          The main stack is server development based on SpringBoot. And web
          front-end development is possible. I aim for an atmosphere where we
          all grow together through knowledge sharing and continue to pursue
          endless development.
        </div>
        <div className="flex items-center mb-10 ml-0.5 text-[#C5C5C5]">
          <img src={Email} alt="Email" className="w-5 h-5 mr-2" />
          dlawotn321@gmail.com
        </div>
        <div className="flex">
          <a
            href="https://github.com/Ji-soo708"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="GitHub" className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/limjisoo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="w-5 h-5 mt-0.5 ml-2.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
