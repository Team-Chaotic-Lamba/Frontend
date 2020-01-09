import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {action} from "../../actions"
import { MapDiv, ConnectImgHorizontal, ConnectImgVertical, RoomDiv, EmptyDirection } from "./GameStyles";

const MapContainer = _ => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const exploredRooms = [{name: 1, n_to: null, e_to: [4,18], s_to: null, w_to: null, coords: [3,18]}, {name: 1, n_to: null, e_to: null, s_to: null, w_to: [3,18], coords: [4,18]}]
    const exploredRooms2= [{title: "Hot Laboratory", description: "This laboratory is hot, you begin sweating instantly.", coords: "[18, 14]", n_to: null, s_to: null, e_to: [19, 14], w_to: [17, 14]}, {title: "Cold Cellar", description: "This cellar is freezing, a chill fills your body.", coords: "[29, 26]", n_to: [29, 25], s_to: [29, 27], e_to: null, w_to: null}]    
    

    return (
        <MapDiv>
            {exploredRooms2.map(el => {
                console.log('Start',el.coords)
                let newCoords = el.coords.split('')
                newCoords.shift()
                newCoords.pop()
                newCoords = newCoords.join('')
                newCoords = newCoords.split(', ')
                console.log('End', newCoords)
                // console.log('Coord 1', parseInt(el.coords[0]), 'Coord 2', parseInt(el.coords[1]))
                return (
                    <RoomDiv xCoord={newCoords[0]} yCoord={newCoords[1]}>
                        {el.n_to ? (<ConnectImgVertical className='vertical' src="/images/n_connector.jpg" alt="connector"/>) : <EmptyDirection></EmptyDirection>}
                        <div className='middle'>
                        {el.w_to ? (<ConnectImgHorizontal className='horizontal' src="/images/w_connector.jpg" alt="connector" /> ) : <EmptyDirection></EmptyDirection>}
                        <img className='room' src="/images/room.jpg" alt="room" />
                        {el.e_to ? (<ConnectImgHorizontal className='horizontal' src="/images/e_connector.jpg" alt="connector" />) : <EmptyDirection></EmptyDirection>}
                        </div>
                        {el.s_to ? (<ConnectImgVertical className='vertical' src="/images/s_connector.jpg" alt="connector" />) : <EmptyDirection></EmptyDirection>}
                        
                    </RoomDiv>
                )
            })}
        </MapDiv>
    )
}

export default MapContainer;
