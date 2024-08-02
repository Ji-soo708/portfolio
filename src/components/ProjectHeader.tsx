import React from 'react';

interface ProjectHeaderProps {
  imageSrc: string;
  text: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ imageSrc, text }) => {
  return (
    <div className="flex flex-col my-4">
      <div className="flex justify-center mt-14">
        <img
          src={imageSrc}
          alt="Project"
          className="w-[910px] h-[495px] object-cover rounded-[25px]"
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
