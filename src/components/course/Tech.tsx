import { FC } from "react";
import {
  CourseContents,
  CourseDescription,
  CourseFloatingBox,
  CourseHeading,
  CourseImage,
  CourseIntro,
  CourseLargeLayout,
  CourseParagraph,
  CoursePrice,
  ListItem,
  Spoiler,
} from "./Shared";
import { BlockWrapper, BoxSolid, PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { EnrollBtn, ReferenceLink } from "@/ui/buttons/Buttons";
import { IMG_LINKS } from "@/utils/general";
import styles from "./Course.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";

const Tech: FC = () => {
  const { isLaptopSmall } = useIsMobile();

  return <>{isLaptopSmall ? <TechMobile /> : <TechLargeLayout />}</>;
};

function TechLargeLayout() {
  return (
    <section className={styles.course_container}>
      <BlockWrapper className="bg-analagous-2 max-h-92">
        <PaddingWrapper key={"padding1"}>
          <CourseLargeLayout
            key="large1"
            leftChildren={[<TechCourseHeading key={"heading"} />]}
            rightChildren={[
              <CourseFloatingBox
                key={"floating"}
                courseImage={<CourseImage image={IMG_LINKS.AVATAR} />}
              >
                <TechCourseEnroll />
                <TechCourseRequirements />
              </CourseFloatingBox>,
            ]}
          />
        </PaddingWrapper>
      </BlockWrapper>
      <PaddingWrapper key={"padding2"}>
        <CourseLargeLayout
          key="large2"
          leftChildren={[
            <TechCourseLearn key={"learn"} />,
            <TechCourseDescription key={"description"} />,
          ]}
          rightChildren={[<div key="placeholder" style={{ width: "26rem" }}></div>]}
        />
      </PaddingWrapper>
    </section>
  );
}

function TechMobile() {
  return (
    <section className={styles.course_container}>
      <CourseImage image={IMG_LINKS.AVATAR} aria-label="IT английский" />
      <PaddingWrapper>
        <TechCourseHeading />
        <TechCourseEnroll />
        <TechCourseLearn />
        <TechCourseDescription />
        <Spoiler title="Требования" isInitOpen={true}>
          <TechCourseRequirements />
        </Spoiler>
      </PaddingWrapper>
    </section>
  );
}

function TechCourseHeading() {
  return (
    <>
      <CourseHeading title="IT Английский" key={"IT Eng"} />
      <CourseIntro>
        Подойдет тем кто работает или еще учится в сфере айти и хочет трудоустроиться в
        международную компанию удаленно, релоцироваться и найти работу заграницей или же обучаться
        на англоязычных IT курсах.
      </CourseIntro>
    </>
  );
}
function TechCourseEnroll() {
  return (
    <>
      <CoursePrice price={30} clarification="за 1 час индивидуального занятия" />
      <EnrollBtn>Записаться</EnrollBtn>
    </>
  );
}

function TechCourseLearn() {
  return (
    <BoxSolid>
      <CourseContents>
        <h3 className="font-bold">
          Cвободно общаться на следующие темы, используя продвинутую лексику:
        </h3>
        <ul className={styles.course_contents_list}>
          {COURSE_CONTENTS.map(item => (
            <ListItem {...item} key={item.title} />
          ))}
        </ul>
      </CourseContents>
    </BoxSolid>
  );
}

function TechCourseDescription() {
  return (
    <CourseDescription>
      <div className={styles.general_course_description}>
        <CourseParagraph>
          Занятия включают в себя не только основы английского языка, но и фокусируются на развитии
          навыков, необходимых для успешной карьеры в сфере IT, таких как письменная и устная
          коммуникация, общение с коллегами и клиентами на английском языке.
        </CourseParagraph>
        <CourseParagraph>
          Программа может редактироваться под индивидуальные запросы студента.
        </CourseParagraph>
        <CourseParagraph>
          Грамматика, включенная в курс:
          <ol className="flex flex-col gap-1 text-sm ml-5 my-3">
            <li>Present simple</li>
            <li>Present Continuous</li>
            <li>Past Simple</li>
            <li>Present Perfect</li>
            <li>Future Simple</li>
            <li>To be going to</li>
            <li>Comparatives vs Superlatives</li>
            <li>Quantifiers</li>
            <li>Passive voice</li>
            <li>Modal verbs</li>
            <li>First and second conditional</li>
            <li>Articles</li>
            <li>Quantifiers</li>
            <li>Quantifiers</li>
          </ol>
        </CourseParagraph>
        <CourseParagraph>
          За время прохождения программы вы <b>гарантированно преодолеете языковой барьер </b>, так
          как одной из главных целей программы является развитие коммуникативных навыков.
        </CourseParagraph>
        <CourseParagraph>
          Весь материал размещен на интерактивной платформе, что позволяет сделать задания
          максимально разнообразными. Домашнее задание выполняется также на ней.
        </CourseParagraph>
      </div>
    </CourseDescription>
  );
}

function TechCourseRequirements() {
  return (
    <ol className={styles.requirements}>
      <li>
        {" "}
        Необходимый уровень для старта уверенный А2-начальный В1 (программа также подойдет и для
        более продвинутых уровней) проверить уровень можно{" "}
        <ReferenceLink href="google.com">здесь</ReferenceLink>.
      </li>
      <li>
        Перед началом занятий проводится бесплатная консультация (15-20 минут) для знакомства и
        подтверждения уровня.{" "}
      </li>
    </ol>
  );
}

export default Tech;

var COURSE_CONTENTS = [
  {
    title: "Jobs in tech",
    description: "",
  },
  {
    title: "Software and hardware",
    description: "",
  },
  {
    title: "Programming languages",
    description: "",
  },
  {
    title: "Version control and hosting platforms",
    description: "",
  },
  {
    title: "SDLC (software development lifecycle)",
    description: "",
  },
  {
    title: "Startup culture",
    description: "",
  },
  {
    title: "Writing technical documentation",
    description: "",
  },
  {
    title: "Agile vs Kanban",
    description: "",
  },
  {
    title: "Design (UX vs UI vs Graphic Design)",
    description: "",
  },
  {
    title: "Software testing",
    description: "",
  },
  {
    title: "Cybersecurity",
    description: "",
  },
  {
    title: "Tech trends",
    description: "",
  },
  {
    title: "Communication at workplace",
    description: "",
  },
];
