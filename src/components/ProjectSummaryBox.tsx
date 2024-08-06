import AppStoreIcon from "../assets/svg/appstore.svg";
import GooglePlayIcon from "../assets/svg/google-play.svg";
import GithubIcon from "../assets/svg/github.svg";
import SiteIcon from "../assets/svg/site.svg";

const ProjectSummaryBox = () => {
  return (
    <div className="font-bold text-lg md:text-xl lg:text-2xl">
      3. 프로젝트
      {/* Bibbi Section */}
      <div className="items-start p-2 mt-4 mb-16 md:mb-24 lg:mb-32 text-sm md:text-sm lg:text-base">
        <span className="font-bold block text-lg md:text-xl lg:text-2xl underline">
          Bibbi
        </span>

        {/* Icons Section */}
        <div className="flex space-x-2 lg:space-x-3 mt-2 md:mt-3 lg:mt-3">
          <a
            href="https://apps.apple.com/kr/app/bibbi/id6475082088"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={AppStoreIcon}
              alt="App Store"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://play.google.com/store/search?q=삐삐&c=apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GooglePlayIcon}
              alt="Google Play"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://github.com/depromeet/14th-team5-BE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
        </div>

        <span className="font-semibold block mt-4 md:mt-6 lg:mt-6">
          가족 구성원들 간의 소통을 활발하게 돕는 어플리케이션
        </span>
        <span className="font-normal block mt-2 md:mt-3 lg:mt-3">
          IT 연합동아리 디프만 14기에서 진행한 프로젝트입니다.
        </span>

        <div className="mt-5 md:mt-6 lg:mt-8 p-4 font-normal text-sm md:text-sm lg:text-base bg-gray-100 rounded-md shadow-sm">
          지인들과 일상을 공유하는 소셜 어플리케이션이 많이 존재하지만, 가족과의
          소통을 위한 특화된 어플리케이션이 부족한 상황입니다. 많은 자녀들이
          가족과의 소통을 원하지만 익숙하지 않아 시도하지 못하는 경우가
          많습니다. 이러한 문제점을 해결하기 위해 가족과의 소통을 중점으로 둔
          프로젝트를 시작했습니다.
        </div>
        <div className="flex flex-col md:flex-row mt-5 md:mt-7 lg:mt-9">
          {/* Left Column */}
          <div className="flex-1 mb-4 md:mb-4 md:mr-8">
            <div className="font-bold text-sm md:text-base lg:text-lg mb-2 text-[#353538]">
              2023.11 ~
            </div>
            <div className="font-normal text-sm md:text-base">
              백엔드 팀원
              <br />
              <div className="font-semibold mt-1 md:mt-2 lg:mt-2">
                디프만 14기 대상 수상
              </div>
              <div className="mt-1 md:mt-2 lg:mt-2">
                회원 프로필, 피드, 이미지, 셀피 이모지, 이미지 처리 담당
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <ul className="list-disc pl-5 font-normal text-sm md:text-base mt-1 md:mt-2 lg:mt-2">
              <li className="mb-2 md:mb-3 lg:mb-3">
                원활한 유지보수를 위해 높은 응집도와 낮은 결합도를 가진 멀티모듈
                아키텍처 도입 (
                <a
                  href="https://ji-soo708.tistory.com/20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#353538] hover:underline"
                >
                  https://ji-soo708.tistory.com/20
                </a>
                )
              </li>
              <li className="mb-2 md:mb-3 lg:mb-3">
                서버 부하 위험을 고려하여 클라이언트가 파일 업로드 권한을 가진
                URL 발급하는 방식의 S3 Pre-signed URL 기술 도입 (
                <a
                  href="https://ji-soo708.tistory.com/24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#353538] hover:underline"
                >
                  https://ji-soo708.tistory.com/24
                </a>
                )
              </li>
              <li className="mb-2 md:mb-3 lg:mb-3">
                Redis 캐싱 기능을 이용해 갤러리 조회 API 성능을 92.44배 개선 (
                <a
                  href="https://ji-soo708.tistory.com/31"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#353538] hover:underline"
                >
                  https://ji-soo708.tistory.com/31
                </a>
                )
              </li>
              <li className="mb-2 md:mb-3 lg:mb-3">
                비관적 락을 통한 POST 메소드에서 발생하는 동시성 이슈 해결
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="h-px bg-black opacity-10 mt-8 mb-10"></div>
      {/* Mocacong Section */}
      <div className="items-start p-2 mt-4 mb-16 md:mb-24 lg:mb-32 text-sm md:text-sm lg:text-base">
        <span className="font-bold block text-lg md:text-xl lg:text-2xl underline">
          Mocacong
        </span>

        {/* Icons Section */}
        <div className="flex space-x-2 lg:space-x-3 mt-2 md:mt-3 lg:mt-3">
          <a
            href="https://apps.apple.com/kr/app/mocacong/id6446925939"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={AppStoreIcon}
              alt="App Store"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://play.google.com/store/search?q=모카콩&c=apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GooglePlayIcon}
              alt="Google Play"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://github.com/mocacong/Mocacong-Backend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
        </div>

        <span className="font-semibold block mt-4 md:mt-6 lg:mt-6">
          코딩하기 좋은 카페를 추천하는 지도 어플리케이션
        </span>

        <div className="mt-5 md:mt-6 lg:mt-8 p-4 font-normal text-sm md:text-sm lg:text-base bg-gray-100 rounded-md shadow-sm">
          카페에서 코딩하기를 즐겨하는 사람들이 늘어나지만 코딩하기 좋은 카페를
          찾기가 어렵다는 문제점에서 누구나 코딩하기 좋은 카페를 추천할 수 있고
          추천받을 수 있는 지도 앱 ‘모카콩’을 개발했습니다.
        </div>
        <div className="flex flex-col md:flex-row mt-5 md:mt-7 lg:mt-9">
          {/* Left Column */}
          <div className="flex-1 mb-4 md:mb-4 md:mr-8">
            <div className="font-bold text-sm md:text-base lg:text-lg mb-2 text-[#353538]">
              2023.03 ~ 20224.01
            </div>
            <div className="font-normal text-sm md:text-base">
              기획, 백엔드 팀원
              <br />
              <div className="font-semibold mt-1 md:mt-2 lg:mt-2">
                건국대학교 학습공동체 Learning&Sharing 장려상
              </div>
              <div className="mt-1 md:mt-2 lg:mt-2">
                사용자 인증, 카페, 리뷰, 마이페이지 담당
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <ul className="list-disc pl-5 font-normal text-sm md:text-base mt-1 md:mt-2 lg:mt-2">
              <li className="mb-2 md:mb-3 lg:mb-3">
                AOP와 ArgumentResolver를 이용해 반복되는 로그인한 사용자 검증
                로직 최소화 (
                <a
                  href="https://ji-soo708.tistory.com/6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#353538] hover:underline"
                >
                  https://ji-soo708.tistory.com/6
                </a>
                )
              </li>
              <li className="mb-2 md:mb-3 lg:mb-3">
                POST 메소드에서 발생하는 동시성 이슈 해결을 위해 무결성 제약
                조건 적용 (
                <a
                  href="https://ji-soo708.tistory.com/2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#353538] hover:underline"
                >
                  https://ji-soo708.tistory.com/2
                </a>
                )
              </li>
              <li className="mb-2 md:mb-3 lg:mb-3">
                Redis를 통한 Refresh Token 로직 개발 (
                <a
                  href="https://ji-soo708.tistory.com/22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#353538] hover:underline"
                >
                  https://ji-soo708.tistory.com/22
                </a>
                )
              </li>
              <li className="mb-2 md:mb-3 lg:mb-3">
                코드 커버리지를 위한 JaCoCo 및 SonarCloud 도입 (
                <a
                  href="https://ji-soo708.tistory.com/21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#353538] hover:underline"
                >
                  https://ji-soo708.tistory.com/21
                </a>
                )
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Horizontal Line */}
      <div className="h-px bg-black opacity-10 mt-8 mb-10"></div>
      {/* Baroging Section */}
      <div className="items-start p-2 mt-4 mb-16 md:mb-24 lg:mb-32 text-sm md:text-sm lg:text-base">
        <span className="font-bold block text-lg md:text-xl lg:text-2xl underline">
          바로깅
        </span>

        {/* Icons Section */}
        <div className="flex space-x-2 lg:space-x-3 mt-2 md:mt-3 lg:mt-3">
          <a
            href="https://9oormthon.goorm.io/b38751d3-000e-4857-9f3c-af002f69277f" // Add your website link here
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={SiteIcon}
              alt="Website"
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
          <a
            href="https://github.com/goo-rm-dari/BE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GithubIcon}
              alt="GitHub"
              className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 hover:opacity-80 transition-opacity duration-300"
            />
          </a>
        </div>

        <span className="font-semibold block mt-4 md:mt-6 lg:mt-6">
          제주 해양 쓰레기 모니터링을 돕는 플로깅 서비스
        </span>
        <span className="font-normal block mt-2 md:mt-3 lg:mt-3">
          카카오와 구름 기업에서 주최한 해커톤, 구름톤에서 2박 3일 간 진행한
          프로젝트입니다.
        </span>

        <div className="mt-5 md:mt-6 lg:mt-8 p-4 font-normal text-sm md:text-sm lg:text-base bg-gray-100 rounded-md shadow-sm">
          해변 CCTV의 부족으로 제주도에서 지속적으로 발생하는 해양쓰레기는 국가
          차원의 관리가 어렵습니다. 이러한 문제를 고려하여, 플로깅의 운동량을
          정확하게 측정하고, 개인의 쓰레기 수거 활동 기록을 바탕으로 해양쓰레기
          모니터링이 가능하도록 하여, 제주 해안 생태계 보전과 개인의 건강 관리에
          도움을 주는 서비스입니다.
        </div>
        <div className="flex flex-col md:flex-row mt-5 md:mt-7 lg:mt-9">
          {/* Left Column */}
          <div className="flex-1 mb-4 md:mb-4 md:mr-8">
            <div className="font-bold text-sm md:text-base lg:text-lg mb-2 text-[#353538]">
              2024.05.22 ~ 2024.05.24
            </div>
            <div className="font-normal text-sm md:text-base">
              기획, 백엔드 팀원
              <br />
              <div className="font-semibold mt-1 md:mt-2 lg:mt-2">
                구름톤 10기 우수상 수상
              </div>
              <div className="mt-1 md:mt-2 lg:mt-2">서버 개발 전담</div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <ul className="list-disc pl-5 font-normal text-sm md:text-base mt-1 md:mt-2 lg:mt-2">
              <li className="mb-2 md:mb-3 lg:mb-3">
                k8s 환경에서의 서버/웹 배포
              </li>
              <li className="mb-2 md:mb-3 lg:mb-3">
                수집한 쓰레기 좌표 저장을 고려한 도메인 설계
              </li>
              <li className="mb-2 md:mb-3 lg:mb-3">
                사용자의 플로깅 활동 기록 관련 API 개발
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummaryBox;
