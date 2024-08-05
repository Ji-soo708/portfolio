import React from "react";
import { Link } from "react-router-dom";

const Toolbar: React.FC = () => {
  return (
    <div className="w-full max-w-[1512px] h-[37px] bg-black/85 mx-auto flex items-center justify-between px-4">
      <div className="flex-grow" />
      <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-[34px] pr-4 sm:pr-6 md:pr-8 lg:pr-[117px]">
        <Link to="/" className="text-white text-sm sm:text-base md:text-lg">
          Home
        </Link>
        <a
          href="https://github.com/Ji-soo708"
          className="text-white text-sm sm:text-base md:text-lg"
        >
          Github
        </a>
        <a
          href="https://ji-soo708.tistory.com"
          className="text-white text-sm sm:text-base md:text-lg"
        >
          Blog
        </a>
        <a
          href="https://linkedin.com/in/limjisoo"
          className="text-white text-sm sm:text-base md:text-lg"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Toolbar;
