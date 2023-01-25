import React from 'react';

import Countries from './components/Countries';
import { ApiDataContextProvider } from './context/ApiDataContext';

import './App.css';

function App() {
  return (
    <div className="App">
      <ApiDataContextProvider>
        <Countries />
      </ApiDataContextProvider>
    </div>
  );
}

export default App;
