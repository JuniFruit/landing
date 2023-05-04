import Image, { ImageProps } from "next/image";
import { FC } from "react";
import styles from "./Images.module.scss";
import { IMG_LINKS } from "@/utils/general";

const ImgWithFallback: FC<ImageProps> = props => {
  return (
    <Image
      {...props}
      onError={e => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = IMG_LINKS.FALLBACK;
      }}
    />
  );
};

const Avatar: FC<ImageProps> = props => {
  return (
    <div className={styles.avatar}>
      <ImgWithFallback {...props} />;
    </div>
  );
};

export { Avatar, ImgWithFallback };
