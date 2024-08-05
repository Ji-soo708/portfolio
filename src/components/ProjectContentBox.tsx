import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ProjectContentBoxProps {
  subtitle: string;
  content: string;
}

const ProjectContentBox: React.FC<ProjectContentBoxProps> = ({
  subtitle,
  content,
}) => {
  return (
    <div className="flex justify-center mb-16 px-4 md:px-0">
      <div className="w-full md:w-[860px] flex flex-col md:flex-row">
        <div className="flex items-start mr-3 mb-4 md:mb-0">
          <div className="text-[15px] md:text-[17px] w-36 md:w-44 h-auto md:h-8 font-semibold flex-shrink-0 text-subtitle-gray text-left md:text-right">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {subtitle}
            </ReactMarkdown>
          </div>
          <div className="h-[40px] md:h-[60px] w-[1px] bg-black opacity-30 mt-1 ml-4 md:ml-7 mr-4 md:mr-7"></div>
        </div>
        <div className="text-sm md:text-base flex-grow ml-2">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectContentBox;
