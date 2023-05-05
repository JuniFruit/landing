import { FC, PropsWithChildren } from "react";
import styles from "./Wrappers.module.scss";
const BoxSolid: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.box_solid}>{children}</div>;
};

const PaddingWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.padding_wrapper}>{children}</div>;
};

export { BoxSolid, PaddingWrapper };
