import { EnrollBtn } from "@/ui/buttons/Buttons";
import { BoxSolid, PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { FC } from "react";
import styles from "../Course.module.scss";
import { CourseContents, CourseParagraph, CoursePrice, ListItem } from "../Shared";

const UnderLevelInfo: FC = () => {
  return (
    <PaddingWrapper>
      <div className={styles.general_course_description}>
        <CourseParagraph>Если ваш уровень А1 и ниже - </CourseParagraph>
        <CourseParagraph>
          вам еще рановато готовиться к собеседованию и следует подтянуть уровень общего
          английского. Напишите мне, я посоветую вам преподавателя из своей команды.
        </CourseParagraph>
      </div>
    </PaddingWrapper>
  );
};

const IntermediateLevelInfo: FC = () => {
  return (
    <PaddingWrapper>
      <CourseParagraph>
        Я меняю и подстраиваю программу под пожелания и цели каждого отдельного студента.
      </CourseParagraph>
      <CoursePrice price={2500} clarification="за 1 час индивидуального занятия" />

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
      <CourseParagraph>
        Вам подойдет консультация-практикум. Длительность – 2 часа. Перед ее проведением я попрошу
        вас заполнить анкету, чтобы подобрать для вас максимально релевантные материалы.
      </CourseParagraph>
      <CoursePrice price={5000} clarification="за 2 часа индивидуального занятия" />

      <EnrollBtn>Записаться</EnrollBtn>
      <BoxSolid>
        <CourseContents heading="Что входит">
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
    title: "Использовать Basic vocabulary в речи",
    description:
      "Тип занятости - casual work, flexible, nine to five, названия позиций и много другое",
  },
  {
    title: "Использовать Phrasal verbs in business",
    description: "Фразовые глаголы очень популярны среди носителей, особенно в рабочей среде",
  },
  {
    title: "Составлять Elevator pitch",
    description:
      "Короткое выступление, в котором вы излагаете ключевые мысли. Например, кто вы, ваши прошлые достижения и цели на будущее",
  },
  {
    title: "Писать Cover letter",
    description: "У меня есть темплейты для разных специалистов",
  },
  {
    title: "Составлять резюме",
    description:
      "Учимся составлять резюме и использовать классную лексику. Если ваше резюме уже готово - я проверю его и дам рекомендации по улучшению",
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
    title: "Проходить техническое интервью",
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
      "Проходим собеседование с 'подставным' интервьюером (IT специалист с хорошим английским). Делаем разбор ошибок (40 мин)",
  },
  {
    title: "CV",
    description:
      "Проверка CV и сопроводительного письма я проверю его до начала консультации и дам рекомендации по улучшению",
  },
];
