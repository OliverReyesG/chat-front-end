import { useContext } from "react";
import { TextField, Box, Button } from "@mui/material";
import ChatContext from "../Context/ChatContext";

const MessageInput = () => {

  const { currentMessage, handleCurrentMessageChange, sendMessage, handleEnterKeyPress } = useContext(ChatContext)

  return (
    <Box sx={{display: 'flex'}} >
      <TextField
        value={currentMessage}
        onChange={handleCurrentMessageChange}
        id="outlined-basic-message"
        label="Message..."
        variant="outlined"
        fullWidth
        onKeyDown={handleEnterKeyPress}
      />
      <Button onClick={sendMessage} variant="contained" >Send</Button>
    </Box>
  );
};

export default MessageInput;
