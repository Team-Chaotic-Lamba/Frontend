import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {action} from "../../actions"
import { MapDiv, ConnectImgHorizontal, ConnectImgVertical, RoomDiv, EmptyDirection, PlayerDiv } from "./GameStyles";

const MapContainer = _ => {
    const state = useSelector(state => state);
    
    let playerCoords
    if(state.currentRoom.coords && state.currentRoom.coords.length > 0) {
        playerCoords = state.currentRoom.coords.split('')
        playerCoords.shift()
        playerCoords.pop()
        playerCoords = playerCoords.join('')
        playerCoords = playerCoords.split(', ')
    }

    let exploredRooms, allRooms
    if(state.exploredRooms && state.allRooms && state.exploredRooms.length > 0) {
        exploredRooms = state.exploredRooms
        exploredRooms = exploredRooms.split(',')
        allRooms = state.allRooms.filter(el => exploredRooms.indexOf(`${el.id}`) > -1)
    }

    return (
        <MapDiv>
            {!state.isLoadingRooms && !state.isLoadingPlayer &&
            <>
                {state.currentRoom.coords && state.currentRoom.coords.length > 0 && <PlayerDiv xCoord={Number(playerCoords[0]) + 1 } yCoord={Number(playerCoords[1]) + 1}>
                    <div className='player'></div>
                </PlayerDiv>}
                {!state.isLoadingRooms && allRooms && allRooms.map(el => {
                        let newCoords = el.coords.split('')
                        newCoords.shift()
                        newCoords.pop()
                        newCoords = newCoords.join('')
                        newCoords = newCoords.split(', ')
                        return (
                            <RoomDiv xCoord={Number(newCoords[0]) + 1} yCoord={Number(newCoords[1]) + 1} className={`${el.coords}`} key={el.id}>
                                {el.n_to !== null ? (<ConnectImgVertical className='vertical' src="/images/n_connector.png" alt="connector" />) : <EmptyDirection></EmptyDirection>}
                                <div className='middle'>
                                    {el.w_to !== null ? (<ConnectImgHorizontal className='horizontal' src="/images/w_connector.png" alt="connector" />) : <EmptyDirection></EmptyDirection>}
                                    <img className='room' src="/images/room.jpg" alt="room" />
                                    {el.e_to !== null ? (<ConnectImgHorizontal className='horizontal' src="/images/e_connector.png" alt="connector" />) : <EmptyDirection></EmptyDirection>}
                                </div>
                                {el.s_to !== null ? (<ConnectImgVertical className='vertical' src="/images/s_connector.png" alt="connector" />) : <EmptyDirection></EmptyDirection>}
                            </RoomDiv>
                    )
                })}
            </>
            }
        </MapDiv>
    )
}

export default MapContainer;
