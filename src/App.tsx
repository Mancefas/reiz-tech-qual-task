import React from 'react';

import Countries from './components/Countries';
import { ApiDataContextProvider } from './context/ApiDataContext';

import './App.css';
import ButtonsSection from './components/ButtonsSection';

function App() {
  return (
    <div className="App">
      <ApiDataContextProvider>
        <ButtonsSection />
        <Countries />
      </ApiDataContextProvider>
    </div>
  );
}

export default App;
