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
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  grid-gap: 4px;
  background: green;
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
  justify-content: center;
  align-items: center;
  border-top: 2px solid magenta;
  border-right: 2px solid magenta;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  background: black;
  color: white;
`;

export const DirectionImg = styled.img`
  margin: 10px;
  margin-top: 0;
  margin-left: 0;
  width: 70px;
  height: 70px;
  
`;


export const DescriptionDiv = styled.div`
  border: 4px solid red;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  background: blue;
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  color: white;


`;