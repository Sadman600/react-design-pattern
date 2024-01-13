import "./App.css";
import MyButton from "./components/MyButton";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="AppContainer">
        <h1>Welcome to my app</h1>
        <MyButton />
        <Profile />
      </div>
    </>
  );
}

export default App;
