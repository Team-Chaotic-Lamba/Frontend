import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {action} from "../../actions"

const GamePage = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <GameGrid>
            <MapContainer />

        </GameGrid>
    )
}

export default GamePage