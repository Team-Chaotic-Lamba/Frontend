import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { move, initialize } from "../../store/actions";
import { DirectionsDiv, DirectionImg } from "./GameStyles";

const GameControls = _ => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const handleMove = direction =>
    {
        dispatch(move(direction))
    }

    const handleInit = _ =>
    {
        dispatch(initialize())
    }

    return (
        <DirectionsDiv>
        <div style={{alignSelf: "center"}}>
            <DirectionImg src="/images/n.png" alt="north arrow" onClick={_ => handleMove('n')}/>
        </div>
        <div style={{alignSelf: "center"}}>
            <DirectionImg src="/images/w.png" alt="west arrow" onClick={_ => handleMove('w')}/>
            <DirectionImg src="/images/s.png" alt="south arrow" onClick={_ => handleMove('s')}/>
            <DirectionImg src="/images/e.png" alt="east arrow" onClick={_ => handleMove('e')}/>
        </div>
        </DirectionsDiv>
    );
};

export default GameControls;
