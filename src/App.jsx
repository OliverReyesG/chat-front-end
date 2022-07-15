import { useState, useEffect, useRef } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import io from "socket.io-client";
const socket = io.connect("https://oliverreyesg-chat-backend.herokuapp.com/");

// Pages
import Loby from "./Pages/Loby";
import ChatRoom from "./Pages/ChatRoom";
// Components
import Message from "./Components/Message";
import MessageInput from "./Components/MessageInput";
import Messages from "./Components/Messages";

// MUI Imports
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";

function App() {
  // Ref
  const bottomRef = useRef(null);
  // State
  const [prefersDarkMode, setPrefersDarkMode] = useState(true);
  const [room, setRoom] = useState("");
  const [hasJoined, setHasJoined] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);

  // MUI Config
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  });

  // Input handlers

  const handleRoomChange = (e) => {
    setRoom(e.target.value);
  };

  const handleCurrentMessageChange = (e) => {
    setCurrentMessage(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  // Socket.io evets

  const joinRoom = async () => {
    if (room !== "" && userName != "") {
      await socket.emit("join_room", room);
      setRoom(room);
      setHasJoined(true);
    } else {
      alert("Room and username must not be empty!");
    }
  };

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageTime =
        new Date(Date.now()).getHours() +
        ":" +
        new Date(Date.now()).getMinutes();
      const messageData = {
        room: room,
        author: userName,
        text: currentMessage,
        time: messageTime,
      };
      await socket.emit("send_message", messageData);
      setMessages((messages) => [
        ...messages,
        { room: room, author: "Me", text: currentMessage, time: messageTime },
      ]);
      setCurrentMessage("");
    }
  };

  // Side effects
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((messages) => [...messages, data]);
    });

    return () => {
      socket.off("receive_message");
      console.log("Unmounted");
    };
  }, [socket]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      alignToTop: false,
    });
  }, [messages]);

  // Props objects

  const obj = {
    room,
    userName,
    currentMessage,
    handleCurrentMessageChange,
    messages,
    sendMessage,
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
