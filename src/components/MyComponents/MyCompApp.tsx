import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";

const MyCompApp = () => {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <div
      style={{
        border: "1px solid tomato",
        backgroundColor: dark ? "black" : "white",
      }}
    >
      <h1 style={{ color: dark ? "white" : "seagreen" }}>kkk</h1>
      <button onClick={() => setDark((pre) => !pre)}>
        {dark ? "White" : "Dark"}
      </button>
    </div>
  );
};

export default MyCompApp;
