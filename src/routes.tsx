import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Navbar } from './components/navbar';
import { Error } from './404';
import { Live } from './pages/live';
import { NFL } from './pages/nfl';
import { NBA } from './pages/nba';

const Routing: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<Live />} />
            <Route path="/nfl" element={<NFL />} />
            <Route path="/nba" element={<NBA />} />

            
            {/* 404 Error */}
            <Route path='*' element={<Error />} />
        </Routes>
    </div>
  )
}

export {Routing};
