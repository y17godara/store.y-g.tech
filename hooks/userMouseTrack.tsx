"use client";
import React from "react";

export const useMousePosition = (ref: React.RefObject<HTMLElement>) => {
  const [mousePosition, setMousePosition] = React.useState({
    x: null as null | number,
    y: null as null | number,
  });

  React.useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (ref.current) {
        setMousePosition({
          x: ev.clientX - ref.current!.getBoundingClientRect().left,
          y: ev.clientY - ref.current!.getBoundingClientRect().top,
        });
      }
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [ref]);

  return mousePosition;
};
