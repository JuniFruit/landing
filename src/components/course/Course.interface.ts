import { IImageProps } from "@/ui/images/Images.interface";
import { ImageProps } from "next/image";
import { AllHTMLAttributes } from "react";

export type ICourseImage = { image: IImageProps["imgSrc"] };

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

export type IFloatingBox = {
  courseImage: JSX.Element;
};

export type ICourseLargeLayout = {
  leftChildren: JSX.Element[];
  rightChildren: JSX.Element[];
};
