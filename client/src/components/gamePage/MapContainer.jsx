import React from "react"
import {useSelector, useDispatch} from "react-redux"
// import {action} from "../../actions"
import { MapDiv } from './GameStyles'

const MapContainer = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <MapDiv>

        </MapDiv>
    )
}

export default MapContainer