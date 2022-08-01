// Socketio imports
import io from "socket.io-client";
import { useState, useEffect ,useRef } from "react";

// Socketio instance
const socket = io.connect("https://oliverreyesg-chat-backend.herokuapp.com/");

const useChat = () => {
  // State
  const [room, setRoom] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState([]);
  // Ref
  const bottomRef = useRef(null);

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

  const handleEnterKeyPress = (e) => {
    if(e.key === "Enter") {
      sendMessage()
    }
  } 

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

  return {socket, room, setRoom, currentMessage, setCurrentMessage, userName, setUserName, messages, setMessages, bottomRef, handleRoomChange, handleCurrentMessageChange, handleUserNameChange, joinRoom, sendMessage, handleEnterKeyPress};
};

export default useChat;
