import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './routes';
import './global.css';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>

  );
}

export {App};
