import React from "react"
import {useSelector, useDispatch} from "react-redux"
// import {action} from "../../actions"
import { ChatP, ChatListDiv } from './GameStyles'

const ChatList = _ =>
{
    // const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <ChatListDiv>
            {state.chatMessages.map((el, index) => {
            return (<ChatP key={index}>{el}</ChatP>)
            })}

        </ChatListDiv>
    )
}

export default ChatList