import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import { loginUser } from '../store/actions'
import { LoginDiv, OnboardingDiv } from './PageStyles'
import RegistrationPage from "./RegistrationPage"

const LoginPage = props =>
{
    const [creds, setCreds] = useState({username: "", email: "", password: ""})
    const [tabContent, setTabContent] = useState('login')

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
        dispatch(loginUser(creds, props.history))
    }

    return (
        <OnboardingDiv>
            <div class='tabs'>
                <ul>
                    <li className={tabContent === 'login' ? 'is-active' : ''}>
                        <button className='button' onClick={() => setTabContent('login')}>Login</button>
                    </li>
                    <li className={tabContent === 'register' ? 'is-active' : ''}>
                        <button className='button' onClick={() => setTabContent('register')}>Register</button>
                    </li>
                </ul>
            </div>
            {
                tabContent === 'login' ? 
                    <LoginDiv>
                        <form className='form' onSubmit={e => handleSubmit(e)}>
                            <div>
                                <label>Username</label>
                                <input className='input' type="text" name="username" value={creds.username} onChange={handleChange} required/>
                                <label>Email</label>
                                <input className='input' type="email" name="email" value={creds.email} onChange={handleChange} required/>
                                <label>Password</label>
                                <input className='input' type="password" name="password" value={creds.password} required onChange={e => handleChange(e)} />
                            </div>
                            <button className='button' type='submit'>Submit</button>
                        </form>
                    </LoginDiv>
                : 
                    <RegistrationPage/>
            }
        </OnboardingDiv>
    )
}

export default LoginPage