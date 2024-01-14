import { createContext, useState } from "react";
import MyComp from "./MyComp";

const UserContext = createContext();

const MyCompApp = () => {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>{user}</h1>
        <MyComp  />
      </div>
    </UserContext.Provider>
  );
};

export default MyCompApp;
