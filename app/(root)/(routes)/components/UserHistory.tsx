import React from "react";

function UserHistory({
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
  return <div>UserHistory</div>;
}

export default UserHistory;
