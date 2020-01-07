import styled from "styled-components";

export const GameGrid = styled.div`
  margin-top: 100px;
  width: 1200px;
  display: grid;
  grid-template-rows: 300px 300px 300px;
  grid-template-columns: 300px 300px 300px 300px;
  border: 2px solid black;
  border-radius: 6px;
  /* overflow: hidden; */
`;

export const MapDiv = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  grid-gap: 4px;
`;

export const ConnectImg = styled.img`
  position: relative;
  left: 50%;
  top: 0;
`;

export const RoomDiv = styled.div`
  grid-column-start: ${props => props.xCoord};
  grid-row-start: ${props => props.yCoord};
`;

export const DirectionsDiv = styled.div`
 display: flex;
 flex-flow: column nowrap;
 border-top: 2px solid black;
 border-right 2px solid black;
 grid-column-start: 1;
 grid-column-end: 2;
 grid-row-start: 2;
 grid-row-end: 3;

`;
