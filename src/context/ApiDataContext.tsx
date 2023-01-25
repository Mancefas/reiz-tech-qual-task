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

  const apiDataContextStore = {
    apiData,
    setApiData,
    error,
    setError,
  };

  return (
    <ApiDataContext.Provider value={apiDataContextStore}>
      {children}
    </ApiDataContext.Provider>
  );
};

export const useApiDataContext = () => useContext(ApiDataContext);
