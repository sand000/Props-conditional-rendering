import React from "react";

function Greeting({ name, timeOfDay }) {
  return (
    <div>
      <h3>Goodmorning, {name}</h3>
      <p>{timeOfDay}</p>
    </div>
  );
}

export default Greeting;
