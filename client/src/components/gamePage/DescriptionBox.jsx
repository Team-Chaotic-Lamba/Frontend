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
        players: "",
        exitString: '',
        exits: {

        }
    })
    

    let dirDict = 
    {
        n_to: 'north',
        s_to: 'south',
        e_to: 'east',
        w_to: 'west',
    }

    useEffect(_ =>
    {
        console.log(`cur room: ${state.currentRoom.title}`)
        setRoomState({
            title: state.currentRoom.title,
            description: state.currentRoom.description,
            // items: state.currentRoom.items.join(', '),
            players: state.currentRoom.players ? state.currentRoom.players.toString(', ') : '',
            exits: state.currentRoom.exits,
            exitString: ''
        })
        console.log(roomState.exits)
        for(let x in roomState.exits)
        {
            if(roomState.exits[x]) setRoomState({...roomState, exitString: roomState.exitString + ` ${dirDict[x]}`}) 
        }

    }, [state.currentRoom.title, state.currentRoom.description, state.currentRoom.players, state.currentRoom.exits])


    return (
        <DescriptionDiv>
            {roomState.title && <h3>{roomState.title}</h3>}
            {roomState.description && <p>{roomState.description}</p>}
            {/* {roomState.items && <p>{`The room contains ${roomState.items}.`}</p>} */}
            <p>{`There are exits to the ${roomState.exitString}`}</p>
            {roomState.players && <p>{`Present in the room: ${roomState.players}.`}</p>}
        </DescriptionDiv>
    )
}

export default DescriptionBox