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
                github={"https://github.com/AndrewA0112"}
                linkedIn={"https://www.linkedin.com/in/andrewmkal/"}
                track={"Full Stack Web"}
            />
            </PaddingBox>
            <PaddingBox>
                <AboutCard
                    name={"Seth Nadu"}
                    image={""}
                    github={"https://github.com/sethnadu"}
                    linkedIn={"https://www.linkedin.com/in/seth-nadu-8b5983187/"}
                    track={"Full Stack Web"}
                />
            </PaddingBox>
            <PaddingBox>
                <AboutCard
                    name={"Eli Sacks"}
                    image={""}
                    github={"https://github.com/Bastlifa"}
                    linkedIn={"https://www.linkedin.com/in/eli-sacks-055588187/"}
                    track={"Full Stack Web"}
                />
            </PaddingBox>
            <PaddingBox>
                <AboutCard
                    name={"John Schneider"}
                    image={""}
                    github={"https://github.com/johnschneider1"}
                    linkedIn={"https://www.linkedin.com/in/john-schneider-b3049a7/"}
                    track={"Full Stack Web"}
                />
            </PaddingBox>
            <PaddingBox>
                <AboutCard
                    name={"Jonathan Scott"}
                    image={""}
                    github={"https://github.com/jondscott21"}
                    linkedIn={"https://www.linkedin.com/in/jonathandavidscott/"}
                    track={"Full Stack Web"}
                />
            </PaddingBox>
        </AboutCards>
        </div>
    );
};

export default AboutPage;
