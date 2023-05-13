import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Meta from "@/components/meta/Meta";
import Products from "@/components/products/Products";
import Reviews from "@/components/reviews/Reviews";
import { IPageProps } from "@/types/types";
import { IMG_LINKS } from "@/utils/general";
import { NextPage } from "next";

const Home: NextPage<IPageProps> = ({ title, description, image }) => {
  return (
    <>
      <Meta title={title} description={description} image={image} />
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
      description:
        "Продвинутые уроки общего и IT английского языка, подготовка к собеседованию в международной компании. Помощь в составлении резюме и многое другое.",
      image: IMG_LINKS.LOGO,
    },
  };
};

export default Home;
