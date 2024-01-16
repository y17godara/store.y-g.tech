import React from "react";

function UserFavorites({
  user,
}: {
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  };
}) {
  if (!user) {
    return null;
  }
  return <div>UserFavorites</div>;
}

export default UserFavorites;
