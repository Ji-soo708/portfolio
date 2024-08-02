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
    <div className="flex justify-center mb-9">
      <div className="w-[850px]">
        <div className="text-lg font-bold mb-3">{subtitle}</div>
        <div className="text-base">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectContentBox;
