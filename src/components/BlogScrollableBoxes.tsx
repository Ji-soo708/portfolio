import React from "react";
import Redis from "../assets/svg/redis.svg";
import SonarCloud from "../assets/svg/sonarcloud.svg";
import S3 from "../assets/svg/s3.svg";
import RefreshToken from "../assets/svg/refreshToken.svg";

const boxes = [
  {
    id: 1,
    tag: "Backend",
    name: "Redis 캐시를 통해 <br />조회 성능 개선하기",
    image: Redis,
    date: "January 24 2024.",
    color: "#FFFFFF",
    url: "https://ji-soo708.tistory.com/31",
  },
  {
    id: 2,
    tag: "Backend",
    name: "코드 정적 분석을 위한 <br />SonarCloud 도입기",
    image: SonarCloud,
    date: "January 1 2024.",
    color: "#1D1D1F",
    url: "https://ji-soo708.tistory.com/25",
  },
  {
    id: 3,
    tag: "Backend",
    name: "Pre-Signed Url을 이용하여 <br />S3로 파일 업로드하기",
    image: S3,
    date: "December 25 2024.",
    color: "#1D1D1F",
    url: "https://ji-soo708.tistory.com/24",
  },
  {
    id: 4,
    tag: "Backend",
    name: "Redis를 통한 <br />Refresh Token 도입기",
    image: RefreshToken,
    date: "December 18 2023.",
    color: "#1D1D1F",
    url: "https://ji-soo708.tistory.com/22",
  },
];

const BlogScrollableBoxes: React.FC = () => {
  return (
    <div className="overflow-x-auto py-4 mx-5">
      <div className="flex space-x-5">
        {boxes.map((box, index) => (
          <a
            key={box.id}
            href={box.url}
            target="_blank"
            rel="noopener noreferrer"
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
                dangerouslySetInnerHTML={{ __html: box.name }}
              />
              <span
                className="text-sm sm:text-md md:text-lg"
                style={{ color: box.color }}
              >
                {box.date}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogScrollableBoxes;
