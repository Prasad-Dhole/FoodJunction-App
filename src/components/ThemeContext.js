// ThemeContext.js
import { createContext, useState, useContext } from "react";

// 1. Create and export the context object
export const ThemeContext = createContext();

// 2. Create and export the provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Optional: Create custom hook
export const useTheme = () => useContext(ThemeContext);