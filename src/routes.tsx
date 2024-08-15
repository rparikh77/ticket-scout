import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Navbar } from './components/navbar';
import { Error } from './404';
import { Live } from './pages/live';

const Routing: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live" element={<Live />} />

            
            {/* 404 Error */}
            <Route path='*' element={<Error />} />
        </Routes>
    </div>
  )
}

export {Routing};
