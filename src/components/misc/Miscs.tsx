import React, { FC } from "react";
import styles from "./Miscs.module.scss";
import { IBox } from "./Miscs.interface";

const Box: FC<IBox> = ({ title, icon }) => {
  return (
    <div className={styles.box_container}>
      {icon({})}
      <h6>{title}</h6>
    </div>
  );
};

export { Box };
