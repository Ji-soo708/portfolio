import React, { useEffect } from "react";
import Toolbar from "../components/Toolbar";
import BarogingImage from "../assets/svg/baroging_background.svg";
import ProjectHeader from "../components/ProjectHeader";
import ProjectInfoBox from "../components/ProjectInfoBox";
import ProjectContentBox from "../components/ProjectContentBox";

const Baroging: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const links = [
    { icon: "Github", url: "https://github.com/goo-rm-dari/BE" },
    {
      icon: "Site",
      url: "https://9oormthon.goorm.io/b38751d3-000e-4857-9f3c-af002f69277f",
    },
  ];

  const skills = [
    "SpringBoot 3",
    "Spring DataJPA",
    "Java 17",
    "MariaDB",
    "Kubernetis",
  ];

  return (
    <div>
      <Toolbar />
      <ProjectHeader imageSrc={BarogingImage} text="bibbi" />
      <ProjectInfoBox
        date={"2023.11 ~"}
        links={links}
        roleText={`
**백엔드 개발**

바로깅 프로젝트 서버 개발 전담

k8s 환경에서의 서버/웹 배포

ㅤ

**기획**
          `}
        skills={skills}
        aboutText={`카카오와 구름 기업에서 주최한 해커톤 ‘구름톤’에서 2박3일 간 진행한 프로젝트입니다.

해변 CCTV의 부족으로 제주도에서 지속적으로 발생하는 해양쓰레기는 국가 차원의 관리가 어렵습니다. 이러한 문제를 고려하여, 조깅보다 운동 효과가 뛰어난 플로깅의 운동량을 정확하게 측정하고, 개인의 쓰레기 수거 활동 기록을 바탕으로 해양쓰레기 모니터링이 가능하도록 하여, **제주 해안 생태계 보전**과 **개인의 건강 관리**에 도움을 주는 서비스입니다.`}
        details="* `구름톤 10기` 우수상 수상"
      />
      <div className="flex justify-center mb-4">
        <div className="p-5 w-[940px] bg-white shadow-md rounded-[25px]">
          <ProjectContentBox
            subtitle="# 수집한 쓰레기 좌표 저장을 고려한 도메인 설계"
            content={`플로깅 활동 중 이동한 경로와 수집한 해양 쓰레기의 위치를 명확하게 구분하여 저장할 수 있도록 도메인 모델을 아래와 같이 설계했습니다. 

이를 통해 플로깅 활동의 경로와 결과를 체계적으로 관리하고 분석할 수 있습니다.

ㅤ

• **PloggingRecord**

플로깅 활동을 기록하는 엔티티로, 플로깅 활동의 전반적인 정보를 종합적으로 관리하며, 이동 경로와 수집된 쓰레기의 좌표를 포함합니다.

ㅤ

• **MovingCoordinate**

플로깅 중 이동한 좌표를 기록하는 엔티티로, 플로깅 경로의 각 지점을 나타냅니다.

이 엔티티는 플로깅 경로의 각 지점을 상세하게 기록하여 사용자가 이동한 전체 경로를 추적할 수 있게 합니다.

ㅤ

• **TrashCoordinate**

플로깅 중 수집한 해양 쓰레기의 좌표를 기록하는 엔티티로, 수집된 쓰레기의 위치를 나타냅니다.

이 엔티티는 수집된 쓰레기의 위치를 정확하게 기록하여, 해당 데이터를 기반으로 제주 지자체에서 해양 쓰레기 현황을 쉽게 파악할 수 있도록 돕습니다.
          `}
          />

          <ProjectContentBox
            subtitle="# 추후 고려해야 할 점"
            content={`짧은 해커톤 기간 동안, MVP 기능 개발을 완료하기 위해 프론트엔드에서는 사용자가 플로깅 활동 종료 버튼을 누르는 시점에 사용자의 이동 좌표를 저장하는 API를 호출하는 방식으로 구현했습니다. 그러나 여러 명의 사용자가 동시에 이동 좌표를 저장하는 API를 요청할 경우, 서버에 큰 부담을 주어 장애를 일으킬 수 있습니다.

ㅤ

이를 고도화하기 위해 **메시지 큐**를 고려할 수 있습니다. Apache Kafka와 같은 메시지 큐를 사용하여 요청을 큐에 저장하고, 큐에 있는 요청을 비동기적으로 처리하게 할 수 있습니다. 이를 통해 서버 부하를 분산시키고 안정적인 처리를 보장할 수 있습니다.`}
          />

          <ProjectContentBox
            subtitle="# 적극적인 기획 참여"
            content={`지속 가능한 제주의 미래를 위한 서비스를 개발하는 과정에서, 다양한 기능 개발보다는 제주 사회에 실질적인 가치를 제공할 수 있는 아이디어를 추구했습니다. 이에 따라 개발한 서비스는 플로깅을 주제로 하였습니다. 사용자는 바닷가나 해변에서 쓰레기를 주워 데이터베이스에 기록하게 되며, 이는 제주 지역의 해양 모니터링 데이터로 활용될 수 있습니다. 이러한 접근 방식은 해양 환경 보호와 관련된 문제에 대한 창의적인 해결책으로 평가받았습니다.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Baroging;
