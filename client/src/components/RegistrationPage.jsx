import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { registerUser } from '../store/actions'
import { LoginDiv } from './PageStyles'

const RegistrationPage = props =>
{
    const [creds, setCreds] = useState({username: "", email: "", password: "", confirmPass: ""})

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
            "password2": creds.confirmPass}, 
        props.history))
    }

    return (
        <LoginDiv>
            <form className='form' onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>Username</label>
                    <input className='input' type="text" name="username" value={creds.username} onChange={handleChange} required/>
                    <label>Email</label>
                    <input className='input' type="email" name="email" value={creds.email} onChange={handleChange} required/>
                    <label>Password</label>
                    <input className='input' type="password" name="password" value={creds.password} required onChange={e => handleChange(e)} />
                    <label>Confirm Password</label>
                    <input className='input' type="password" name="confirmPass" value={creds.confirmPass} required onChange={e => handleChange(e)} />
                </div>
                <button className='button' type='submit'>Submit</button>
            </form>
        </LoginDiv>
    )
}

export default RegistrationPage