import { FC } from "react";
import {
  CourseContents,
  CourseFloatingBox,
  CourseHeading,
  CourseImage,
  CourseInfoBox,
  CourseIntro,
  CourseLargeLayout,
  CourseParagraph,
  CoursePrice,
  CourseSectionHeading,
  ListItem,
} from "./Shared";
import {
  BlockWrapper,
  BoxSolid,
  PaddingWrapper,
  Phone,
} from "@/ui/wrappers/Wrapper";
import { EnrollBtn, ReferenceLink } from "@/ui/buttons/Buttons";
import { AiTwotonePushpin as IoPin } from "react-icons/ai";
import { IMG_LINKS, SHARED_LINKS } from "@/utils/general";
import styles from "./Course.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";
import Image from "next/image";

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
              </CourseFloatingBox>,
            ]}
          />
        </PaddingWrapper>
      </BlockWrapper>
      <PaddingWrapper key={"padding2"}>
        <CourseLargeLayout
          key="large2"
          leftChildren={[
            <GroupCourseRequirements />,
            <GroupCourseDescription key={"description"} />,
            <GroupCourseLearn key={"learn"} />,
          ]}
          rightChildren={[
            <div key="placeholder" style={{ width: "26rem" }}></div>,
          ]}
        />
        <GroupCourseOffers key={"group_offers"} />,
        <CourseSectionHeading title="Отзывы" classname="text-center" />
        <GroupCourseReviews />
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
        <GroupCourseRequirements />
        <GroupCourseDescription />
        <GroupCourseLearn />
        <GroupCourseOffers isMobile={true} />
        <CourseSectionHeading title="Отзывы" classname="text-center" />
        <GroupCourseReviews />
      </PaddingWrapper>
    </section>
  );
}

function GroupCourseReviews() {
  return (
    <div className="flex justify-center gap-5 flex-col items-center">
      <div className="max-w-2xl">
        <CourseParagraph>
          Курс уже прошли более 70 человек, среди которых были как seniors,
          работающие в крупных компаниях (Озон, Сбер, Яндекс, etc), так и те,
          кто только собирался «входить в айти».
        </CourseParagraph>
      </div>
      <Phone>
        <div className={styles.review_images}>
          {IMG_LINKS.GROUP_COURSE_LESSONS_REVIEWS.map((item) => (
            <div className={styles.review_img_box} key={item}>
              <Image
                src={item}
                key={item}
                width={280}
                height={300}
                alt="Отзыв ученика"
              />
            </div>
          ))}
        </div>
      </Phone>
    </div>
  );
}

function GroupCourseOffers({ isMobile = false }) {
  return (
    <>
      <PaddingWrapper>
        <div
          className={`flex gap-20 ${isMobile ? "flex-col justify-center" : ""}`}
          id="offers"
        >
          <CourseInfoBox>
            <div className="flex flex-col h-full justify-between gap-5">
              <div className="flex flex-col gap-5">
                <h2 className={`${styles.course_info_heading} text-center`}>
                  Тариф <br /> <br />
                  "Self-start"
                </h2>

                <div className={styles.course_info_line}>
                  <b>4</b>-х месячный доступ к интерактивной платформе с
                  материалами и заданиями курса
                </div>
                <div className={styles.course_info_line}>
                  <b>12+</b> видео с разбором грамматических тем
                </div>
                <div className={styles.course_info_line}>
                  обратная связь по устным и письменным заданиям от{" "}
                  <b>куратора</b>
                </div>
                <div className={styles.course_info_line}>
                  обратная связь по резюме, linkedin, cover & follow up letters,
                  ответам на interview questions от <b>куратора</b>
                </div>
                <div className={styles.course_info_line}>
                  дополнительный месяц доступа к курсу, чтобы успеть закончить
                  все задания
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <CoursePrice
                  price={120}
                  secondPrice={12000}
                  classname={styles.price_slashed}
                  clarification="в месяц"
                />
                <EnrollBtn>Записаться</EnrollBtn>
              </div>
            </div>
          </CourseInfoBox>
          <CourseInfoBox>
            <div className="flex flex-col h-full justify-between gap-5">
              <div className="flex flex-col gap-5">
                <h2 className={`${styles.course_info_heading} text-center`}>
                  Тариф <br /> <br />
                  "Mini-groups"
                </h2>

                <div className={styles.course_info_line}>
                  <b>4</b>-х месячный доступ к интерактивной платформе с
                  материалами и заданиями курса
                </div>
                <div className={styles.course_info_line}>
                  <b>
                    32 онлайн занятия (по 60 минут) в мини-группе* (до 6
                    человек) с Анной
                  </b>
                  <p className="text-[0.8rem] mt-2">
                    <i>
                      *группы распределяются по уровню и выбирается наиболее
                      удобное время для всех участников, именно поэтому, перед
                      началом курса проводится вводная консультация для
                      знакомства и подтверждения уровня
                    </i>
                  </p>
                </div>
                <div className={styles.course_info_line}>
                  обратная связь по устным и письменным заданиям от <b>Анны</b>
                </div>
                <div className={styles.course_info_line}>
                  обратная связь по резюме, linkedin, cover & follow up letters,
                  ответам на interview questions от <b>Анны</b>
                </div>
                <div className={styles.course_info_line}>
                  <b>
                    индивидуальное mock interview по окончании курса (30-40
                    минут)
                  </b>
                </div>
                <div className={styles.course_info_line}>
                  дополнительные <b>2 месяца</b> доступа к курсу, чтобы успеть
                  закончить все задания
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <CoursePrice
                  price={200}
                  secondPrice={20000}
                  classname={styles.price_slashed}
                  clarification="в месяц"
                />
                <EnrollBtn>Записаться</EnrollBtn>
              </div>
            </div>
          </CourseInfoBox>
        </div>
      </PaddingWrapper>
    </>
  );
}

function GroupCourseHeading() {
  return (
    <>
      <CourseHeading title="Курс ITalk – английский для айти" key={"IT Eng"} />
      <CourseIntro>
        <i>
          Английский для тех, кто хочет не только пройти собеседование, но и
          комфортно чувствовать себя в дальнейшем общении с англоязычными
          коллегами и клиентами
        </i>
      </CourseIntro>
      <CourseIntro>
        Курс подойдет тем, кто работает (или еще учится) в сфере айти и хочет
        трудоустроиться в международную компанию удаленно, релоцироваться и
        найти работу заграницей или же тем, кто хочет обучаться на англоязычных
        IT курсах
      </CourseIntro>
    </>
  );
}
function GroupCourseEnroll() {
  return (
    <>
      <EnrollBtn target="_self" href="#offers">
        Подробнее о тарифах
      </EnrollBtn>
    </>
  );
}

function GroupCourseLearn() {
  return (
    <BoxSolid>
      <CourseContents>
        <h3 className="font-bold">
          Мы не изучаем узкоспециализированные термины, которые относятся только
          к одной профессии — тем более что многие из них уже давно используются
          в русском языке без перевода (например, «зарелизить», «задеплоить» и
          т.п.). <br />
          <br />
          Вместо этого мы фокусируемся на лексике, которая в целом нужна для
          повседневной коммуникации в рабочей среде и берем ее в контексте
          айтишных тем, такие как:
        </h3>
        <ul className={styles.course_contents_list}>
          {COURSE_CONTENTS_VOCAB.map((item) => (
            <ListItem {...item} key={item.title} />
          ))}
        </ul>
        <h3 className="font-bold">Грамматика, включенная в курс:</h3>
        <ul className={styles.course_contents_list}>
          {COURSE_CONTENTS_GRAMMAR.map((item) => (
            <ListItem {...item} key={item.title} />
          ))}
        </ul>
        <GroupSubDescription />
      </CourseContents>
    </BoxSolid>
  );
}

function GroupCourseDescription() {
  return (
    <div className={styles.general_course_description}>
      {/* <BoxSolid> */}
      {/*   <CourseParagraph> */}
      {/*     <ul className="font-medium flex flex-col gap-2"> */}
      {/*       <li> */}
      {/*         <strong>формат:</strong> 2 занятия (по 60 минут) в неделю в */}
      {/*         мини-группе (до 6 человек) */}
      {/*       </li> */}
      {/*       <li> */}
      {/*         <strong>длительность:</strong> 4 месяца */}
      {/*       </li> */}
      {/*       <li> */}
      {/*         <strong>старт:</strong> 13-14 февраля */}
      {/*       </li> */}
      {/*     </ul> */}
      {/*   </CourseParagraph> */}
      {/* </BoxSolid> */}
      <CourseParagraph>
        <ul className={styles.general_course_description_bulletpoints}>
          <h6 className="my-5 text-[1.2rem]">
            Мы будем комплексно работать над всеми аспектами языка:
          </h6>
          {COURSE_DESC_BP.map((item) => (
            <li key={item.title}>
              <span>{item.icon({})}</span>
              {item.title}
            </li>
          ))}
        </ul>
      </CourseParagraph>
      <h6 className="my-5 font-bold text-[1.2rem]">
        Одни словом, сделаем все, чтобы вы были на 100% готовы к старту вашей
        международной карьеры
      </h6>
      <CourseParagraph></CourseParagraph>
    </div>
  );
}

function GroupCourseRequirements() {
  return (
    <ol className={styles.requirements}>
      <li>Длительность: 4 месяца</li>
      <li>Старт: 8-го сентября</li>
      <li>
        {" "}
        Необходимый уровень для старта - В1 (программа также подойдет и для
        более продвинутых уровней). Проверить уровень можно{" "}
        <ReferenceLink href={SHARED_LINKS.ENGLISH_LEVEL_TEST}>
          здесь
        </ReferenceLink>
        .
      </li>
      <li>
        Стоимость: зависит от тарифa{" "}
        <ReferenceLink target="_self" href="#offers">
          (подробнее)
        </ReferenceLink>
      </li>
    </ol>
  );
}

function GroupSubDescription() {
  return (
    <CourseParagraph>
      <p className="font-medium">
        Обратите внимание: курс рассчитан на студентов, которые уже знакомы с
        основами этих тем. Наша цель — не просто повторить правила,
        <b>
          {" "}
          а научиться грамотно использовать эти конструкции в спонтанной
          речи{" "}
        </b>
      </p>
    </CourseParagraph>
  );
}

export default Group;

var COURSE_DESC_BP = [
  { title: "Пополним словарный запас актуальной IT лексикой", icon: IoPin },
  {
    title:
      "Изучим грамматику с точки зрения ее применения в реальных рабочих ситуациях",
    icon: IoPin,
  },
  {
    title:
      "Научимся грамотно выражать свои мысли и общаться с коллегами и клиентами",
    icon: IoPin,
  },
  {
    title:
      "Составим актуальное резюме, заполним LinkedIn профиль, напишем cover & follow up letters, подготовим 30+ ответов на самые популярные вопросы на собеседовании",
    icon: IoPin,
  },
];

var COURSE_CONTENTS_GRAMMAR = [
  {
    title: "Present Simple VS Present Continuous",
    description: "",
  },
  {
    title: "Past Simple VS Present Perfect",
    description: "",
  },
  {
    title: "Future forms",
    description: "",
  },
  {
    title: "Comparatives & Superlatives",
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
    title: "Conditionals",
    description: "",
  },
  {
    title: "Articles",
    description: "",
  },
];

var COURSE_CONTENTS_VOCAB = [
  {
    title: "Why learn to program",
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
    title: "SDLC & SDLC models",
    description: "",
  },
  {
    title: "Startup culture",
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
  {
    title: "LinkedIn",
    description: "",
  },
  {
    title: "Interview preparation (answering 30+ most common questions)",
    description: "",
  },
  {
    title: "Closing the interview & writing a follow up letter",
    description: "",
  },
];
