import { FC } from "react";
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
        Научись говорить, слушать и мыслить на самом популярном международном языке в мире.
      </CourseIntro>
    </>
  );
}

function GeneralCourseEnroll() {
  return (
    <>
      <CoursePrice price={2500} clarification="за 1 час индивидуального занятия" />
      <CoursePrice price={1700} clarification="за 1 час занятия в паре" />
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
          <ReferenceLink href={SHARED_LINKS.ENGLISH_LEVEL_TEST}>здесь</ReferenceLink>.
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
          Я преподаю английский используя communicative и student-oriented подходы.
        </CourseParagraph>
        <CourseParagraph>
          В своей работе за основу я беру учебник, который подходит под ваш уровень\возраст\цели и
          <span className="text-accent-600"> редактирую его под вас</span>.
        </CourseParagraph>
        <CourseParagraph>
          Подбираю дополнительные аутентичные материалы (видео\игры\статьи\рассказы) и часто
          использую интерактивные платформы edvibe\wordwall\ и т.п.
        </CourseParagraph>
        <CourseParagraph>
          Для большего погружения в язык мои ученики смотрят сериалы на английском с субтитрами и
          читают книги в оригинале.
        </CourseParagraph>
        <CourseParagraph>
          Домашнее задание присылается мне заранее, поэтому на уроке мы не тратим время на проверку.
        </CourseParagraph>
        <CourseParagraph>
          Я всегда открыта к предложениям/комментариям/изменениям со стороны студента и с
          удовольствием подготовлю уроки на нужные вам темы.
        </CourseParagraph>
      </div>
    </CourseDescription>
  );
}

export default General;

var COURSE_CONTENTS = [
  {
    title: "Бегло говорить",
    description: "Научу быстро и качественно говорить на продинутом уровне",
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
    description: "Вместе с языком, вы научитесь понимать культуру страны и особенности ее жителей",
  },
  {
    title: "Быть в курсе событий",
    description: "Обсуждаем последние новости в мире, делимся мнениями, следим за событиями",
  },
  {
    title: "Смотреть фильмы и читать книги в оригинале",
    description:
      "Учиться можно не только на уроке, как эффективно работать с аутентичными материалами - расскажу на бесплатной консультации",
  },
];
