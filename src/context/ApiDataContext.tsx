import React, { createContext, useContext, useState } from 'react';

interface Country {
  name: string;
  region: string;
  area: number;
  independent: boolean;
}

interface ApiDataContextStore {
  apiData: Country[];
  setApiData: (data: Country[]) => void;
  error: string;
  setError: (data: string) => void;
  dataToShow: Country[];
  setDataToShow: (data: Country[]) => void;
  isFiltered: boolean;
  setIsFiltered: (data: boolean) => void;
}

export const ApiDataContext = createContext<ApiDataContextStore>(
  {} as ApiDataContextStore
);

export const ApiDataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [apiData, setApiData] = useState<Country[]>([]);
  const [error, setError] = useState<string>('');
  const [dataToShow, setDataToShow] = useState<Country[]>([]);
  const [isFiltered, setIsFiltered] = useState<boolean>(false);

  const apiDataContextStore = {
    apiData,
    setApiData,
    error,
    setError,
    dataToShow,
    setDataToShow,
    isFiltered,
    setIsFiltered,
  };

  return (
    <ApiDataContext.Provider value={apiDataContextStore}>
      {children}
    </ApiDataContext.Provider>
  );
};

export const useApiDataContext = () => useContext(ApiDataContext);
