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
    <div className="flex flex-col items-center mt-24 mb-36">
      <div className="flex justify-center w-full max-w-[910px]">
        <div className="w-[500px] ms-1 p-4">
          <div className="text-lg italic text-custom-gray font-semibold mb-1">
            {date}
          </div>
          <div className="text-2xl font-bold mb-4">Links</div>
          <div className="flex flex-row gap-1 mb-12">
            {links.map((link, index) => (
              <IconText key={index} icon={link.icon} url={link.url} />
            ))}
          </div>
          <div className="text-2xl font-bold mb-3">Role</div>
          <div className="text-base mb-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {roleText}
            </ReactMarkdown>
          </div>
        </div>
        <div className="w-px bg-black opacity-10 mr-2"></div>
        <div className="w-[490px] p-4">
          <div className="text-2xl font-bold mb-6">Used Skills</div>
          <div className="flex flex-wrap gap-2 mb-7">
            {skills.map((skill, index) => (
              <SkillBox key={index} text={skill} />
            ))}
          </div>
          <div className="text-2xl font-bold mb-3">About</div>
          <div className="text-base mb-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {aboutText}
            </ReactMarkdown>
          </div>
          <p className="text-sm text-custom-gray">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoBox;
