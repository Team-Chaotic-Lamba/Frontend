import React, {useEffect, useState} from "react"
import { useSelector } from 'react-redux'
import { DescriptionDiv } from './GameStyles'

const DescriptionBox = _ =>
{
    const state = useSelector(state => state)
    const [roomState, setRoomState] = useState({
        title: "",
        description: "",
        items: "",
        players: ""
    })
    useEffect(_ =>
    {
        console.log('b')
        setRoomState({
            title: state.currentRoom.title,
            description: state.currentRoom.description,
            items: state.currentRoom.items.join(', '),
            players: state.currentRoom.players.toString(', ')
        })
    }, [state])
    return (
        <DescriptionDiv>
            <h3>{roomState.title}</h3>
            <p>{roomState.description}</p>
            {roomState.items && <p>{`The room contains ${roomState.items}.`}</p>}
            {roomState.players && <p>{`Present in the room: ${roomState.players}.`}</p>}
        </DescriptionDiv>
    )
}

export default DescriptionBox