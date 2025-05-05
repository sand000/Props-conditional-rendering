import React from "react";

function LoginMessage({ isLoggedIn, name }) {
  return (
    <div>
      <h3>{isLoggedIn ? `Welcome back, ${name}` : "PLease log in"}</h3>
    </div>
  );
}

export default LoginMessage;
