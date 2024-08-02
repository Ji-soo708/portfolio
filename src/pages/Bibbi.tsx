import React from 'react';
import Toolbar from '../components/Toolbar';
import BibbiImage from '../assets/svg/bibbi-project.svg';
import ProjectHeader from '../components/ProjectHeader';
import ProjectInfoBox from '../components/ProjectInfoBox';

const Bibbi: React.FC = () => {
    const links = [
        { icon: 'Site', text: 'https://bibbi.app' },
        { icon: 'Github', text: 'https://github.com/depromeet/14th-team5-BE' },
        { icon: 'Medium', text: 'Medium' },
        { icon: 'Instagram', text: 'Instagram' },
    ];

    const skills = [
        'SpringBoot 3',
        'Spring DataJPA',
        'Java 17',
        'MariaDB',
        'Flyway',
        'Redis',
        'Terrafom',
    ];

    return (
        <div>
            <Toolbar />
            <ProjectHeader imageSrc={BibbiImage} text="bibbi" />
            <ProjectInfoBox links={links} skills={skills} aboutText='연인 혹은 친구와 일상을 공유하는 앱들은 시중에 존재하지만 가족과 일상을 공유하는 앱은 적습니다. <br />
본 프로젝트에서는 평소 부모님께 연락하는 것이 부끄럽거나, 자주 연락하지 못하시는 분들을 위해 쉬운 방법으로 일상을 공유할 수 있는 기능을 제공합니다.' details='* IT 연합동아리 `디프만 14기` 대상 수상'/>
        </div>
    );
};

export default Bibbi;
