import Tech from "@/components/course/Tech";
import Meta from "@/components/meta/Meta";
import { IPageProps } from "@/types/types";
import { IMG_LINKS } from "@/utils/general";
import { NextPage } from "next";

const TechCourse: NextPage<IPageProps> = ({ title, description, image }) => {
  return (
    <>
      <Meta title={title} description={description} image={image} />
      <Tech />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      title: "Уроки IT английского",
      description:
        "Научимся письменной и устной коммуникации с использованием терминологии из вашей сферы деятельности.",
      image: IMG_LINKS.IT_COURSE_PREVIEW,
    },
  };
};

export default TechCourse;
