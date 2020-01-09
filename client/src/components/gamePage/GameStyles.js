import styled from "styled-components";

export const GameGrid = styled.div`
    margin-top: 10px;
    width: 1200px;
    display: grid;
    grid-template-rows: 300px 300px 300px;
    grid-template-columns: 300px 300px 300px 300px;
    border: 2px solid black;
    border-radius: 6px;
    overflow: hidden;
`;
export const MapDiv = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: repeat(24, 1fr);
    background: brown;
`;

export const ConnectImgVertical = styled.img`
    position: relative;
    /* left: 50%; */
    top: 0;
`;

export const ConnectImgHorizontal = styled.img`
    position: relative;
    /* left: 50%; */
    top: 0;
`

export const RoomDiv = styled.div`
    grid-column-start: ${props => props.xCoord};
    grid-row-start: ${props => props.yCoord};

    .room {
        width: 27.5px;
        height: 27.5px;
    }
    height: 37.5px;
    width: 37.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .middle 
    {
    display: flex;
    align-items: center;
    justify-content: center;
    }
        .vertical 
        {
            width: 7.5px;
            height: 5px;
        }

        .horizontal 
        {
            height: 7.5px;
            width: 5px;
        }
`;

export const EmptyDirection = styled.div`
    height: 5px;
    width: 5px;
    background-color: transparent;
`;

export const DirectionsDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-top: 2px solid magenta;
    border-right: 2px solid magenta;
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 3;
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


export const ChatListDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    overflow-y: scroll;
    /* flex-grow: 10; */
    width: 90%;
    height: 90%;
`;

export const ChatP = styled.p`
    width: 100%;
`;

export const ChatDiv = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;

`;

export const ChatBoxDiv = styled.div`
    width: 100%;
    height: 10%;
`;

export const ChatInput = styled.input`
    width: 98%;
`;
