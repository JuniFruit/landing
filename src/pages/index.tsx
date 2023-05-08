import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Meta from "@/components/meta/Meta";
import styles from "./page.module.scss";
import Products from "@/components/products/Products";
import { PaddingWrapper } from "@/ui/wrappers/Wrapper";
import { NextPage } from "next";
import { IPageProps } from "@/types/types";
import Reviews from "@/components/reviews/Reviews";

const Home: NextPage<IPageProps> = ({ title, description }) => {
  return (
    <>
      <Meta title={title} description={description} image="" />
      <Hero />
      <About />
      <Products />
      <Reviews />
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
