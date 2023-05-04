import { FC } from "react";
import { IconType } from "react-icons";
import styles from "./About.module.scss";

type IBox = {
  title: string;
  description: string;
  icon: IconType;
  color: string;
};

export const Box: FC<IBox> = ({ title, description, icon, color }) => {
  return (
    <div className={styles.box_container}>
      <div className={styles.icon_container}>{icon({})}</div>
      <div className={styles.box_body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
