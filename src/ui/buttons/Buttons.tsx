import { FC, MouseEventHandler, PropsWithChildren } from "react";
import { IBtn, INavLink, ISocialLink } from "./Button.interface";
import styles from "./Buttons.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoArrowUp } from "react-icons/io5";

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

const NavLink: FC<INavLink> = ({ title, icon, ...rest }) => {
  const router = useRouter();
  return (
    <Link
      {...rest}
      className={
        rest.href === router.asPath
          ? `${styles.header_active} ${styles.headerLink_wrapper}`
          : `${styles.headerLink_wrapper}`
      }
    >
      <span>{icon({})}</span>
      <p>{title}</p>
    </Link>
  );
};

export const ScrollTop: FC<IBtn> = props => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    !!props.onClick ? props.onClick(e) : null;
    window.scrollTo(0, 0);
  };

  return (
    <button {...props} onClick={handleClick} className={styles.scrollTop}>
      <span>Наверх</span>

      <IoArrowUp />
    </button>
  );
};

export { ReferenceLink, EnrollBtn, SocialLink, IconButton, NavLink };
