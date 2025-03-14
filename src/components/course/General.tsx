import { FC } from "react";
import styles from "./Course.module.scss";
import {
  CourseContents,
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

import { useIsMobile } from "@/hooks/useIsMobile";
import { EnrollBtn, ReferenceLink } from "@/ui/buttons/Buttons";
import { BlockWrapper, BoxSolid, PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { IMG_LINKS, SHARED_LINKS } from "@/utils/general";

const General: FC = () => {
  const { isLaptopSmall } = useIsMobile();

  return <>{isLaptopSmall ? <GeneralMobile /> : <GeneralLargeLayout />}</>;
};

function GeneralLargeLayout() {
  return (
    <section className={styles.course_container}>
      <BlockWrapper className="bg-analagous-2 ">
        <PaddingWrapper>
          <CourseLargeLayout
            key="5"
            leftChildren={[<GeneralCourseHeading key="heading" />]}
            rightChildren={[
              <CourseFloatingBox
                key="floaing"
                courseImage={<CourseImage image={IMG_LINKS.GENERAL_COURSE} />}
              >
                <GeneralCourseEnroll />
                <GeneralCourseRequirements />
              </CourseFloatingBox>,
            ]}
          />
        </PaddingWrapper>
      </BlockWrapper>
      <PaddingWrapper>
        <CourseLargeLayout
          key="3"
          leftChildren={[
            <GeneralCourseLearn key="learn" />,
            <GeneralCourseDescription key="generalDesc" />,
          ]}
          rightChildren={[
            <div
              key="placeholder"
              style={{ width: "26rem", zIndex: -10, position: "relative" }}
            ></div>,
          ]}
        />
      </PaddingWrapper>
    </section>
  );
}

function GeneralMobile() {
  return (
    <section className={styles.course_container}>
      <CourseImage image={IMG_LINKS.GENERAL_COURSE} />
      <PaddingWrapper>
        <GeneralCourseHeading />
        <GeneralCourseEnroll />
        <GeneralCourseLearn />
        <GeneralCourseDescription />
        <Spoiler title="Требования" isInitOpen={true}>
          <GeneralCourseRequirements />
        </Spoiler>
      </PaddingWrapper>
    </section>
  );
}

function GeneralCourseHeading() {
  return (
    <>
      <CourseHeading title="Общий Английский" key={"General eng"} />
      <CourseIntro>
        Научись говорить, слушать и мыслить на самом популярном международном
        языке в мире.
      </CourseIntro>
    </>
  );
}

function GeneralCourseEnroll() {
  return (
    <>
      <CoursePrice price={13} clarification="за урок с человека" />
      <EnrollBtn>Записаться</EnrollBtn>
    </>
  );
}

function GeneralCourseLearn() {
  return (
    <div className={styles.general_course_description}>
      <BoxSolid>
        <CourseParagraph>
          <ul className="font-medium flex flex-col gap-2">
            <li>
              <strong>формат:</strong> 2 занятия (по 60 минут) в неделю в
              мини-группе (до 6 человек)
            </li>
            <li>
              <strong>длительность:</strong> 4 месяца
            </li>
            <li>
              <strong>старт:</strong> сентябрь
            </li>
          </ul>
        </CourseParagraph>
      </BoxSolid>
      <BoxSolid>
        <CourseContents>
          <ul className={styles.course_contents_list}>
            {COURSE_CONTENTS.map((item) => (
              <ListItem {...item} key={item.title} />
            ))}
          </ul>
        </CourseContents>
      </BoxSolid>
    </div>
  );
}

function GeneralCourseRequirements() {
  return (
    <>
      <ol className={styles.requirements}>
        <li>
          На данный момент идет набор в группы уровней А2, В1 и В1+. Проверить
          свой уровень можно{" "}
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
    </>
  );
}

function GeneralCourseDescription() {
  return (
    <CourseParagraph>
      <p className="font-medium">
        Весь материал размещен на интерактивной платформе, доступ к которой
        предоставляется 24/7. Домашнее задание также размещено на платформе,
        тестовые упражнения проверяются автоматически, а задания на письмо и
        говорение присылаются в телеграме и проверяются лично мной.
      </p>
    </CourseParagraph>
  );
}

export default General;

var COURSE_CONTENTS = [
  {
    title: "Бегло говорить",
    description:
      "Научимся грамотно формулировать свои мысли и преодолеем языковой барьер",
  },
  {
    title: "Воспринимать на слух",
    description:
      "Объяснения на английском, видео материалы, задания на аудирование – все это поможет быстро развить понимание на слух",
  },
  {
    title: "Использовать живые фразы",
    description:
      "Никаких устаревших школьных выражений, только то, что использую носители в живой речи",
  },
  {
    title: "Понимать культуру",
    description:
      "Вместе с языком, вы научитесь понимать культуру англоговорящих стран и особенности ее жителей",
  },
  {
    title: "Быть в курсе событий",
    description:
      "Обсуждаем последние новости в мире, делимся мнениями, следим за событиями",
  },
  {
    title: "Смотреть фильмы и читать книги в оригинале",
    description:
      "Учиться можно не только на уроке, как эффективно работать с аутентичными материалами - расскажу на бесплатной консультации",
  },
];
