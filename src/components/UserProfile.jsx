import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function UserProfile({ name, email, imageUrl, bio }) {
  return (
    <div>
      <Avatar imageUrl={imageUrl} />
      <UserInfo name={name} email={email} bio={bio} />
    </div>
  );
}

export default UserProfile;
