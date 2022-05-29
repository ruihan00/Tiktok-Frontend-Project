import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Game from '../pages/Game';

function App() {
    const [settings, setSettings] = useState({
        "auth" : false,
        "category": "Random",
        "language": "english"
    })
    return (        
        <Router>
            <Routes>
                <Route path='/' element={<Home settings = {settings} setSettings = {setSettings}/>} />
                <Route path='/Settings' element={<Settings settings = {settings} setSettings = {setSettings} />} />
                <Route path='/Game' element={<Game settings = {settings} setSettings = {setSettings}/>} />
            </Routes>
        </Router>
        

    );
}

export default App;