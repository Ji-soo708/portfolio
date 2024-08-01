import React from 'react';
import Redis from '../assets/svg/redis.svg';
import Goormthon from '../assets/svg/goormthon.svg';

const boxes = [
  { id: 1, tag: 'Depromeet 14th', name: '많이 늦은(?) <br />디프만 14기 회고', image: Redis, date: 'January 24 2024.', color: '#FFFFFF' },
  { id: 2, tag: '10th 9oormthon in Jeju', name: '구름톤 in Jeju 10기 <br /> 참가 후기 (우수상🏅)', image: Goormthon, date: 'June 22 2024.', color: '#1D1D1F' }
];

const BlogScrollableBoxes: React.FC = () => {
  return (
    <div className="overflow-x-auto py-4 mx-5">
      <div className="flex space-x-5">
        {boxes.map((box, index) => (
          <div
          key={box.id}
          className="flex-shrink-0 w-[399px] h-[499px] bg-cover bg-center rounded-[18px] relative shadow-lg"
          style={{ backgroundImage: `url(${box.image})`, marginRight: index !== boxes.length - 1 ? '20px' : '0' }}
          >

            <div className="absolute top-4 left-4 flex flex-col space-y-2 mt-5 ml-5">
              <span className="text-xs font-bold" style={{ color: '#6E6E73' }}>{box.tag}</span>
              <span className="text-3xl font-bold" style={{ color: box.color }} dangerouslySetInnerHTML={{ __html: box.name }} />
              <span className="text-lg" style={{ color: box.color }}>{box.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogScrollableBoxes;
