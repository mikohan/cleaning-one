import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import MetaPixel from './utils/MetaPixel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPixel from 'react-facebook-pixel';

function App() {
  useEffect(() => {
    ReactPixel.init('802880804535958');
  }, []);
  return (
    <div className='App'>
      <Main />
    </div>
  );
}

export default App;
