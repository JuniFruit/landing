import { FC, PropsWithChildren } from "react";
import { IIconBtn, ISocialLink } from "./Button.interface";
import styles from "./Buttons.module.scss";

const SocialLink: FC<PropsWithChildren<ISocialLink>> = ({ children, ...rest }) => {
  return (
    <a {...rest} className={styles.social} target="_blank">
      {children}
    </a>
  );
};

const IconButton: FC<PropsWithChildren<IIconBtn>> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={styles.icon_btn}>
      {children}
    </button>
  );
};

export { SocialLink, IconButton };
