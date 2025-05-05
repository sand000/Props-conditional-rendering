import React from "react";
import UserProfile from "./UserProfile";

function UserDashboard({ name, age, email, isLoggedIn, imageUrl, bio }) {
  return (
    <div>
      <h1>User Dashboard</h1>
      {isLoggedIn ? (
        <div>
          <UserProfile name={name} email={email} imageUrl={imageUrl} bio={bio} />
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <h3>You need to login</h3>
          <button>Login</button>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
