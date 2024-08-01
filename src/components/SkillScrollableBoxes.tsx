import React from 'react';
import JavaIcon from '../assets/svg/java-original.svg';
import ReactIcon from '../assets/svg/react-original.svg';
import SpringIcon from '../assets/svg/spring.svg';
import MySQLIcon from '../assets/svg/sql.svg';

const boxes = [
  {
    id: 1,
    image: SpringIcon,
    description: [
      <span style={{ color: '#6CCA4E' }} key="span1">DataJPA</span>,
      '를 이용하여',
      <br key="br1" />,
      <span style={{ color: '#6CCA4E' }} key="span2">객체 지향 프로그래밍</span>,
      '을',
      <br key="br2" />,
      '실천합니다.'
    ],
    color: '#000000'
  },
  {
    id: 2,
    image: JavaIcon,
    description: [
      '자바의 장점을 살려,',
      <br key="br1" />,
      <span style={{ color: '#EA2D2E' }} key="span1">클린코드</span>,
      '를',
      <br key="br2" />,
      '작성하고자 합니다.'
    ],
    color: '#000000'
  },
  {
    id: 3,
    image: MySQLIcon,
    description: [
      'CRUD를 넘어,',
      <br key="br1" />,
      <span style={{ color: '#39ADB5' }} key="span1">DB에서의 성능 최적화</span>,
      '를',
      <br key="br2" />,
      '고려합니다.'
    ],
    color: '#000000'
  },
  {
    id: 4,
    image: ReactIcon,
    description: [
      <span style={{ color: '#61DAFB' }} key="span1">컴포넌트 기반 구조</span>,
      '의',
      <br key="br1" />,
      '장점을 살려,',
      <br key="br2" />,
      '유연하게 개발합니다.'
    ],
    color: '#000000'
  }
];

const BlogScrollableBoxes: React.FC = () => {
  return (
    <div className="overflow-x-auto py-4 mx-5">
      <div className="flex space-x-5">
        {boxes.map((box, index) => (
          <div
            key={box.id}
            className="flex-shrink-0 w-[312px] h-[240px] rounded-[18px] relative shadow-lg bg-white"
            style={{ marginRight: index !== boxes.length - 1 ? '20px' : '0' }}
          >
            <div className="absolute top-4 left-4 flex flex-col space-y-2 mt-5 ml-5">
              <img src={box.image} alt="icon" className="w-8 h-8 mb-6" />
              <span className="text-2xl font-bold" style={{ color: box.color }}>
                {box.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogScrollableBoxes;
