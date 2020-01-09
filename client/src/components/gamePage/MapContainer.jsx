import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {action} from "../../actions"
import { MapDiv, ConnectImgHorizontal, ConnectImgVertical, RoomDiv, EmptyDirection } from "./GameStyles";

const MapContainer = _ => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const exploredRooms = [{name: 1, n_to: false, e_to: true, s_to: true, w_to: true},{name: 1, n_to: true, e_to: true, s_to: true, w_to: true}]

    return (
        <MapDiv>
            {exploredRooms.map(el => {
                return (
                    <RoomDiv>
                        {el.n_to ? (<ConnectImgVertical className='connector vertical' src="/images/n_connector.jpg" alt="connector"/>) : <EmptyDirection></EmptyDirection>}
                        <div className='middle'>
                        {el.w_to ? (<ConnectImgHorizontal className='connector' src="/images/w_connector.jpg" alt="connector" /> ) : <EmptyDirection></EmptyDirection>}
                        <img className='room' src="/images/room.jpg" alt="room" />
                        {el.e_to ? (<ConnectImgHorizontal className='connector' src="/images/e_connector.jpg" alt="connector" />) : <EmptyDirection></EmptyDirection>}
                        </div>
                        {el.s_to ? (<ConnectImgVertical className='connector vertical' src="/images/s_connector.jpg" alt="connector" />) : <EmptyDirection></EmptyDirection>}
                        
                    </RoomDiv>
                )
            })}
        </MapDiv>
    )
}

export default MapContainer;
