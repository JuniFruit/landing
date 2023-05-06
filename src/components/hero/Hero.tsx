import { ImgWithFallback } from "@/ui/images/Images";
import { IMG_LINKS } from "@/utils/general";
import { FC } from "react";
import styles from "./Hero.module.scss";
import { Box } from "../misc/Miscs";
import { GiScrollUnfurled } from "react-icons/gi";
import { IoReceiptOutline } from "react-icons/io5";

const HeroImg: FC = () => {
  return (
    <div className={styles.hero_img}>
      <ImgWithFallback src={IMG_LINKS.HERO} width={150} height={100} alt="Анна Русакова" />
    </div>
  );
};

const Hero: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1>Анна Русакова - </h1>
          <h2>Преподаватель общего и IT английского </h2>
        </div>
        <HeroImg />

        <div className={styles.info_boxes_right}>
          <div>
            <Box title="TESOL Certificate" icon={GiScrollUnfurled} />
            <Box title="3+ years experience" icon={IoReceiptOutline} />
          </div>
        </div>
      </div>
      <div className={styles.subhero}>
        <p>
          <span>Моя цель -</span>
          помочь моим студентам преодолеть языковой барьер, достичь своих целей и стать частью
          международного айти сообщества.
        </p>
      </div>
    </section>
  );
};

export default Hero;
