import React, {useState} from "react"
import { ChatBoxDiv, ChatInput } from './GameStyles'
import { useSelector } from 'react-redux'
import { axiosWithAuth } from '../../utils/axiosWithAuth'

const ChatBox = _ =>
{
    const state = useSelector(state => state)
    const [chat, setChat] = useState('')
    const handleTextChange = e => {
        if (e.keyCode === 13) {
            console.log('un', state.username)
            const payload = {
                username: state.username,
                message: chat
            };
            console.log('a')
            axiosWithAuth().post("https://teamchaotic.herokuapp.com/api/adv/say/", payload);
            setChat('')
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