import React from "react"
import ChatList from './ChatList'
import ChatBox from './ChatBox'
import { ChatDiv } from './GameStyles'

const ChatWindow = (props) =>
{
    const {  } = props
    return (
        <ChatDiv>
            <ChatList />
            <ChatBox />
        </ChatDiv>
    )
}

export default ChatWindow