import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Navbar } from './components/navbar';
import { Error } from './404';

const Routing: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />

            
            {/* 404 Error */}
            <Route path='*' element={<Error />} />
        </Routes>
    </div>
  )
}

export {Routing};
