import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <div className="w-full max-w-[1512px] h-[40px] bg-black/80 mx-auto flex items-center px-4">
      <div className="flex-grow" />
      <div className="flex space-x-[34px] pr-[117px]">
        <a href="https://github.com" className="text-white">Home</a>
        <a href="https://github.com" className="text-white">Github</a>
        <a href="https://ji-soo708.tistory.com" className="text-white">Blog</a>
        <a href="https://linkedin.com/in/limjisoo" className="text-white">LinkedIn</a>
      </div>
    </div>
  );
};

export default Toolbar;
