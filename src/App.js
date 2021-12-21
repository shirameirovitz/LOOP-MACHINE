import React, { useState, useEffect } from 'react';
import './App.css';
import LoopMachine from './components/LoopMachine';
import ClipLoader from 'react-spinners/ClipLoader';

const App = () => {
  // React Spinners loading for 2sec
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <header>Loop Machine</header>
      {loading ? (
        <ClipLoader loading={loading} color={'black'} size={'250px'} />
      ) : (
        <LoopMachine />
      )}
    </div>
  );
};

export default App;
