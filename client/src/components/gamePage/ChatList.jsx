import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { subscribeToChats } from "../../store/actions"
import { ChatP, ChatListDiv } from './GameStyles'
import Pusher from 'pusher-js'

const ChatList = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    useEffect(() => {
        const pusher = new Pusher("ed153050c9fa544407b6", {
            cluster: "us2",
            encrypted: true
        });
        const channel = pusher.subscribe("chat");
        channel.bind("message", data => {
            dispatch(subscribeToChats(data))
        });

    }, [])

    return (
        <ChatListDiv>
            {state.chatMessages.map((el, index) => {
            return (<ChatP key={index}>{el}</ChatP>)
            })}

        </ChatListDiv>
    )
}

export default ChatList