import Interview from "@/components/course/interview-course/Interview";
import Meta from "@/components/meta/Meta";
import { IPageProps } from "@/types/types";
import { IMG_LINKS } from "@/utils/general";
import { NextPage } from "next";
import React, { FC } from "react";

const InterviewCourse: NextPage<IPageProps> = ({ title, description, image }) => {
  return (
    <>
      <Meta image={image} title={title} description={description} />
      <Interview />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      title: "Анна Русакова - подготовка к собеседованию в международную компанию",
      description:
        "Помощь в составлении резюме, тренировка на постановочных собеседованиях и увелечение шансов кандидата попасть в международную компанию",
      image: IMG_LINKS.AVATAR,
    },
  };
};

export default InterviewCourse;
