import { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";
import Profile from "./components/Profile";

function App() {
  const [content, setContent] = useState(false);
  return (
    <>
      <div className="AppContainer">
        <button onClick={() => setContent((pre) => !pre)}>click me!</button>
        <h1>Welcome to my app</h1>
        {content ? <Profile /> : <MyButton />}
      </div>
    </>
  );
}

export default App;
