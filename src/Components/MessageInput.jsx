import { TextField, Box, Button } from "@mui/material";

const MessageInput = ({ currentMessage, handleCurrentMessageChange, sendMessage }) => {
  return (
    <Box sx={{display: 'flex'}} >
      <TextField
        value={currentMessage}
        onChange={handleCurrentMessageChange}
        id="outlined-basic-message"
        label="Message..."
        variant="outlined"
        fullWidth
      />
      <Button onClick={sendMessage} variant="contained" >Send</Button>
    </Box>
  );
};

export default MessageInput;
