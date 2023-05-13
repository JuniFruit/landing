import { PaddingWrapper } from "@/ui/wrappers/Wrapper";
import React, { FC } from "react";
import styles from "./Footer.module.scss";
import { ReferenceLink, ScrollTop } from "@/ui/buttons/Buttons";
import { SocialLinks } from "../header/Nav";

const Footer: FC = () => {
  return (
    <footer className={styles.footer_container}>
      <PaddingWrapper>
        <div className={styles.footer_wrapper}>
          <h3>Еще больше полезного</h3>
          <SocialLinks />
          <p>
            По всем вопросам пишите в{" "}
            <ReferenceLink href={"https://t.me/aniutarus"}> Telegram </ReferenceLink>
          </p>
          <h4>Aнна Русакова</h4>
          <h5>преподаватель английского с 3-х летним опытом</h5>
          <ScrollTop />
        </div>
      </PaddingWrapper>
    </footer>
  );
};

export default Footer;
