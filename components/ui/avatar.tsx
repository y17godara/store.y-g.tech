import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";

export const UserAvatar = ({
  name,
  image,
  className,
}: {
  name?: string;
  image?: string;
  className?: string;
}) => {
  return (
    <>
      <Avatar className={className}>
        <AvatarImage src={image} />
        {name ? (
          <>
            <AvatarFallback className={className}>
              {name[0].toUpperCase()}
            </AvatarFallback>
          </>
        ) : (
          <>
            <AvatarFallback className={className}>G</AvatarFallback>
          </>
        )}
      </Avatar>
    </>
  );
};
