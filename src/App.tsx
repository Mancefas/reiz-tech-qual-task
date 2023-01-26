import React from 'react';

import Countries from './components/CountriesTable';
import ButtonsSection from './components/ButtonsSection';
import { ApiDataContextProvider } from './context/ApiDataContext';

import './sass/global/index.scss';

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
