import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Game from '../pages/Game';

  
function App() {
return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Settings' element={<Settings/>} />
        <Route path='/Game' element={<Game/>} />
    </Routes>
    </Router>
);
}
  
export default App;