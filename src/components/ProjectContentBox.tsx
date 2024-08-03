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
    <div className="flex justify-center mb-16">
      <div className="w-[860px] flex">
        <div className="flex items-start mr-3">
          <div className="text-[17px] w-44 h-8 font-semibold flex-shrink-0 text-subtitle-gray text-right">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {subtitle}
            </ReactMarkdown>
          </div>
          <div className="h-[60px] w-[1px] bg-black opacity-30 mt-1 ml-7 mr-7"></div>
        </div>
        <div className="text-base flex-grow ml-2">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectContentBox;
