import { PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { IMG_LINKS, SHARED_LINKS } from "@/utils/general";
import { FC } from "react";
import styles from "../Course.module.scss";
import { CourseHeading, CourseImage, CourseIntro, Spoiler } from "../Shared";
import { IntermediateLevelInfo, ProLevelInfo, UnderLevelInfo } from "./CoursesInfo";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ReferenceLink } from "@/ui/buttons/Buttons";

const Interview: FC = () => {
  const { isMobile } = useIsMobile();

  return (
    <section className={`${styles.course_container} ${styles.interview_course_container}`}>
      <CourseImage
        image={isMobile ? IMG_LINKS.INTERVIEW_COURSE_MOBILE : IMG_LINKS.INTERVIEW_COURSE}
        aria-label="Подготовка к собеседованию"
      />
      <PaddingWrapper>
        <CourseHeading title="Подготовка к собеседованию" />
        <CourseIntro>
          Пошаговый план к получению работы в зарубежной компании. Ниже подробности для каждого
          языкового уровня. Проверить свой уровень можно{" "}
          <ReferenceLink href={SHARED_LINKS.ENGLISH_LEVEL_TEST}>здесь</ReferenceLink>.
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
