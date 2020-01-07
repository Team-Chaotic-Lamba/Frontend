import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { registerUser } from '../store/actions'
import { LoginDiv } from './PageStyles'

const RegistrationPage = props =>
{
    const [creds, setCreds] = useState({username: "", email: "", password: ""})

    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const handleChange = e =>
    {
        if(e.keycode === 13) handleSubmit(e)
        else setCreds({...creds, [e.target.name]: e.target.value})
    }

    const handleSubmit = e =>
    {
        console.log('a')
        e.preventDefault()
        dispatch(registerUser({
            "username": creds.username,
            "email": creds.email, 
            "password1": creds.password,
            "password2": creds.password}, 
        props.history))
    }

    return (
        <LoginDiv>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Username</label>
                <input type="text" name="username" value={creds.username} onChange={handleChange} />
                <label>Email</label>
                <input type="text" name="email" value={creds.email} onChange={handleChange} />
                <label>Password</label>
                <input type="password" name="password" value={creds.password} onChange={e => handleChange(e)} />
                <button>Submit</button>
            </form>
        </LoginDiv>
    )
}

export default RegistrationPage