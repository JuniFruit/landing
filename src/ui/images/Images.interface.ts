import { AllHTMLAttributes, ImgHTMLAttributes } from "react";

export type IImageProps = {
  imgSrc: string;
} & AllHTMLAttributes<HTMLDivElement>;
