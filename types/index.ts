import { LinkProps as NextLinkProps } from "next/link";
import { ReactNode } from "react";

export type Product = {
  id?: string;
  productId: string;
  name: string;
  description: string;
  price: number;
  ratings: number;
  discount: number;
  image: string;
  category: string;
  company: string;
  addedBy: string;
  createdAt: string;
  updatedAt: string;
};

export type socialsProps = {
  href: string;
  label: string;
  ariaLabel: string;
  title: string;
  className?: string;
  icon: React.ReactNode;
  private?: boolean;
};

export type LinkProps = {
  children: ReactNode;
  className?: string;
  target?: boolean;
  title?: string;
} & NextLinkProps;

export type SpotlightProps = {
  children: ReactNode | ReactNode[];
  size?: number /**(px) */;
  strength?: number /**(0-100) */;
  color?: string /**(rgba) */;
  className?: string;
};

export type NoteProps = {
  description: string;
  note?: string;
  message?: string;
  button?: string;
  className?: string;
  href?: any;
};
