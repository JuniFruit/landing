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
      title: "Анна Русакова - уроки IT английского",
      description:
        "Описание программы созданной специально для IT специалистов, которые хотят устроится в международную компанию или же повышать квалификацию на зарубежных курсах",
      image: IMG_LINKS.IT_COURSE_PREVIEW,
    },
  };
};

export default TechCourse;
