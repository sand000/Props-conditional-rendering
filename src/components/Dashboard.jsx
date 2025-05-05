import React from "react";
import LoginMessage from "./LoginMessage";

function Dashboard({ isLoggedIn = true, name = { name } }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <LoginMessage isLoggedIn={isLoggedIn} name={name} />
    </div>
  );
}

export default Dashboard;
