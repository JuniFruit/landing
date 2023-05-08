import { FC } from "react";
import { IImageProps } from "./Images.interface";
import styles from "./Images.module.scss";

const ImgBg: FC<IImageProps> = ({ imgSrc, ...rest }) => {
  return (
    <div {...rest} style={{ ...rest.style, backgroundImage: `url(${imgSrc})` }} role="img"></div>
  );
};

const Avatar: FC<IImageProps> = ({ imgSrc, ...rest }) => {
  return (
    <div
      {...rest}
      className={styles.avatar}
      style={{ ...rest.style, backgroundImage: `url(${imgSrc})` }}
      role="img"
    ></div>
  );
};

export { Avatar, ImgBg };
