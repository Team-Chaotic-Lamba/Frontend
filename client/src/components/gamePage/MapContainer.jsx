import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {action} from "../../actions"
import { MapDiv, ConnectImgHorizontal, ConnectImgVertical, RoomDiv, EmptyDirection } from "./GameStyles";

const MapContainer = _ => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    return (
        <MapDiv>
            <div className='player'></div>
            {!state.isLoading && state.allRooms.map(el => {
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
        </MapDiv>
    )
}

export default MapContainer;
