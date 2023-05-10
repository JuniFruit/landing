import { PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { IMG_LINKS } from "@/utils/general";
import { FC } from "react";
import styles from "../Course.module.scss";
import { CourseHeading, CourseImage, CourseIntro, Spoiler } from "../Shared";
import { IntermediateLevelInfo, ProLevelInfo, UnderLevelInfo } from "./CoursesInfo";

const Interview: FC = () => {
  return (
    <section className={`${styles.course_container} ${styles.interview_course_container}`}>
      <CourseImage image={IMG_LINKS.AVATAR} aria-label="Подготовка к собеседованию" />
      <PaddingWrapper>
        <CourseHeading title="Подготовка к собеседованию" />
        <CourseIntro>
          Научись проходить собесодвания на английском и получи работу в зарубежной компании. Ниже
          подробности для каждого языкового уровня.
        </CourseIntro>

        <div className={styles.interview_course_spoilers}>
          <Spoiler title="Для А1">
            <UnderLevelInfo />
          </Spoiler>
          <Spoiler title="Для А2-B1">
            <IntermediateLevelInfo />
          </Spoiler>
          <Spoiler title="Для B1 и выше">
            <ProLevelInfo />
          </Spoiler>
        </div>
      </PaddingWrapper>
    </section>
  );
};

export default Interview;
