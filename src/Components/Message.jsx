import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Message = ({ message }) => {
  return (
    <Box sx={{ display: "flex", width: '100%', flexFlow: 'column' }}>
      {message.author == "Me" ? (
        <Box
          sx={{
            background: "rgb(30,30,30)",
            maxWidth: 250,
            display: "flex",
            flexFlow: "column",
            padding: 2,
            textAlign: "left",
            borderRadius: 5,
          }}
        >
          <Typography fontWeight="bold" variant="body2" color={"primary"}>
            {message.author}
          </Typography>
          <Typography variant="body1">{message.text}</Typography>
          <Typography align="right" variant="body2">
            {message.time}
          </Typography>
        </Box>
      ) : (
        <Box sx={{background:'rgb(30,30,50)', maxWidth:250, minWidth: 200, display: 'flex', flexFlow: 'column', padding: 2, textAlign: 'left', borderRadius: 5, alignSelf: 'end'}}>
            <Typography fontWeight="bold" variant="body2" color={"primary"}>{message.author}</Typography>
            <Typography variant="body1">{message.text}</Typography>
            <Typography align="right" variant="body2">{message.time}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Message;
