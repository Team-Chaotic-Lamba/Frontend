import React from "react"
import AboutCard from './AboutCard'
import { AboutCards } from './AboutStyles'

const AboutPage = (props) =>
{
    const {  } = props
    return (
        <div>
            <p>
                Game Title is a collaborative project created by a team of Lambda school students
                during a build week.
            </p>
            <AboutCards>
                <AboutCard name={"Andrew Allen"} image={""} github={""} linkedIn={""} track={"Full Stack Web"} />
                <AboutCard name={"Seth Nadu"} image={""} github={""} linkedIn={""} track={"Full Stack Web"} />
                <AboutCard name={"Eli Sacks"} image={""} github={""} linkedIn={""} track={"Full Stack Web"} />
                <AboutCard name={"John Schneider"} image={""} github={""} linkedIn={""} track={"Full Stack Web"} />
                <AboutCard name={"Jonathan Scott"} image={""} github={""} linkedIn={""} track={"Full Stack Web"} />
            </AboutCards>
        </div>
    )
}

export default AboutPage