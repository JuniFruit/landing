import General from "@/components/course/General";
import Meta from "@/components/meta/Meta";
import { IPageProps } from "@/types/types";
import { NextPage } from "next";

const GeneralCourse: NextPage<IPageProps> = ({ title, description }) => {
  return (
    <>
      <Meta title={title} description={description} image="" />
      <General />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      title: "Общий английский",
      description: "",
    },
  };
};

export default GeneralCourse;
