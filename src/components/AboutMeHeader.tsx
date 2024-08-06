import React from "react";
import Sticker from "../assets/svg/jisu-sticker.svg";
import Github from "../assets/svg/github.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Email from "../assets/svg/email-white.svg";
import Blog from "../assets/svg/writing.svg";

const AboutMeHeader: React.FC = () => {
  return (
    <header className="relative">
      <div className="py-12 md:py-16">
        {/* 중앙 정렬을 위한 컨테이너 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8 px-4">
          {/* 왼쪽 정렬된 텍스트를 감싸는 컨테이너 */}
          <div className="flex flex-col items-start text-left max-w-2xl lg:max-w-full lg:mx-0 mx-4">
            <p className="text-[14px] md:text-[20px] lg:text-[28px] font-bold mb-4 text-[#353538]">
              Backend Engineer
            </p>
            <p className="text-[20px] md:text-[28px] lg:text-[36px] font-bold">
              임지수
            </p>
            <div className="flex flex-col mt-4 space-y-4">
              {/* Horizontal row for GitHub and LinkedIn icons */}
              <div className="flex space-x-3 lg:space-x-4">
                <a
                  href="https://github.com/Ji-soo708"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Github}
                    alt="GitHub"
                    className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/jisu-im"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LinkedIn}
                    alt="LinkedIn"
                    className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  />
                </a>
              </div>
              {/* Vertical column for Email and Blog icons with text */}
              <div className="flex flex-col space-y-2">
                {/* Email Icon with Text */}
                <div className="flex items-center space-x-2">
                  <img
                    src={Email}
                    alt="Email"
                    className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  />
                  <span className="text-[12px] md:text-[14px] lg:text-[16px] font-medium">
                    dlawotn321@gmail.com
                  </span>
                </div>
                {/* Blog Icon with Text */}
                <div className="flex items-center space-x-2">
                  <img
                    src={Blog}
                    alt="Blog"
                    className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8"
                  />
                  <span className="text-[12px] md:text-[14px] lg:text-[16px] font-medium">
                    https://ji-soo708.tistory.com
                  </span>
                </div>
                {/* Additional Text Below Blog */}
                <div className="mt-6">
                  <span className="block mt-5 md:mt-7 lg:mt-8 text-[12px] md:text-[14px] lg:text-[16px] font-medium">
                    주변에서 문제를 찾고 개발을 통해 해결하는 것을 즐깁니다
                  </span>
                  <span className="block text-[12px] md:text-[14px] lg:text-[16px] font-medium">
                    지식을 모두와 공유하여 성장합니다
                  </span>
                  <span className="block text-[12px] md:text-[14px] lg:text-[16px] font-medium">
                    프로젝트에 애정과 주인 의식을 가지며 개발합니다
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 오른쪽 부분: 스티커 */}
          <div className="hidden md:flex justify-center lg:justify-end mr-5">
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

export default AboutMeHeader;
