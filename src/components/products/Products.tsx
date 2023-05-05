import { SectionHeading } from "@/ui/typography/Typography";
import { FC } from "react";
import Link, { LinkProps } from "next/link";
import { IoArrowRedoOutline } from "react-icons/io5";
import styles from "./Products.module.scss";

const data = [
  { heading: "Общий Английский", href: "/courses/general" },
  { heading: "IT Английский", href: "/courses/tech" },
  { heading: "Подготовка к собеседованию", href: "/courses/interview" },
];

type ICourseLink = {
  heading: string;
} & LinkProps;

const CourseLink: FC<ICourseLink> = ({ heading, ...rest }) => {
  return (
    <Link {...rest} className={styles.spoiler}>
      {heading}
      <span>
        <IoArrowRedoOutline />
      </span>
    </Link>
  );
};

const Products: FC = () => {
  return (
    <section className={styles.container}>
      <SectionHeading>Занятия</SectionHeading>
      <p>
        Я структурирую материал таким образом, чтобы студент как можно быстрее достиг целей и мог
        эффективно использовать полученные знания самостоятельно
      </p>
      <div className={styles.spoiler_container}>
        {data.map(item => (
          <CourseLink {...item} key={item.heading} />
        ))}
      </div>
    </section>
  );
};

export default Products;
