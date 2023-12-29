import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import MetaPixel from './utils/MetaPixel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <MetaPixel />
      <Main />
    </div>
  );
}

export default App;
