import React, { useEffect } from "react";

const useDarkMode = ({ darkBooleanValue }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // set dark mode on page reload
    const status = localStorage.getItem("todoAppDarkMode");
    if (status === "true") {
      setIsDarkMode(true);
    }
  }, [darkBooleanValue]);

  return isDarkMode;
};

export default useDarkMode;
