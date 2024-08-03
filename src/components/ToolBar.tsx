import React from "react";
import { Link } from "react-router-dom";

const Toolbar: React.FC = () => {
  return (
    <div className="w-full max-w-[1512px] h-[37px] bg-black/80 mx-auto flex items-center px-4">
      <div className="flex-grow" />
      <div className="flex space-x-[34px] pr-[117px]">
        <Link to="/" className="text-white">
          Home
        </Link>
        <a href="https://github.com/Ji-soo708" className="text-white">
          Github
        </a>
        <a href="https://ji-soo708.tistory.com" className="text-white">
          Blog
        </a>
        <a href="https://linkedin.com/in/limjisoo" className="text-white">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Toolbar;
