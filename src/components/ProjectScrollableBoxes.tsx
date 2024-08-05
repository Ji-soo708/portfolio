import React from "react";
import { Link } from "react-router-dom";
import Bibbi from "../assets/image/bibbi_main.png";
import Mocacong from "../assets/image/mocacong_main.png";
import Baroging from "../assets/image/baroging_main.png";

const boxes = [
  {
    id: 1,
    tag: "Depromeet 14th",
    name: "Bibbi",
    image: Bibbi,
    description: "하루 한 번, 가족에게 보내는 생존신고<br />삐삐",
    color: "#1D1D1F",
    link: "/projects/bibbi",
  },
  {
    id: 2,
    tag: "Konkuk Univ.",
    name: "Mocacong",
    image: Mocacong,
    description: "코딩하기 좋은 카페를 찾고 싶다면<br />모카콩",
    color: "#1D1D1F",
    link: "/projects/mocacong",
  },
  {
    id: 3,
    tag: "10th 9oormthon in Jeju",
    name: "바로깅",
    image: Baroging,
    description: "제주 해안 생태계 보전을<br />위한 플로깅 서비스<br />바로깅",
    color: "#FFFFFF",
    link: "/projects/baroging",
  },
];

const ProjectScrollableBoxes: React.FC = () => {
  return (
    <div className="overflow-x-auto py-4 mx-5">
      <div className="flex space-x-5">
        {boxes.map((box, index) => (
          <Link to={box.link} key={box.id}>
            <div
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[399px] h-[380px] sm:h-[420px] md:h-[460px] lg:h-[499px] bg-cover bg-center rounded-[18px] relative shadow-lg"
              style={{
                backgroundImage: `url(${box.image})`,
                marginRight: index !== boxes.length - 1 ? "20px" : "0",
              }}
            >
              <div className="absolute top-4 left-4 flex flex-col space-y-2 mt-5 ml-5">
                <span
                  className="text-xs sm:text-sm font-bold"
                  style={{ color: "#6E6E73" }}
                >
                  {box.tag}
                </span>
                <span
                  className="text-xl sm:text-2xl md:text-3xl font-bold"
                  style={{ color: box.color }}
                >
                  {box.name}
                </span>
                <span
                  className="text-sm sm:text-md md:text-lg"
                  style={{ color: box.color }}
                  dangerouslySetInnerHTML={{ __html: box.description }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectScrollableBoxes;
