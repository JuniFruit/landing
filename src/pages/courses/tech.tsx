import Tech from "@/components/course/Tech";
import Meta from "@/components/meta/Meta";
import { IPageProps } from "@/types/types";
import { NextPage } from "next";
import React, { FC } from "react";

const TechCourse: NextPage<IPageProps> = ({ title, description }) => {
  return (
    <>
      <Meta title={title} description={description} image="" />
      <Tech />
    </>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      title: "IT английский",
      description: "",
    },
  };
};

export default TechCourse;
