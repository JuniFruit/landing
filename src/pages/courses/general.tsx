import General from "@/components/course/General";
import Meta from "@/components/meta/Meta";
import { IPageProps } from "@/types/types";
import { IMG_LINKS } from "@/utils/general";
import { NextPage } from "next";

const GeneralCourse: NextPage<IPageProps> = ({ title, description, image }) => {
  return (
    <>
      <Meta title={title} description={description} image={image} />
      <General />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      title: "Уроки общего английского",
      description:
        "Подробная информация о занятиях общим английским. Описания занятий, программы и требований",
      image: IMG_LINKS.GENERAL_COURSE_PREVIEW,
    },
  };
};

export default GeneralCourse;
