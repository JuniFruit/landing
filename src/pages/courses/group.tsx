import GroupCoursePage from "@/components/course/GroupCourse";
import Meta from "@/components/meta/Meta";
import { IPageProps } from "@/types/types";
import { IMG_LINKS } from "@/utils/general";
import { NextPage } from "next";

const GroupCourse: NextPage<IPageProps> = ({ title, description, image }) => {
  return (
    <>
      <Meta title={title} description={description} image={image} />
      <GroupCoursePage />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      title: "Курс ITALK в мини-группах",
      description:
        "Изучим универсальные темы для работы в IT индустрии, избавимся от языкового барьера и подготовимся к интервью.",
      image: IMG_LINKS.GROUP_COURSE,
    },
  };
};

export default GroupCourse;
