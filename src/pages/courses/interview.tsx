import Interview from "@/components/course/interview-course/Interview";
import Meta from "@/components/meta/Meta";
import { IPageProps } from "@/types/types";
import { NextPage } from "next";
import React, { FC } from "react";

const InterviewCourse: NextPage<IPageProps> = ({ title, description }) => {
  return (
    <>
      <Meta image="" title={title} description={description} />
      <Interview />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      title: "Подготовка к собеседованию",
      description: "",
    },
  };
};

export default InterviewCourse;
