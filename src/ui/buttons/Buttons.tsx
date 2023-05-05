import { FC, PropsWithChildren } from "react";
import { IBtn, ISocialLink } from "./Button.interface";
import styles from "./Buttons.module.scss";

const SocialLink: FC<PropsWithChildren<ISocialLink>> = ({ children, ...rest }) => {
  return (
    <a {...rest} className={styles.social} target="_blank">
      {children}
    </a>
  );
};

const IconButton: FC<PropsWithChildren<IBtn>> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.icon_btn}>
      {children}
    </button>
  );
};

const ReferenceLink: FC<PropsWithChildren<ISocialLink>> = ({ children, ...rest }) => {
  return (
    <a {...rest} className={styles.reference} target="_blank">
      {children}
    </a>
  );
};

const EnrollBtn: FC<PropsWithChildren<IBtn>> = ({ children, ...rest }) => {
  return (
    <button className={styles.enroll} {...rest}>
      {children}
    </button>
  );
};

export { ReferenceLink, EnrollBtn, SocialLink, IconButton };
