import React from 'react';

interface ProjectContentBoxProps {
    subtitle: string;
    content: string;
}

const ProjectContentBox: React.FC<ProjectContentBoxProps> = ({ subtitle, content }) => {
    return (
        <div className="mt-4 ms-1 flex justify-center">
            <div className="w-[910px] p-5">
                <div className='text-xl font-semibold'>
                    <span className='text-2xl font-semibold'>#{' '}</span>{subtitle}
                </div>
                <div
                    className='text-lg mt-3 ms-1 me-1'
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
}

export default ProjectContentBox;
