import { Box, Typography } from "@mui/material";
import MessageInput from "../Components/MessageInput";
import Messages from "../Components/Messages";

const ChatRoom = (props) => {
  const {
    room,
    currentMessage,
    handleCurrentMessageChange,
    messages,
    sendMessage,
    bottomRef
  } = props;
  return (
    <Box
      sx={{
        height: "100vh",
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
        <Messages bottomRef={bottomRef} messages={messages}></Messages>
      </Box>
      <Box>
        <MessageInput currentMessage={currentMessage} handleCurrentMessageChange={handleCurrentMessageChange} sendMessage={sendMessage} />
      </Box>
    </Box>
  );
};

export default ChatRoom;
