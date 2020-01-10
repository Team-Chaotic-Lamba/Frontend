import React, {useEffect} from "react"
import { useSelector } from 'react-redux'
import { DescriptionDiv, RoomH3 } from './GameStyles'

const DescriptionBox = _ =>
{

    const state = useSelector(state => state)
    
    let dirDict = 
    {
        n_to: 'north',
        s_to: 'south',
        e_to: 'east',
        w_to: 'west',
    }

    // useEffect(_ =>
    // {

    //     let x
    //     for(x in roomState.exits)
    //     {
    //         if(roomState.exits[x]) setRoomState({...roomState, exitString: roomState.exitString + ` ${dirDict[x]}`}) 
    //     }

    // }, [state.currentRoom.title])

    useEffect(_ =>
    {

    }, [state.isLoadingPlayer])

    return (
        <DescriptionDiv>
            {!state.isLoadingPlayer &&
                <>
                {state.currentRoom.title && <RoomH3>{state.currentRoom.title}</RoomH3>}
                {state.currentRoom.description && <p>{state.currentRoom.description}</p>}
                {/* {state.currentRoom.items && <p>{`The room contains ${state.currentRoom.items}.`}</p>} */}
                <p>{`There are exits to the ${
                    Object.keys(state.currentRoom.exits)
                    .map(el => {return state.currentRoom.exits[el] ? dirDict[el] : ''})
                    .filter(el => el)
                    .join(', ')}.`}</p>
                {state.currentRoom.players.length > 0 && <p>{`Present in the room: ${state.currentRoom.players.join(', ')}.`}</p>}
                </>
            }
        </DescriptionDiv>
    )
}

export default DescriptionBox