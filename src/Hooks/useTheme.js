import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const useTheme = () => {
  
	// State
	const [prefersDarkMode, setPrefersDarkMode] = useState(true);
	
	// MUI Config
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  });
  return {theme};
};

export default useTheme;
