import React from 'react';
import Toolbar from '../components/Toolbar';
import BibbiImage from '../assets/svg/bibbi-project.svg';
import ProjectHeader from '../components/ProjectHeader';
import ProjectInfoBox from '../components/ProjectInfoBox';
import ProjectContentBox from '../components/ProjectContentBox';

const Bibbi: React.FC = () => {
    const links = [
        { icon: 'Site', text: 'https://bibbi.app' },
        { icon: 'Github', text: 'https://github.com/depromeet/14th-team5-BE' },
        { icon: 'Medium', text: 'Medium' },
        { icon: 'Instagram', text: 'Instagram' },
    ];

    const skills = [
        'SpringBoot 3',
        'Spring DataJPA',
        'Java 17',
        'MariaDB',
        'Flyway',
        'Redis',
        'Terrafom',
    ];

    return (
        <div>
            <Toolbar />
            <ProjectHeader imageSrc={BibbiImage} text="bibbi" />
            <ProjectInfoBox links={links} skills={skills} aboutText='연인 혹은 친구와 일상을 공유하는 앱들은 시중에 존재하지만 가족과 일상을 공유하는 앱은 적습니다. <br />
본 프로젝트에서는 평소 부모님께 연락하는 것이 부끄럽거나, 자주 연락하지 못하시는 분들을 위해 쉬운 방법으로 일상을 공유할 수 있는 기능을 제공합니다.' details='* IT 연합동아리 `디프만 14기` 대상 수상'/>
            <ProjectContentBox 
              subtitle='Flyway를 통한 안전한 DB 형상관리와 마이그레이션 수행'
              content='서로 다른 도메인 간의 강력한 결합은 유지보수와 확장성 측면에서 문제를 일으킬 수 있습니다. 만약 다른 서비스의 기능이 필요할 때에는 해당 서비스에 대한 의존성을 직접 추가하면 되지만 강력한 결합을 초래할 수 있습니다. 본 프로젝트에서는 서로 다른 도메인 간의 의존성을 최소화하기 위해 EventListner를 도입했습니다. 결과적으로 도메인 간 결합도를 낮추고 두 로직을 분리하여 실행할 수 있었습니다.'
            />
            <ProjectContentBox 
              subtitle='이미지 업로드를 위한 S3 Pre-signedUrl 도입'
              content='이미지 업로드는 JSON을 주고 받는 일반 API 요청에 비해 큰 부하를 발생시키는 작업입니다. Bibbi 프로젝트에서는 이미지 관련 기능들이 앞으로도 더 도입될 예정이기에 서버에 파일을 전송하고 이를 서버에서 버킷에 저장하는 이중 작업은 성능적으로 효과적이라 생각하지 않았습니다. 그렇기에 서버가 클라이언트가 파일 업로드 권한을 가질 수 있는 url을 발급해주어 클라이언트에서 직접 파일 업로드를 수행할 수 있도록 S3 Pre-signed Url 기술을 도입했습니다.'
            />
            <ProjectContentBox 
              subtitle='Redis를 이용한 조회 API 성능 개선'
              content='Bibbi 서비스는 사용자들이 올린 피드 사진을 요약하여 보여주는 캘린더 기능이 존재합니다. 캘린더 조회 API의 응답 데이터는 다른 조회 데이터에 비해 잘 변경되지 않으면서 많은 조회가 이루어지는 데이터입니다. 이런 점들을 고려하여 Redis를 도입하여 캘린더 조회 API의 응답 데이터를 캐싱하여 매번 데이터베이스에서 데이터를 가져오는 비효율성을 줄여 성능 개선하기로 결정했습니다. <br /> <br /> 
              캐시 스토리지는 빠른 속도를 가져 용이한 In-MemoryDB인 NCP의 Cloud DB for Redis를 택하여 캘린더 조회 API의 응답 데이터를 캐싱했습니다.<br />
              성능 측정 테스트 도구 JMeter를 이용해 100명의 동시 사용자가 해당 API를 호출한다고 가정하고 살펴본 결과, 841ms가 소요되던 캘린더 조회 API가 9ms로 개선되어 약 92.44배의 성능 개선을 할 수 있었습니다.'
            />
            <ProjectContentBox 
              subtitle='비관적 락을 통한 동시성 이슈 해결'
              content='Prod 서버에서 이모지 등록과 같은 POST 메소드에서 동시성 이슈가 발생했습니다. <br />
              동시성 이슈를 해결하기 위해 낙관적 락과 비관적 락 두 가지 방법을 고려했습니다. 낙관적 락은 트랜잭션 충돌을 최소화하고 동시에 여러 사용자가 데이터를 수정할 수 있도록 허용하여 전반적인 성능을 향상시킬 수 있다는 매력이 있었습니다. 그러나 낙관적 락은 충돌이 발생할 경우 해결을 위해 개발자가 수동으로 롤백 처리를 해야 한다는 큰 단점이 있었습니다. <br /><br />
              반면에 비관적 락은 <u>데이터 무결성을 보장하는 수준이 높으며</u>, 낙관적 락과는 달리 트랜잭션을 롤백하면 롤백 처리가 완료되어 더 간편합니다. 락을 획득할 때까지 작업을 대기해야 하는 방식인 비관적 락을 선택하여 동시성 문제를 효과적으로 해결하고 데이터 일관성을 강화했습니다. 이러한 선택은 데이터 무결성과 안정성을 우선시하면서도 효율적인 동시성 제어를 실현하는데 도움이 되었습니다..'
            />
            <ProjectContentBox 
              subtitle='AWS 인프라 구축을 위한 Terraform 활용'
              content='NCP에서 AWS로 서버 이전하는 과정에서 Terraform을 활용하여 인프라를 구축했습니다. 이를 통해 휴먼 에러를 방지할 수 있으며, Git을 활용하여 형상 관리를 용이하게 하여 인프라 변경 이력을 관리할 수 있습니다. 더불어, 서버를 수동으로 생성하거나 작업하는 경우에는 프로덕션 애플리케이션에 영향을 주고 나서야 문제를 발견하는 경우가 많았지만, Terraform을 이용함으로써 코드 리뷰를 통해 문제 발생 가능성을 사전에 어느 정도 예방할 수 있었습니다.'
            />
            <ProjectContentBox 
              subtitle='팀 개발 블로그 운영을 통한 지식 공유'
              content='프로젝트를 진행하며 만났던 이슈나 기술적 고민들을 개발에 관심이 있는 모두에게 공유하기 위해 팀 개발 블로그를 운영합니다. 블로그 글을 통해 함께 지식을 공유하고, 서로의 경험을 학습하며 더욱 발전할 수 있도록 노력하고 있습니다. 이러한 활동은 개인의 성장뿐만 아니라 팀의 성공에도 크게 기여한다고 믿습니다.'
            />
        </div>
    );
};

export default Bibbi;
