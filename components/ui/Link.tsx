import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { type LinkProps } from "@/types/index";

export function Link(props: LinkProps) {
  const { target, ...rest } = props;
  return (
    <NextLink
      {...rest}
      className={cn(
        "duration-600 underline-offset-4 transition ease-in-out ",
        props.className
      )}
      title={props.title}
      // is target true so _black else undefined
      target={target ? "_blank" : undefined}
      rel={target ? "noopener noreferrer" : undefined}
    >
      {props.children}
    </NextLink>
  );
}
