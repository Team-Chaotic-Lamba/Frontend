import styled from "styled-components";

export const AboutCards = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding-bottom: 25px;
  margin: 10px;
`;

export const CardDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0px;
  border: 1px solid black;
  //   background-color: #d8d8e1;
  //   background-image: url("https://i.imgur.com/tzdy6Pk.jpg");
  //   background-repeat: no-repeat;
  background-color: #82aa37;
  a {
    padding-left: 5px;
  }
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px gray;
  //   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 30px;
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
  height: 90px;
  flex-grow: 5;
`;

export const ImgDivGit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
  height: 90px;
  flex-grow: 5;
  margin-right: 20px;
`;

export const ImgDivLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90px;
  height: 90px;
  flex-grow: 5;
`;

export const PaddingBox = styled.div`
  padding: 10px;
`;
