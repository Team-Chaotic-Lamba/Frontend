import React from "react"
import { CardDiv } from './AboutStyles'

const AboutCard = (props) =>
{
    const { name, github, linkedIn, track } = props
    return (
        <CardDiv>
            <h2>{name}</h2>
            <h3>{track}</h3>
            <a href={github}>Github</a>
            <a href={linkedIn}>linkedIn</a>
        </CardDiv>
    )
}

export default AboutCard