import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Meta from "@/components/meta/Meta";
import styles from "./page.module.scss";
import Products from "@/components/products/Products";
import { PaddingWrapper } from "@/ui/wrappers/Wrapper";
const Home = () => {
  return (
    <>
      <Meta title="Анна Русакова" image="" />
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

export default Home;
