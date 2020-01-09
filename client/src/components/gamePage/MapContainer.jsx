import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {action} from "../../actions"
import { MapDiv, ConnectImgHorizontal, ConnectImgVertical, RoomDiv, EmptyDirection } from "./GameStyles";

const MapContainer = _ => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const exploredRooms = [{name: 1, n_to: null, e_to: [4,18], s_to: null, w_to: null, coords: [3,18]}, {name: 1, n_to: null, e_to: null, s_to: null, w_to: [3,18], coords: [4,18]}]
    const exploredRooms2= [{title: "Hot Laboratory", description: "This laboratory is hot, you begin sweating instantly.", coords: "[18, 14]", n_to: null, s_to: "[18,15]", e_to: null, w_to: null},
    {title: "Hot Laboratory", description: "This laboratory is hot, you begin sweating instantly.", coords: "[18, 15]", n_to: "[18,14]", s_to: null, e_to: null, w_to: [17, 14]},
    {title: "Hot Laboratory", description: "This laboratory is hot, you begin sweating instantly.", coords: "[17, 15]", n_to: null, s_to: null, e_to: [19, 14], w_to: null}]    
    

    return (
        <MapDiv>
            {exploredRooms2.map(el => {
                let newCoords = el.coords.split('')
                newCoords.shift()
                newCoords.pop()
                newCoords = newCoords.join('')
                newCoords = newCoords.split(', ')
                return (
                    <RoomDiv xCoord={newCoords[0]} yCoord={newCoords[1]}>
                        {el.n_to ? (<ConnectImgVertical className='vertical' src="/images/n_connector.png" alt="connector"/>) : <EmptyDirection></EmptyDirection>}
                        <div className='middle'>
                        {el.w_to ? (<ConnectImgHorizontal className='horizontal' src="/images/w_connector.png" alt="connector" /> ) : <EmptyDirection></EmptyDirection>}
                        <img className='room' src="/images/room.jpg" alt="room" />
                        {el.e_to ? (<ConnectImgHorizontal className='horizontal' src="/images/e_connector.png" alt="connector" />) : <EmptyDirection></EmptyDirection>}
                        </div>
                        {el.s_to ? (<ConnectImgVertical className='vertical' src="/images/s_connector.png" alt="connector" />) : <EmptyDirection></EmptyDirection>}
                        
                    </RoomDiv>
                )
            })}
        </MapDiv>
    )
}

export default MapContainer;
