import { Box } from "@mui/material"
import Message from "./Message"
import ChatContext from "../Context/ChatContext"
import { useContext } from "react"
const Messages = () => {
    const {messages, bottomRef} = useContext(ChatContext)
    return(
        <Box sx={{ maxHeight: '70vh', overflowY: 'scroll', display: 'flex', padding:"2em", flexDirection: 'column', gap: 2}}>
            {messages.map((message, key) => (
                <Message key={key} message={message}></Message>
            ))}
            <Box ref={bottomRef}></Box>
        </Box>
    )
}

export default Messages