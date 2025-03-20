import { createContext, useState } from "react";

type ThemeContextProvider = {
  children: React.ReactNode;
}

type ThemeContextType = {
  theme: string;
  handleToggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: ThemeContextProvider) => {
  const [theme, setTheme] = useState<string>('dark');

  const handleToggleTheme = () => {
    setTheme((oldThemeValue) => {
      const newTheme = oldThemeValue === "dark" ? "light" : "dark";
      return newTheme;
    });
  }

  console.log(theme);

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}