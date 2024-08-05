import React from "react";
import Sticker from "../assets/svg/jisu-sticker.svg";

const Header: React.FC = () => {
  return (
    <header className="relative">
      <div className="py-12 md:py-16">
        {/* 중앙 정렬을 위한 컨테이너 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8 px-4">
          {/* 왼쪽 정렬된 텍스트를 감싸는 컨테이너 */}
          <div className="flex flex-col items-start text-left max-w-2xl lg:max-w-full lg:mx-0 mx-4">
            <p className="text-[28px] md:text-[36px] lg:text-[46px] font-bold mb-4 text-[#6E6E73]">
              동반 성장을 추구하는 개발자
            </p>
            <p className="text-[28px] md:text-[36px] lg:text-[46px] font-bold text-black">
              `임지수`입니다.
            </p>
            <a
              href="https://github.com/Ji-soo708"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-8"
            >
              <p className="text-sm md:text-lg text-[#1D1D1F] underline">
                About Me
              </p>
            </a>
          </div>
          {/* 오른쪽 부분: 스티커 */}
          <div className="hidden md:flex justify-center lg:justify-end mr-32">
            <img
              src={Sticker}
              alt="Sticker"
              className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
