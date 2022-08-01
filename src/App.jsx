import { useState, useEffect, useRef, useContext } from "react";
// CSS imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css"
// Socketio imports
import io from "socket.io-client";
// Hooks imports
import useTheme from "./Hooks/useTheme";
import useChat from "./Hooks/useChat";
// MUI Imports
import { ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
// Pages imports
import Loby from "./Pages/Loby";
import ChatRoom from "./Pages/ChatRoom";
// Context
import ChatContext from "./Context/ChatContext";

function App() {
  // Theming
  const { theme } = useTheme();
  const [hasJoined, setHasJoined] = useState()

  // State
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        className="full-mobile-height"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CssBaseline />
        <ChatContext.Provider value={useChat()}>
          {!hasJoined ? (
            <Loby setHasJoined={setHasJoined} />
          ) : (
            <ChatRoom />
          )}
        </ChatContext.Provider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
