const EtcBox = () => {
  return (
    <div className="font-bold text-lg md:text-xl lg:text-2xl">
      4. 기타
      <div className="flex flex-col md:flex-row items-start mt-4 mb-20 md:mb-28 lg:mb-40">
        {/* Left Box */}
        <div className="flex-1 p-2 text-left text-sm md:text-sm lg:text-base">
          <span className="font-semibold block mb-0.5 md:mb-1 lg:mb-1.5">
            [IT 연합동아리] 디프만 14기 Server Part
          </span>
          <span className="font-normal block">2023.11 ~ 2024.02</span>
          <span className="font-semibold block">대상 수상</span>
          <br />

          <span className="font-semibold block mb-0.5 md:mb-1 lg:mb-1.5">
            [카카오X구름 해커톤] 구름톤 in Jeju 10기 Server Part
          </span>
          <span className="font-normal block">2024.05</span>
          <span className="font-semibold block">우수상 수상</span>
        </div>

        {/* Vertical Line for Large Screens */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <div className="w-[1px] bg-black opacity-10 h-full md:h-[170px] lg:h-[200px] mx-4"></div>
        </div>

        {/* Right Box */}
        <div className="flex-1 p-2 text-left text-sm md:text-sm lg:text-base">
          <span className="font-semibold block mb-0.5 md:mb-1 lg:mb-1.5">
            [교내 프로그램] 건국대학교 Learning&Sharing 프로젝트형
          </span>
          <span className="font-normal block">2023.03 ~ 2023.06</span>
          <span className="font-semibold block">장려상 수상</span>
        </div>
      </div>
    </div>
  );
};

export default EtcBox;
