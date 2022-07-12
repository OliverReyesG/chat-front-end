import { Typography, Box, TextField, Button } from "@mui/material"
const Loby = ({ room, handleRoomChange, userName, handleUserNameChange, joinRoom}) => {
    return(
        <Box sx={{display: 'flex', flexDirection: 'column', gap:4}} >
            <Typography variant="h2" >Join Room</Typography>
            <TextField value={room} onChange={handleRoomChange} id="outlined-basic-room" label="Room..." variant="outlined" />
            <TextField value={userName} onChange={handleUserNameChange} id="outlined-basic-user" label="Username..." variant="outlined" />
            <Button onClick={joinRoom} variant="contained" >Join Room</Button>
        </Box>
    )
}

export default Loby