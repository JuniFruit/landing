import { FC } from "react";
import {
  CourseContents,
  CourseDescription,
  CourseHeading,
  CourseImage,
  CourseIntro,
  CourseParagraph,
  CoursePrice,
  ListItem,
  Spoiler,
} from "./Shared";
import { BoxSolid, PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { EnrollBtn } from "@/ui/buttons/Buttons";
import { IMG_LINKS } from "@/utils/general";
import styles from "./Course.module.scss";

const Tech: FC = () => {
  return (
    <section className={styles.course_container}>
      <CourseImage src={IMG_LINKS.AVATAR} width={150} height={200} alt="IT английский" />
      <PaddingWrapper>
        <CourseHeading title="IT Английский" />
        <CourseIntro>
          Подойдет тем кто работает или еще учится в сфере айти и хочет трудоустроиться в
          международную компанию удаленно, релоцироваться и найти работу заграницей или же обучаться
          на англоязычных IT курсах.
        </CourseIntro>
        <CoursePrice price={30} clarification="за 1 час индивидуального занятия" />
        <EnrollBtn>Записаться</EnrollBtn>
        <BoxSolid>
          <CourseContents>
            <ul className={styles.course_contents_list}>
              {COURSE_CONTENTS.map(item => (
                <ListItem {...item} key={item.title} />
              ))}
            </ul>
          </CourseContents>
        </BoxSolid>
        <CourseDescription>
          <div className={styles.general_course_description}>
            <CourseParagraph>
              Занятия включают в себя не только основы английского языка, но и фокусируются на
              развитии навыков, необходимых для успешной карьеры в сфере IT, таких как письменная и
              устная коммуникация, общение с коллегами и клиентами на английском языке
            </CourseParagraph>
            <CourseParagraph>
              За время прохождения программы вы гарантированно преодолеете языковой барьер, так как
              одной из главных целей программы является развитие коммуникативных навыков.
            </CourseParagraph>
            <CourseParagraph>
              Весь материал размещен на интерактивной платформе, что позволяет сделать задания
              максимально разнообразными.
            </CourseParagraph>
            <CourseParagraph>
              Домашнее задание выполняется также на ней. подготовка к собеседованию{" "}
            </CourseParagraph>
          </div>
        </CourseDescription>
        <Spoiler title="Требования" isInitOpen={true}>
          <ol className={styles.requirements}>
            <li>Необходим уверенный А2 или начальный В1 уровень </li>
            <li>
              Перед началом занятий проводится бесплатная консультация (15-20 минут) для знакомства
              и подтверждения уровня.{" "}
            </li>
          </ol>
        </Spoiler>
      </PaddingWrapper>
    </section>
  );
};

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
