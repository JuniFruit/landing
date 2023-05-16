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
      title: "Подготовка к собеседованию в международную компанию",
      description:
        "Научимся грамотно отвечать на каверзные вопросы. Подготовимся к техническому интервью. Составим 'продающее' резюме на английском.",
      image: IMG_LINKS.INTERVIEW_PREVIEW,
    },
  };
};

export default InterviewCourse;
