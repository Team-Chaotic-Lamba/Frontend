import React from "react"
import { CardDiv } from './AboutStyles'

const AboutCard = (props) =>
{
    const { name, github, linkedIn, track } = props
    return (
        <CardDiv>
            <h3 className='title is-3'>{name}</h3>
            <h5 className='title is-5'>{track}</h5>
            <a href={github}>Github</a>
            <a href={linkedIn}>LinkedIn</a>
        </CardDiv>
    )
}

export default AboutCard