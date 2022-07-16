import { TextField, Box, Button } from "@mui/material";

const MessageInput = ({ currentMessage, handleCurrentMessageChange, sendMessage, handleEnterKeyPress }) => {
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
