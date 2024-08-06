import React from "react";

const EducationBox: React.FC = () => {
  return (
    <div className="font-bold text-lg md:text-xl lg:text-2xl">
      1. 학력 사항
      <div className="flex flex-col md:flex-row items-start mt-4 mb-20 md:mb-28 lg:mb-40">
        {/* Left Box */}
        <div className="flex-1 p-2 text-left text-sm md:text-sm lg:text-base md:mr-6 lg:mr-10">
          {/* University 1 */}
          <span className="font-semibold block">
            서울여자대학교 정보보호학과
          </span>
          <span className="font-normal block">
            2019.03 ~ 2022.02 (편입으로 인한 중퇴)
          </span>
          <span className="font-normal block">4.19 / 4.5</span>
          <br />

          {/* University 2 */}
          <span className="font-semibold block">
            건국대학교 서울캠퍼스 컴퓨터공학부
          </span>
          <span className="font-normal block">
            2022.03 ~ 2025.02 (졸업예정)
          </span>
          <span className="font-normal block">3.94 / 4.5</span>
        </div>

        {/* Vertical Line for Large Screens */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="w-[1px] bg-black opacity-10 h-full md:h-[170px] lg:h-[200px] mx-4"></div>
        </div>

        {/* Right Box */}
        <div className="flex-1 p-4 text-left text-sm md:text-sm lg:text-base md:ml-6 lg:ml-10">
          <span className="font-semibold block">
            SQL Developer (SQL 개발자)
          </span>
          <span className="font-normal block">2024.06 취득</span>
        </div>
      </div>
    </div>
  );
};

export default EducationBox;
