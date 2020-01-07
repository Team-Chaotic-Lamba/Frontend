import React, { Component } from 'react'
import Header from './components/header/Header'
import { Route, Redirect } from 'react-router-dom'
import GamePage from './components/gamePage/GamePage'
import AboutPage from './components/aboutPage/AboutPage'
import LoginPage from './components/LoginPage'
import { PageDiv } from './components/PageStyles'
import RegistrationPage from './components/RegistrationPage'
import './App.css'

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('token')
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
)

function App() {
    return (
        <div className="App">
            <PageDiv>
                <Header />
                <PrivateRoute path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/register" component={RegistrationPage} />
            </PageDiv>
        </div>
    );
}

export default App;
