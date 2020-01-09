import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

// import { useSelector } from 'react-redux'

const PrivateRoute = ({component: Component, ...rest}) => {
    // const state = useSelector(state => state)

    return (
        <Route {...rest} render={props => (
            (localStorage.getItem('token'))
            ? <Component {...props} />
            : <Redirect to='/' />
        )} />
    )
}

export default PrivateRoute