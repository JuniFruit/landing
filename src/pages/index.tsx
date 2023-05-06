import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Meta from "@/components/meta/Meta";
import styles from "./page.module.scss";
import Products from "@/components/products/Products";
import { PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { NextPage } from "next";
import { IPageProps } from "@/types/types";

const Home: NextPage<IPageProps> = ({ title, description }) => {
  return (
    <>
      <Meta title={title} description={description} image="" />
      <section className={styles.hero}>
        <Hero />
      </section>
      <section className={styles.main_content}>
        <div className={styles.bg_divider}></div>
        <PaddingWrapper>
          <About />
          <Products />
        </PaddingWrapper>
      </section>
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      title: "Анна Русакова",
      description: "Преподаватель",
    },
  };
};

export default Home;
