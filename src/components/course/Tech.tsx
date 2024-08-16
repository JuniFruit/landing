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
import { IMG_LINKS, SHARED_LINKS } from "@/utils/general";
import { AiTwotonePushpin as IoPin } from "react-icons/ai";
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
                courseImage={<CourseImage image={IMG_LINKS.IT_COURSE} />}
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
          rightChildren={[
            <div key="placeholder" style={{ width: "26rem" }}></div>,
          ]}
        />
      </PaddingWrapper>
    </section>
  );
}

function TechMobile() {
  return (
    <section className={styles.course_container}>
      <CourseImage image={IMG_LINKS.IT_COURSE} aria-label="IT английский" />
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
        Подойдет тем кто работает или еще учится в сфере айти и хочет
        трудоустроиться в международную компанию удаленно, релоцироваться и
        найти работу заграницей или же обучаться на англоязычных IT курсах.
      </CourseIntro>
    </>
  );
}
function TechCourseEnroll() {
  return (
    <>
      <CoursePrice
        price={3000}
        clarification="за 1 час индивидуального занятия"
      />
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
          {COURSE_CONTENTS.map((item) => (
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
          Занятия включают в себя не только основы английского языка, но и
          фокусируются на развитии навыков, необходимых для успешной карьеры в
          сфере IT, таких как письменная и устная коммуникация, общение с
          коллегами и клиентами на английском языке.
        </CourseParagraph>
        <CourseParagraph>
          Программа может редактироваться под индивидуальные запросы студента.
        </CourseParagraph>
        <CourseParagraph>
          <h3 className="my-3">Грамматика, включенная в курс:</h3>
          <ul className={styles.general_course_description_bulletpoints}>
            {COURSE_DESC_BP.map((item) => (
              <li key={item.title}>
                <span>{item.icon({})}</span>
                {item.title}
              </li>
            ))}
          </ul>
        </CourseParagraph>
        <CourseParagraph>
          За время прохождения программы вы{" "}
          <b>гарантированно преодолеете языковой барьер </b>, так как одной из
          главных целей программы является развитие коммуникативных навыков.
        </CourseParagraph>
        <CourseParagraph>
          Весь материал размещен на интерактивной платформе, что позволяет
          сделать задания максимально разнообразными. Домашнее задание
          выполняется также на ней.
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
        Необходимый уровень для старта уверенный А2-начальный В1 (программа
        также подойдет и для более продвинутых уровней) проверить уровень можно{" "}
        <ReferenceLink href={SHARED_LINKS.ENGLISH_LEVEL_TEST}>
          здесь
        </ReferenceLink>
        .
      </li>
      <li>
        Перед началом занятий проводится бесплатная консультация (15-20 минут)
        для знакомства и подтверждения уровня.{" "}
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

var COURSE_DESC_BP = [
  {
    title: "Present simple",
    icon: IoPin,
  },
  {
    title: "Present Continuous",
    icon: IoPin,
  },
  {
    title: "Past Simple",
    icon: IoPin,
  },
  {
    title: "Present Perfect",
    icon: IoPin,
  },
  {
    title: "Future Simple",
    icon: IoPin,
  },
  {
    title: "To be going to",
    icon: IoPin,
  },
  {
    title: "Comparatives vs Superlatives",
    icon: IoPin,
  },
  {
    title: "Quantifiers",
    icon: IoPin,
  },
  {
    title: "Passive voice",
    icon: IoPin,
  },
  {
    title: "Modal verbs",
    icon: IoPin,
  },
  {
    title: "First and second conditional",
    icon: IoPin,
  },
  {
    title: "Articles",
    icon: IoPin,
  },
];
