import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Navbar } from './components/navbar';

const Routing: React.FC = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export {Routing};
