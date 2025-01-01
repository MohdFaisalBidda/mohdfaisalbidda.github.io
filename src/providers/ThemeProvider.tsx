import React, { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext({
  theme: "light", // default theme
  handleTheme: (theme: string) => {}, // dummy function
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(() => {
    // Load theme from localStorage or fallback to light
    return localStorage.getItem("theme") || "light";
  });

  // Update theme on the document root
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
