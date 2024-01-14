import { createContext, useState } from "react";
type TThemeContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(false);
  const value = {
    dark,
    setDark,
  };
  return (
    <>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
