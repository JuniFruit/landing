import Header from "@/components/header/Header";
import styles from "./Layout.module.scss";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.page_wrapper}>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
