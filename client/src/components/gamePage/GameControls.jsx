import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { move, initialize } from "../../store/actions";
import { DirectionsDiv, DirectionImg } from "./GameStyles";

const GameControls = _ => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const handleMove = (e, direction) => {
    e.preventDefault();
    dispatch(move(direction));
  };

  // const handleInit = _ =>
  // {
  //     dispatch(initialize())
  // }

  return (
    <DirectionsDiv>
      {/* <button onClick={handleInit}>Initialize</button> */}
      <div style={{ alignSelf: "center" }}>
        <DirectionImg
          src="/images/n.png"
          alt="north arrow"
          onClick={e => handleMove(e, "n")}
        />
      </div>
      <div style={{ alignSelf: "center" }}>
        <DirectionImg
          src="/images/w.png"
          alt="west arrow"
          onClick={e => handleMove(e, "w")}
        />
        <DirectionImg
          src="/images/s.png"
          alt="south arrow"
          onClick={e => handleMove(e, "s")}
        />
        <DirectionImg
          src="/images/e.png"
          alt="east arrow"
          onClick={e => handleMove(e, "e")}
        />
      </div>
    </DirectionsDiv>
  );
};

export default GameControls;
