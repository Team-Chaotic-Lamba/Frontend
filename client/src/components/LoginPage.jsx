import React from "react"
import {useSelector, useDispatch} from "react-redux"
// import {action} from "../../actions"
import { LoginDiv } from './PageStyles'

const LoginPage = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <LoginDiv>
            Placeholder
        </LoginDiv>
    )
}

export default LoginPage