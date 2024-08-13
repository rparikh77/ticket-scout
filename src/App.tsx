import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './routes';
import './global.css';
import { Footer } from './components/footer';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routing />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export {App};
