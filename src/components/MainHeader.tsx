import React from 'react';
import Sticker from '../assets/svg/jisu-sticker.svg';

const Header: React.FC = () => {
  return (
    <header className="relative">
      <div className="bg-gray-200 py-16 px-4">
        {/* 중앙 정렬을 위한 컨테이너 */}
        <div className="flex items-center justify-center">
          {/* 왼쪽 정렬된 텍스트를 감싸는 컨테이너 */}
          <div className="flex flex-col items-start text-center mx-4 max-w-2xl sm:max-w-md">
            <p className="text-5xl font-bold mb-4 text-[#6E6E73] sm:text-4xl">
              동반 성장을 추구하는 개발자
            </p>
            <p className="text-5xl font-bold text-black sm:text-4xl">
              `임지수`입니다.
            </p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <p className="text-sm text-[#1D1D1F] mt-8 underline mx-1">
                About Me
              </p>
            </a>
          </div>
          {/* 오른쪽 부분: 스티커 */}
          <div className="w-[300px] h-[300px] ml-10 flex-shrink-0">
            <img src={Sticker} alt="Sticker" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
