import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {action} from "../../actions"
import { GameGrid } from "./GameStyles";
import MapContainer from "./MapContainer";
// import ChatWindow from "./ChatWindow";
import DescriptionBox from "./DescriptionBox";
import GameControls from "./GameControls";

const GamePage = _ => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <GameGrid>
      <MapContainer />

      {/* <ChatWindow /> */}

      <DescriptionBox />

      <GameControls />
    </GameGrid>
  );
};

export default GamePage;
