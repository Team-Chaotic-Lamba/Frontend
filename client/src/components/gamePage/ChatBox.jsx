import React, {useState} from "react"
import { ChatBoxDiv, ChatInput } from './GameStyles'
import { useSelector } from 'react-redux'

const ChatBox = _ =>
{
    const state = useSelector(state => state)
    const [chat, setChat] = useState('')
    const handleTextChange = e => {
        if (e.keyCode === 13) {
            const payload = {
                username: state.username,
                message: chat
            };
            axiosWithAuth("https://teamchaotic.herokuapp.com/api/say/", payload);
        } else {
            setChat(e.target.value)
        }
    }
    return (
        <ChatBoxDiv>
            <ChatInput
            type="text"
            value={chat}
            placeholder="chat here..."
            className="form-control"
            onChange={handleTextChange}
            onKeyDown={handleTextChange}
            />
        </ChatBoxDiv>
    )
}

export default ChatBox