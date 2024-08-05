import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SkillBox from "./SkillBox";
import IconText from "./IconText";

interface ProjectInfoBoxProps {
  date: string;
  links: { icon: string; url: string }[];
  roleText: string;
  skills: string[];
  aboutText: string;
  details: string;
}

const ProjectInfoBox: React.FC<ProjectInfoBoxProps> = ({
  date,
  links,
  roleText,
  skills,
  aboutText,
  details,
}) => {
  return (
    <div className="flex flex-col items-center mt-6 md:mt-24 mb-16 md:mb-36 px-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-center w-full max-w-[910px]">
        {/* 왼쪽 섹션 */}
        <div className="flex-shrink-0 w-full md:w-1/2 p-4">
          <div className="text-sm md:text-lg italic text-custom-gray font-semibold mb-2">
            {date}
          </div>
          <div className="text-lg md:text-2xl font-bold mb-2">Links</div>
          <div className="flex flex-row flex-wrap gap-2 mb-5 md:mb-8">
            {links.map((link, index) => (
              <IconText key={index} icon={link.icon} url={link.url} />
            ))}
          </div>
          <div className="text-lg md:text-2xl font-bold mb-2">Role</div>
          <div className="text-sm md:text-base">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {roleText}
            </ReactMarkdown>
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-px bg-black opacity-10 hidden md:block mx-2"></div>

        {/* 오른쪽 섹션 */}
        <div className="flex-shrink-0 w-full md:w-1/2 p-4">
          <div className="text-lg md:text-2xl font-bold mb-2">Used Skills</div>
          <div className="flex flex-wrap gap-1 md:gap-2 mb-5 md:mb-8">
            {skills.map((skill, index) => (
              <SkillBox key={index} text={skill} />
            ))}
          </div>
          <div className="text-lg md:text-2xl font-bold mb-2">About</div>
          <div className="text-sm md:text-base mb-3">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {aboutText}
            </ReactMarkdown>
          </div>
          <p className="text-xs md:text-sm text-custom-gray">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoBox;
