import React from "react";
import JavaIcon from "../assets/svg/java-original.svg";
import ReactIcon from "../assets/svg/react-original.svg";
import SpringIcon from "../assets/svg/spring.svg";
import MySQLIcon from "../assets/svg/sql.svg";
import TypescriptIcon from "../assets/svg/typeScript.svg";
import DockerIcon from "../assets/svg/docker.svg";

const boxes = [
  {
    id: 1,
    image: SpringIcon,
    description: [
      <span className="text-[#6CCA4E]" key="span1">
        DataJPA
      </span>,
      "를 이용하여",
      <br key="br1" />,
      <span className="text-[#6CCA4E]" key="span2">
        객체 지향 프로그래밍
      </span>,
      "을",
      <br key="br2" />,
      "실천합니다.",
    ],
    color: "text-black",
  },
  {
    id: 2,
    image: JavaIcon,
    description: [
      "자바의 장점을 살려,",
      <br key="br1" />,
      <span className="text-[#EA2D2E]" key="span1">
        클린코드
      </span>,
      "를",
      <br key="br2" />,
      "작성하고자 합니다.",
    ],
    color: "text-black",
  },
  {
    id: 3,
    image: MySQLIcon,
    description: [
      "CRUD를 넘어,",
      <br key="br1" />,
      <span className="text-[#39ADB5]" key="span1">
        DB에서의 성능 최적화
      </span>,
      "를",
      <br key="br2" />,
      "고려합니다.",
    ],
    color: "text-black",
  },
  {
    id: 4,
    image: ReactIcon,
    description: [
      <span className="text-[#61DAFB]" key="span1">
        컴포넌트 기반 구조
      </span>,
      "의",
      <br key="br1" />,
      "장점을 살려,",
      <br key="br2" />,
      "유연하게 개발합니다.",
    ],
    color: "text-black",
  },
  {
    id: 5,
    image: TypescriptIcon,
    description: [
      <span className="text-[#0288D1]" key="span1">
        타입 안정성
      </span>,
      "을",
      <br key="br1" />,
      "보장하여,",
      <br key="br2" />,
      "안전한 코드를 작성합니다.",
    ],
    color: "text-black",
  },
  {
    id: 6,
    image: DockerIcon,
    description: [
      <span className="text-[#2496ED]" key="span1">
        컨테이너화된 환경
      </span>,
      "에서",
      <br key="br1" />,
      "안정적인",
      <br key="br2" />,
      "배포를 실현합니다.",
    ],
    color: "text-black",
  },
];

const BlogScrollableBoxes: React.FC = () => {
  return (
    <div className="overflow-x-auto py-4 mx-5">
      <div className="flex space-x-5">
        {boxes.map((box, index) => (
          <div
            key={box.id}
            className={`flex-shrink-0 w-[260px] h-[180px] md:w-[312px] md:h-[240px] rounded-[18px] relative shadow-lg bg-white ${
              index !== boxes.length - 1 ? "mr-5" : ""
            }`}
          >
            <div className="absolute top-4 left-4 flex flex-col space-y-2 mt-4 ml-4 md:mt-5 md:ml-5">
              <img
                src={box.image}
                alt="icon"
                className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-6"
              />
              <span className={`text-lg md:text-2xl font-bold ${box.color}`}>
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
