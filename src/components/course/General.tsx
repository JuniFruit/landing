import React, { FC } from "react";
import styles from "./Course.module.scss";
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

import { IMG_LINKS } from "@/utils/general";
import { BlockWrapper, BoxSolid, PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { EnrollBtn, ReferenceLink } from "@/ui/buttons/Buttons";
import { useIsMobile } from "@/hooks/useIsMobile";

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
            leftChildren={[<GeneralCourseHeading />]}
            rightChildren={[
              <CourseFloatingBox courseImage={<CourseImage image={IMG_LINKS.AVATAR} />}>
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
          leftChildren={[<GeneralCourseLearn />, <GeneralCourseDescription />]}
          rightChildren={[
            <div style={{ width: "26rem", zIndex: -10, position: "relative" }}></div>,
          ]}
        />
      </PaddingWrapper>
    </section>
  );
}

function GeneralMobile() {
  return (
    <section className={styles.course_container}>
      <CourseImage image={IMG_LINKS.AVATAR} />
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
      <CourseHeading title="Общий Английский" />
      <CourseIntro>
        Научись читать, говорить, слушать и мыслить на самом популярном международном языке в мире
      </CourseIntro>
    </>
  );
}

function GeneralCourseEnroll() {
  return (
    <>
      <CoursePrice price={25} clarification="за 1 час индивидуального занятия" />
      <CoursePrice price={20} clarification="за 1 час занятия в паре" />
      <EnrollBtn>Записаться</EnrollBtn>
    </>
  );
}

function GeneralCourseLearn() {
  return (
    <BoxSolid>
      <CourseContents>
        <ul className={styles.course_contents_list}>
          {COURSE_CONTENTS.map(item => (
            <ListItem {...item} key={item.title} />
          ))}
        </ul>
      </CourseContents>
    </BoxSolid>
  );
}

function GeneralCourseRequirements() {
  return (
    <>
      <ol className={styles.requirements}>
        <li>
          На данный момент я работаю только с уровнями А2 и выше. Проверить свой уровень можно{" "}
          <ReferenceLink href="google.com">здесь</ReferenceLink>{" "}
        </li>
        <li>
          Перед началом занятий проводится бесплатная консультация (15-20 минут) для знакомства и
          подтверждения уровня.{" "}
        </li>
      </ol>
    </>
  );
}

function GeneralCourseDescription() {
  return (
    <CourseDescription>
      <div className={styles.general_course_description}>
        <CourseParagraph>
          В своей работе за основу я беру учебник, который подходит под ваш уровня\возраст\ цели.
        </CourseParagraph>
        <CourseParagraph>
          Подбираю дополнительные материалы (видео\игры\статьи\рассказы).
        </CourseParagraph>
        <CourseParagraph>
          Часто использую интерактивные платформы edvibe\wordwall\ и т.п.
        </CourseParagraph>
        <CourseParagraph>
          Для большего погружения в язык мои ученики смотрят сериалы на английском с субтитрами и
          читают книги в оригинале.
        </CourseParagraph>
      </div>
    </CourseDescription>
  );
}

export default General;

var COURSE_CONTENTS = [
  {
    title: "Бегло говорить",
    description: "Научу быстро и качественно говорить на уровне С1",
  },
  {
    title: "Воспринимать на слух",
    description:
      "Объяснения на английском, видео материалы, задания на аудирование – все это поможет быстрее развить слух",
  },
  {
    title: "Использовать живые фразы",
    description:
      "Никаких устаревших школьных выражений, только то, что использую носители в живой речи",
  },
  {
    title: "Понимать культуру",
    description: "Вместе с языком, вы научитесь понимать культуру страны и особенности ее жителей",
  },
  {
    title: "Быть в курсе событий",
    description: "Обсуждаем последние новости в мире, делимся мнениями, следим за событиями",
  },
  {
    title: "Смотреть фильмы",
    description:
      "Учиться можно не только на уроке, просматривая фильмы ты быстрее осваиваешь новые слова и фразы",
  },
];
