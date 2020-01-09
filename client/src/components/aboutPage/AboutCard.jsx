import React from "react";
import { CardDiv, ImgDivGit, ImgDivLink, LinkBox } from "./AboutStyles";

const AboutCard = props => {
  const { name, github, linkedIn, track } = props;

  return (
    <CardDiv>
      <h3 className="title is-3">{name}</h3>
      <h5 className="title is-5">{track}</h5>
      <LinkBox>
        <ImgDivGit>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img src="https://i.imgur.com/AGL65ml.png" alt="icon" />
          </a>
        </ImgDivGit>
        <ImgDivLink>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer">
            <img src="https://i.imgur.com/U7X2iES.png" alt="icon" />
          </a>
        </ImgDivLink>
      </LinkBox>
    </CardDiv>
  );
};

export default AboutCard;
