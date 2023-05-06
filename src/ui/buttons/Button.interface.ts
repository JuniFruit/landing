import { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

export type ISocialLink = AnchorHTMLAttributes<HTMLAnchorElement>;
export type IBtn = ButtonHTMLAttributes<HTMLButtonElement>;
export type INavLink = {
  title: string;
  icon: IconType;
} & LinkProps;
