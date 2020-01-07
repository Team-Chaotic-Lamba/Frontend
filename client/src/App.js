import React from 'react'
import Header from './components/header/Header'
import { Route } from 'react-router-dom'
import GamePage from './components/gamePage/GamePage'
import AboutPage from './components/aboutPage/AboutPage'
import LoginPage from './components/LoginPage'
import { PageDiv } from './components/PageStyles'
import RegistrationPage from './components/RegistrationPage'
import './App.css'

function App() {
    return (
        <div className="App">
            <PageDiv>
                <Header />
                <Route path="/game" component={GamePage} />
                <Route path="/about" component={AboutPage} />
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/register" component={RegistrationPage} />
            </PageDiv>
        </div>
    );
}

export default App;
