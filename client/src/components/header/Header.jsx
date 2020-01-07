import React from "react"
import { NavLink } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
// import {action} from "../../actions"
import { HeaderDiv } from "./HeaderStyles"

const Header = _ =>
{
    const dispatch = useDispatch()
    const state = useSelector(state => state)

    return (
        <HeaderDiv>
            <NavLink 
                to="/game"
                activeClassName="selected-navlink"
                className={'navlink'}
            >
                Game
            </NavLink>
            <NavLink 
                to="/about"
                activeClassName="selected-navlink"
                className={'navlink'}
            >
                About
            </NavLink>
            {state.loggedIn ? 
                    <NavLink 
                        to="/logout" 
                        activeClassName="selected-navlink" 
                        className={'navlink'}
                    >
                        Logout
                    </NavLink>
                :
                    <NavLink 
                        exact to="/"
                        activeClassName="selected-navlink"
                        className={'navlink'}
                    >
                        Login
                    </NavLink>
            }
            <NavLink 
                to="/register"
                activeClassName="selected-navlink"
                className={'navlink'}
            >
                Register
            </NavLink>
        </HeaderDiv>
    )
}

export default Header