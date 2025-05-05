import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import UserDashboard from "./components/userDashboard";

function App() {
  const [count, setCount] = useState(0);
  let time = new Date();
  let today = time.toISOString().split("T")[0];
  let user = {
    name: "Sandhya Kushwaha",
    timeOfDay: today,
    bio: "I am a Fullstack Developer",
    email: "sandhya1@gmail.com",
    imageUrl: "https://fastly.picsum.photos/id/1011/200/200.jpg?hmac=ISwJXaLKDOtBGE_n3myoHUev_P_OH3zpWqLx0yHp0pY",
    isLoggedIn: true,
  };
  return (
    <>
      <div>
        <UserDashboard name={user.name} age={user.age} email={user.email} isLoggedIn={user.isLoggedIn} imageUrl={user.imageUrl} bio={user.bio} />
        {/* <UserProfile name={user.name} email={user.email} imageUrl={user.imageUrl} bio={user.bio} /> */}
        {user.isLoggedIn ? <Greeting name={user.name} timeOfDay={user.timeOfDay} /> : ""}
      </div>
    </>
  );
}

export default App;
