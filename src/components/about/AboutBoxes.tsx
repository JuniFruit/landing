import { FC } from "react";
import { IconType } from "react-icons";
import styles from "./About.module.scss";
import { useIntersect } from "@/hooks/useIntersect";
import { getIntersectDefaultOpt } from "@/utils/general";

type IBox = {
  title: string;
  description: string;
  icon: IconType;
};

export const Box: FC<IBox> = ({ title, description, icon }) => {
  const { ref, isIntersecting } = useIntersect({ options: getIntersectDefaultOpt(), isOnce: true });

  return (
    <div
      className={`${styles.box_container} ${isIntersecting ? styles.box_visible : ""}`}
      ref={ref}
    >
      <div className={styles.icon_container}>{icon({})}</div>
      <div className={styles.box_body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
