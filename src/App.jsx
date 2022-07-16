import { useState, useEffect, useRef } from "react";
// CSS imports
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
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

function App() {
  // Theming
  const {theme} = useTheme()
  // Chat
  const {socket, room, setRoom, hasJoined, setHasJoined, currentMessage, setCurrentMessage, userName, setUserName, messages, setMessages, bottomRef, handleRoomChange, handleCurrentMessageChange, handleUserNameChange, joinRoom, sendMessage, handleEnterKeyPress} = useChat()
  // Props objects

  const obj = {
    room,
    userName,
    currentMessage,
    handleCurrentMessageChange,
    messages,
    sendMessage,
    handleEnterKeyPress,
    bottomRef,
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CssBaseline />
        {!hasJoined ? (
          <Loby
            room={room}
            handleRoomChange={handleRoomChange}
            userName={userName}
            handleUserNameChange={handleUserNameChange}
            joinRoom={joinRoom}
          />
        ) : (
          <ChatRoom {...obj} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
