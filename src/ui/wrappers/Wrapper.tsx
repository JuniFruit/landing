import { AllHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./Wrappers.module.scss";
const BoxSolid: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.box_solid}>{children}</div>;
};

const PaddingWrapper: FC<PropsWithChildren<{ className?: string }>> = ({
  className = "",
  children,
}) => {
  return <div className={`${styles.padding_wrapper} ${className}`}>{children}</div>;
};

const BlockWrapper: FC<PropsWithChildren<AllHTMLAttributes<HTMLDivElement["className"]>>> = ({
  children,
  className = "",
}) => {
  return <div className={`${styles.block_wrapper} ${className}`}>{children}</div>;
};

const Phone: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.phone_wrapper}>
      <div className={styles.phone_header}>
        <p>annarus.eng</p>
        <div className={styles.phone_curtain}></div>
        <p>feedback</p>
      </div>
      <div className={styles.phone_children_container}>
        {children}
        <div className={styles.phone_footer}></div>
      </div>
    </div>
  );
};

export { BoxSolid, PaddingWrapper, BlockWrapper, Phone };
