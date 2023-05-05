import { ImageProps } from "next/image";
import { AllHTMLAttributes } from "react";

export type ICourseImage = ImageProps;
export type IListItem = {
  title: string;
  description: string;
};

export type ICourseHeading = {
  title: string;
} & AllHTMLAttributes<HTMLElement>;

export type ICoursePrice = {
  price: number;
  clarification?: string;
};

export type ICourseIntro = {
  text: string;
};
