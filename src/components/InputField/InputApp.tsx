import React, { createContext, useState } from "react";
export type TInputContext = {
  name: string;
  //   setName: React.Dispatch<React.SetStateAction<string>>;
};
export const InputContext = createContext<TInputContext | undefined>(undefined);

const InputApp = ({children}) => {
  const [name, setName] = useState<string>("");
  const value = {
    name,
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <InputContext.Provider value={value}>
      <div>
        <input onChange={handleChange} type="text" name="name" id="name" />
      </div>
      {
        children
      }
    </InputContext.Provider>
  );
};

export default InputApp;
