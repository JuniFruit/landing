import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Meta from "@/components/meta/Meta";
import Products from "@/components/products/Products";
import Reviews from "@/components/reviews/Reviews";
import { IPageProps } from "@/types/types";
import { IMG_LINKS } from "@/utils/general";
import { NextPage } from "next";
import styles from "../styles/index.module.scss";

const Home: NextPage<IPageProps> = ({ title, description, image }) => {
  return (
    <div className={styles.main_page}>
      <Meta title={title} description={description} image={image} />
      <Hero />
      <About />
      <Products />
      <Reviews />
    </div>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      title: "Анна Русакова - преподаватель общего и IT ангийского",
      description:
        "Преодолей языковой барьер. Прокачай технический английский. Подготовься к собеседованию и получи работу в зарубежной компании.",
      image: IMG_LINKS.PREVIEW,
    },
  };
};

export default Home;
