import React from "react";

interface SkillBoxProps {
  text: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ text }) => {
  return (
    <div className="inline-flex justify-center text-xs md:text-sm items-center px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-[#E8E8ED] text-center mx-0.5">
      {text}
    </div>
  );
};

export default SkillBox;
