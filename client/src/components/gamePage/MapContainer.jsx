import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {action} from "../../actions"
import { MapDiv, ConnectImg, RoomDiv } from "./GameStyles";

const MapContainer = _ => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    return (
        <MapDiv>
            {state.exploredRooms.map(el => {
                return (
                        <RoomDiv>
                        <h1>eli</h1>
                        <img src="../../assets/room.jpg" alt="room" />
                        {el.n_to && (<ConnectImg src="/images/n_connector.jpg" alt="connector"/>)}
                        {el.s_to && (<ConnectImg src="/images/s_connector.jpg" alt="connector" />)}
                        {el.e_to && (<ConnectImg src="/images/e_connector.jpg" alt="connector" />)}
                        {el.w_to && (<ConnectImg src="/images/w_connector.jpg" alt="connector" /> )}
                    </RoomDiv>
                )
            })}
        </MapDiv>
    )
}

export default MapContainer;
