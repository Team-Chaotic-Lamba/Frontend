import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { loginUser } from '../store/actions'
import { LoginDiv } from './PageStyles'

const LoginPage = _ =>
{
    const [creds, setCreds] = useState({username: "", password: ""})

    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const handleSubmit = e =>
    {
        e.preventDefault()
        dispatch(loginUser)
    }

    return (
        <LoginDiv>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e => handleChange(e)} />
                <input type="password" onChange={e => handleChange(e)} />
            </form>
        </LoginDiv>
    )
}

export default LoginPage