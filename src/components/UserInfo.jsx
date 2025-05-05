import React from "react";

function UserInfo({ name, email, bio }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
}

export default UserInfo;
