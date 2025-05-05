import React from "react";

function Avatar({ imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt="user img"></img>
    </div>
  );
}

export default Avatar;
