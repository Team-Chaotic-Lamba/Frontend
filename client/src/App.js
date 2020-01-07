import React from 'react'
import Header from './components/header/Header'
import './App.css'
import { Route } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Header />
            <Route></Route>
        </div>
    );
}

export default App;
