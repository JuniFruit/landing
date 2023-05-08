import { ImgBg } from "@/ui/images/Images";
import { IMG_LINKS } from "@/utils/general";
import { FC } from "react";
import styles from "./Hero.module.scss";
import { useIsMobile } from "@/hooks/useIsMobile";

const HeroImg = () => {
  const { isMobile } = useIsMobile();
  return (
    <div className={styles.hero_img_container}>
      <ImgBg className={styles.hero_img} aria-label="Анна Русакова" imgSrc={IMG_LINKS.HERO} />
      {!isMobile ? (
        <ImgBg className={styles.hero_img} aria-label="Анна Русакова" imgSrc={IMG_LINKS.AVATAR} />
      ) : null}
    </div>
  );
};

const Hero: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading_wrapper}>
          <div className={styles.heading}>
            <h1>Анна Русакова преподаватель общего и IT английского</h1>
            <p>
              Моя цель - помочь моим студентам преодолеть языковой барьер, достичь своих целей и
              стать частью международного айти сообщества.
            </p>
          </div>
        </div>
        <HeroImg />
      </div>
    </section>
  );
};

export default Hero;
