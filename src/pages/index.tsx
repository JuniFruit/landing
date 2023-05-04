import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Meta from "@/components/meta/Meta";
import styles from "./page.module.scss";
const Home = () => {
  return (
    <>
      <Meta title="Анна Русакова" image="" />
      <section className={styles.hero}>
        <Hero />
      </section>
      <section className={styles.main_content}>
        <div className={styles.bg_divider}></div>
        <section className={styles.wrapper}>
          <About />
        </section>
      </section>
    </>
  );
};

export default Home;
