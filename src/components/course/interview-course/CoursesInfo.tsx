import { EnrollBtn } from "@/ui/buttons/Buttons";
import { BoxSolid, PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { FC } from "react";
import styles from "../Course.module.scss";
import { CourseContents, CourseParagraph, CoursePrice, ListItem } from "../Shared";

const UnderLevelInfo: FC = () => {
  return (
    <PaddingWrapper>
      <div className={styles.general_course_description}>
        <CourseParagraph>Если ваш уровень А1 и ниже.</CourseParagraph>
        <CourseParagraph>
          Вам еще рановато готовиться к собеседованию и следует подтянуть уровень общего
          английского, напишите мне, я посоветую вам преподавателя из своей команды.
        </CourseParagraph>
      </div>
    </PaddingWrapper>
  );
};

const IntermediateLevelInfo: FC = () => {
  return (
    <PaddingWrapper>
      <CourseParagraph>
        Все полезные фишки по IT рекрутингу включены в программу. Я подстраиваюсь под пожелания и
        цели каждого отдельного студента.
      </CourseParagraph>
      <CoursePrice price={30} clarification="за 1 час индивидуального занятия" />

      <EnrollBtn>Записаться</EnrollBtn>
      <BoxSolid>
        <CourseContents>
          <ul className={styles.course_contents_list}>
            {INTERMEDIATE_COURSE_CONTENTS.map(item => (
              <ListItem {...item} key={item.title} />
            ))}
          </ul>
        </CourseContents>
      </BoxSolid>
    </PaddingWrapper>
  );
};

const ProLevelInfo: FC = () => {
  return (
    <PaddingWrapper>
      <CourseParagraph>Вам подойдет консультация-практикум. Длительность – 2 часа.</CourseParagraph>
      <CoursePrice price={60} clarification="за 2 часа индивидуального занятия" />

      <EnrollBtn>Записаться</EnrollBtn>
      <BoxSolid>
        <CourseContents>
          <ul className={styles.course_contents_list}>
            {PRO_COURSE_CONTENTS.map(item => (
              <ListItem {...item} key={item.title} />
            ))}
          </ul>
        </CourseContents>
      </BoxSolid>
    </PaddingWrapper>
  );
};

export { UnderLevelInfo, IntermediateLevelInfo, ProLevelInfo };

var INTERMEDIATE_COURSE_CONTENTS = [
  {
    title: "Basic vocabulary",
    description:
      "Тип занятости - casual work, flexible, nine to five, названия позиций и много другое",
  },
  {
    title: "Phrasal verbs in business",
    description: "Фразовые глаголы очень популярны среди носителей, особенно в рабочей среде",
  },
  {
    title: "Составлять Elevator pitch",
    description: "",
  },
  {
    title: "Писать Cover letter",
    description: "Темплейты для разных специалистов",
  },
  {
    title: "Составлять резюме",
    description:
      "Учимся составлять резюме и использовать классную лексику. Помощь с готовыми CV, которые я только проверяю и даю рекомендации по улучшению",
  },
  {
    title: "Отвечать на вопросы",
    description:
      "Basic questions, tricky questions (вопросы о зарплате, отсутствие карьерного роста или почему у вас пробелы в резюме). Работаем над less common questions и учимся отвечать по методу STAR или CAR ",
  },
  {
    title: "Красиво завершать собеседование",
    description:
      "Разбираем как close the interview (что лучше сказать по завершении и тем самым 'продать' себя компании). Учимся задавать правильные вопросы интервьюеру",
  },
  {
    title: "Писать Follow up letter",
    description:
      "Чтобы еще раз напомнить hr, что мы существуем и подтвердить нашу заинтересованность",
  },
  {
    title: "Проходить тех. интервью",
    description:
      "Практикуем максимально релевантные вопросы для каждого специалиста. На каждый вопрос у меня есть ответ и актуальные статьи",
  },
  {
    title: "Mock interview",
    description:
      "Проведем 3 тренировочных собеседования. на первом - я ваш интервьюер, на втором - мы используем специально подготовленное видео, в качестве интервьера и третий - я приглашаю 'подставного' интервьюера (человека, работающего в сфере IT с хорошим английским)",
  },
];
var PRO_COURSE_CONTENTS = [
  {
    title: "Behavioral questions",
    description: "40 минут практики вопросов о зп, предыдущем опыте и т.п.",
  },
  {
    title: "Technical questions ",
    description:
      "Практикуем максимально релевантные вопросы для каждого специалиста, которые могут быть заданы во время собеседования",
  },
  {
    title: "Mock interview",
    description:
      "Проходим собеседование с 'подставного' интервьюером (IT специалист с хорошим английским). Делаем разбор ошибок",
  },
  {
    title: "CV",
    description: "Проверка вашего резюме и сопроводительного письма, рекомендации по улучшению",
  },
];
