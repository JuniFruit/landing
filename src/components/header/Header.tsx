import React, { FC } from "react";
import styles from "./Header.module.scss";
import { IconButton } from "@/ui/buttons/Buttons";
import { IoMenuOutline } from "react-icons/io5";
import { Avatar } from "@/ui/images/Images";
import { IMG_LINKS } from "@/utils/general";

const Header: FC = () => {
  return (
    <header className={styles.container}>
      <div>
        <Avatar src={IMG_LINKS.AVATAR} width={30} height={30} alt="Анна Русакова" />
      </div>
      <IconButton>
        <IoMenuOutline />
      </IconButton>
    </header>
  );
};

export default Header;
