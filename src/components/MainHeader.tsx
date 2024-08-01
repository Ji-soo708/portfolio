import React from 'react';
import Sticker from '../assets/svg/jisu-sticker.svg';

const Header: React.FC = () => {
  return (
    <header className="relative">
      <div className="py-16">
        {/* 중앙 정렬을 위한 컨테이너 */}
        <div className="flex items-center justify-between">
          {/* 왼쪽 정렬된 텍스트를 감싸는 컨테이너 */}
          <div className="flex flex-col items-start text-center mx-4 max-w-2xl mr-10">
            <p className="text-[46px] font-bold mb-4 text-[#6E6E73]">
              동반 성장을 추구하는 개발자
            </p>
            <p className="text-[46px] font-bold text-black">
              `임지수`입니다.
            </p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <p className="text-sm text-[#1D1D1F] mt-8 underline mx-1">
                About Me
              </p>
            </a>
          </div>
          {/* 오른쪽 부분: 스티커 */}
          <div className="w-[300px] h-[300px] flex-shrink-0 mb-10 mr-36">
            <img src={Sticker} alt="Sticker" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
