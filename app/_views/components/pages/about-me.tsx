'use client';

import { Column } from '../elements/grid';
import Typography from '../elements/typography';
import Project from '../templetes/project';
import Section from '../templetes/section';

function Intro() {
  return (
    <>
      <Column className=" gap-4 pt-4 col-span-4">
        <div className=" flex flex-col gap-2">
          <Typography variant="headbold" color="grey900">
            이정우
          </Typography>
          <Typography variant="caption1" color="grey600">
            문제를 정의하고 해결하는 사람입니다. <br />
            올바른 질문이 정답보다 중요하다고 생각합니다.
          </Typography>
        </div>
      </Column>
      <Column className=" gap-4 pt-4 col-span-8">
        <Section>
          <Section.Title>Contact</Section.Title>
          <Typography variant="caption1" color="grey700">
            Email: itsme@jwlee.in <br />
            Phone: 010.4573.2605 <br />
            Github: [https://github.com/leejw0803](https://github.com/leejw0803) <br />
            LinkedIn: [Jungwoo Lee | LinkedIn](https://www.linkedin.com/in/jungwoo-lee-871a091ba/)
          </Typography>
        </Section>
      </Column>

      <Section>
        <Section.Title>Record</Section.Title>
        <Column className="gap-1">
          <Typography variant="subtitlebold" color="grey700">
            (주) 마로마브 - MAKE
          </Typography>
          <Typography variant="caption2" color="grey600">
            30만+ 유저 | 쉽게 시작하는 No.1 아두이노 학습 앱
          </Typography>
        </Column>
        <div className=" grid grid-cols-12">
          <Column className=" col-span-3 pt-4 gap-1">
            <Typography variant="bodybold" color="grey700">
              Web Team Lead
            </Typography>
            <Typography variant="caption1" color="grey600">
              2021.5 ~ 2023.7
            </Typography>
          </Column>
          <Column className=" col-span-9 pt-4 gap-4">
            <Typography variant="caption1" color="grey900">
              👨🏻‍💻 웹 서비스 아키텍쳐 및 스택 결정, 팀 리소스 관리, 프론트엔드 개발
            </Typography>
            <Typography variant="subtitlebold" color="grey900">
              🛠 Development
            </Typography>
            <Project>
              <Column className=" gap-1">
                <Project.Title>{`🚀 신규 서비스(C-editor)`}</Project.Title>
                <Project.Period>{`2023.04 ~`}</Project.Period>
              </Column>
              <Column className="gap-3">
                <Project.Reason>
                  - 비즈니스 로드맵에 맞춰 앱 내 새로운 교육과정인 C언어 교육과정 신설
                </Project.Reason>
                <Project.Purpose>
                  - 앱에 새롭게 추가되는 C언어 교육과정에 필요한 C언어 에디터 개발
                </Project.Purpose>
                <Project.Detail>
                  <Project.DetailSubtitle>1.주요 스택 결정</Project.DetailSubtitle>
                  <Project.DetailContent>
                    React + Vite
                    <br /> 앱 내에 들어가기 때문에 SEO가 중요하지 않다고 판단하여 React로 결정
                    <br /> 빠른 HMR을 바탕으로 개발 생산성 향상
                  </Project.DetailContent>
                  <Project.DetailContent>
                    Zustand
                    <br /> 단순한 구조와 낮은 러닝커브가 장점이라고 판단.
                    <br /> 코드가 간결해지고, 꾸준히 업데이트 되고 있는 라이브러리.
                  </Project.DetailContent>
                  <Project.DetailSubtitle>2.주요 기능 개발</Project.DetailSubtitle>
                </Project.Detail>
                <Project.Stacks>
                  {`🛠 C editor: React.js, Vite, SWC, SWR, Zustand, React-Router-Dom 6, MVI`}
                </Project.Stacks>
              </Column>
            </Project>
            <Project>
              <Column className=" gap-1">
                <Project.Title>{`🚀 Front-end 리소스 최적화`}</Project.Title>
                <Project.Period>{`2022.12 ~`}</Project.Period>
              </Column>
              <Column className="gap-3">
                <Project.Reason>
                  - 빠른 서비스 개발에 묶여 발생한 개발 부채들로 인해 개발 생산성 하락
                  <br /> - 코드의 중복(UI, Configuration)
                  <br /> - 중복 코드로 인해 버그 트래킹이 어려운 문제
                  <br /> - 서비스마다 서로 다른 개발 스택을 가지고 있어 컨텍스트 스위칭이 어려운
                  문제
                </Project.Reason>
                <Project.Purpose>
                  - 개발 시 컨텍스트 스위칭 비용 줄이기
                  <br /> - 실제 서비스에서 발생하는 버그 줄이기
                  <br /> - 현재 서비스와 구축된 Monorepo 서비스에 맞는 Git Strategy 구축
                </Project.Purpose>
                <Project.Detail>
                  <Project.DetailSubtitle>
                    1. 모든 서비스를 포괄하는 Monorepo를 만들고 Configuration 및 UI 통합
                  </Project.DetailSubtitle>
                  <Project.DetailContent>
                    - pnpm + turporepo를 사용하여 Monorepo 생성
                    <br /> - TBD를 바탕으로 서비스 및 팀 구조에 맞게 조금 변경하여 CI/CD 구축
                    <br /> - 디자이너와 협업하여 MPL(Make Product Language) 만들고 패키징 하여 배포
                  </Project.DetailContent>
                  <Project.DetailSubtitle>
                    2. 개발부채가 심각한 Editor 서비스의 경우, 재구축하는 프로젝트로 분리하여 개발
                  </Project.DetailSubtitle>
                  <Project.DetailContent>
                    - Third party app 인 Scratch 및 Blockly를 기반으로 새로운 블록 코드 에디터 개발
                  </Project.DetailContent>
                  <Project.DetailSubtitle>
                    3. 버그를 줄이기 위한 Test Code 추가
                  </Project.DetailSubtitle>
                  <Project.DetailContent>
                    - Unit test는 상태관리 및 개인적으로 개발된 Logic에 한하고, Integration Test
                    위주로 작성
                  </Project.DetailContent>
                </Project.Detail>
                <Project.Stacks>
                  {`🛠 pnpm, turborepo, storybook, vitest, React Testing Library, TBD, Zustand`}
                </Project.Stacks>
              </Column>
            </Project>
            <Project>
              <Column className=" gap-1">
                <Project.Title>{`🚀 블록 에디터 속도 개선`}</Project.Title>
                <Project.Period>{`2022.04 ~ 2022.06`}</Project.Period>
              </Column>
              <Column className="gap-3">
                <Project.Reason>
                  - Desktop 에디터와 Mobile에디터는 중복된 코드로 라우팅만 분리
                  <br /> - 번들 크기가 지나치게 커지는 이슈가 있었음
                  <br /> - Mobile에디터의 경우, 속도가 저하가 심함
                </Project.Reason>
                <Project.Purpose>- 앱 내 에디터의 초기 로딩 속도 개선</Project.Purpose>
                <Project.Detail>
                  <Project.DetailSubtitle>
                    1. 모노레포로 중복되는 코드를 효율적으로 관리하도록 수정
                  </Project.DetailSubtitle>
                  <Project.DetailContent>
                    - desktop, mobile의 번들링을 분리하고, 서브도메인으로 나누어 배포
                    <br /> - 중복되는 block, device, 번역 정보들은 패키지로 관리
                  </Project.DetailContent>
                  <Project.DetailSubtitle>
                    2. Bundle Analyzer를 사용해서 문제 파악
                  </Project.DetailSubtitle>
                  <Project.DetailContent>
                    - webpack4에 analyzer를 붙여서 어떤 부분의 번들 파일 크기가 이슈가 되는지 체크
                    <br /> - 현재 우리 서비스에서 필요없거나 중복되는 파일들은 최대한 제거
                  </Project.DetailContent>
                  <Project.DetailSubtitle>
                    3. gzip을 활용해서 컨텐츠 전송 속도 개선
                  </Project.DetailSubtitle>
                  <Project.DetailContent>
                    - 사용하고 있던 S3 + Cloud Front의 경우 10MB이하의 번들 파일만 gzip을 활용해서
                    전송
                    <br /> - 번들 크기를 10MB이하로 줄이지 못해, 번들링 과정에서 수동으로 gzip압축을
                    하도록 변경
                  </Project.DetailContent>
                </Project.Detail>
                <Project.Stacks>
                  {`🛠  React.js, Webpack4, Cloud Front, S3, Redux, pnpm, turborepo`}
                </Project.Stacks>
              </Column>
            </Project>
            <Project>
              <Column className=" gap-1">
                <Project.Title>{`🚀 DB Migration 프로젝트`}</Project.Title>
                <Project.Period>{`2021.09 ~ 2021.11`}</Project.Period>
              </Column>
              <Column className="gap-3">
                <Project.Reason>
                  - 백엔드 개발자의 부재로 No SQL 서비스인 firebase를 사용
                  <br /> - 관련 지식의 부족으로 No SQL을 RDB처럼 사용해서 성능이 좋지 않았음
                  <br /> - 관계형이 아니다 보니 데이터 무결성에 문제 발생
                  <br /> - 담당자의 잦은 변경과 명확한 책임자가 없어 발생한 문제에 대한 트래킹이
                  제대로 이뤄지지 않음
                  <br /> - 백엔드 개발자의 채용과 함께 서비스가 더 커지기 전에 RDBMS로 옮기기로 결정
                </Project.Reason>
                <Project.Purpose>
                  - RDBMS 사용으로 데이터 무결성 문제 해결
                  <br /> - No SQL의 잘못된 사용으로 인한 느린 성능 개선
                  <br /> - API 서버 개발
                </Project.Purpose>
                <Project.Detail>
                  <Project.DetailSubtitle>1. API 서버의 스택결정</Project.DetailSubtitle>
                  <Project.DetailContent>
                    NestJS
                    <br /> 백엔드 개발자분의 주 언어도 JavaScript였고, 본인도 개발에 참여해야 하는
                    상황이기 때문에 프로그래밍 언어는 JavaScript로 결정
                    <br /> Express는 그 자체로는 자유도가 있는 편이라 러닝커브가 높다고 판단
                    <br />
                    어느정도 구조화되어 있는 Nest를 이용하여 개발하기로 결정
                  </Project.DetailContent>
                  <Project.DetailContent>
                    PostgreSQL
                    <br /> 당시에 떠오르던 DB DB레벨에서 지원하는 함수가 많았고, Array 형태의
                    데이터를 지원했음
                  </Project.DetailContent>
                  <Project.DetailContent>
                    typeORM
                    <br /> Sequalize라는 JS 생태계에서의 전통적인 ORM이 있었지만 TypeScript와의
                    궁합이 좋지 않음 (추가 configuration이 다수 필요)
                    <br /> TS와 궁합이 좋고, 러닝커브가 낮은 편인 typeORM으로 결정
                  </Project.DetailContent>
                  <Project.DetailSubtitle>2. Migration 코드 개발</Project.DetailSubtitle>
                  <Project.DetailContent>
                    - firebase에서 데이터를 읽어서 DB에 넣어주는 Migration 코드 개발
                  </Project.DetailContent>
                  <Project.DetailSubtitle>
                    3. API 서버 초기 디렉토리 구조 결정
                  </Project.DetailSubtitle>
                  <Project.DetailSubtitle>4. 초기 테스트 코드 개발</Project.DetailSubtitle>
                </Project.Detail>
                <Project.Stacks>{`🛠 PostgreSQL, typeORM, Nest.js, RDS, jest`}</Project.Stacks>
              </Column>
            </Project>
            <Typography variant="subtitlebold" color="grey900">
              🏃🏻 Leadership
            </Typography>
            <Project>
              <Column className=" gap-1">
                <Project.Title>{`🚀 개편한 날(Refactoring day)`}</Project.Title>
                <Project.Period>{`2023.01 ~`}</Project.Period>
              </Column>
              <Column className="gap-3">
                <Project.Reason>
                  - 적은 개발 인원으로 많은 서비스를 배포하고 관리하다 보니 기술 부채가 많이
                  쌓여있었고, 조직이 갑자기 커졌을 때가 우려됨
                  <br /> - 개발 팀원들의 성장을 도모하여 동기부여 상승을 위함
                </Project.Reason>
                <Project.Purpose>
                  - 각 팀에서 쌓인 기술 부채 해결
                  <br /> - 개발 팀원들 개개인의 성장
                </Project.Purpose>
                <Project.Detail>
                  <Project.DetailSubtitle>1. CTO 및 개발 팀원들 설득</Project.DetailSubtitle>
                  <Project.DetailContent>
                    - 개발 부채들을 해결해야 한다는 의견을 피력하였고, CTO님도 이에 동의함
                    <br /> - 개발 팀원들에게 필요성을 어필하고 동의를 구함
                  </Project.DetailContent>
                  <Project.DetailSubtitle>
                    2. 개발일 대신 각종 회의들이 많은 월요일로 날짜를 지정해 서비스 일정에 크게
                    지장을 주지 않도록 함
                  </Project.DetailSubtitle>
                  <Project.DetailSubtitle>
                    3. 팀원들의 아이디어를 모아서 ‘개발자들이 개발을 편하게 할 수 있도록 개편하자’는
                    뜻의 개편한 날로 이름 결정
                  </Project.DetailSubtitle>
                </Project.Detail>
              </Column>
            </Project>
            <Project>
              <Column className=" gap-1">
                <Project.Title>{`🚀 웹 팀 온보딩 과제`}</Project.Title>
                <Project.Period>{`2022.01 ~ 2022.02`}</Project.Period>
              </Column>
              <Column className="gap-3">
                <Project.Reason>
                  - 당시에 팀의 개발자가 점점 늘어나는 추세였고, 각자의 코드 스타일이나 우리 팀의
                  개발 스택을 일일이 알려주기 어려운 상황이었음
                  <br /> - 또한 대부분의 개발자가 신입 개발자이므로 온보딩을 효과적으로 진행할
                  필요가 있었음.
                  <br /> - 앞으로 더 자주 발생할 개발자 온보딩 리소스를 줄이고자 온보딩 과제를 미리
                  만들기로 결정
                </Project.Reason>
                <Project.Purpose>- 새로운 개발자의 온보딩 리소스 줄이기</Project.Purpose>
                <Project.Detail>
                  <Project.DetailSubtitle>
                    1. 디자이너와 협업하여 간단한 To-do list 온보딩 과제 제작
                  </Project.DetailSubtitle>
                  <Project.DetailSubtitle>
                    2. 과제 구성 이후, 직접 진행해보면서 예제코드 작성
                  </Project.DetailSubtitle>
                </Project.Detail>
                <Project.Stacks>🛠  React.js, Figma, styled-components</Project.Stacks>
              </Column>
            </Project>
            <Project>
              <Column className=" gap-1">
                <Project.Title>{`🚀 웹 팀 리소스 관리`}</Project.Title>
                <Project.Period>{`2021.05 ~`}</Project.Period>
              </Column>
              <Column className="gap-3">
                <Project.Purpose>
                  - 비즈니스 목표에 맞는 팀 단위의 목표를 설정
                  <br /> - 최대한 모든 팀원들이 목소리를 낼 수 있도록 하기
                </Project.Purpose>
                <Project.Detail>
                  <Project.DetailSubtitle>1. 스프린트 진행 및 회고</Project.DetailSubtitle>
                  <Project.DetailContent>
                    - 스프린트 회고 시 각자가 느꼈던 문제를 공유
                    <br /> - 문제를 명확히 하고 해당 문제를 개선할 수 있는 구체적인 방안(Action
                    plan)에 대해 충분히 회의
                    <br /> - 구체적인 개선점과 비즈니스 목표에 맞는 스프린트 목표를 세워서 다음
                    스프린트 진행
                  </Project.DetailContent>
                  <Project.DetailSubtitle>2. 데일리 및 분기별 1:1 면담</Project.DetailSubtitle>
                  <Project.DetailSubtitle>
                    3. 개발팀의 업무관리가 Jira에서 Notion으로 넘어오면서, Notion으로 스프린트를
                    관리할 수 있도록 시스템 개선
                  </Project.DetailSubtitle>
                </Project.Detail>
                <Project.Stacks>🛠  Notion</Project.Stacks>
              </Column>
            </Project>
          </Column>

          <Column className=" col-span-3 pt-4 gap-1">
            <Typography variant="bodybold" color="grey700">
              Front-End Developer
            </Typography>
            <Typography variant="caption1" color="grey600">
              2020.11 ~ 2021.5
            </Typography>
          </Column>
          <Column className=" col-span-9 pt-4 gap-4">
            <Typography variant="caption1" color="grey900">
              👨🏻‍💻 선생님용 수업관리 대시보드 서비스 유지보수
            </Typography>
            <Typography variant="subtitlebold" color="grey900">
              🛠 Development
            </Typography>
            <Project>
              <Column className=" gap-1">
                <Project.Title>{`🚀 MAKE Dashboard 서비스 유지보수`}</Project.Title>
                <Project.Period>{`2020.11 ~`}</Project.Period>
              </Column>
              <Column className="gap-3">
                <Project.Purpose>
                  - 비즈니스 로드맵에 맞춰 MAKE Dashboard 서비스의 기능을 추가
                  <br /> - 버그를 수정하고 피드백 반영
                </Project.Purpose>
                <Project.Detail>
                  <Project.DetailSubtitle>
                    1. 디자인 시스템을 활용한 웹 사이트 대시보드 UI 개선
                  </Project.DetailSubtitle>
                  <Project.DetailSubtitle>
                    2. 대시보드 서비스 페이지 모바일 반응형 UI 개발
                  </Project.DetailSubtitle>
                </Project.Detail>
                <Project.Stacks>
                  {`🛠  React.js, styled-components, Redux, Firebase, GCP`}
                </Project.Stacks>
              </Column>
            </Project>
          </Column>
        </div>
      </Section>

      <Section>
        <Section.Title>Activity</Section.Title>
        <Column className=" col-span-full gap-4">
          <Project className=" flex flex-col gap-1">
            <Project.Title>🔁 Loopback - 개발자 회고 모임</Project.Title>
            <Project.Period>2022 ~</Project.Period>
            <Project.DetailContent>
              - 반기 / 매년 마다 한 번씩 오프라인으로 모여서 진행하는 개발자 회고 모임
              <br /> - 각자의 시간을 스스로, 그리고 서로가 돌아보면서 동기부여의 시간을 갖기 위해
              진행 시작
            </Project.DetailContent>
          </Project>
          <Project className=" flex flex-col gap-1">
            <Project.Title>📚 매새일: 매일매일 새로워지는 일상 - 독서 모임</Project.Title>
            <Project.Period>2023.01 ~</Project.Period>
            <Project.DetailContent>
              - 책을 통해서 일상을 바꿔보자는 취지로 매달 진행
              <br /> - 돌아가면서 한 권씩 책을 선정해 모두가 읽고 얻은 인사이트를 만나서 공유
            </Project.DetailContent>
          </Project>
          <Project className=" flex flex-col gap-1">
            <Project.Title>🎤 24절기톡 - 인사이트 공유 스피치 모임</Project.Title>
            <Project.Period>2022.03 ~</Project.Period>
            <Project.DetailContent>
              - 24절기마다 돌아가면서 각자 발표하고 싶은 주제로 준비해 발표
              <br /> - 서로 모르던 분야에 대한 지식 공유, 본인의 발표 주제에 대해 한 번 더 깊게
              공부하는 계기, 발표 실력 향상 시작
            </Project.DetailContent>
          </Project>
        </Column>
      </Section>

      <Section>
        <Section.Title>Education</Section.Title>
        <Project className=" flex flex-row gap-2 items-center">
          <Project.Title>건국대학교 컴퓨터 공학과</Project.Title>
          <Project.Period>2014.3 ~ 2021.2</Project.Period>
        </Project>
      </Section>
    </>
  );
}

export default Intro;
