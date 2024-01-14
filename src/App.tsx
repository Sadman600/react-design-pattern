import { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";
import Profile from "./components/Profile";
import Products from "./components/Products";
// import UseRefHook from "./pages/UseRefHook";
import CustomInput from "./components/CustomInput";
import ThemeProvider from "./components/ThemeProvider";
import MyCompApp from "./components/MyComponents/MyCompApp";
import InputApp from "./components/InputField/InputApp";
import MyComp2 from "./components/MyComponents/MyComp2";

function App() {
  const [content, setContent] = useState(false);
  return (
    <>
      <div className="AppContainer">
        <button onClick={() => setContent((pre) => !pre)}>click me!</button>
        <h1>Welcome to my app</h1>
        {content ? <Profile /> : <MyButton />}
        <Products />
        {/* <UseRefHook /> */}
        <CustomInput
          styles={{
            border: "1px solid seagreen",
            borderRadius: "15px",
          }}
        />
        <ThemeProvider>
          <MyCompApp />
        </ThemeProvider>

        <InputApp>
          <MyComp2 />
        </InputApp>
      </div>
    </>
  );
}

export default App;
