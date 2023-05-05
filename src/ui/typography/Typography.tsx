import React, { FC, PropsWithChildren } from "react";
import { ISectionHeading } from "./Typography.interface";
import styles from "./Typography.module.scss";

const SectionHeading: FC<PropsWithChildren<ISectionHeading>> = ({ children, ...rest }) => {
  return (
    <h2 {...rest} className={styles.section_heading}>
      {children}
    </h2>
  );
};

export { SectionHeading };
