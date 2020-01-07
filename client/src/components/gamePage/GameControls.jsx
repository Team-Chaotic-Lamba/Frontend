import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { move } from "../../actions";
import { DirectionsDiv } from "./GameStyles";

const GameControls = _ => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <DirectionsDiv>
      <div></div>
    </DirectionsDiv>
  );
};

export default GameControls;
