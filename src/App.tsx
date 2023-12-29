import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import MetaPixel from './utils/MetaPixel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPixel from 'react-facebook-pixel';

function App() {
  return (
    <div className='App'>
      <Main />
    </div>
  );
}

export default App;
