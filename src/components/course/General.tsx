import React, { FC } from "react";
import styles from "./Course.module.scss";
import {
  CourseContents,
  CourseDescription,
  CourseHeading,
  CourseImage,
  CourseIntro,
  CoursePrice,
  ListItem,
  Spoiler,
} from "./Shared";
import { IMG_LINKS } from "@/utils/general";
import { BoxSolid, PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { EnrollBtn, ReferenceLink } from "@/ui/buttons/Buttons";

const COURSE_CONTENTS = [
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

const General: FC = () => {
  return (
    <section className={styles.course_container}>
      <CourseImage src={IMG_LINKS.AVATAR} width={150} height={200} alt="Общий английский" />
      <PaddingWrapper>
        <CourseHeading title="Общий Английский" />
        <CourseIntro text="Научись читать, говорить, слушать и мыслить на самом популярном международном языке в мире" />
        <CoursePrice price={25} clarification="за 1 час индивидуального занятия" />
        <CoursePrice price={20} clarification="за 1 час занятия в паре" />
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
            <p>
              В своей работе за основу я беру учебник, который подходит под ваш уровня\возраст\
              цели.
            </p>
            <p>Подбираю дополнительные материалы (видео\игры\статьи\рассказы).</p>
            <p>Часто использую интерактивные платформы edvibe\wordwall\ и т.п.</p>
            <p>
              Для большего погружения в язык мои ученики смотрят сериалы на английском с субтитрами
              и читают книги в оригинале.
            </p>
          </div>
        </CourseDescription>
        <Spoiler>
          <ol className={styles.requirements}>
            <li>
              На данный момент я работаю только с уровнями А2 и выше. Проверить свой уровень можно{" "}
              <ReferenceLink href="google.com">здесь</ReferenceLink>{" "}
            </li>
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

export default General;
