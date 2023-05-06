import { ImgWithFallback } from "@/ui/images/Images";
import { FC, PropsWithChildren, useState } from "react";
import {
  ICourseHeading,
  ICourseImage,
  ICourseIntro,
  ICoursePrice,
  IListItem,
} from "./Course.interface";
import styles from "./Course.module.scss";
import { IoCafe, IoCaretDown, IoCaretUp, IoCheckmark } from "react-icons/io5";
import { useIntersect } from "@/hooks/useIntersect";
import { getIntersectDefaultOpt } from "@/utils/general";

const CourseImage: FC<ICourseImage> = props => {
  return (
    <div className={styles.img_container}>
      <ImgWithFallback {...props} />
    </div>
  );
};

const CourseIntro: FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.course_intro}>{children}</p>;
};

const ListItem: FC<IListItem> = ({ title, description }) => {
  const { ref, isIntersecting } = useIntersect({ options: getIntersectDefaultOpt(), isOnce: true });

  return (
    <li
      className={`${styles.list_container} ${isIntersecting ? styles.list_container_active : ""}`}
      ref={ref}
    >
      <IoCheckmark />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};
const Spoiler: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <div className={styles.spoiler_container} aria-haspopup={true} aria-expanded={isOpen}>
      <button onClick={handleClick} aria-label={`${!isOpen ? "открыть" : "закрыть"} блок ${title}`}>
        {" "}
        {title} <span>{isOpen ? IoCaretUp({}) : IoCaretDown({})}</span>
      </button>
      <div className={`${styles.spoiler_content} ${isOpen ? styles.spoiler_content_active : ""}`}>
        {children}
      </div>
    </div>
  );
};

const CoursePrice: FC<ICoursePrice> = ({ price, clarification }) => {
  const formater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles.price}>
      <span>{formater.format(price)}</span>
      <p>{clarification}</p>
    </div>
  );
};

const CourseHeading: FC<ICourseHeading> = ({ title, ...rest }) => {
  return (
    <h1 {...rest} className={styles.course_heading}>
      {title}
    </h1>
  );
};

const CourseContents: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.contents}>
      <h2>Чему научитесь</h2>
      {children}
    </div>
  );
};

const CourseDescription: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.contents}>
      <h2>Описание</h2>
      {children}
    </div>
  );
};

const CourseParagraph: FC<PropsWithChildren> = ({ children }) => {
  return <p className={styles.course_p}>{children}</p>;
};

export {
  CourseIntro,
  CoursePrice,
  CourseContents,
  CourseDescription,
  CourseImage,
  ListItem,
  Spoiler,
  CourseHeading,
  CourseParagraph,
};
