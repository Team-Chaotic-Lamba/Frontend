import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { GameGrid } from "./GameStyles";
import MapContainer from "./MapContainer";
import ChatWindow from "./ChatWindow";
import DescriptionBox from "./DescriptionBox";
import GameControls from "./GameControls";
import { initialize, getRooms } from "../../store/actions";

const GamePage = _ => {
    const dispatch = useDispatch();
    // const state = useSelector(state => state);

    useEffect(_ =>
    {
        dispatch(initialize())
        dispatch(getRooms())
    }, [])

    return (
        <GameGrid>
            <MapContainer />
            <ChatWindow />
            <DescriptionBox />
            <GameControls />
        </GameGrid>
    );
};

export default GamePage;
