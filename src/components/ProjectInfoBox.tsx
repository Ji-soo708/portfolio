import React from 'react';
import Github from '../assets/svg/github.svg';
import GooglePlay from '../assets/svg/google-play.svg';
import Instagram from '../assets/svg/instagram.svg';
import Medium from '../assets/svg/medium.svg';
import Site from '../assets/svg/site.svg';
import SkillBox from './SkillBox';

interface IconTextProps {
    icon: string;
    text: string;
}

const IconText: React.FC<IconTextProps> = ({ icon, text }) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Github':
                return <img src={Github} alt="Github" className="w-8 h-8" />;
            case 'GooglePlay':
                return <img src={GooglePlay} alt="GooglePlay" className="w-8 h-8" />;
            case 'Instagram':
                return <img src={Instagram} alt="Instagram" className="w-8 h-8" />;
            case 'Medium':
                return <img src={Medium} alt="Medium" className="w-8 h-8" />;
            case 'Site':
                return <img src={Site} alt="Site" className="w-8 h-8" />;
            default:
                return null;
        }
    };

    return (
        <div className="flex items-center mb-4">
            {getIcon(icon)}
            <span className="ml-4 text-lg">{text}</span>
        </div>
    );
};

interface ProjectInfoBoxProps {
    links: { icon: string; text: string }[];
    skills: string[];
    aboutText: string;
    details: string;
}

const ProjectInfoBox: React.FC<ProjectInfoBoxProps> = ({ links, skills, aboutText, details }) => {
    return (
        <div className="flex justify-center items-center mt-24">
            <div className="w-[516px] h-[458px] p-4 relative">
                <div className="text-3xl font-bold">Links</div>
                <div className="flex flex-col mt-8">
                    {links.slice(0, 4).map((link, index) => (
                        <IconText key={index} icon={link.icon} text={link.text} />
                    ))}
                </div>
            </div>
            <div className="w-px h-[458px] bg-black opacity-10"></div>
            <div className="w-[490px] h-[458px] p-4 relative">
                <div className="text-3xl font-bold ms-4">UsedSkills</div>
                <div className="flex flex-wrap mt-4 ms-3 gap-2 mb-10">
                    {skills.map((skill, index) => (
                        <SkillBox key={index} text={skill} />
                    ))}
                </div>
                <div className="text-3xl font-bold mt-4 ms-4">About</div>
                <div className="w-[470px] h-48 p-4 mt-1">
                    <p className="text-lg" dangerouslySetInnerHTML={{ __html: aboutText }}></p>
                </div>
                <div className="w-[470px] p-4 mt-1">
                    <p className="text-sm text-custom-gray">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectInfoBox;
