import Toolbar from "../components/Toolbar";
import MocacongImage from "../assets/svg/mocacong-project.svg";
import ProjectHeader from "../components/ProjectHeader";
import ProjectInfoBox from "../components/ProjectInfoBox";
import ProjectContentBox from "../components/ProjectContentBox";

function Mocacong() {
  const links = [
    { icon: "Github", url: "https://github.com/mocacong/Mocacong-Backend" },
    {
      icon: "AppStore",
      url: "https://apps.apple.com/kr/app/mocacong/id6446925939",
    },
    {
      icon: "GooglePlay",
      url: "https://play.google.com/store/search?q=모카콩&c=apps",
    },
  ];

  const skills = [
    "SpringBoot 2",
    "Spring DataJPA",
    "Java 11",
    "MySQL",
    "JUnit",
    "Redis",
    "AWS",
  ];

  return (
    <div>
      <Toolbar />
      <ProjectHeader imageSrc={MocacongImage} text="mocacong" />
      <ProjectInfoBox
        date={"2023.03 ~ 2024.01"}
        links={links}
        roleText={`
**백엔드 개발**
          
사용자 인증 관련 API 개발
          
카페/리뷰/마이페이지 관련 API 개발
          
ㅤ
          
**기획**
        `}
        skills={skills}
        aboutText={`연인 혹은 친구와 일상을 공유하는 앱들은 시중에 존재하지만 가족과 일상을 공유하는 앱은 적습니다.

본 프로젝트에서는 평소 부모님께 연락하는 것이 부끄럽거나, 자주 연락하지 못하시는 분들을 위해 쉬운 방법으로 일상을 공유할 수 있는 기능을 제공합니다.`}
        details="* IT 연합동아리 `디프만 14기` 대상 수상"
      />
      <div className="flex justify-center mb-4">
        <div className="p-5 w-[940px] bg-white shadow-md rounded-[25px]">
          <ProjectContentBox
            subtitle={`# AOP와 ArgumentResolver를 
             
이용하여 반복 코드 제거`}
            content={`권한이 필요한 API는 본 로직을 실행하기 전에 로그인 여부를 먼저 확인해야 합니다. 하지만 로그인한 사용자인지 검증하는 코드는 대부분의 기능에 포함되어야 하기에 중복성이 높아지고 유지보수성 측면에도 좋지 않습니다.

ㅤ

이러한 문제를 해결하기 위해 **Spring AOP 기능**을 이용하여 전체 소스 코드에 퍼진 반복되고 있는 코드를 한 곳에 모아 별도의 기능으로 분리시켜주고 사용자가 원하는 시점에서 실행할 수 있도록 했습니다. 그리고 \`HandlerMethodArgumentResolver\`를 이용하여 \`@LoginId\` 어노테이션이 달린 파라미터에 자동적으로 token의 값을 할당시켜 반복적인 코드를 제거할 수 있었습니다.`}
          />

          <ProjectContentBox
            subtitle="# 동시성 이슈 해결을 위한 무결성 제약 조건 채택"
            content={`프로젝트 진행 중 POST 메소드의 연속 호출로 인한 동시성 이슈를 경험하게 되어, 낙관적 락, 비관적 락, 그리고 간단하면서도 효과적인 **데이터베이스의 UNIQUE 제약 조건**을 고려했습니다.

먼저 \`ExecutorService\`를 활용하여 멀티 스레드 환경에서 테스트를 진행하면서 발생할 수 있는 문제를 분석했습니다. 토이 프로젝트의 특성상 낙관적 락까지 고려하지 않아도 충분히 무결성 제약 조건만으로 문제를 해결할 수 있었습니다. 따라서, 가장 간단하면서도 효과적인 방법으로 데이터베이스에 유니크 제약 조건을 걸어 문제를 원활히 해결할 수 있었습니다.`}
          />

          <ProjectContentBox
            subtitle={`# Redis를 이용한 
            
Refresh Token 도입`}
            content={`기존에는 유효기간이 짧은 Access Token만을 가지고 사용자 인증을 수행했습니다. 하지만 짧은 유효기간의 Access Token으로 인해 사용자는 매번 로그인을 수행해야 하기 때문에 불편함을 초래했습니다. 이러한 불편함을 없애기 위해 단순히 Access Token 유효시간을 무한정 늘릴 수는 있으나 JWT의 가장 치명적인 단점을 생각하면 이는 지양해야 하는 방법입니다. 그렇기에 Access Token을 갱신하기 위해 필요한 Refresh Token을 새로 도입했습니다.

ㅤ

Refresh Token을 구현하는 방식은 여러 가지가 있지만 본 프로젝트에서는 아래와 같은 이유로 Redis에 보관할 수 있도록 구현했습니다:


RDB와는 다르게 데이터의 만료일을 지정하여 유효기간을 효율적으로 관리할 수 있습니다.

대체로 짧은 시간 단위로 갱신하는 JWT Access Token은 새롭게 갱신하기 위해 Refresh Token이 필요합니다. 이렇게 호출 빈도가 높은 Refresh Token은 RDB에 저장하는 것보다 In-memory DB에 저장해두고 사용하는 것이 훨씬 속도가 빠르고 토큰 재발급 로직의 병목현상을 방지할 수 있습니다.

이러한 점을 고려하여 보안은 유지하며 사용자 경험을 향상시킬 수 있도록 Redis를 이용한 리프레시 토큰을 도입했습니다.`}
          />

          <ProjectContentBox
            subtitle="# Redis를 이용한 Apple OAuth 공개키 캐싱"
            content={`프로젝트 초기에 AccessToken만을 이용하여 인증 과정을 수행했으며, 사용자가 Apple 로그인을 할 때마다 애플 서버에서 공개키를 빈번하게 가져와야 했습니다. Apple OAuth의 특성상 공개키는 자주 변경되지 않으나, 매번 서버 요청을 통해 키를 가져오는 것은 성능과 효율성 면에서 비효율적이었습니다.

이를 개선하기 위해 Redis를 이용한 캐싱 전략을 도입했습니다. Apple OAuth의 공개키를 Redis 내에 캐싱함으로써, 서버 요청을 줄이고 인증 과정을 보다 효율적으로 처리할 수 있었습니다. 공개키가 변경될 가능성이 낮음을 고려하여, 주기적으로 공개키를 확인하고 업데이트하는 방법을 사용했습니다.

이로 인해 다음과 같은 이점이 있었습니다:

1. **성능 향상**: 매번 Apple 서버에 요청을 보내는 대신, 캐싱된 공개키를 사용하여 인증 과정을 처리함으로써 응답 시간을 크게 줄였습니다.
2. **서버 부하 감소**: 빈번한 외부 서버 요청을 줄여 서버 부하를 감소시켰습니다. 이는 서버 자원 절약과 안정적인 서비스 운영에 기여했습니다.`}
          />

          <ProjectContentBox
            subtitle="# UPDATE 벌크연산을 통한 성능 향상"
            content={`InnoDB 엔진은 레코드를 잠그는 것이 아닌, 인덱스를 잠그는 방식으로 동작합니다. 이는 변경 대상 레코드를 찾기 위해 검색한 인덱스의 레코드를 모두 잠가야 한다는 의미입니다. 따라서, update 연산 시 조건 테이블에 인덱스가 없다면 풀 스캔이 발생하게 되어 모든 레코드가 잠기는 문제가 발생할 수 있습니다.

이러한 점을 고려하여 본 프로젝트에서는 update의 조건에 걸리는 컬럼에 대해 인덱스를 생성하고 여러 개의 레코드를 수정하는 경우, 더티 체킹 대신 Update 벌크 연산을 활용하여 성능을 향상시켰습니다.`}
          />

          <ProjectContentBox
            subtitle="# 코드 커버리지를 위한 JaCoCo 및 SonarCloud 도입"
            content={`본 프로젝트에서는 테스트 코드 작성의 중요성을 깨닫고 단위 테스트 뿐만 아니라 인수 테스트까지 철저히 진행합니다. 이를 통해 코드의 신뢰성을 높이고 예상치 못한 버그를 사전에 방지하는 데 주력하고 있습니다.

더불어, 프로젝트에 도입하여 코드 커버리지를 향상시키고 코드 품질을 지속적으로 모니터링하기 위해 JaCoCo와 SonarCloud를 도입하여 코드 개선점을 신속하게 파악하고 프로젝트의 안정성과 유지보수성을 지속적으로 향상시키고 있습니다.`}
          />

          <ProjectContentBox
            subtitle={`# Jira와 Confluence를 

활용한 협업 및 기술 공유`}
            content={`애자일하게 프로젝트를 진행하기 위해 프로젝트 협업 관리 툴 Jira를 통해 주 단위로 스프린트를 시행하고 각자 개발 진행 상황을 공유했습니다. 또한 개발 과정에서 더 나은 서비스를 만들기 위해 고민한 노력과 해결 방법들을 Confluence에 정리하고 오프라인으로 각자 세션을 열어 공유하는 시간을 가졌습니다. 이 과정을 통해 팀원 모두가 더 나은 서비스를 만들고자 하는 의지를 고취시켰으며 다른 팀원의 세션 내용을 듣고 배움으로써 실력 향상에도 도움 되었습니다.`}
          />
        </div>
      </div>
    </div>
  );
}

export default Mocacong;
