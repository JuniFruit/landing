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
                и мог эффективно использовать полученные знания самостоятельно
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
                  Для уровней <span>A1 и выше</span>
                </h3>
              </div>
              <p>
                Я структурирую материал таким образом, чтобы студент как можно быстрее достиг целей
                и мог эффективно использовать полученные знания самостоятельно
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
              Я структурирую материал таким образом, чтобы студент как можно быстрее достиг целей и
              мог эффективно использовать полученные знания самостоятельно
            </p>
          </div>
          <div className={styles.link_container}>
            <CourseLink {...data[2]} />
          </div>
        </PaddingWrapper>
      </BlockWrapper>
      <div className={styles.bg_rotated}>
        <h2>Занятия</h2>
      </div>
    </section>
  );
};

export default Products;
