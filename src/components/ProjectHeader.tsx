import React from 'react';
import FolderIcon from '../assets/svg/folder.svg';

interface ProjectHeaderProps {
  imageSrc: string;
  text: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ imageSrc, text }) => {
  const combinedText = `/projects/${text}`;

  return (
    <div className="flex flex-col my-4">
      <div className="flex items-center text-xl mb-2 ml-16 py-5 underline">
        <img src={FolderIcon} alt="Folder" className="w-6 h-6 mr-2" />
        {combinedText}
      </div>
      <div className="flex justify-center mt-14">
        <img src={imageSrc} alt="Project" className="w-[995px] h-[545px] object-cover" />
      </div>
    </div>
  );
};

export default ProjectHeader;
