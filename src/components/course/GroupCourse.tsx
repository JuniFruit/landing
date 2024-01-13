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
import { AiTwotonePushpin as IoPin } from "react-icons/ai";
import { IMG_LINKS, SHARED_LINKS } from "@/utils/general";
import styles from "./Course.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";

const Group: FC = () => {
  const { isLaptopSmall } = useIsMobile();

  return <>{isLaptopSmall ? <GroupMobile /> : <GroupLargeLayout />}</>;
};

function GroupLargeLayout() {
  return (
    <section className={styles.course_container}>
      <BlockWrapper className="bg-analagous-2 max-h-92">
        <PaddingWrapper key={"padding1"}>
          <CourseLargeLayout
            key="large1"
            leftChildren={[<GroupCourseHeading key={"heading"} />]}
            rightChildren={[
              <CourseFloatingBox
                key={"floating"}
                courseImage={<CourseImage image={IMG_LINKS.GROUP_COURSE} />}
              >
                <GroupCourseEnroll />
                <GroupCourseRequirements />
              </CourseFloatingBox>,
            ]}
          />
        </PaddingWrapper>
      </BlockWrapper>
      <PaddingWrapper key={"padding2"}>
        <CourseLargeLayout
          key="large2"
          leftChildren={[
            <GroupCourseDescription key={"description"} />,
            <GroupCourseLearn key={"learn"} />,
            <GroupSubDescription />,
          ]}
          rightChildren={[<div key="placeholder" style={{ width: "26rem" }}></div>]}
        />
      </PaddingWrapper>
    </section>
  );
}

function GroupMobile() {
  return (
    <section className={styles.course_container}>
      <CourseImage image={IMG_LINKS.GROUP_COURSE} aria-label="IT английский" />
      <PaddingWrapper>
        <GroupCourseHeading />
        <GroupCourseEnroll />
        <GroupCourseDescription />
        <GroupCourseLearn />
        <GroupSubDescription />
        <Spoiler title="Требования" isInitOpen={true}>
          <GroupCourseRequirements />
        </Spoiler>
      </PaddingWrapper>
    </section>
  );
}

function GroupCourseHeading() {
  return (
    <>
      <CourseHeading title="Курс ITalk – английский для айти" key={"IT Eng"} />
      <CourseIntro>
        Подойдет тем, кто работает или еще учится в сфере айти и хочет трудоустроиться в
        международную компанию удаленно, релоцироваться и найти работу заграницей или же обучаться
        на англоязычных IT курсах.
      </CourseIntro>
    </>
  );
}
function GroupCourseEnroll() {
  return (
    <>
      <CoursePrice price={120} clarification="в месяц" />
      <EnrollBtn>Записаться</EnrollBtn>
    </>
  );
}

function GroupCourseLearn() {
  return (
    <BoxSolid>
      <CourseContents heading="Что входит в курс">
        <h3 className="font-bold">Лексические темы:</h3>
        <ul className={styles.course_contents_list}>
          {COURSE_CONTENTS_VOCAB.map(item => (
            <ListItem {...item} key={item.title} />
          ))}
        </ul>
        <h3 className="font-bold">Грамматические темы:</h3>
        <ul className={styles.course_contents_list}>
          {COURSE_CONTENTS_GRAMMAR.map(item => (
            <ListItem {...item} key={item.title} />
          ))}
        </ul>
      </CourseContents>
    </BoxSolid>
  );
}

function GroupCourseDescription() {
  return (
    <div className={styles.general_course_description}>
      <BoxSolid>
        <CourseParagraph>
          <ul className="font-medium flex flex-col gap-2">
            <li>
              <strong>формат:</strong> 2 занятия (по 60 минут) в неделю в мини-группе (до 6 человек)
            </li>
            <li>
              <strong>длительность:</strong> 4 месяца
            </li>
            <li>
              <strong>старт:</strong> 13-14 февраля
            </li>
          </ul>
        </CourseParagraph>
      </BoxSolid>
      <CourseParagraph>
        <ul className={styles.general_course_description_bulletpoints}>
          {COURSE_DESC_BP.map(item => (
            <li key={item.title}>
              <span>{item.icon({})}</span>
              {item.title}
            </li>
          ))}
        </ul>
      </CourseParagraph>
    </div>
  );
}

function GroupCourseRequirements() {
  return (
    <ol className={styles.requirements}>
      <li>
        {" "}
        Необходимый уровень для старта уверенный А2-начальный В1 (программа также подойдет и для
        более продвинутых уровней). Проверить уровень можно{" "}
        <ReferenceLink href={SHARED_LINKS.ENGLISH_LEVEL_TEST}>здесь</ReferenceLink>.
      </li>
      <li>
        Перед началом занятий проводится бесплатная консультация (15-20 минут) для знакомства и
        подтверждения уровня. На ней я подробнее расскажу о курсе, покажу материал и платформу.
      </li>
    </ol>
  );
}

function GroupSubDescription() {
  return (
    <CourseParagraph>
      <p className="font-medium">
        Весь материал размещен на интерактивной платформе, доступ к которой предоставляется 24/7.
        Домашнее задание также размещено на платформе, тестовые упражнения проверяются
        автоматически, а задания на письмо и говорение присылаются в телеграме и проверяются лично
        мной.
      </p>
    </CourseParagraph>
  );
}

export default Group;

var COURSE_DESC_BP = [
  { title: "Мы будем комплексно работать над всеми аспектами языка", icon: IoPin },
  { title: "Пополним словарный запас актуальной IT лексикой", icon: IoPin },
  {
    title: "Изучим грамматику с точки зрения ее применения в реальных рабочих ситуациях",
    icon: IoPin,
  },
  {
    title: "Научимся грамотно выражать свои мысли и общаться с коллегами и клиентами",
    icon: IoPin,
  },
  {
    title:
      "Составим актуальное резюме, напишем cover & follow up letters, подготовимся к собеседованию",
    icon: IoPin,
  },
];

var COURSE_CONTENTS_GRAMMAR = [
  {
    title: "Present simple",
    description: "",
  },
  {
    title: "Present Continuous",
    description: "",
  },
  {
    title: "Past Simple",
    description: "",
  },
  {
    title: "Present Perfect",
    description: "",
  },
  {
    title: "Future Simple",
    description: "",
  },
  {
    title: "To be going to",
    description: "",
  },
  {
    title: "Comparatives vs Superlatives",
    description: "",
  },
  {
    title: "Quantifiers",
    description: "",
  },
  {
    title: "Passive voice",
    description: "",
  },
  {
    title: "Modal verbs",
    description: "",
  },
  {
    title: "First and second conditional",
    description: "",
  },
  {
    title: "Articles",
    description: "",
  },
];

var COURSE_CONTENTS_VOCAB = [
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
  {
    title: "Writing elevator pitch, CV & cover letter",
    description: "",
  },
  {
    title: "Interview preparation",
    description: "",
  },
];
