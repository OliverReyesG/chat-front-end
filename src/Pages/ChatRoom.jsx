import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import MessageInput from "../Components/MessageInput";
import Messages from "../Components/Messages";
import ChatContext from "../Context/ChatContext";


const ChatRoom = () => {
  const {
    room,
  } = useContext(ChatContext);
  return (
    <Box
      className="full-mobile-height"
      sx={{
        width: '100%',  
        display: "flex",
        padding:"2em 0",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: 'center'
      }}
    >
      <Typography variant="h3">Room: {room}</Typography>
      <Box>
        <Messages></Messages>
      </Box>
      <Box>
        <MessageInput/>
      </Box>
    </Box>
  );
};

export default ChatRoom;
