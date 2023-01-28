import Header from './components/Header';
import ButtonsSection from './components/ButtonsSection';
import Countries from './components/CountriesTable';
import { ApiDataContextProvider } from './context/ApiDataContext';

import './sass/global/index.scss';

function App() {
  return (
    <div className="App">
      <ApiDataContextProvider>
        <Header />
        <ButtonsSection />
        <Countries />
      </ApiDataContextProvider>
    </div>
  );
}

export default App;
