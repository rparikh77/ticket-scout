import React, { useEffect, useState } from 'react';
import { FaSpinner } from 'react-icons/fa'; 
import '../src/styles/error.css';

const Error: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.location.href = '/'; 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='error-container'>
      {loading ? (
        <div className='loading'>
          <h1>404</h1>
          <p>Redirecting Back to Home Page</p>
          <FaSpinner className='spinner' /> 
        </div>
      ) : null}
    </div>
  );
}

export { Error };
