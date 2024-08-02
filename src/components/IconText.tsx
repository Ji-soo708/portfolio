import React from 'react';
import Github from '../assets/svg/github.svg';
import GooglePlay from '../assets/svg/google-play.svg';
import AppStore from '../assets/svg/appstore.svg';
import Instagram from '../assets/svg/instagram.svg';
import Medium from '../assets/svg/medium.svg';
import Site from '../assets/svg/site.svg';

interface IconTextProps {
    icon: string;
    url: string;
}

const IconText: React.FC<IconTextProps> = ({ icon, url }) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Github':
                return <img src={Github} alt="Github" className="w-8 h-8 mr-2" />;
            case 'GooglePlay':
                return <img src={GooglePlay} alt="GooglePlay" className="w-8 h-8 mr-2" />;
            case 'AppStore':
                return <img src={AppStore} alt="AppStore" className="w-8 h-8 mr-2" />;
            case 'Instagram':
                return <img src={Instagram} alt="Instagram" className="w-8 h-8 mr-2" />;
            case 'Medium':
                return <img src={Medium} alt="Medium" className="w-8 h-8 mr-2" />;
            case 'Site':
                return <img src={Site} alt="Site" className="w-8 h-8 mr-2" />;
            default:
                return null;
        }
    };

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">
            {getIcon(icon)}
        </a>
    );
};

export default IconText;
