import React from "react";

interface ProjectHeaderProps {
  imageSrc: string;
  text: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ imageSrc, text }) => {
  return (
    <div className="flex flex-col my-4 px-4 md:px-0">
      <div className="flex justify-center mt-8 md:mt-14">
        <object
          data={imageSrc}
          type="image/svg+xml"
          aria-label={text}
          className="w-auto h-auto object-contain rounded-[15px] md:rounded-[25px]"
        ></object>
      </div>
    </div>
  );
};

export default ProjectHeader;
