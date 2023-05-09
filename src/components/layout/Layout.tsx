import Header from "@/components/header/Header";
import styles from "./Layout.module.scss";
import { FC, PropsWithChildren } from "react";
import Footer from "../footer/Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className={styles.page_wrapper}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
