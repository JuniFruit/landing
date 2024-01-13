import { useIntersect } from "@/hooks/useIntersect";
import { ImgBg } from "@/ui/images/Images";
import { getIntersectDefaultOpt } from "@/utils/general";
import { FC, PropsWithChildren, useState } from "react";
import { IoCaretDown, IoCaretUp, IoCheckmark } from "react-icons/io5";
import {
  ICourseContents,
  ICourseHeading,
  ICourseImage,
  ICourseLargeLayout,
  ICoursePrice,
  IFloatingBox,
  IListItem,
} from "./Course.interface";
import styles from "./Course.module.scss";

const CourseImage: FC<ICourseImage> = ({ image }) => {
  return <ImgBg className={styles.img_container} aria-label="Логотип курса" imgSrc={image} />;
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
const Spoiler: FC<PropsWithChildren<{ title: string; isInitOpen?: boolean }>> = ({
  children,
  title,
  isInitOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(isInitOpen);

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
  const formater = new Intl.NumberFormat('de-DE', {
    style: "decimal",
    currency: "EUR",
  });

  return (
    <div className={styles.price}>
      <span>{formater.format(price)} €</span>
      <p>{clarification}</p>
    </div>
  );
};

const CourseFloatingBox: FC<PropsWithChildren<IFloatingBox>> = ({ courseImage, children }) => {
  return (
    <div className={styles.floating_box}>
      {courseImage}
      <div className={styles.floating_box_children}>{children}</div>
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

const CourseContents: FC<PropsWithChildren<ICourseContents>> = ({
  children,
  heading = "Чему научитесь",
}) => {
  return (
    <div className={styles.contents}>
      <h2>{heading}</h2>
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

const CourseLargeLayout: FC<ICourseLargeLayout> = ({ leftChildren, rightChildren }) => {
  return (
    <div className={styles.course_large_layout}>
      <div>{leftChildren.map(child => child)}</div>
      {rightChildren.map(child => child)}
    </div>
  );
};

const CourseParagraph: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.course_p}>{children}</div>;
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
  CourseFloatingBox,
  CourseLargeLayout,
};
