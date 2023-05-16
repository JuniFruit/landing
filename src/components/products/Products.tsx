import { SectionHeading } from "@/ui/typography/Typography";
import { BlockWrapper, PaddingWrapper } from "@/ui/wrappers/Wrapper";
import Link, { LinkProps } from "next/link";
import { FC } from "react";
import styles from "./Products.module.scss";

const data = [
  { href: "/courses/general" },
  { href: "/courses/tech" },
  { href: "/courses/interview" },
];

type ICourseLink = LinkProps;

const CourseLink: FC<ICourseLink> = ({ ...rest }) => {
  return (
    <Link {...rest} className={styles.course_link}>
      Подробности
    </Link>
  );
};

const Products: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.grouping}>
        <BlockWrapper className={styles.general_english_wrapper}>
          <PaddingWrapper>
            <div className={styles.general_body_container}>
              <div className={styles.product_heading}>
                <SectionHeading>Общий Английский</SectionHeading>
                <h3>
                  Для уровней <span>A1 и выше</span>
                </h3>
              </div>
              <p>
                Я структурирую материал таким образом, чтобы студент как можно быстрее достиг целей
                и мог эффективно использовать полученные знания самостоятельно.
              </p>
            </div>
            <div className={styles.link_container}>
              <CourseLink {...data[0]} />
            </div>
          </PaddingWrapper>
        </BlockWrapper>
        <BlockWrapper className={styles.it_english_wrapper}>
          <PaddingWrapper>
            <div className={styles.it_body_container}>
              <div className={styles.product_heading}>
                <SectionHeading>IT Английский</SectionHeading>
                <h3>
                  Для уровней <span>A2 и выше</span>
                </h3>
              </div>
              <p>
                Программа подойдет вам, если вы работаете или еще учитесь в сфере айти и хотите
                трудоустроиться в международную компанию удаленно или релоцироваться и найти работу
                заграницей.
              </p>
            </div>
            <div className={styles.link_container}>
              <CourseLink {...data[1]} />
            </div>
          </PaddingWrapper>
        </BlockWrapper>
      </div>

      <BlockWrapper className={styles.interview_wrapper}>
        <PaddingWrapper>
          <div className={styles.interview_body_container}>
            <div className={styles.product_heading}>
              <SectionHeading>Подготовка к собеседованию</SectionHeading>
              <h3>
                Для уровней <span>A1 и выше</span>
              </h3>
            </div>
            <p>
              Узнаете, как грамотно составить резюме, правильно отвечать на tricky questions,
              подготовиться к техническому интервью и в целом стать увереннее в своем английском.
            </p>
          </div>
          <div className={styles.link_container}>
            <CourseLink {...data[2]} />
          </div>
        </PaddingWrapper>
        <div className={styles.bg_svg_container}>
          <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {" "}
            <defs>
              {" "}
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                {" "}
                <stop id="stop1" stopColor="rgba(0, 0, 0, 1)" offset="0%"></stop>{" "}
                <stop id="stop2" stopColor="rgba(0, 0, 0, 0.99)" offset="100%"></stop>{" "}
              </linearGradient>{" "}
            </defs>{" "}
            <path
              fill="none"
              d="M13.9,-23.7C14.7,-23.7,9.7,-13.2,7.6,-7.5C5.5,-1.8,6.3,-0.9,9.3,1.7C12.2,4.3,17.2,8.6,16.1,8.6C14.9,8.7,7.6,4.6,3.9,8.7C0.2,12.8,0.1,25.2,-2,28.6C-4,31.9,-8,26.4,-14.6,23.9C-21.1,21.4,-30.2,22,-32.5,18.6C-34.9,15.1,-30.6,7.5,-25.3,3.1C-19.9,-1.3,-13.4,-2.7,-11.3,-6.6C-9.2,-10.6,-11.5,-17.2,-10.3,-17.1C-9.2,-16.9,-4.6,-10,1,-11.7C6.6,-13.4,13.2,-23.8,13.9,-23.7Z"
              width="100%"
              height="100%"
              transform="translate(50 50)"
              strokeWidth="1"
              stroke="url(#sw-gradient)"
            ></path>{" "}
          </svg>
        </div>
      </BlockWrapper>
      <div className={styles.bg_rotated}>
        <h2>Занятия</h2>
      </div>
    </section>
  );
};

export default Products;
