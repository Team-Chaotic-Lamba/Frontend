import styled from 'styled-components'

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
`;