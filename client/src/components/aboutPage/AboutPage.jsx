import React from "react";
import AboutCard from "./AboutCard";
import { AboutCards, PaddingBox } from "./AboutStyles";

const AboutPage = props => {
  const {} = props;

  return (
    <div>
      <p>
        Game Title is a collaborative project created by a team of Lambda school
        students during a build week.
      </p>
      <AboutCards>
        <PaddingBox>
          <AboutCard
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 10,
              paddingBottom: 10
            }}
            name={"Andrew Allen"}
            image={""}
            github={""}
            linkedIn={""}
            track={"Full Stack Web"}
          />
        </PaddingBox>
        <PaddingBox>
          <AboutCard
            name={"Seth Nadu"}
            image={""}
            github={""}
            linkedIn={""}
            track={"Full Stack Web"}
          />
        </PaddingBox>
        <PaddingBox>
          <AboutCard
            name={"Eli Sacks"}
            image={""}
            github={""}
            linkedIn={""}
            track={"Full Stack Web"}
          />
        </PaddingBox>
        <PaddingBox>
          <AboutCard
            name={"John Schneider"}
            image={""}
            github={""}
            linkedIn={""}
            track={"Full Stack Web"}
          />
        </PaddingBox>
        <PaddingBox>
          <AboutCard
            name={"Jonathan Scott"}
            image={""}
            github={""}
            linkedIn={""}
            track={"Full Stack Web"}
          />
        </PaddingBox>
      </AboutCards>
    </div>
  );
};

export default AboutPage;
