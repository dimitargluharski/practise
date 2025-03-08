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
  const [theme, setTheme] = useState('dark');

  const handleToggleTheme = () => {
    setTheme((oldThemeValue) => oldThemeValue === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}